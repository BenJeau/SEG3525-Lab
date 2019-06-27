import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-paper';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Header } from 'react-navigation';


class orderBlock extends React.PureComponent {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<View style={styles.card}>
				
			</View>
		)
	}
}

class Commande extends React.PureComponent {
	constructor(props){
		super(props);
	}
	render() {
		return(
			<View style={styles.container}>
			<ScrollView style={styles.content}>
				<Button mode="contained" onPress={() => this.props.navigation.navigate("Paiement")}>
					Next screen
				</Button>
				</ScrollView>
			</View>
		);
	}
}

const mapState = state => {
	return {
		items: state.UserReducer.items,
	
	};
};


export default connect(mapState)(Commande);

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
		overflow: 'hidden',
		backgroundColor: "#ffffff"
	}
});