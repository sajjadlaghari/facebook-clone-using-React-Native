import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler';
import { useFunctionalOrientation } from '../../utility/responsiveUtil'
import ResponsiveStyle from './styles/styles';
import IconFontisto from 'react-native-vector-icons/Fontisto'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconEntypo from 'react-native-vector-icons/Entypo'
import IconOcticons from 'react-native-vector-icons/Octicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo'
import Video from 'react-native-video'
import AntDesign from 'react-native-vector-icons/AntDesign'

const data = [
    {
        id: '1',
        name: 'Sajjad Sindhi',
        time: '13m',
        comment: '2',
        pic:require('../../../assets/images/man1.png'),
        description: ' One word substitutes.  Important for CSS-PMS. Enrich your vocabulary. Believe to provide quality education ',
        type: 'img',
        src: require('../../../assets/images/story4.jpg'),

    },
    {
        id: '2',

        name: 'Ali Ahmed',
        time: '5h',
        comment: '12',
        pic:require('../../../assets/images/man2.png'),

        description: '  Celebrating Semi final ki chaand raat!   Original idea by: MemeiYat    Featuring chota bhai in the background',
        type: 'video',
        src: require('../../../assets/images/1.mp4'),

    }, {
        id: '3',

        name: 'Muhammad',
        time: '10h',
        comment: '21',
        pic:require('../../../assets/images/man3.png'),
        description: '  Why do we use it It is a long established fact that a reader will be distracted by the readable content of a page when looking ',
        type: 'img',
        src: require('../../../assets/images/story6.jpg'),
    },

    {
        id: '4',
        name: 'Aftab Ahmed',
        time: '2h',
        pic:require('../../../assets/images/man4.png'),

        description: ' Motivationl*n Speakers in Pakistan 🙂 ',
        type: 'video',
        src: require('../../../assets/images/2.mp4'),
    },
    {
        id: '5',
        name: 'Ayesha Zaman',
        pic:require('../../../assets/images/f4.jpg'),

        time: '23 mint',
        description: 'Restoration ROLLS-ROYCE President Car . Restore ROLLS-ROYCE Car Vintage',
        type: 'img',
        src: require('../../../assets/images/1.jpg'),

    },
    {
        id: '6',
        name: 'Tahir amin Chaudhary',
        time: '11 h',
        comment: '40',
        pic:require('../../../assets/images/man5.png'),

        description: '  Come on Pakistan you can do it . ',
        type: 'img',
        src: require('../../../assets/images/profile1.jpg'),

    },

    {
        id: '7',
        name: 'AI Khair Khoso',
        comment: '33',
        pic:require('../../../assets/images/man6.png'),


        time: '55 mint',
        description: '  So many strange things! have you seen that 😎😍 ',
        type: 'img',
        src: require('../../../assets/images/3.jpg'),

    },

    {
        id: '8',
        name: 'Wajihullah Memon',
        pic:require('../../../assets/images/man7.png'),

        comment: '44',

        time: '34 mint',
        description: 'Khush raho shehzdy!!! Iam sorry',
        type: 'img',
        src: require('../../../assets/images/4.png'),

    },

    {
        id: '9',
        name: 'Developers and Programmers',
        comment: '56',
        pic:require('../../../assets/images/man8.png'),


        time: '23 mint',
        description: ' Urgent need PHP LARAVEL Developer. Paid task, must have experienced in API. ',
        type: 'video',
        src: require('../../../assets/images/3.mp4'),

    },
    {
        id: '10',
        name: 'Malik Muhammad Uzair Awan  ',
        comment: '89',
        pic:require('../../../assets/images/man5.png'),

        time: '33 mint',
        description: 'Portfolio 😍❤️ #css #html #portfolio ',
        type: 'img',
        src: require('../../../assets/images/5.jpg'),

    },

    {
        id: '11',
        name: ' Sindh University Posting シ',
        pic:require('../../../assets/images/man2.png'),

        comment: '7',

        time: '20h',
        description: 'Reality 🤧 ',
        type: 'img',
        src: require('../../../assets/images/6.jpg'),

    },
    {
        id: '12',
        name: 'Sajjad Sindhi',
        comment: '290',
        pic:require('../../../assets/images/man2.png'),

        time: '8h',
        description: '  Why do we use it It is a long established fact that a reader will be distracted by the readable content of a page when looking ',
        type: 'video',
        src: require('../../../assets/images/7.jpg'),

    },
    {
        id: '13',
        name: 'Khizar omer',
        pic:require('../../../assets/images/man8.png'),

        comment: '235',

        time: '3h',
        description: '5000 Ropy Waly Shikari Batair Ka Kamal 😂',
        type: 'video',
        src: require('../../../assets/images/4.mp4'),

    },

]


