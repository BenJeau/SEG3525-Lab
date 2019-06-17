import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

class Menu extends React.PureComponent {
	render() {
		return(
			<View>
				<Text>Menu</Text>
			</View>
		);
	}
}

export default connect()(Menu);

const styles = StyleSheet.create({

});