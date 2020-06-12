import * as React from 'react';
import { SafeAreaView, StyleSheet, Dimensions, View, Animated } from 'react-native';
import * as shape from 'd3-shape';
import Svg, { Path } from 'react-native-svg';

import StaticTabbar, { tabHeight as height } from "./StaticTabbar"

const { width } = Dimensions.get('window');
const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const tabs = [
	{
		name: 'activity',
	},
	{
		name: 'plus-circle',
	},
	{
		name: 'home',
	},
	{
		name: 'map',
	},
	{
		name: 'user',
	},
];

const tabWidth = width / tabs.length;
const left = shape
	.line()
	.x((d) => d.x)
	.y((d) => d.y)([
	{ x: 0, y: 0 },
	{ x: width, y: 0 },
]);

const tab = shape
	.line()
	.x((d) => d.x)
	.y((d) => d.y)
	.curve(shape.curveBasis)([
    { x: width - 35, y: 0 },
    { x: width - 5, y: 2 },

	{ x: width, y: height-10 },
    { x: width + tabWidth, y: height-10 },
    
    { x: width + tabWidth + 5, y: 2 },
	{ x: width + tabWidth + 35, y: 0 },
]);



const right = shape
	.line()
	.x((d) => d.x)
	.y((d) => d.y)([
	{ x: width + tabWidth, y: 0 },
	{ x: width * 20, y: 0 },
	{ x: width * 20, y: height },
	{ x: 0, y: height },
	{ x: 0, y: 0 },
]);

const d = `${left} ${tab} ${right}`;


interface TabbarProps {}

export default class Tabbar extends React.PureComponent<TabbarProps> {

    value = new Animated.Value(-width);

	render() {
        const { value: translateX } = this;
		return (
			<>
				<View {...{ width, height }}>
					<AnimatedSvg width={width * 2.5} style={{transform : [{ translateX }] }} {...{ height }}>
						<Path {...{ d }} fill="white" />
					</AnimatedSvg>
					<View style={StyleSheet.absoluteFill}>
                        <StaticTabbar value={translateX} {...{ tabs}} />
                    </View>
				</View>
				<SafeAreaView style={styles.safeArea} />
			</>
		);
	}
}

const styles = StyleSheet.create({
	safeArea: {
		backgroundColor: '#F23122',
	},
});
