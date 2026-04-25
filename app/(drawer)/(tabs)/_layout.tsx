import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
export default function Tabnav(){
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialIcons name="home" size={28}/>,
        }}
      />


      <Tabs.Screen
        name="applianceScreen"
        options={{
          title: 'appliances',tabBarIcon: ({ color }) => <MaterialIcons name="devices" size={28}/>,}}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: 'savings',tabBarIcon: ({ color }) => <MaterialIcons name="savings" size={28}/>,}}
      />



    </Tabs>

    
  );
}
