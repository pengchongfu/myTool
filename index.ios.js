import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import Main from './components/main.js'
import ThuLog from './components/thuLog.js'

class myTool extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{title: 'myTool', index: 0}}
        renderScene={(route, navigator)=>{
          switch(route.index){
            case 0:
              return <View style={{marginTop: 60, flex: 1}}>
                <Main enterPage={ (title, index) => {
                  navigator.push({
                    title: title,
                    index: index,
                  })
                }}/>
              </View>
            case 1:
              return <View style={{marginTop: 60, flex: 1}}><ThuLog /></View>
          }
        }}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) =>
                {
                  if(index===0){
                    return null
                  }
                  else {
                    return (<View style={{height: 40, justifyContent: 'center', alignItems: 'center'}}>
                              <TouchableHighlight underlayColor='rgb(250,250,250)' activeOpacity={0.5} onPress={() => navigator.pop()}>
                                <Text style={{color: 'rgb(0,122,255)', fontSize: 15}}><Text style={{fontSize: 20}}>{'<'}</Text>myTool</Text>
                              </TouchableHighlight>
                            </View>)
                  }
                },
              RightButton: (route, navigator, index, navState) =>
                { return null },
              Title: (route, navigator, index, navState) =>
                { return (<View style={{height: 40, justifyContent: 'center', alignItems: 'center'}}><Text style={{fontSize: 20}}>{route.title}</Text></View>); },
            }}
            style={{backgroundColor: 'rgb(250,250,250)', height: 60, borderBottomWidth: 1, borderBottomColor: 'rgb(206,206,206)'}}
          />
        }
      />
    )
  }
}

AppRegistry.registerComponent('myTool', () => myTool);
