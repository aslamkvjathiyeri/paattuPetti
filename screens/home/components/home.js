import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    FlatList,
    TouchableOpacity,
    Dimensions,
    ImageBackground,
    SafeAreaView,
} from "react-native";
import MCicons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { fetchUser } from '../actions'
import { useSelector, useDispatch } from 'react-redux'

const { height, width } = Dimensions.get("screen");

function App({ navigation }) {
    const userData = useSelector(state => state.user?.userData)
    const [songsArray, setList] = useState([])
    
    useEffect(() => {
        getPoemList()
    }, [])
    
    async function getPoemList() {
        let data = await fetch('https://6006c4d63698a80017de1f20.mockapi.io/songs?page=2&limit=20')
            .then((response) => response.json())
            .then((json) => {
                console.log('rrrrr', json);
                setList(json)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function onPress(item){
console.log('item_clicked',item);
    }

    function renderPoemsWaha({ item }) {
        const date = item.createdAt.slice(0, 10)
        return (
            <TouchableOpacity onPress={() => onPress(item)} style={{ borderRadius: 10 }}>
                <ImageBackground source={{ uri: 'https://www.ppt-backgrounds.net/thumbs/black-and-blue-abstract-templates.jpeg' }} resizeMode={'cover'} style={{ height: height * .25, width: '100%', }} imageStyle={{ borderRadius: 10 }}>
                    <View style={styles.upView1}>
                        {
                            <View style={styles.poemInfoView} />
                        }
                        {
                            <TouchableOpacity style={styles.poemInfoIcon}>
                                <FontAwesome5 name='info-circle' size={15} color={'#fff'} />
                            </TouchableOpacity>
                        }
                        <View style={styles.poemDeTopBar}>
                            <View style={styles.topBarLvl2}>
                                <Text style={styles.subHeadText}> {date}</Text>
                            </View>
                        </View>
                    </View>
                    <Image source={{ uri: item.thumbnail }} resizeMode={'cover'} style={styles.image} />
                    <View style={styles.downView1}>
                        <Text style={styles.mainText}>{item.title}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome5 name='user-alt' size={15} color={'#fff'} style={styles.userIcon} />
                            <TouchableOpacity>
                                <Text style={styles.poetName}>{item.album}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    function renderHeader() {
        return (
            <View style={{ marginTop: 8, backgroundColor: '#fff' }} />
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <FlatList
                    data={songsArray}
                    ItemSeparatorComponent={renderHeader}
                    renderItem={renderPoemsWaha}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    style={{ margin: 8 }}
                />
            </View>
        </SafeAreaView>
    )
}

export default App

const styles = StyleSheet.create({

    image: { height: 100, width: 100, borderColor: '#a1a1a1', borderWidth: 1, borderRadius: 50, position: 'absolute', top: '10%', alignSelf: 'center' },
    
    mainText: {
        fontSize: 27,
        fontWeight: '500',
        color: '#fff'
    },
    poetName: {
        color: '#fff',
        fontSize: 17,
        marginLeft: 10,
        marginTop: 5,
        textDecorationLine: 'underline',
    },
    poemInfoView: {
        top: 0,
        left: 0,
        borderTopLeftRadius: 10,
        position: 'absolute',
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 30,
        borderRightWidth: 30,
        borderBottomWidth: 30,
        borderLeftWidth: 30,
        borderTopColor: '#63676e',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: '#63676e',
    },
    poemInfoIcon: {
        top: 5,
        left: 5,
        position: 'absolute',
        padding: 5,
        zIndex: 10,
    },
    userIcon: {
        color: '#fff',
        marginTop: 8
    },
    upView1: {
        width: '100%',
        height: '40%',
        position: 'absolute',
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    downView1: {
        width: '100%',
        height: '50%',
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    poemDeTopBar: {
        position: 'absolute',
        top: 5,
        right: 5,
        padding: 5
    },
    topBarLvl2: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    subHeadText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14
    }
})