import React from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView, StatusBar, TouchableOpacity, Platform } from 'react-native';
import { Header } from 'react-navigation';
import { connect } from 'react-redux';
import { Chip } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-paper';
import menu from '../data/menu';
;
import LinearGradient from 'react-native-linear-gradient';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

class MenuBlock extends React.PureComponent{
	constructor(props){
		super(props);
	}
	render(){
		const src = this.props.img;
	
		return(
			<View style={styles.card}>
				<ImageBackground style={styles.imageBackground}
							imageStyle={styles.imageInnerBackground}
							source={src}>
							
						</ImageBackground>
						<View style={styles.bottomCard}>
							<View style={styles.Info}>
								<View  style={styles.InfoRow}>
									<Text style={styles.day}>{this.props.id}</Text>
									<Ionicons
									name={Platform.OS === "ios" ? "ios-add" : "md-add"}
									color="#ccc"
									size={25}
									onPress={() => console.log(this.props.id+":"+ this.props.price)}
									/>
									</View>
								</View>
							

								<Text style={styles.InfoRow}>{this.props.price}</Text>
							
							
						</View>
			</View>
		)
	}
}
class Menu extends React.PureComponent {
	constructor(props){
		super(props);

	  
		  
	}
	render() {
		return(
			<View style={styles.container}>
				<ScrollView>
					<View style={styles.content}>
						
						{
							menu['metcalfe'].map((i, key) =>
								<MenuBlock key={key}
									id={i.id}
									price={i.price}
									img={i.img} />)
						}
					</View>
				</ScrollView>
				<Button mode="contained" onPress={() => this.props.navigation.navigate("Commande")}>
					<Ionicons name= {Platform.OS === "ios" ? "ios-cart" : "md-cart"}
					size={30}></Ionicons>
				</Button>
				
			</View>
		);
	}
}


export default connect()(Menu);

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  padding: 20,
	  backgroundColor: "#454545",
	},
	content: {
		flex: 1,
		padding: 20,
		

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
	Info: {
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
		overflow: 'hidden',
		backgroundColor: "#ffffff"
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
	InfoRow: {
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