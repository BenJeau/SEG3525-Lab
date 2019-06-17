import { AppRegistry } from 'react-native';
import React from 'react';
import App from './src/components/App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store/index';
import { Provider as PaperProvider } from 'react-native-paper';

export default function Main() {
	return (
		<Provider store={store}>
			<PersistGate loading={null}
				persistor={persistor}>
				<PaperProvider>
					<App />
				</PaperProvider>
			</PersistGate>
		</Provider>
	);
}

AppRegistry.registerComponent(appName, () => Main);
