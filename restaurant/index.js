import { AppRegistry, StatusBar } from 'react-native';
import React from 'react';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store/index';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Home, Commande, Menu, Restaurants, Paiement } from './src/components';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: '#c74b4b',
		accent: '#c74b4b',
	}
};

StatusBar.setBackgroundColor('#ffffffd0');
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('dark-content');

const MainNavigator = createStackNavigator(
	{
		Home: {
			screen: Home,
			navigationOptions: ({ navigation }) => ({
				title: 'Home',
				header: null
			}),
		  },
		Commande: {
			screen: Commande,
			navigationOptions: ({ navigation }) => ({
			  title: 'Commande',
			}),
		  },
		Menu: {
			screen: Menu,
			navigationOptions: ({ navigation }) => ({
			  title: 'Menu',
			}),
		  },
		Restaurants: {
			screen: Restaurants,
			navigationOptions: ({ navigation }) => ({
			  title: 'Restaurants',
			}),
		  },
		Paiement: {
			screen: Paiement,
			navigationOptions: ({ navigation }) => ({
			  title: 'Paiement',
			}),
		  },
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			headerTransparent: true,
      headerStyle: {
				elevation: 0,
				shadowOpacity: 0,
				borderBottomWidth: 0,
				marginTop: StatusBar.currentHeight,
				backgroundColor: '#ffffffd0'
			}
    },
	}
);

const AppContainer = createAppContainer(MainNavigator);

export default function Main() {
	return (
		<Provider store={store}>
			<PersistGate loading={null}
				persistor={persistor}>
				<PaperProvider theme={theme}>
					<AppContainer />
				</PaperProvider>
			</PersistGate>
		</Provider>
	);
}

AppRegistry.registerComponent(appName, () => Main);