function HomeScreen(props) {
    const [pause, setPause] = useState(true);

    const { styles, isPortrait, heightToDp, widthToDp } = useFunctionalOrientation(ResponsiveStyle);
    return (
        <View style={styles.container}>

            <View style={styles.HeaderView}>
                <View style={{ width: '70%' }}>
                    <Image source={require('../../../assets/images/fbLogo.png')} style={{ width: 120, height: 50 }} resizeMode={'cover'} />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 1 }}>
                    <Text style={styles.headerIcon}><IconEntypo name='plus' size={20} color={'#000'} /></Text>
                    <Text style={styles.headerIcon}><IconFontAwesome name='search' size={20} color={'#000'} /></Text>
                    <View style={{position:'relative',}}>
                        <Text style={{position:'absolute',right:2,top:3,zIndex:1,backgroundColor:'red',color:'#fff',borderRadius:30,width:12,height:14,textAlign:'center',fontSize:9}}>2</Text>
                        <Text style={styles.headerIcon}><IconFontisto name='messenger' size={20} color={'#000'} /></Text>

                    </View>
                    
                </View>
            </View>

            <View style={styles.MenuHeaderView}>

                <View >
                    <IconEntypo name='home' size={28} color={'#000'} />
                </View>

                <View >
                    <IconOcticons name='video' size={28} color={'#000'} />
                </View>

                <View >
                    <IconFontAwesome name='users' size={28} color={'#000'} />
                </View>
                <View >
                    <IconFontAwesome name='user-circle-o' size={28} color={'#000'} />
                </View>
                <View >
                    <MaterialIcons name='notifications-none' size={28} color={'#000'} />
                </View>
                <View >
                    <Image source={{ uri: 'https://freepngimg.com/thumb/man/22654-6-man-thumb.png' }} style={{ width: 30, height: 30, borderRadius: 30, borderWidth: 1, borderColor: '#000' }} />
                </View>
            </View>

            <ScrollView style={{ width: '100%', height: '100%' }}>

                <View style={styles.imageAndSearch}>
                    <View style={{ width: '10%', justifyContent: 'space-evenly', alignItems: 'flex-start' }}>
                        <Image source={{ uri: 'https://freepngimg.com/thumb/man/22654-6-man-thumb.png' }} resizeMode={'contain'} style={{ width: 40, height: 40, borderRadius: 30, borderWidth: 1, borderColor: '#000' }} />
                    </View>

                    <View style={{}}>
                        <TextInput style={styles.postInput} placeholder="What's on your Mind?" />
                    </View>

                    <View style={{}}>
                        <Image source={require('../../../assets/images/gallery.png')} style={{ width: 30, height: 30 }} resizeMode={'cover'} />



                    </View>
                </View>


                <View style={styles.space}>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 5, paddingTop: 10, elevation: 3, backgroundColor: '#fff' }}>
                    <View style={{ borderBottomWidth: 2, width: '50%', borderBottomColor: '#216FDB', width: 150, justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: '#216FDB', fontWeight: 'bold' }}>Stories</Text></View>
                    <View style={{ width: '20%' }}><Text style={{ color: '#000', fontWeight: 'bold' }}>Reels</Text></View>
                </View>

                <View style={styles.storyAndreels}>


                    <View style={styles.storyBoxUser}>
                        <Image source={{ uri: 'https://freepngimg.com/thumb/man/22654-6-man-thumb.png' }} style={styles.storyImageUser} />
                        <View style={styles.plusIcon}>
                            <Text style={{ backgroundColor: '#216FDB', borderRadius: 30, marginTop: -15 }}>
                                <IconEntypo name='plus' size={30} color={'#fff'} />
                            </Text></View>
                    </View>



                    <FlatList
                        data={data}
                        horizontal
                        keyExtractor={({ item, id }) => id}
                        renderItem={({ item, id }) => (
                            <View>


                                {item.type == 'img' ? (

                                    <View style={styles.storyBox}>

                                        <Image source={item.pic} style={{ position: 'absolute', zIndex: 1, marginLeft: 12, marginTop: 7, width: 30, height: 30, borderRadius: 30, borderWidth: 2, borderColor: '#216FDB' }} />
                                        <Image source={item.src} style={styles.storyImage} />
                                        <Text style={{ position: 'absolute', bottom: 10, left: 10, zIndex: 1, color: '#fff', fontWeight: 'bold' ,width:'80%' }}>{item.name}</Text>

                                    </View>


                                ) : (

                                    <View >


                                    </View>


                                )}


                            </View>
                        )}
                    />
                </View>

                <FlatList
                    data={data}
                    keyExtractor={({ item, id }) => id}
                    renderItem={({ item, id }) => (
                        <View>
                            <View style={styles.space}>
                            </View>

                            {item.type == 'video' ? (
                                <View style={styles.bodyView}>
                                    <View style={styles.userImageName}>
                                        <View style={styles.user}>
                                            <View>
                                                <Image source={item.pic} style={{ marginLeft: 12, marginTop: 7, width: 50, height: 50, borderRadius: 30, borderWidth: 2, borderColor: '#ff0000' }} />
                                            </View>
                                            <View style={styles.userNameView}>
                                                <Text style={styles.userNameText}>{item.name}</Text>
                                                <Text style={styles.postTime}>{item.time}</Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 }}>
                                            <View style={{ marginLeft: 10 }}>
                                                <Text ><Entypo name='dots-three-horizontal' size={20} /></Text>
                                            </View>
                                            <View>
                                                <Text style={{ marginLeft: 8 }}><MaterialIcons name='close' size={25} /></Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.postTileDes}>
                                        <Text style={styles.postTitleDestext}>
                                            {item.description}
                                        </Text>
                                    </View>

                                    {pause == true ? <View style={{ position: 'relative', top: '16%', left: '40%', zIndex: 1 }}>
                                        <TouchableOpacity
                                            style={{ width: 50, height: 50, justifyContent: 'center', backgroundColor: 'black', alignItems: 'center', borderRadius: 30 }}

                                            onPress={() => {

                                                setPause(false);

                                            }}
                                        >
                                            <Text style={{ borderRadius: 10 }}><AntDesign name='play' color={'#fff'} size={40} /></Text>
                                        </TouchableOpacity>

                                    </View> : <View style={{ position: 'relative', top: '16%', left: '40%', zIndex: 1 }}>
                                        <TouchableOpacity

                                            onPress={() => {
                                                setPause(true);
                                            }}
                                            style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}


                                        >
                                        </TouchableOpacity>

                                    </View>}



                                    <TouchableOpacity

                                    >

                                        <Video source={item.src}
                                            paused={pause}
                                            resizeMode={'cover'} style={[styles.bodyImage, { marginTop: -50 }]}
                                        />
                                    </TouchableOpacity>

                                    {/* <Image source={{ uri: 'https://www.southernliving.com/thmb/gcV4NrsLKWMQTjwHir_3cUgpEUg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Willie-Nelson-Quote-cc364e6c652e4eaf94319771696b9279.png' }} resizeMode={'cover'} style={styles.bodyImage} /> */}

                                    <View style={styles.likeAndCommentShow}>
                                        <View>
                                            <Text style={{ backgroundColor: '#fff' }}>❤️👍Sajjad Sindhi {item.comment} others</Text>

                                        </View>
                                        <View>
                                            <Text>{item.comment} comments</Text>
                                        </View>
                                    </View>

                                    <View style={styles.likeAndCommentBtn}>
                                        <View>
                                            <TouchableOpacity>
                                                <Text><EvilIcons name='like' size={25} /> Like</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View>
                                            <TouchableOpacity>
                                                <Text style={{ paddingTop: 5 }}><IconOcticons style={{ paddingBottom: 20 }} name='comment' size={20} /> comment</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View>
                                            <TouchableOpacity>
                                                <Text><IconFontAwesome style={{ marginTop: 10 }} name='share' size={14} /> share</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>

                            ) : (
                                <View style={styles.bodyView}>
                                    <View style={styles.userImageName}>
                                        <View style={styles.user}>
                                            <View>
                                                <Image source={item.pic} style={{ marginLeft: 12, marginTop: 7, width: 50, height: 50, borderRadius: 30, borderWidth: 2, borderColor: '#ff0000' }} />
                                            </View>
                                            <View style={styles.userNameView}>
                                                <Text style={styles.userNameText}>{item.name}</Text>
                                                <Text style={styles.postTime}>{item.time}</Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 }}>
                                            <View style={{ marginLeft: 10 }}>
                                                <Text ><Entypo name='dots-three-horizontal' size={20} /></Text>
                                            </View>
                                            <View>
                                                <Text style={{ marginLeft: 8 }}><MaterialIcons name='close' size={25} /></Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.postTileDes}>
                                        <Text style={styles.postTitleDestext}>
                                            {item.description}

                                        </Text>
                                    </View>
                                    <Image source={item.src} resizeMode={'cover'} style={styles.bodyImage} />
                                    <View style={styles.likeAndCommentShow}>
                                        <View>
                                            <Text style={{ backgroundColor: '#fff' }}>❤️👍Sajjad Sindhi {item.comment} others</Text>

                                        </View>
                                        <View>
                                            <Text>{item.comment} comments</Text>
                                        </View>
                                    </View>

                                    <View style={styles.likeAndCommentBtn}>
                                        <View>
                                            <TouchableOpacity>
                                                <Text><EvilIcons name='like' size={25} /> Like</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View>
                                            <TouchableOpacity>
                                                <Text style={{ paddingTop: 5 }}><IconOcticons style={{ paddingBottom: 20 }} name='comment' size={20} /> comment</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View>
                                            <TouchableOpacity>
                                                <Text><IconFontAwesome style={{ marginTop: 10 }} name='share' size={14} /> share</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>

                            )}


                        </View>
                    )}
                />








            </ScrollView>

        </View>

    );
}

export default HomeScreen;