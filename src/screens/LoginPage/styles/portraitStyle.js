
import { StyleSheet } from 'react-native';



export default portraitStyles = (w, h) => {

    return StyleSheet.create({
        container:
        {
            flex: 1,
            backgroundColor: '#fff',
        },
        imageView:
        {
            width:'100%',
            height:180
        },
        bgImage:
        {
            width:'100%',
            marginTop:-90,
        },
        languageView:
        {
            width:'100%',
            flexDirection:'row',
            textAlign:'center',
            justifyContent:'center'

        },
        lngText :
         {
            marginLeft:10,
            marginTop:10,
            color:'#000000'

        },
        lngmore:
        {
            marginLeft:10,
            marginTop:10,
            color:'blue'
        },
        loginView:
        {
            width:'100%',
            paddingLeft:18,
            paddingRight:18,
        },
        input:
        {
            borderBottomWidth:1,
            borderBottomColor:'gray',
            marginTop:10
        },
        loginBtn:{
            marginTop:30,
            backgroundColor:'#216FDB',
            padding:12,
            textAlign:'center',
            borderRadius:10,

        },
        loginBtnText:
        {
            textAlign:'center',
            color:'#fff',
            fontWeight:'bold',
            fontSize:15
        },
        forgotTextView:
        {
            width:'100%',
            justifyContent:'center',
            alignItems:'center',
            marginTop:27
        },
        forgotText:
        {
            color:'#216FDB',
            fontWeight:'bold',
            fontSize:16,
        },
        createAccountView:
        {
            width:'100%',
            paddingLeft:25,
            paddingRight:25,
            justifyContent:'center',
            alignItems:'center'

        },
        createAccountText:
        {
            textAlign:'center',
            color:'#fff',
            fontWeight:'bold',
            fontSize:15

        },
        createAccountBtn:
        {
            marginTop:60,
            backgroundColor:'#30A24B',
            padding:12,
            textAlign:'center',
            borderRadius:10,
            width:'80%',
            justifyContent:'center',

        }
       

    });
}