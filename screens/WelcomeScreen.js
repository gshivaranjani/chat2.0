import { Alert, StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native';
import React,{Component} from 'react';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component {
    constructor() {
        super();
        this.state={
            emailId : '',
            password:''
        }
    }

    userSignUp=(emailId, password)=> {
        // firebase.auth().createUserWithEmailAndPassword(emailId,password)
        // .then((response)=>{
        //     return Alert.alert("User Added succesfully")
        // })
        // .catch(function(error){
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     return Alert.alert(errorMessage)
        // })

        this.props.navigation.navigate('SignupScreen',{emailId:emailId, password:password})
      
    }

    userLogin=(emailId,password)=>{
       // console.log(emailId+" ---->  "+password);
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(()=>{
            return Alert.alert("Sucessfully Login")
        })
        .catch((error)=>{
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage)
        })
        this.props.navigation.navigate('ChatScreen')
    }

    render() {
        return(
            <View style={StyleSheet.container}>
                <View>
                    <Text style={styles.title}>Login</Text>
                </View>

                <View>
                    <TextInput style={styles.loginBox}
                    placeholder="abc@example.com"
                    keyboardType='email-address'
                    onChangeText={(text)=>{
                        this.setState({
                            emailId : text
                        })
                    }} />

                    <TextInput 
                    style={styles.loginBox}
                    secureTextEntry = {true}
                    placeholder="enter Password"
                    onChangeText={(text)=>{
                        this.setState({
                            password : text
                        })
                    }}
                    />


                    
                    <TouchableOpacity style={styles.button}
                        onPress={()=>{this.userLogin(this.state.emailId, this.state.password)}}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    
                    
                    <TouchableOpacity style={styles.button}
                        onPress={()=>{this.userSignUp(this.state.emailId, this.state.password)}}
                    >
                        <Text style={styles.buttonText}>Signup</Text>
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