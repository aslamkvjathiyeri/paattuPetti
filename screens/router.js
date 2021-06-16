import React,{useEffect} from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";

import SignUp from './signup'
import Home from './home'
import Profile from './profile'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator initialRouteName="profile">
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function SideMenu() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
    >
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{ headerShown: true }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileStack}
        options={{ headerShown: true }}
      />
    </Drawer.Navigator>
  );
}


function App() {
  const userData = useSelector(state => state.user?.userData)

  return (
    <NavigationContainer>{
      userData ?
        <Stack.Navigator initialRouteName={"Login"} >
          <Stack.Screen
            name="Login"
            component={SignUp}
            options={{ headerShown: false,  }}
          />
        </Stack.Navigator> :
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={SideMenu}
            options={{ headerShown: false,  }}
          />
        </Stack.Navigator>}
    </NavigationContainer>
  );
}

export default App;
