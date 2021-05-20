// login form built from this tutorial:
// https://medium.com/react-native-development/easily-build-forms-in-react-native-9006fcd2a73b
import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

class SoundButton extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: "http://soundbible.com/grab.php?id=2218&type=mp3" },
      { shouldPlay: true }
    );
  };
  render() {
    return (
      <View style={{marginTop:300, marginLeft:70}}>
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          borderWidth: 10,
          borderColor: 'yellow',
          alignItems: 'center',
          width: 200,
          height: 200,
          borderRadius: 100,
          padding: 5,
          borderStyle: 'double',
        }}
        onPress={this.playSound}>
        <Text
          style={{
            marginTop: 70,
            fontSize: 15,
            fontWeight: 'bold',
            color: 'yellow',
            fontFamily: 'Times New Roman',
            alignItems: 'center',
          }}>
          
          Press Me to Play Sound
        </Text>
      </TouchableOpacity>
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      
        <SoundButton />
      
    );
  }
}
