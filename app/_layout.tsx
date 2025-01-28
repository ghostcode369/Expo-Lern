import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme(); // Detect system theme (dark or light)
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"), // Custom font
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync(); // Hide splash screen once fonts are loaded
    }
  }, [loaded]);

  if (!loaded) {
    return null; // Show nothing until fonts are loaded
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* Home Screen */}
        <Stack.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false, // Hide the header
          }}
        />
        {/* Tabs */}
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false, // Hide the header for tabs
          }}
        />
        {/* Not Found Screen */}
        <Stack.Screen
          name="+not-found"
          options={{
            title: "Not Found",
            headerShown: true,
          }}
        />
      </Stack>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </ThemeProvider>
  );
}
