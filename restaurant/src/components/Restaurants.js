import React from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView, StatusBar, TouchableOpacity, Platform } from 'react-native';
import { Header } from 'react-navigation';
import { connect } from 'react-redux';
import { Chip } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import restaurants from '../data/restaurants';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { bindActionCreators } from 'redux';
import { setRestaurant } from '../redux/actions';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

class RestaurantBlock extends React.PureComponent {
	constructor(props) {
		super(props);

		let rating = 0;
		props.ratings.forEach(val => rating += val)

		rating /= props.ratings.length;
		let fullStars = Math.floor(rating);
		let halfStars = Math.floor((rating - Math.floor(rating)) * 2);
		let emptyStars = 5 - fullStars - halfStars;

		this.state = {
			ratingValue: {
				fullStars: Array.from(Array(fullStars)),
				halfStars: Array.from(Array(halfStars)),
				emptyStars: Array.from(Array(emptyStars))
			}
		};
	}

	render() {
		const { tags, address, priceRange, picture, hours, ratings, onPress, id } = this.props;
		const { ratingValue } = this.state;

		let content = (
			<View style={styles.cardContent}>
						<ImageBackground style={styles.imageBackground}
							imageStyle={styles.imageInnerBackground}
							source={picture}>
							<LinearGradient style={styles.gradient} 
								colors={['#00000000', '#000000']}>
								<View style={styles.imageCaption}>
									<Text style={styles.address}>{address}</Text>

									<Text style={styles.priceRange}>{priceRange}</Text>
								</View>
							</LinearGradient>
						</ImageBackground>
						<View style={styles.bottomCard}>
							<View style={styles.rating}>
								{
									ratingValue.fullStars.map((i, key) => 
										<Ionicons style={styles.star} 
											key={key} 
											name="ios-star" />)
								}

								{
									ratingValue.halfStars.map((i, key) => 
										<Ionicons style={styles.star} 
											key={key} 
											name="ios-star-half" />)
								}

								{
									ratingValue.emptyStars.map((i, key) => 
										<Ionicons style={styles.star} 
											key={key} 
											name="ios-star-outline" />)
								}

								<Text style={styles.numRating}>{ratings.length}</Text>
							</View>
							<View style={styles.hours}>
								{
									Object.keys(hours).map((i, key) => 
											<View key={key} 
												style={styles.hourRow}>
												<Text style={styles.day}>{i}</Text>

												<Text>{hours[i]}</Text>
											</View>)
								}
							</View>
							<View style={styles.chipGroup}>
								{
									tags.map((i, key) =>
										<Chip key={key}
											mode="outlined"
											style={styles.chip}>
											{i}
										</Chip>)
								}
							</View>
						</View>
					</View>
		)

		return (
			<View style={styles.card}>
			{
				Platform.OS === 'android' ? 
				(<TouchableNativeFeedback onPress={() => onPress(id)}>
					{content}
				</TouchableNativeFeedback>) 
				: 
				(<TouchableOpacity onPress={() => onPress(id)}>
					{content}
				</TouchableOpacity>)
			}
			</View>
		);
	}
}

class Restaurant extends React.PureComponent {
	nextScreen = (id) => {
		this.props.setRestaurant(id)
		this.props.navigation.navigate("Menu")
	}

	render() {
		return (
			<View style={styles.container}>
				<ScrollView>
					<View style={styles.content}>
						<Text style={styles.description}>Toucher un des restaurants pour faire une commande</Text>
						{
							restaurants.map((i, key) =>
								<RestaurantBlock key={key}
									id={i.id}
									address={i.address}
									tags={i.types}
									priceRange={i.price_range}
									ratings={i.ratings}
									picture={i.image}
									hours={i.hours}
									onPress={this.nextScreen} />)
						}
					</View>
				</ScrollView>
			</View>
		);
	}
}

const mapDispatch = dispatch => {
	return bindActionCreators({ setRestaurant }, dispatch);
};

export default connect(null, mapDispatch)(Restaurant);

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		flex: 1,
		padding: 20,
		paddingTop: 10 + getStatusBarHeight() + Header.HEIGHT,
		paddingBottom: 0
	},
	description: { 
		paddingBottom: 10, 
		color: 'black'
	},
	rating: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	chip: {
		margin: 5,
	},
	star: {
		fontSize: 20,
		paddingHorizontal: 1,
		color: 'black'
	},
	chipGroup: {
		flexDirection: 'row', 
		flexWrap: 'wrap', 
		flex: 1, 
		marginHorizontal: -5
	},
	hours: {
		paddingVertical: 7, 
		paddingHorizontal: 2
	},
	bottomCard: {
		borderColor: '#ddd', 
		borderWidth: 1, 
		borderTopWidth: 0, 
		borderBottomLeftRadius: 10, 
		borderBottomRightRadius: 10, 
		padding: 10 
	},
	card: {
		marginBottom: 20, 
		borderRadius: 10, 
		overflow: 'hidden'
	},
	cardContent: {
		borderRadius: 10, 
		backgroundColor: 'white'
	},
	imageBackground: {
		height: 200
	},
	imageInnerBackground: {
		borderTopLeftRadius: 10, 
		borderTopRightRadius: 10
	},
	gradient: {
		width: '100%', 
		height: '100%', 
		flexDirection: 'row', 
		alignItems: 'flex-end', 
		flex: 1, 
		padding: 10
	},
	address: {
		color: 'white', 
		fontSize: 22, 
		fontWeight: 'bold'
	},
	priceRange: {
		color: 'white', 
		fontSize: 15
	},
	imageCaption: {
		justifyContent: 'center'
	},
	hourRow: {
		flexDirection: 'row', 
		justifyContent: 'space-between'
	},
	numRating: {
		paddingLeft: 10
	},
	day: {
		color: 'black'
	}
});