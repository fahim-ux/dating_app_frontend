import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StartupNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "CreateProfile">;

const CreateProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create Profile</Text>
      {/* <Button title="Next" onPress={() => navigation.navigate("AddFriends")} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default CreateProfileScreen;
