import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.text}>
        Have questions or feedback? Reach out to us!
      </Text>
      <Text style={styles.text}>Email: support@coffeeshop.com</Text>
      <Text style={styles.text}>Phone: +1 (123) 456-7890</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: "#555",
    textAlign: "center",
  },
});
