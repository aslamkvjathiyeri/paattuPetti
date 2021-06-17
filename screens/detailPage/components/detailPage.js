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
import TextTicker from 'react-native-text-ticker'
import { fetchUser } from '../../signup/action'
import { useSelector, useDispatch } from 'react-redux'
import Slider from 'react-native-slider'

const { height, width } = Dimensions.get("screen");

function App(props) {
    const userData = useSelector(state => state.user?.userData)
    const [songData, setData] = useState(props.route.params.data)
    const [pause, setPause] = useState(false)
    console.log('aaaaaa', props, songData);

    useEffect(() => {

    }, [])


    function onPress(item) {
        console.log('item_clicked', item);
    }

    function renderHeader() {
        return (
            <View style={{ marginTop: 8, backgroundColor: '#fff' }} />
        )
    }

    return (
        <ImageBackground source={{ uri: 'https://www.ppt-backgrounds.net/thumbs/black-and-blue-abstract-templates.jpeg' }} resizeMode={'cover'} style={{ height: '100%', width: '100%', }} imageStyle={{ borderRadius: 10 }}>
            <SafeAreaView style={{ flex: 1, }}>
                <View style={{ flex: 1 }}>
                    <View style={styles.topBar}>
                        <TouchableOpacity onPress={() => props.navigation.goBack()} style={{ paddingRight: 10 }}>
                            <FontAwesome5 name='chevron-left' size={25} color={'#fff'} />
                        </TouchableOpacity>
                        <Text style={{ textAlign: 'center', color: '#fff', fontSize: 23 }}>{songData.title}</Text>
                        <View style={{ paddingHorizontal: 5 }} />
                    </View>
                    <Text style={{ textAlign: 'center', color: '#fff', paddingVertical: 5, fontSize: 17 }}>{songData.album}</Text>
                </View>
                <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={{ uri: songData.thumbnail }} resizeMode={'cover'} style={styles.image} />
                </View>
                <View style={{ flex: 1.5 }}>
                    <View style={{ flex: 1,paddingHorizontal:15 }}>
                        <Slider
                            value={.25}
                            // onValueChange={(value) => this.setState({ value })}
                             />
                    </View>
                    <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                        <TouchableOpacity style={styles.buttons}>
                            <MCicons name='skip-previous' size={25} color={'#000'} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setPause(!pause)} style={[styles.buttons, { height: 70, width: 70, borderRadius: 35 }]}>
                            <MCicons name={pause ? 'play' : 'pause'} size={40} color={'#000'} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttons}>
                            <MCicons name='skip-next' size={25} color={'#000'} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, paddingHorizontal: 15 }}>
                        <TextTicker
                            style={{ fontSize: 21, color: '#fff' }}
                            duration={13000}
                            animationType={'scroll'}
                            loop
                            repeatSpacer={50}
                            marqueeDelay={1000}
                        >
                            {songData.title} - {songData.album} <Text style={{ fontStyle: 'italic' }}> Improvisation is a major part of some types of music</Text>
                        </TextTicker>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default App

const styles = StyleSheet.create({
    topBar: { flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 5, alignItems: 'center', justifyContent: 'space-between' },
    image: { height: 250, width: 250, borderColor: '#a1a1a1', borderWidth: 1, borderRadius: 125, },
    buttons: { height: 50, width: 50, borderRadius: 25, backgroundColor: '#f1f1f1', alignItems: 'center', justifyContent: 'center', borderColor: 'rgba(245, 227, 66,.9)', borderWidth: 2 }

})