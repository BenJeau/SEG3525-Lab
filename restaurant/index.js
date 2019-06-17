import { AppRegistry } from 'react-native';
import React from 'react';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store/index';
import { Provider as PaperProvider } from 'react-native-paper';
import { Home, Commande, Menu, Restaurants, Paiement } from './src/components';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const MainNavigator = createStackNavigator(
	{
		Home,
		Commande,
		Menu,
		Restaurants,
		Paiement
	},
	{
		initialRouteName: 'Home'
	}
);

const AppContainer = createAppContainer(MainNavigator);

export default function Main() {
	return (
		<Provider store={store}>
			<PersistGate loading={null}
				persistor={persistor}>
				<PaperProvider>
					<AppContainer />
				</PaperProvider>
			</PersistGate>
		</Provider>
	);
}

AppRegistry.registerComponent(appName, () => Main);
