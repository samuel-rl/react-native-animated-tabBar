import * as React from "react";
import {
  View, StyleSheet, TouchableWithoutFeedback, Animated, Dimensions,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

interface Tab {
    name : string
}

interface StaticTabbarProps {
    tabs: Tab[];
    value: Animated.Value;
}

export const tabHeight = 64;
const { width } = Dimensions.get("window")

export default class StaticTabbar extends React.PureComponent<StaticTabbarProps>{
    onPress = (index: number) => {
        const {value, tabs} = this.props;
        const tabWidth = width / tabs.length;
        Animated.spring(value, {
            toValue: -width + tabWidth * index,
            useNativeDriver: true,
        }).start();
    };

    render(){
        const { tabs, value } = this.props;
        const tabWidth = width / tabs.length;

        return(
            <View style={styles.container}>
                {
                    tabs.map(({ name }, key) => {
                        const opacity = value.interpolate({
                            inputRange: [-width + tabWidth * (key - 1), -width + tabWidth * key, -width + tabWidth * (key + 1)],
                            outputRange: [1,0,1],
                            extrapolate: "clamp"
                        });
                        return (
                            <TouchableWithoutFeedback onPress={() => this.onPress(key)} {...{key}}>
                                <Animated.View style={[styles.tab, { opacity }]}>
                                    <Icon size={25} {...{name}} />
                                </Animated.View>
                            </TouchableWithoutFeedback>
                        );
                    })
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
    },
    tab: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      height: 64,
    },
    activeIcon: {
      backgroundColor: "white",
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
    },
  });