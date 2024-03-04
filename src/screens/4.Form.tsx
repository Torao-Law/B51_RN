import {
  Box,
  Text,
  FormControl,
  FormControlLabelText,
  FormControlLabel,
  Input,
  InputField,
  View,
} from "@gluestack-ui/themed";
import React from "react";

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
        <Input>
          <InputField
            type="text"
            placeholder="username"
            borderWidth={1}
            borderColor="black"
            padding={4}
            rounded={10}
          />
        </Input>
      </View>

      <View marginTop={8}>
        <FormControlLabel marginBottom={2}>
          <FormControlLabelText fontWeight={"bold"}>
            Password
          </FormControlLabelText>
        </FormControlLabel>
        <Input>
          <InputField
            type="password"
            placeholder="password"
            borderWidth={1}
            borderColor="black"
            padding={4}
            rounded={"$sm"}
          />
        </Input>
      </View>

      <Box bg="$primary500" p="$5" rounded="$lg">
        <Text colors="$primary600">Box with new primary color</Text>
      </Box>
    </FormControl>
  );
};

export default Form;
