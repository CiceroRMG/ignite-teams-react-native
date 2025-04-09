import { Stack } from "expo-router";
import "../styles/global.css"
import { useEffect } from "react";
import { useFonts, Roboto_400Regular, Roboto_700Bold} from "@expo-google-fonts/roboto";
import * as SplashScreen from 'expo-splash-screen';
import { ActivityIndicator } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return (
      <ActivityIndicator />
    )
  }

  return <Stack />;
}
