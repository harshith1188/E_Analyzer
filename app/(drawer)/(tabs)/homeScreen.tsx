import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default  function HomeScreen(){
  return(
  <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
  <ScrollView contentContainerStyle={{alignItems:'center',justifyContent:'center',gap:30}} style={{flex:1}}>
    
    {/* c1     */}
    <View  style={styles.c1}>
    <Text style={styles.h2}>Hello user 🖐️</Text>
    <Text style={styles.h3}>Here's your electricity overview</Text>
    </View>

    {/* c2 */}
    <View style={styles.c2}>
      
      <View style={styles.c2_1}> 
      <MaterialIcons name="wallet" color={"white"} size={39} />
      </View>

      <View style={styles.c2_2}>
        <Text style={styles.h2}>Estimated Bill</Text>
      </View>


    </View>
    
    </ScrollView>
  
  </SafeAreaView>
)
}

const styles= StyleSheet.create({
  c1:{
    minHeight:100,
    width:"90%",
    padding:20,
    justifyContent:"space-evenly",
    alignItems:'center',
    borderWidth:0.5,
    borderColor:'rgba(0,0,0,0.3)',
    borderRadius:12,
    backgroundColor:"rgba(206, 196, 196, 0.3)"
  },
  h2:{
    fontSize:22,
    textTransform:'capitalize',
    fontWeight:'bold'
  },
  h3:{
    fontSize:16
  },
  c2:{
    minHeight:200,
    borderRadius:10,
    width:"90%",
    borderWidth:0.5,
    borderColor:'rgba(0,0,0,0.3)',
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-evenly',
    backgroundColor:"rgba(206, 196, 196, 0.3)"
  },
  c2_1:{
    height:80,
    width:80,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'green',
    borderRadius:100
  }

})