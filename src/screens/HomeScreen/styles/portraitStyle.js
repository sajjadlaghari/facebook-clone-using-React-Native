
import { StyleSheet } from 'react-native';



export default portraitStyles = (w, h) => {

    return StyleSheet.create({
        container:
        {
            flex: 1,
            backgroundColor: '#fff',
            width:'100%',
            height:'100%'
        },
        HeaderView:
        {
            width:'100%',
            height:50,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            padding:10,
        },
        headerIcon:
        {
            height:30,
            width:30,
            paddingTop:4,
            textAlign:'center',
            justifyContent:'center',
            alignItems:'center',
            elevation:1,
            backgroundColor:'#F7F7F7',
            borderRadius:40,
            marginLeft:10
        },
        FbName:
        {
            color:'#216FDB'
        },
        MenuHeaderView:
        {
            flexDirection:'row',
            justifyContent:'space-around',
            marginTop:17,
            paddingBottom:7,
            borderBottomWidth:1,
            borderBottomColor:'#999999'
        },
        imageAndSearch:
        {
            marginTop:10,
            width:'100%',
            flexDirection:'row',
            justifyContent:'space-around',
            paddingRight:10,
            paddingLeft:10
        },
        postInput:
        {
            height:40,
            borderWidth:1,
            borderRadius:50,
            width:230,
            paddingLeft:20
            
        },
        space:
        {
            marginTop:10,
            width:'100%',
            height:10,
            backgroundColor:'#ABAEB1'
        },
        storyAndreels:
        {
            width:'100%',
            padding:10,flexDirection:'row'
        },
        storyBox:
        {
            flexDirection:'row'

        },
        storyImage:
        {
            marginLeft:10,
            width: 70, 
            height: 100,
            borderWidth:1,
            borderRadius:10,
        },
        storyImageUser:
        {
            marginLeft:10,
            width: 70, 
            height: 60,
            borderWidth:1,
            borderRadius:10,
            backgroundColor:'#fff'

        },

        storyBoxUser:
        {
            height:106,
            borderRadius:20
        },
        plusIcon:
        {
           height:40,
           backgroundColor:'#fff',
           elevation:3,
           borderRadius:15,
           alignItems:'center'
        },
        bodyView:
        {
            width:'100%',

        },
        view:
        {
            width:'100%',
            height:200,

        },
        bodyImage:
        {
            width:'100%',
            height:200
        },
        userImageName:
        {
            flexDirection:'row',
            justifyContent:'space-between',
            paddingLeft:5,
            paddingRight:14,
            marginBottom:10
        },
        user:
        {
            flexDirection:'row',
        },
        userNameView:
        {
            paddingTop:9,
            paddingLeft:5
        },
        userNameText:
        {
            fontWeight:'bold',
            fontSize:15,
            color:'#000'
        },
        postTime:
        {
            fontSize:13
        },
        postTileDes:
        {
            paddingLeft:15,
            paddingBottom:10
        },
        postTitleDestext : 
        {
            textAlign:'justify',
            color:'#000'

        },
        likeAndCommentShow:
        {
            flexDirection:'row',
            marginTop:10,
            justifyContent:'space-between',
            paddingLeft:10,
            paddingRight:10
        },
        likeAndCommentBtn:
        {
            marginBottom:10,
            flexDirection:'row',
            marginTop:10,
            justifyContent:'space-between',
            paddingLeft:10,
            paddingRight:10

        }




      

    });
}