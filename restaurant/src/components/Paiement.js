import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-paper';

class Paiement extends React.PureComponent {
	render() {
		return(
			<View>
				<Text>Paiement</Text>
				<Button mode="contained" onPress={() => this.props.navigation.navigate("Home")}>
					Next screen
				</Button>
			</View>
		);
	}
}

export default connect()(Paiement);

const styles = StyleSheet.create({

});