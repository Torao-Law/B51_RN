import React from "react";
import { Button, Text, View } from "react-native";
import User from "../components/User";
import { API } from "../libs/api";
import { IUsers } from "../interface/users";

const Detail = () => {
  const [users, setUsers] = React.useState<IUsers[]>();

  const getUsers = async (): Promise<void> => {
    try {
      const response = await API.get("/");
      setUsers(response?.data?.data);
    } catch (error) {
      throw new Error("Error bwang");
    }
  };

  React.useEffect(() => {
    getUsers();
  }, []);  

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>

      { users?.map((data: IUsers, index: number) => {
        console.log(data);
        
        return (
          <User 
            key={index}
            author={data.author}
            comment={data.comment}
            image={data.image}
          />

        )
      })}
    </View>
  );
};

export default Detail;

// STACK SCREEN BEFORE ADDING BOTTOM STACK NAVIGATOR
// import React from 'react'
// import { Button, Text, View } from 'react-native'

// const Detail = ({ route, navigation }: any) => {
//   console.log(route)
//   const { itemId, otherParam } = route.params

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>

//       <Text>Item ID : {itemId}</Text>
//       <Text>Other : {otherParam}</Text>
//       {/* <Button
//         title="Go to Details... again"
//         onPress={() => navigation.push('Details', {
//           itemId: Math.floor(Math.random() * 100),
//           otherParam: `Pinjem uang ${itemId}`
//         })}
//         // onPress={() => navigation.navigate('Details')}
//       /> */}
//       <Button title="Go back" onPress={() => navigation.goBack()} />

//       <Button
//         title="Go back to first screen in stack"
//         onPress={() => navigation.popToTop()}
//       />
//     </View>
//   )
// }

// export default Detail
