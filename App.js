import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import QrCode from "./qrcode";


class App extends React.Component{
  constructor() {

    super();

    this.state = {
      string: "",
      url: "https://facebook.com/"
    }
  }

  
  
  render() {
    return (
      <View>

        <View style = {styles.code}>
        <QrCode
        val={this.state.url}
        />
        <View style={styles.btn}><Button title = "Get QR Info" onPress= {() => this.setState({string: "Sends to Facebook"})}/></View>
        </View>
        <View style={styles.txt}>
          <Text style={styles.txt}>{this.state.string}</Text>
        </View>
      </View>
    );
  }
  
  
};

const styles = StyleSheet.create({
  code: {
    margin: "40%",
  },
  btn:{
    width: 100,
    flex: 0
  },
  txt: {
    textAlign: "center",
    marginBottom: 30
  }, head: {
    fontSize: 20,
    textAlign: "center"
  }
});

export default App;
