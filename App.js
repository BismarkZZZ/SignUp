import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { View, StyleSheet} from 'react-native'
import ProfileUi from './ProfileUi'
import SignUp from './SignUp'


class App extends Component {
  render (){
    return (
      <View style={styles.container}>

        <ProfileUi />
        {/* < SignUp /> */}
        
        <StatusBar style="auto" />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});



export default App;
