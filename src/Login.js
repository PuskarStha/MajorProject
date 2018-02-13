import React,{Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback,
StatusBar, TextInput, SafeAreaView, Keyboard, TouchableOpacity,
KeyboardAvoidingView} from 'react-native'
export default class Login extends Component{
    render(){
       return(
           <SafeAreaView style={styles.container}>
             <StatusBar barStyle='light-content'/>
                 <KeyboardAvoidingView style ={styles.container}>
                    <TouchableWithoutFeedback style={styles.Container}
                     onPress={Keyboard.dismiss}>
                     <View style={styles.container}>
                        <View style={styles.logoConatainer} >
                        <Image Style={styles.logo}
                    source={require('../images/splash.png')}>
                        </Image>
                        <Text style={styles.title}>Already a member?</Text>
                     </View>
             <View style={styles.infoContainer}> 
    <TextInput style={styles.input}
    placeholder="Username/emailID"
    placeholderTextColor='rgba(255,255,255,1.0)'
    keyboardType='email-address'
    returnKeyType='next'
    autoCorrect={false}
    onSubmitEditing={()=>this.refs.txtPassword.focus()}
    />
        <TextInput style={styles.input}
    placeholder="Password"
    placeholderTextColor='rgba(255,255,255,1.0)'
    returnKeyType='go'
    secureTextEntry={true}
        ref={"txtPassword"}
/>
            <TouchableOpacity style={styles.button}  >
            <Text style={styles.buttonText}> SIGN IN </Text>
            </TouchableOpacity>
                         </View>
                     </View>
                  </TouchableWithoutFeedback>
           </KeyboardAvoidingView>
          
      </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#007FFF',
     flexDirection: 'column',
    },
    logoConatainer:{
        alignItems:'center',
        justifyContent:'center',
        flex: 1,
        position:'relative'
    },
    logo:{
        width: 20,
        height: 20
       
},
    title:{
        color:'#FFF600',
        fontSize:20,
        textAlign:'center',
        marginTop:38,
        opacity:0.8
    },
    infoContainer:{
        position:'relative',
       
        bottom:0,
        height:250,
        backgroundColor:'#551b8c',
        borderRadius:20
        
    },
    input:{
        height:60,
        backgroundColor:'rgba(255,255,255,0.4)',
        borderRadius:25,
        paddingHorizontal:10,
      
        marginTop:25
    },
    buttonText:{
        textAlign:'center',
        color:'#232B2B',
        fontWeight:'bold',
        fontSize:20,
       

    },
    button:{
        
    
        backgroundColor:'#F4C2C2',
       marginTop:30,
       marginLeft:100,
       marginRight:100,
       height:40,
       borderRadius:55,
       justifyContent: 'center',
       alignItems: 'center',
       
    }


})