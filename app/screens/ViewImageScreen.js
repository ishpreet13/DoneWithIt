import React from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "expo-constants";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.closeIcon}>
          <MaterialCommunityIcons name="close" color="white" size={30} />
        </View>
        <View style={styles.deleteIcon}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            color="white"
            size={30}
          />
        </View>
        <Image
          style={styles.image}
          source={require("../assets/chair.jpg")}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 80,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    position: "absolute",
    top: 80,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});

export default ViewImageScreen;
