import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-paper';

class Commande extends React.PureComponent {
	render() {
		return(
			<View>
				<Text>Commande</Text>
				<Button mode="contained" onPress={() => this.props.navigation.navigate("Paiement")}>
					Next screen
				</Button>
			</View>
		);
	}
}

export default connect()(Commande);

const styles = StyleSheet.create({

});