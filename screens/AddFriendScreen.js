import { Alert, StyleSheet, Text, TextInput, View,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import React,{Component} from 'react';
import firebase from 'firebase';
import db from '../config';

export default class addFriendScreen extends Component {
    constructor() {
        super();
        this.state = {
            emailId:''
        }
    }
    addFriend = (emailId) => {
        // console.log("111111111111111");
        // console.log(firebase.auth().currentUser.email);
        // console.log("2222222222222222222");
        db.collection('friends').add({
              
          myId:firebase.auth().currentUser.email,
          friend:emailId
         
        })

        db.collection('friends').add({
              
          myId:emailId,
          friend:firebase.auth().currentUser.email
         
        })

        Alert.alert("Friend Added Successfully");
    }
    render() {
        return(
          <View style={StyleSheet.container}>
          <View>
              <Text style={styles.title}>Add Friend</Text>
          </View>

          <View>
              <TextInput style={styles.loginBox}
              placeholder="Friend email id"
              keyboardType='email-address'
              onChangeText={(text)=>{
                  this.setState({
                      emailId : text
                  })
              }} />

             


              
              <TouchableOpacity style={styles.button}
                  onPress={()=>{this.addFriend(this.state.emailId)}}
              >
                  <Text style={styles.buttonText}>Add Friend</Text>
              </TouchableOpacity>
              
              
            

              
          </View>
          
      </View>
        )
    }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F8BE85'
  },
  profileContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title :{
    fontSize:25,
    fontWeight:'300',
    paddingBottom:30,
    color : '#ff3d00',
    marginTop: 40
  },
  loginBox:{
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor : '#ff8a65',
    fontSize: 20,
    margin:10,
    paddingLeft:10
  },
  button:{
    width:300,
    height:50,
    marginTop:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#ff9800",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText:{
    color:'#ffff',
    fontWeight:'200',
    fontSize:20
  },
  buttonContainer:{
    flex:1,
    alignItems:'center'
  }
})