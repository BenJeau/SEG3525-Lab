import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-paper';

class Paiement extends React.PureComponent {
	render() {
		return(
			<View style={styles.container}>
				<Button mode="contained" onPress={() => this.props.navigation.navigate("Home", {showSnackbar: true})}>
					Next screen
				</Button>
			</View>
		);
	}
}

export default connect()(Paiement);

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  padding: 20,
	},
});