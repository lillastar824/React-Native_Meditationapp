import React, { Component } from 'react';
import { SafeAreaView, View, AsyncStorage, Text, Image, TouchableHighlight, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
// import { users } from '../../../data/DataArrays'
import { Images, Colors, Constants, Fonts, Layoutsd } from '@utils'
import BackButton from '../../../component/SignUpBackBt';
import { connect } from 'react-redux';
import { create, PREDEF_RES } from 'react-native-pixel-perfect';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const perfectSize = create(PREDEF_RES.iphoneX.dp)
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;
const SCREEN_HEIGHT = width < height ? height : width;


class Account extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: ``,
      headerTransparent: 'true',
      headerLeft: () => <BackButton onPress={() => { navigation.goBack(); }} />
    };
  };

  constructor(props) {
    super(props);
  }

  async logout() {
    await AsyncStorage.setItem('loggedIn', "");
    this.props.navigation.navigate("SignIn")
  }


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient colors={['#000000', '#0e0314', '#230633']} style={styles.linearGradient}>
          <View>
            <LinearGradient colors={['#000000', '#000000']} style={styles.linearGradient1}>
              <View style={styles.HeaderArea}>
                <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.btnContainer}>
                  <FontAwesomeIcon icon={faAngleLeft} color={'#73219F'} size={perfectSize(20)} />
                </TouchableHighlight>
                <Text style={{ color: '#fff', fontSize: 20, fontWeight: "bold", marginLeft: 70 }}>Account</Text>
              </View>
            </LinearGradient>
          </View>
          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <TouchableHighlight onPress={() => { }}>
              <View style={styles.SelectArea2}>
                <Text style={{ fontSize: 14, color: '#fff', }}>Change password</Text>
                <AntDesignIcon name='right' size={16} color='#fff' style={{ position: 'absolute', right: 0 }} />
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => { this.props.navigation.navigate("Purchase") }}>
              <View style={styles.SelectArea2}>
                <Text style={{ fontSize: 14, color: '#fff', }}>Restore purchase</Text>
                <AntDesignIcon name='right' size={16} color='#fff' style={{ position: 'absolute', right: 0 }} />
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => { this.logout() }}>
              <View style={styles.SelectArea2}>
                <Text style={{ fontSize: 14, color: '#fff', }}>Log out</Text>
                <AntDesignIcon name='right' size={16} color='#fff' style={{ position: 'absolute', right: 0 }} />
              </View>
            </TouchableHighlight>
          </View>
        </LinearGradient>
      </SafeAreaView >
    );
  }
}
function mapStateToProps(state) {
  return {
    userkey: state.user.userkey,
    email: state.user.email,
    username: state.user.username,
    paid: state.user.paidState,
    lastest_date: state.user.lastest_date,
    photo_url: state.user.photo_url,
  }
}
export default connect(mapStateToProps)(Account);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.profile_tab_backgroud,
  },
  topcontainer: {
    height: Constants.profile_panel_th,
    width: Constants.profile_panel_w,
    alignSelf: 'center',
    borderBottomRightRadius: Constants.profile_panel_radius,
    borderBottomLeftRadius: Constants.profile_panel_radius,
    borderColor: '#060D1577',
    borderWidth: 1,
    backgroundColor: 'white',
  },
  linearGradient1: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  Background: {
    width: '100%',
    height: '100%',
    // alignItems: "center"
  },
  linearGradient: {
    height: '100%',
    width: '100%'
  },
  HeaderArea: {
    flexDirection: 'row',
    alignItems: "center",
    marginTop: 10,
    height: 49,
  },
  btnContainer: {
    width: perfectSize(27),
    height: perfectSize(27),
    alignItems: 'center',
    position: "absolute",
    left: perfectSize(15),
    backgroundColor: "#707070",
    borderRadius: 13.5,
    justifyContent: "center",
    alignItems: "center"
  },
  SelectArea2: {
    height: 40,
    width: SCREEN_WIDTH - 50,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    borderBottomWidth: 0.2,
    borderBottomColor: '#707070'
  }
});
