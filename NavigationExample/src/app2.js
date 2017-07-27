import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';

import { TabNavigator } from "react-navigation";

class RecentChatsScreen extends React.Component {
  render() {
    return (
        <View>
            <Text style={{ marginTop: 50 }}>List of recent chats</Text>
            <Button
            onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
            title="Chat with Lucy"/>
        </View>
    )
  }
}

class AllContactsScreen extends React.Component {
  render() {
    return (
        <View>
            <Text style={{ marginTop: 50 }}>List of all contacts</Text>
            <Button
            onPress={() => this.props.navigation.navigate('Chat', { user: 'Lily' })}
            title="Chat with Lily"/>
        </View>
    )
  }
}

export default TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});