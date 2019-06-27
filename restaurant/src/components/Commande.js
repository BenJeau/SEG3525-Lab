import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Platform } from 'react-native';
import { connect } from 'react-redux';
import { removeItem } from '../redux/actions';
import {Button, IconButton, Colors } from 'react-native-paper';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Header } from 'react-navigation';
import menu from '../data/menu';
import { bindActionCreators } from 'redux';


class OrderBlock extends React.PureComponent {
	constructor(props){
		super(props);
	}
	render(){
		const o = {
			id: this.props.id,
			quantity: this.props.quantity
		}
		return(
			<View style={styles.card}>
						
						
						<View style={styles.leftCard} >
							<View style={styles.first}>
								<Image style={styles.imageBackground} source={this.props.img} />
							</View>
							<View style={styles.second}>
								<Text style={styles.Info}>{this.props.id}</Text>
								<Text style={styles.Info} >Quantity : {this.props.quantity}</Text>	
								<Text style={styles.Info}>Prix : {this.props.price}$</Text>
							</View>
							<View style={styles.third}>
								<IconButton 
									icon="remove"
									color={Colors.red500}
									size={25}
									onPress={() => this.props.onRemove(o)}
								/>
							</View>
							
							
						</View>
			</View>
		)
	}
}

class Commande extends React.PureComponent {
	constructor(props){
		super(props);
	}
	render() {
		const orders = [];
		var tot = 0;
		var disableBtn = false;
		this.props.items.map((el) => {
			const m = menu[this.props.restaurant].find((val) => val.id === el.id);
			const order ={
				id: el.id,
				quantity: el.quantity,
				img: m.img,
				price: parseFloat( m.price) * el.quantity
			}
			tot = tot + order.price;
			orders.push(order);

		});
		if(tot == 0){
			disableBtn = true;
		}
		return(
			<View style={styles.container}>
			<ScrollView style={styles.content}>
				
				{ orders.map( (i,key) =>
					<OrderBlock key= {key} 
					id = {i.id}
					quantity={i.quantity}
					img = {i.img}
					price = {i.price}
					onRemove={this.props.removeItem} 
					/>

					)}
				<View style={styles.Total}>
					<Text fontSize="20px">Total : {tot}$</Text>
					</View>	
					{
						disableBtn && <Text style={{color:"red"}}>Veuillez ajouter des items</Text>
					}
				<Button mode="contained" onPress={() => this.props.navigation.navigate("Paiement")} disabled={disableBtn}>
					Confirmer
				</Button>
				</ScrollView>
			</View>
		);
	}
}

const mapState = state => {
	return {
		items: state.UserReducer.items,
		restaurant: state.UserReducer.restaurant
	};
};

const mapDispatch = dispatch => {
	return bindActionCreators({ removeItem }, dispatch);
};

export default connect(mapState, mapDispatch)(Commande);

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		flex: 1,
		padding: 20,
		paddingTop: 10 + getStatusBarHeight() + Header.HEIGHT,
	},
	card: {
		marginBottom: 20, 
		borderRadius: 10, 
		flex:1,
		overflow: 'hidden',
		backgroundColor: "#ffffff",
		flexDirection: "row",
		borderColor: '#ddd', 
		borderWidth: 1, 
	},
	imageBackground: {
		height: 100,
		width: '100%',
		flex:1
	},
	
	leftCard:{
		flex:1,
		flexDirection:"row"
	},
	Info: {
		padding: 5,
	},
	third: {
		justifyContent:"center",
		flex:0.2
	},
	second: {
		justifyContent:"center",
		flex: 0.3
	}, 
	first:{
		flex:0.5
	},
	Total: {
		justifyContent:"center",
		padding: 20,
		borderColor: '#ddd',
		borderWidth: 1, 
		marginBottom: 10,
		fontSize: 500
	}
	
});