import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { IUsers } from "../interface/users";
import { Avatar, Image, styled } from "@gluestack-ui/themed";

const User = (props: IUsers) => {
  console.log(props);

  return (
    <View style={Style.container}>
      <View style={Style.card}>
        <View>
          <Avatar
            bgColor="$amber600"
            size="md"
            borderRadius="$full"
            style={{ width: 50, height: 50 }}
          >
            <Image
              source={props.image}
              // borderRadius="$full"
              w={"$full"}
              h={"$full"}
            />
          </Avatar>
        </View>

        <View>
          <Text>{props.author}</Text>
          <Text>{props.comment}</Text>
        </View>
      </View>
    </View>
  );
};

export default User;

const Style = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: "red",
    marginTop: 5
  },
  card: {
    borderRadius: 100 / 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%"
    // alignItems: "center",
  },
});
