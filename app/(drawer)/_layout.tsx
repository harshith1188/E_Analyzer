import { Drawer } from "expo-router/drawer";
export  default function Drawernavigate(){
    return(
        <Drawer>

            <Drawer.Screen name="profileScreen" options={{headerShown:true}}/>
            <Drawer.Screen name="settingsScreen" options={{headerShown:true}}/>
            
        </Drawer>
    )
}