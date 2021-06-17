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
                    <Text style={styles.name}>{userData?.username}</Text>
                    <Text style={[styles.name,{fontSize: 13}]}>mobile: {userData?.phone}</Text>
                    <Text style={[styles.name,{fontSize: 13}]}>E-mail: {userData?.email}</Text>
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
    header: {
        paddingBottom: 15,
        paddingTop: 35
    },
    image: {
        height: 80,
        aspectRatio: 1,
        borderRadius: 40,
        backgroundColor: 'red'
    },
    profile: {
        alignItems: 'center',
        justifyContent: 'center',
        // paddingBottom: 15
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
    notificationText: {
        fontSize: 16,
        color: '#333333',
        textAlign: 'left'
    },
    language: {
        paddingBottom: 20
    },
    aboutPowered: {
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