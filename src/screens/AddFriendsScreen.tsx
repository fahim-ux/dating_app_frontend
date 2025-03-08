import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StartupNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "AddFriends">;

const AddFriendsScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add Friends</Text>
      <Button title="Next" onPress={() => navigation.navigate("AccountCreated")} />
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

export default AddFriendsScreen;
