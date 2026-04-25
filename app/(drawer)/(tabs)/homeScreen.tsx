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
        <Text style={styles.h2}>$ 1,2456</Text>
        <View style={{backgroundColor:'yellow',padding:10}}></View>
      </View>

    </View>

    {/* c3 */}
    <View style={styles.c3}>
      <View style={styles.c3_1}></View>
      <View style={styles.c3_2}></View>
    </View>

    {/* c4 */}
    <View style={styles.c4}>

    <Text style={styles.h2}>Bill Comparision</Text>
    <View style={styles.c4_1}></View>
    <View style={styles.c4_2}></View>

    </View>
    
    
    {/* c5 */}
    <View style={styles.c5}>
      <View style={styles.c5_1}></View>
      <View style={styles.c5_2}></View>
    </View>
    
    {/* c6 */}
    <View style={styles.c6}>
      <View style={styles.c6_1}>
            <MaterialIcons name="eco" size={28} color={"white"}/>
      </View>

      <View style={styles.c6_2}>
        <Text style={styles.h3}>hello this is the tip of the day</Text>
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
  },
  c2_2:{
    minHeight:150,
    padding:10,
    width:"60%",
    backgroundColor:'pink',
    justifyContent:'space-evenly',
    alignItems:'center',
    borderRadius:10
  },
  c3:{
    minHeight:250,
    width:"100%",
    justifyContent:'space-evenly',
    alignItems:'center',
    padding:20,
    gap:10,
    flexDirection:'row',
  },
  c3_1:{
    minHeight:220,
    width:'50%',
    borderWidth:0.5,
    borderRadius:12,
    justifyContent:'space-evenly',
    alignItems:'center',
    borderColor:'rgba(0,0,0,0.3)',
    backgroundColor:'rgba(206, 196, 196, 0.3)'
  },
  c3_2:{
    minHeight:220,
    width:'50%',
    borderWidth:0.5,
    borderRadius:12,
    justifyContent:'space-evenly',
    alignItems:'center',
    borderColor:'rgba(0,0,0,0.3)',
    backgroundColor:'rgba(206, 196, 196, 0.3)'
  },
  c4:{
    minHeight:500,
    width:"90%",
    backgroundColor:'rgba(206, 196, 196, 0.3)',
    alignItems:'center',
    justifyContent:'space-evenly',
    borderRadius:10,
    padding:20
  },
  c4_1:{
    minHeight:150,
    width:"100%",
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'space-evenly'
  },
 c4_2:{
    minHeight:150,
    width:"100%",
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  c5:{
    minHeight:250,
    alignItems:'center',
    justifyContent:'space-evenly',
    width:"90%",
    padding:20,
    gap:20,
    borderWidth:0.5,
    backgroundColor:"rgba(206, 196, 196, 0.3)",
    borderColor:'rgba(0,0,0,0.3)',
    borderRadius:10
  },
  c5_1:{
    minHeight:80,
    width:'100%',
    padding:20,
    flexDirection:'row',
    backgroundColor:'yellow',
    alignItems:'center',
    justifyContent:'space-between'
  },
  c5_2:{
    minHeight:150,
    width:"100%",
    padding:20,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'yellow',
    justifyContent:'space-evenly'

  },
  c6:{
    minHeight:150,
    width:"90%",
    alignItems:'center',
    justifyContent:'space-evenly',
    flexDirection:'row',
    borderRadius:10,
    borderColor:'rgba(0,0,0,0.3)',
    borderWidth:0.5,
    backgroundColor:'rgba(206, 196, 196, 0.3)'
  },
  c6_1:{
    height:80,
    width:80,
    borderRadius:100,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'green'
  },
  c6_2:{
    minHeight:120,
    width:"70%",
    borderRadius:10,
    alignItems:'center',
    padding:20,
    justifyContent:'center',
    backgroundColor:'green'
  }


})