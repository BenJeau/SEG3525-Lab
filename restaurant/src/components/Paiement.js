import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

class Paiement extends React.PureComponent {
	render() {
		return(
			<View>
				<Text>Paiement</Text>
			</View>
		);
	}
}

export default connect()(Paiement);

const styles = StyleSheet.create({

});