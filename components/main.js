import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

class index extends Component {
  render() {
    return (
      <ScrollView style={{backgroundColor: '#F5FCFF',}}>
        <TouchableWithoutFeedback onPress={()=>{this.props.enterPage('thuLog', 1)}}>
          <View style={styles.view}><Text style={styles.font}>thuLog</Text></View>
        </TouchableWithoutFeedback>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  font: {
    fontSize: 50
  },
  view: {
    height: 100,
    flex: 1,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#aaaaaa'
  }
})

export default index
