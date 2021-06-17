import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, StyleSheet, Text, Image, TouchableOpacity, Switch, ScrollView, Dimensions,  Alert } from 'react-native'
import IconMaterial from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/Ionicons'
import { userLogout } from '../../signup/action'
import { useSelector, useDispatch } from 'react-redux'

const { height, width } = Dimensions.get('screen')

function App({ navigation }) {
    const dispatch = useDispatch()
    const userData = useSelector(state => state.user?.userData)
    const [notif, setNotif] = useState(true)

    function logout() {
        Alert.alert(
            'Do you really need to logout.',
            '',
            [
                { text: 'LOGOUT', onPress: () => dispatch(userLogout(userData,navigation))},
                {
                    text: 'CANCEL',
                    style: 'cancel',
                },
            ],
            { cancelable: false },
        )
       
    }

    return (

        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.header}>
                <View style={styles.profile}>
                    <TouchableOpacity >
                        <Image source={{ uri: 'https://deadline.com/wp-content/uploads/2021/04/David-Beckham1-e1618304293407.jpg?w=681&h=383&crop=1' }} style={styles.image} />
                        <View style={styles.icon}>
                            <IconMaterial name='edit' size={16} color='#FFFFFF' />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.name}>Guest User</Text>
                </View>
            </View>
            <ScrollView style={styles.contentContainer}>
                <View style={styles.notification}>
                    <Text style={styles.notificationText}>Notifications</Text>
                    <Switch
                        value={notif}
                        onValueChange={()=>setNotif(!notif)}
                        thumbColor='white'
                        trackColor={{  true: 'green' }}
                        ios_backgroundColor={'grey'}
                    />
                </View>
                <TouchableOpacity style={styles.notification} >
                    <Text style={styles.notificationText}>ContactUs</Text>
                    <IconMaterial name='keyboard-arrow-right' size={28} color={'#999999'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.language} onPress={logout}>
                    <Text style={styles.notificationText}>Logout</Text>
                </TouchableOpacity>
            </ScrollView>

            <View style={{ paddingBottom: 1, justifyContent: 'flex-end' }}>
                <Text style={styles.aboutVersion}>Version </Text>
                <Text style={styles.aboutPowered}>Powered By</Text>
                <Text style={styles.aboutCompany}>123 music</Text>
                <Text style={styles.aboutName}>@musicStreaming co pvt ltd</Text>
            </View>
        </SafeAreaView>
    )
}


export default App

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    avoidingView: {
        flex: 1,
    },
    header: {
        paddingBottom: 15,
        paddingTop: 35
    },
    menuIcon: {
        position: 'absolute',
        top: 20,
        left: 15,
        padding: 2,
        zIndex: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    login: {
        fontSize: 14,
        color: '#ffffff',
    },
    profile: {
        alignItems: 'center',
        justifyContent: 'center',
        // paddingBottom: 15
    },
    image: {
        height: 80,
        aspectRatio: 1,
        borderRadius: 40,
        backgroundColor: 'red'
    },
    icon: {
        position: 'absolute',
        zIndex: 10,
        top: 10,
        right: -5,
        backgroundColor: '#a1a1a1',
        padding: 4,
        borderRadius: 15
    },
    name: {
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 10,
        color: '#182D45',
        paddingTop: 10
    },
    email: {
        paddingTop: 5
    },
    button: {
        marginTop: 10,
        backgroundColor: '#a1a1a1',
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        borderRadius: 6
    },
    contentContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    notification: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 15
    },
    loginto: {
        fontSize: 18,
        color: '#a1a1a1'
    },
    loginsub: {
        fontSize: 12,
        color: '#a1a1a1'
    },
    notificationText: {
        fontSize: 16,
        color: '#333333',
        textAlign: 'left'
    },
    language: {
        paddingBottom: 20
    },
    bottomModal: {
        margin: 0,
        justifyContent: 'flex-end',
    },
    content: {
        padding: 15,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#DDDDDD',
    },
    modalClose: {
        alignItems: 'flex-end'
    },
    modalTitle: {
        textAlign: 'center',
        fontSize: 24,
        paddingBottom: 15,
        color: '#a1a1a1'
    },
    modalButton: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        width: '100%',
        backgroundColor: '#a1a1a1',
        borderRadius: 25,
        marginBottom: 10,
        justifyContent: 'center',
    },
    modalButtonFont: {
        fontSize: 20,
        fontFamily: '#a7a7a7',
        color: '#FFFFFF'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
        marginHorizontal: 5
    },
    text: {
        fontSize: 15,
        color: 'black'
    },
    circle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: '#ACACAC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkedCircle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#a1a1a1',
    },
    txtinput: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'center',
        paddingLeft: 15,
        marginBottom: 20,
        borderColor: 'red'
    },
    modalTxtInput: {
        height: 50,
        fontSize: 14,
        color: 'black'
    },
    errorText: {
        fontSize: 14,
        fontFamily: '#a7a7a7',
        color: 'red',
        textAlign: 'center',
        paddingBottom: 15
    },
    aboutPowered: {
        fontSize: 14,
        textAlign: 'center',
        fontStyle: 'italic',
        color: '#000',
        opacity: .7,
        marginBottom: -3
    },
    aboutFounde: {
        fontSize: 14,
        textAlign: 'center',
        fontStyle: 'italic',
        color: '#000',
        opacity: .7,
        marginBottom: -3
    },
    aboutCompany: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '600',
        color: '#a1a1a1',
        paddingBottom: 5
    },
    aboutName: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '600',
        color: '#a1a1a1',
        marginBottom: 3
    },
    aboutVersion: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '500',
        color: 'grey'
    },
})