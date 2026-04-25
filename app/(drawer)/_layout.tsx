import { Drawer } from "expo-router/drawer";
export  default function Drawernavigate(){
    return(
        <Drawer screenOptions={{headerShown:false}}>
            <Drawer.Screen name="(tabs)" options={{headerShown:true ,title:'home'}}/> 
            <Drawer.Screen name="profileScreen" options={{headerShown:true}}/>
            <Drawer.Screen name="settingsScreen" options={{headerShown:true}}/>
         </Drawer>   
    )
}

