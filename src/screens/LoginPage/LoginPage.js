import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useFunctionalOrientation } from '../../utility/responsiveUtil'
import ResponsiveStyle from './styles/styles';


function LoginPage(props) {

    const { styles, isPortrait, heightToDp, widthToDp } = useFunctionalOrientation(ResponsiveStyle);
    return (
        <View style={styles.container}>
            <View style={styles.imageView}>
                <Image  source={require('../../../assets/images/fb-bg.png')} resizeMode={'contain'} style={styles.bgImage}/>
            </View>

            <View style={styles.languageView}>
                <Text style={styles.lngText}>اردو</Text>
                <Text style={styles.lngText}>espanol</Text>
                <Text style={styles.lngmore}>more..</Text>

            </View>

            <View style={styles.loginView}>
                <TextInput style={styles.input} placeholder='Phone Or Email'/>
                <TextInput 
                secureTextEntry={true}
                style={styles.input} placeholder='Password'/>
                <TouchableOpacity style={styles.loginBtn}
                 onPress={() => {
                    props.navigation.navigate('HomeScreen')
                 }}
                >
                    <Text style={styles.loginBtnText}>Log In</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.forgotTextView}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
            </View>

            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:30}}>
                <Text>___________________</Text><Text style={{marginTop:10,fontSize:15,fontWeight:'bold',marginLeft:2,marginRight:2}}>OR</Text><Text>____________________</Text>
            </View>


            <View style={styles.createAccountView} >
            <TouchableOpacity style={styles.createAccountBtn} >
                    <Text style={styles.createAccountText}>Create new Facebook account</Text>
                </TouchableOpacity>
        
            </View>


        </View>

    );
}

export default LoginPage;