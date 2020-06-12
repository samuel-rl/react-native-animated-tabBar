import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Tabbar from './components/Tabbar';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
                <Text style={styles.text}>Here the App.tsx !</Text>
				<Tabbar></Tabbar>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
        backgroundColor: '#ea3345',
        position: "relative",
        alignItems: "center",
        justifyContent: 'center',
		
    },
    text: {
        fontSize: 25,
        color: "#fff"
    },
});
