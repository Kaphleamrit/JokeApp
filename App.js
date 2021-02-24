import React from 'react';
import { StyleSheet, Text, View,  Button } from 'react-native';

let storer = '';

export default class App extends React.Component {

 
  constructor(props) {
    super(props);
    this.state = {
      joke : 'Here you get a random joke if you click the button below',
    }  
    this.fetchJoke = () => {
  fetch("https://dad-jokes.p.rapidapi.com/random/joke",{
    "method": "GET",
    "headers": {
 	"x-rapidapi-key": "073c3e5af3msh76d0713e2d68f1bp127d70jsn3754113c7674",
	"x-rapidapi-host": "dad-jokes.p.rapidapi.com",
    }
  }).then(response  => response.json()).then(response => {
    storer = String(response.body[0].setup) + "\n" + String(response.body[0].punchline) + "\nType : " + String(response.body[0].type);
    this.setState({joke : storer });
    
  }).catch(err => console.error(err))
}
  }

    render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.text1}>{this.state.joke}</Text>
        <Button color = {this.state.color} title = "Get Joke" onPress = {this.fetchJoke}/>
     
     
      </View>
    ) 
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor: '#fff',
  },
  text1 : {
    fontSize : 25,
    color : "#888",
    padding: 30,
    marginBottom : 30
  },
});
