import { Stack } from "expo-router";
import "../styles/global.css"
import { useEffect } from "react";
import { useFonts, Roboto_400Regular, Roboto_700Bold} from "@expo-google-fonts/roboto";
import * as SplashScreen from 'expo-splash-screen';
import { Loading } from "@/components/Loading";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";

SplashScreen.preventAutoHideAsync();

const navigationBarColor = "#29292E";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
      NavigationBar.setBackgroundColorAsync(navigationBarColor);
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return (
      <Loading />
    )
  }

  return (
    <>
      <StatusBar 
        style="light"
        backgroundColor="transparent"
        translucent
      />
      <Stack 
        screenOptions={{
          headerShown: false,
        }}
      />
    </>
  )
}
