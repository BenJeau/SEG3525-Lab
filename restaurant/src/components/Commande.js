import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

class Commande extends React.PureComponent {
	render() {
		return(
			<View>
				<Text>Commande</Text>
			</View>
		);
	}
}

export default connect()(Commande);

const styles = StyleSheet.create({

});