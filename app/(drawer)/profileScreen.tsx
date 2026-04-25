import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile(){
    return(
        <SafeAreaView style={{flex:1}}>
            <ScrollView style={{flex:1}}>
            <View>
                <Text>hello this is profile screen</Text>
                <Image source={require("../../assets/images/app_logo.png")} style={{height:100,width:100}}/>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}