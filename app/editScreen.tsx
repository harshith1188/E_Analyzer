import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EditProfileScreen() {
    return(
        <SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <View style={styles.c1}>
                <Text style={styles.h2}>Edit Profile</Text>
                <Text style={styles.h3}>This is where you can edit your profile information.</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    c1: {
        width: "90%",
        minHeight: 400,
        alignItems: "center",
        borderWidth: 0.5,
        padding: 20,
        borderRadius: 10,
        justifyContent: "space-evenly",
    },
    h2:{
        fontSize:22,
        textTransform:'capitalize',
        fontWeight:'bold',
        color:"green"
    },
    h3:{
        fontSize:16
    }
})