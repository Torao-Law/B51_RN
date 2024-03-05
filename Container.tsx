import React from "react";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Detail from "./src/screens/Detail";
import Profile from "./src/screens/Profile";
import { Image, Text } from "react-native";

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <>
      <Image
        style={{ width: 30, height: 30 }}
        source={require("./src/assets/icon.png")}
      />
      <Text>Github</Text>
    </>
  );
}

const Container = () => {
  const object: object = {
    itemId: 86,
    otherParam: "anything you want here",
  };
  return (
    <>
      <StatusBar style="auto" />

      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center"
          }}
        /> */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Details"
          component={Detail}
          initialParams={object}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </>
  );
};

export default Container;
