import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, BackHandler } from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import Orientation from 'react-native-orientation';

// create a component
class Display extends Component {
  componentDidMount() {
    Orientation.lockToLandscape();
    BackHandler.addEventListener('hardwareBackPress', this.handlerBackButtonClick);
  }

  _back() {
    Orientation.lockToPortrait();
    this.props.navigation.navigate("HomeList");
  }

  handlerBackButtonClick() {
    Orientation.lockToPortrait();
  }

  render() {
    return (
      <View style={styles.container}>
        <VideoPlayer source={require('../../../Videos/unity.mp4')} title={"Unity Learn"} onBack={() => this._back()} />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
});

//make this component available to the app
export default Display;