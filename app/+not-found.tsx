import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function NotFound() {
  return (
    <View>
      <Text>Oops! This screen doesn't exist.</Text>
      <Link href="/explore">Go to home</Link>
    </View>
  );
}
