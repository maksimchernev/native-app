import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  SafeAreaView,
  StyleSheet,
} from "react-native";

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.textRed}>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: "https://reactnative.dev/docs/assets/p_cat2.png",
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textRed: {
    backgroundColor: "red",
    flex: 1,
  },
});
export default App;
