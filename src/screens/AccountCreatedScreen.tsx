import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StartupNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "AccountCreated">;

const AccountCreatedScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Account Created Successfully!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
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

export default AccountCreatedScreen;
