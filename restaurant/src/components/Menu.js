import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-paper';

class Menu extends React.PureComponent {
	render() {
		return(
			<View>
				<Text>Menu</Text>
				<Button mode="contained" onPress={() => this.props.navigation.navigate("Commande")}>
					Next screen
				</Button>
			</View>
		);
	}
}

export default connect()(Menu);

const styles = StyleSheet.create({

});