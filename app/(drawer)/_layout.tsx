import { Drawer } from "expo-router/drawer"
export default function Drawernav()
{
    return(
        <Drawer>
        <Drawer.Screen name="profileScreen"/>
        <Drawer.Screen name="settingsScreen" />
        </Drawer>
    )
}