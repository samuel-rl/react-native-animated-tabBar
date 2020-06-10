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
}

export const tabHeight = 64;

export default class StaticTabbar extends React.PureComponent<StaticTabbarProps>{
    render(){
        const { tabs } = this.props;
        return(
            <View style={styles.container}>
                {
                    tabs.map(({ name }, key) => (
                        <TouchableWithoutFeedback {...{key}}>
                            <View style={styles.tab}>
                                <Icon size={25} {...{name}} />
                            </View>
                        </TouchableWithoutFeedback>
                    ))
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