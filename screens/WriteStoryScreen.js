import React from 'react';
import { Text, View, Header, TextInput, StyleSheet, TouchableOpacity } from 'react-native'; 

export default class WriteStoryScreen extends React.Component {
    render() {
      return (
          <View style={styles.container}>
            <Header
              leftComponent={{ icon: 'menu', color: '#fff' }}
              centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
              rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputBox}
                placeholder="Title"/>

              <TextInput
                style={styles.inputBox}
                placeholder="Author"/>

              <TextInput
                style={styles.inputBox}
                placeholder="WriteStory"
                multiline={true}/>

              <TouchableOpacity>
                style={styles.scanButton}
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>  
            </View>
          </View>
      );
    }
  }

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
displayText:{
    fontSize: 15,
    textDecorationLine: 'underline'
},
scanButton:{
    backgroundColor: '#2196F3',
    padding: 10,
    margin: 10
},
buttonText:{
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10
},
inputView:{
    flexDirection: 'row',
    margin: 20
},
inputBox:{
    width: 200,
    height: 40,
    borderWidth: 1.5,
    borderRightWidth: 0,
    fontSize: 20,
    marginTop: 500
},
scanButton:{
    backgroundColor: '#66BB6A',
    width: 50,
    borderWidth: 1.5,
    borderLeftWidth: 0
},
submitButton:{
    backgroundColor: '#66BB6A',
    width: 50,
    borderWidth: 1.5,
    borderLeftWidth: 0
}
});