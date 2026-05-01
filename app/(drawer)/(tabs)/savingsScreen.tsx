import { Alert, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default  function SavingsScreen(){

   const handlealert=()=>{
      Alert.alert("Delete",
        "do you want to delete the files ?",
        [
          {
            text:'cancle',
            style:'cancel'
          },
          {
            text:'delete',
            style:'destructive',
            onPress:()=>handledelete
          }
        ]
      )
   }

   const handledelete=()=>{
    console.log("deleted all the files")
   }
  return(
  <SafeAreaView>
    <View>
      <Text>hello this is Savings screen</Text>
      <TouchableOpacity onPress={handlealert} style={{padding:20,alignItems:'center',justifyContent:'center'}}>
      <Text style={{fontSize:22}}>click me</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
)
}