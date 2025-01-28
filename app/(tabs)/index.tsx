import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";

export default function CoffeeShop() {
  return (
    <ImageBackground
      source={require("../../assets/coffee-shop-bg.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Coffee Shop! 😊</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
  text: {
    color: "Dark",
    fontSize: 48, // Larger font size for luxury
    fontWeight: "bold",
    fontFamily: "Cochin", // Change to a luxurious font (you can change this to any font you like)
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.7)", // Adding a subtle shadow for a fancy effect
    textShadowOffset: { width: 2, height: 2 }, // Direction of the shadow
    textShadowRadius: 10, // Blurring the shadow
    letterSpacing: 2, // Space between letters
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center", // Center content vertically
  },
});
