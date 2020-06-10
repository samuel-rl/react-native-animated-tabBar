import * as React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';

interface Tab {
    name : string
}

interface StaticTabbarProps {
    tabs: Tab[];
}

export default class StaticTabbar extends React.PureComponent<StaticTabbarProps>{
    render(){
        const { tabs } = this.props;
        return(
            <View>

            </View>
        );
    }
}