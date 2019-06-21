import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-paper';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Header } from 'react-navigation';

class Menu extends React.PureComponent {
	render() {
		return (
			<View style={styles.container}>
				<ScrollView style={styles.content}>
					<Button mode="contained" onPress={() => this.props.navigation.navigate("Commande")}>
						Next screen
					</Button>
				</ScrollView>
			</View>
		);
	}
}

export default connect()(Menu);

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		flex: 1,
		padding: 20,
		paddingTop: 10 + getStatusBarHeight() + Header.HEIGHT,
	}
});