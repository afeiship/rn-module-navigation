import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import MainScreenNavigator from './app2';

MainScreenNavigator.navigationOptions= {
    title:'My Chats'
};

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat',{ user: 'FEI' })}
          title="Chat with FEI"
        />
      </View>
    );
  }
}
class ChatScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });
  
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}


export default StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen },
});