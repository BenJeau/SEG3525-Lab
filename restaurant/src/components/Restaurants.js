import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-paper';

class Restaurant extends React.PureComponent {
	render() {
		return(
			<View>
				<Text>Restaurant</Text>
				<Button mode="contained" onPress={() => this.props.navigation.navigate("Menu")}>
					Next screen
				</Button>
			</View>
		);
	}
}

export default connect()(Restaurant);

const styles = StyleSheet.create({

});