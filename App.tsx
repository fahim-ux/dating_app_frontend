import React from "react";
import StartupNavigator from "Navigation/StartupNavigator";
import { Text, SafeAreaView, StyleSheet } from "react-native";
import LogInScreen  from "screens/LogInScreen";
import CreateProfileScreen from "screens/CreateProfileScreen";

const App = () => {
  // Remove or comment out these logs in production
  console.log("Hooiii brooo")
  console.log(LogInScreen.name);
  console.log(StartupNavigator);
  console.log(CreateProfileScreen.name);

  
  try {
    // Try to render the StartupNavigator
    return (<StartupNavigator />);
  } catch (error) {
    // If there's an error, render a fallback UI with error details
    console.error("Error rendering StartupNavigator:", error);
    return (
      <SafeAreaView style={styles.errorContainer}>
        <Text style={styles.errorTitle}>Somethin went wrong</Text>
        {/* <Text style={styles.errorMessage}>console.error(error);</Text> */}
        {/* <CreateProfileScreen /> */}
        {/* <LogInScreen /> */}
        {/* <StartupNavigator /> */}
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8d7da',
  },
  errorTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#721c24',
    marginBottom: 10,
  },
  errorMessage: {
    fontSize: 16,
    color: '#721c24',
    textAlign: 'center',
  }
});

export default App;
