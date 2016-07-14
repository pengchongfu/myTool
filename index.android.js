import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

const data = {
  username:'gu-zy14',
  key:'',
}

class myTool extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: false,
      response: '',
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.log.bind(this)}>
          <View><Text style={styles.button}>{this.state.status?'断开连接':'登录'}</Text></View>
        </TouchableWithoutFeedback>
        <Text style={styles.text}>{this.state.response}</Text>
      </View>
    )
  }
  login() {
    fetch('http://net.tsinghua.edu.cn/do_login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: "action=login&username=" + data.username + "&password={MD5_HEX}" + data.key + "&ac_id=1",
    }).then((res)=>res.text()).then((res)=>{
      if(res==='Login is successful.'){
        this.setState({status:true,response:res});
      }
      else if(res==='IP has been online, please logout.'){
        this.setState({status:true,response:res});
      }
      else{
        this.setState({response:res})
      }
    })
  }
  logout() {
    fetch('http://net.tsinghua.edu.cn/do_login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: "action=logout",
    }).then((res)=>res.text()).then((res)=>{
      if(res==='Logout is successful.'){
        this.setState({status:false,response:res});
      }
      else if(res==='You are not online.'){
        this.setState({status:false,response:res});
      }
      else{
        this.setState({response:res})
      }
    })
  }
  log() {
    if(this.state.status){
      this.logout()
    }
    else {
      this.login()
    }
  }
  componentDidMount() {
    fetch('http://net.tsinghua.edu.cn/do_login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: "action=check_online",
    }).then((res)=>res.text()).then((res)=>{
      if(res==='online'){
        this.setState({status:true,response:res});
      }
      else {
        this.setState({status:false,response:res});
      }
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    fontSize: 30
  },
  text: {
    fontSize: 15,
  },
});

AppRegistry.registerComponent('myTool', () => myTool);
