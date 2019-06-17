import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

class Restaurant extends React.PureComponent {
	render() {
		return(
			<View>
				<Text>Restaurant</Text>
			</View>
		);
	}
}

export default connect()(Restaurant);

const styles = StyleSheet.create({

});