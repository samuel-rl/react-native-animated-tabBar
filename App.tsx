import React from 'react';
import { StyleSheet, View } from 'react-native';
import Tabbar from './components/Tabbar';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Tabbar></Tabbar>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#7289da',
		justifyContent: 'flex-end',
	},
});
