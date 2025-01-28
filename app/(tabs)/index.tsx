import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function CoffeeShop() {
  return (
    <ImageBackground
      source={require("../../assets/coffee-shop-bg.jpg")} // Correct path to the image
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to the Home Page!</Text>
        {/* Link to the Explore page */}
        <Link href="/explore" style={styles.link}>
          Go to Explore
        </Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
  title: {
    color: "white",
    fontSize: 48, // Larger font size for luxury
    fontWeight: "bold",
    fontFamily: "Cochin", // Change to a luxurious font (you can replace this with a custom font)
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.7)", // Adding a subtle shadow for a fancy effect
    textShadowOffset: { width: 2, height: 2 }, // Direction of the shadow
    textShadowRadius: 10, // Blurring the shadow
    letterSpacing: 2, // Space between letters
  },
  link: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    color: "black",
    fontSize: 18,
    borderRadius: 10,
    fontWeight: "bold",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
