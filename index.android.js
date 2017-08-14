import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import firebase from 'firebase';
import { HomeComponent, AboutComponent } from './src';
import { Button } from './src/Components/Button';
import { CardSection } from './src/Components/CardSection';

const HeadText = {
  viewStyle: {
    flex: 1,
    backgroundColor: 'black'
  },
  headerText: {
    textAlign: 'center',
    color: 'red',
    fontSize: 20,
    marginTop: 50,
    marginBottom: 50,
    padding: 20
  }
};

firebase.initializeApp({
      apiKey: 'AIzaSyALg20B8RCV27pyMZ2BuaE2-hROCA5u1-s',
      authDomain: 'patient-app-a2102.firebaseapp.com',
      databaseURL: 'https://patient-app-a2102.firebaseio.com',
      projectId: 'patient-app-a2102',
      storageBucket: 'patient-app-a2102.appspot.com',
      messagingSenderId: '623771360318'
    });

export default class albums extends Component {
  static navigationOptions = () => ({
    title: 'Welcome to Main Page'
  });
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View style={HeadText.viewStyle}>
          <Text style={HeadText.headerText}>Welcome To Patient Tracking App</Text>
          <CardSection>
            <Button onPress={() => navigate('SignIn')}>Sign In</Button>
            <Button onPress={() => navigate('SignUp')}>Sign Up</Button>
          </CardSection>
        </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Main: { screen: albums },
  SignUp: { screen: HomeComponent },
  SignIn: { screen: AboutComponent }
});


AppRegistry.registerComponent('albums', () => SimpleApp);
