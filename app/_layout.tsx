import { Stack } from 'expo-router';

export default function RootLayout() {

  return (
      <Stack initialRouteName='splashScreen'>
        <Stack.Screen name="splashScreen" options={{ headerShown: false }} />
        <Stack.Screen name="powerScreen" options={{ headerShown: false }} />        
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      </Stack>
    
  );
}
