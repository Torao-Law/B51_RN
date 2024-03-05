import {
  Box,
  Text,
  FormControl,
  FormControlLabelText,
  FormControlLabel,
  Input,
  InputField,
  View,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import React from "react";
import { Pressable } from "react-native";

const Form = () => {
  return (
    <FormControl
      width={300}
      isDisabled={false}
      isInvalid={false}
      isReadOnly={false}
      isRequired={false}
    >
      <View>
        <FormControlLabel marginBottom={2}>
          <FormControlLabelText fontWeight={"bold"}>
            Username
          </FormControlLabelText>
        </FormControlLabel>
        <Input rounded={"$lg"}>
          <InputField
            type="text"
            placeholder="username"
            rounded={"$lg"}
            borderWidth={1}
            borderColor="black"
            padding={4}
          />
        </Input>
      </View>

      <View marginTop={8}>
        <FormControlLabel marginBottom={2}>
          <FormControlLabelText fontWeight={"bold"}>
            Password
          </FormControlLabelText>
        </FormControlLabel>
        <Input rounded={"$lg"}>
          <InputField
            type="password"
            placeholder="password"
            rounded={"$lg"}
            borderWidth={1}
            borderColor="black"
            padding={4}
          />
        </Input>
      </View>

      <Button bg="$primary700" p="$2" rounded="$lg">
        <ButtonText color="$secondary50">Test</ButtonText>
      </Button>

      <View mt={"$3"}>
        <Button
          size="md"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
        >
          <ButtonText>Add </ButtonText>
        </Button>
      </View>

      <View>
        <Pressable>
          <Text>Login</Text>
        </Pressable>
      </View>
    </FormControl>
  );
};

export default Form;
