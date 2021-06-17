import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Platform,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";

import MCicons from "react-native-vector-icons/MaterialCommunityIcons";
import Micons from "react-native-vector-icons/MaterialIcons";

import { fetchUser } from '../action'
import { useSelector, useDispatch } from 'react-redux'

const { height, width } = Dimensions.get("screen");

function App({ navigation }) {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNum, setMobileNum] = useState('');
  const [password, setPassword] = useState('');
  const [alertMsg, setAlert] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch()


  function loginAction() {
    if (!checkError()) {
      const user = { username: userName, email: email, phone: mobileNum, password: password }
      dispatch(fetchUser(user, navigation))
    }
    else {
      setAlert(true),
        setTimeout(() => {
          setAlert(false)
        }, 3000)
    }
  }

  function validate(text) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      return false;
    }
    else {
      return true
    }
  }
  function checkError() {
    if (userName && email && mobileNum && password) {
      if (!validate(email)) {
        return true
      }
      else if (mobileNum.length != 10) {
        return true
      }
      else if (password.length < 3) {
        return true
      }
      else if (userName.length < 3) {
        return true
      }
      else return false
    }
    else return true
  }

  function showError() {
    if (alertMsg) {
      if (userName.length < 3) {
        return <Text style={styles.alertTxt}>* name required atleast 5 characters</Text>
      }
      else if (!validate(email)) {
        return <Text style={styles.alertTxt}>* insert a valid email</Text>
      }
      else if (mobileNum.length != 10) {
        return <Text style={styles.alertTxt}>* required 10 digit phone number</Text>
      }
      else if (password.length < 3) {
        return <Text style={styles.alertTxt}>* password required atleast 3 characters</Text>
      }
    }
  }

  return (
    <View
      style={{ flex: 1, backgroundColor: '#fff' }}
    >
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS == "ios" ? "height" : "height"} height={height * .9}  >
        <View style={styles.topView}>
          <Text style={styles.companyName}>123Music</Text>
          <View style={styles.iconView}>
            <View style={styles.iconeBox}>
              <Text style={styles.iconText}>P</Text>
            </View>
            <View style={styles.iconeBox}>
              <Text style={styles.iconText}>A</Text>
            </View>
            <View style={styles.iconeBox}>
              <Text style={styles.iconText}>T</Text>
            </View>
            <View style={styles.iconeBox}>
              <Text style={styles.iconText}>T</Text>
            </View>
            <View style={styles.iconeBox}>
              <Text style={styles.iconText}>U</Text>
            </View>
          </View>
          <View style={styles.iconView}>
            <View style={styles.iconeBox}>
              <Text style={styles.iconText}>P</Text>
            </View>
            <View style={styles.iconeBox}>
              <Text style={styles.iconText}>E</Text>
            </View>
            <View style={styles.iconeBox}>
              <Text style={styles.iconText}>T</Text>
            </View>
            <View style={styles.iconeBox}>
              <Text style={styles.iconText}>T</Text>
            </View>
            <View style={styles.iconeBox}>
              <Text style={styles.iconText}>Y</Text>
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Name"
              style={styles.inputField}
              onChangeText={text => setUserName(text)}
              value={userName}
            />
            <Micons name={"person"} size={21} color={"rgba(84,84,84,.5)"} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="E-mail"
              style={styles.inputField}
              onChangeText={text => setEmail(text)}
              value={email}
            />
            <MCicons name={"email"} size={21} color={"rgba(84,84,84,.5)"} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              value={mobileNum}
              placeholder="Mobile"
              returnKeyType={'done'}
              keyboardType={'number-pad'}
              style={styles.inputField}
              onChangeText={text => setMobileNum(text)}
            />
            <MCicons name={"cellphone-basic"} size={21} color={"rgba(84,84,84,.5)"} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Password"
              style={styles.inputField}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
              defaultValue={password}
            />
            <MCicons name={"lock"} size={21} color={"#rgba(84,84,84,.5)"} />
          </View>
          <View style={{ height: 30 }}>
            {showError()}
          </View>
          <TouchableOpacity style={[styles.button,{backgroundColor:checkError()?'#aaa':'#3464eb'}]} onPress={loginAction}>
            <Text style={styles.loginText}>REGISTER</Text>
          </TouchableOpacity>
          <Text style={styles.forgotText}>version m1.01</Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  topView: {
    flex: 2.5,
    paddingVertical: 25,
    justifyContent: "space-between",
  },
  inputField:{ fontSize: 16, paddingVertical: 0, flex: 1 },
  companyName: {
    color: "#545454",
    fontSize: 14,
    lineHeight: 44,
    textAlign: "center",
    marginBottom: 10,
  },
  iconView: {
    height: 50,
    width: 190,
    flexDirection: "row",
    marginTop: 10,
  },
  iconeBox: {
    marginHorizontal: 2,
    backgroundColor: '#fc0317',
    flex: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: { fontSize: 39, fontWeight: "bold", color: "#fff" },
  body: {
    flex: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#fff',
  },
  inputContainer: {
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    width: width * 0.8,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    borderColor: "#d9d9d9",
    backgroundColor: "#f5f5f5",
    justifyContent: "space-between",
  },
  alertTxt: {
    color: 'red',
    opacity: .8,
  },
  button: {
    height: 50,
    width: width * 0.8,
    paddingHorizontal: 15,
    backgroundColor: '#aaa',
    justifyContent: "center",
    borderRadius: 10,
    alignItems: "center",
    marginTop: 70,
    marginBottom: 50,
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 21,
  },
  forgotText: {
    fontSize: 11,
    lineHeight: 15,
    color: '#a1a1a1',
    textDecorationLine: "underline",
  },
});

