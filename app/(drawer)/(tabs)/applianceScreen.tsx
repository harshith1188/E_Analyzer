import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default  function Appliances(){
    return(
        <SafeAreaView style={{flex:1}}>
            <ScrollView contentContainerStyle={{justifyContent:'space-evenly',alignItems:"center",gap:40}} style={{flex:1}}>
    
            {/* c1 */}
            <View style={styles.c1}>
                <Text style={styles.h1}>Appliances</Text>
                <Text style={styles.h3}>Manage your appliances and track energy usage</Text>
             </View>
    
            {/* c2 */}
            <View style={styles.c2}>
                <ScrollView horizontal={true} contentContainerStyle={{justifyContent:'space-evenly',alignItems:'center',gap:30}} style={{padding:20}}>
                <View style={styles.c2_1}>
                    <Text style={styles.h2}><MaterialIcons name="electrical-services" size={39} color={"green"}/>  Total Appliances</Text>
                     <Text style={styles.h1}>5</Text>
                </View>
                
                <View style={styles.c2_2}>
                     <Text style={styles.h2}><MaterialIcons name="bolt" size={39} color={"green"}/>  Total Power</Text>
                     <Text style={styles.h1}>5</Text>
                </View>
                </ScrollView>
            </View>

            <Text style={styles.h1}>Your Appliances</Text>

            {/* c3 */}
            <View style={styles.c3}>
            <Text style={styles.h2}>Basic Appliances</Text>
             {/* bulb */}
            <TouchableOpacity style={styles.dives}>
              <View style={{minHeight:70,padding:20,width:"20%",alignItems:'center',justifyContent:'center'}}>
                <Image source={require("../../../assets/images/bulb.png")} style={{width:200,height:80}}/>
              </View>
              <View style={{minHeight:70,padding:20,width:"50%",alignItems:'center',justifyContent:'center'}}>
                <Text style={styles.h2}>LED Bulb</Text>
                <Text style={styles.h3}>usage: 5 h/day</Text>
              </View>
              <View style={{minHeight:70,padding:20,width:"30%",alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:20,fontWeight:'bold',color:'green'}}>9 W</Text>
              </View>    
            </TouchableOpacity>

            {/* fan */}
              <TouchableOpacity style={styles.dives}>
              <View style={{minHeight:70,padding:20,width:"20%",alignItems:'center',justifyContent:'center'}}>
                <Image source={require("../../../assets/images/fan.png")} style={{width:200,height:80}}/>
              </View>
              <View style={{minHeight:70,padding:20,width:"50%",alignItems:'center',justifyContent:'center'}}>
                <Text style={styles.h2}>Ceiling Fan</Text>
                <Text style={styles.h3}>usage: 10 h/day</Text>
              </View>
              <View style={{minHeight:70,padding:20,width:"35%",alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:20,fontWeight:'bold',color:'green'}}>75 W</Text>
              </View>  
            </TouchableOpacity>
          
             {/* TV */}
            
             <TouchableOpacity style={styles.dives}>
              <View style={{minHeight:70,padding:20,width:"20%",alignItems:'center',justifyContent:'center'}}>
                <Image source={require("../../../assets/images/tv.png")} style={{width:150,height:80}}/>
              </View>
              <View style={{minHeight:70,padding:20,width:"50%",alignItems:'center',justifyContent:'center'}}>
                <Text style={styles.h2}>LED TV</Text>
                <Text style={styles.h3}>usage: 4 h/day</Text>
              </View>
              <View style={{minHeight:70,padding:20,width:"35%",alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:20,fontWeight:'bold',color:'green'}}>100 W</Text>
              </View>  
            </TouchableOpacity>

            {/* fridge */}
          
            <TouchableOpacity style={styles.dives}>
              <View style={{minHeight:70,padding:20,width:"20%",alignItems:'center',justifyContent:'center'}}>
                <Image source={require("../../../assets/images/fridge.png")} style={{width:200,height:80}}/>
              </View>
              <View style={{minHeight:70,padding:20,width:"50%",alignItems:'center',justifyContent:'center'}}>
                <Text style={styles.h2}>Refrigerator</Text>
                <Text style={styles.h3}>usage: 24 h/day</Text>
              </View>
              <View style={{minHeight:70,padding:20,width:"35%",alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:20,fontWeight:'bold',color:'green'}}>150 W</Text>
              </View>  
            </TouchableOpacity>
            </View>
    
            {/* c4 */}
            <View style={styles.c4}>

            </View>

            <TouchableOpacity style={styles.btn} onPress={()=>{router.navigate("/addAppliance")}}>
                <Text style={{fontSize:22,color:"white"}}>Add Appliance</Text>
            </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

const  styles=StyleSheet.create({
    c1:{
        minHeight:120,
        width:'90%',
        alignItems:"flex-start",
        justifyContent:'space-evenly',
        padding:20,
        backgroundColor:'rgba(0,0,0,0.1)',
        borderRadius:10,
        borderWidth:0.2
    },
    h1:{
        fontSize:28,
        fontWeight:'bold',
        color:"green"
    },

    h3:{
        fontSize:15
    },
    c2:{
        minHeight:200,
        width:"90%",
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    c2_1:{
        minHeight:180,
        width:290,
        alignItems:'center',
        justifyContent:'space-evenly',
        backgroundColor:'rgba(0,0,0,0.1)',
        borderRadius:10
    },
    c2_2:{
        minHeight:180,
        width:290,
        justifyContent:'space-evenly',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.1)',
        borderRadius:10,
        marginRight:100
    },
    h2:{
        fontSize:22
    },
    c3:{
        minHeight:750,
        borderWidth:1,
        width:'90%',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'space-evenly',
        marginBottom:100 
    },
    dives:{
        minHeight:120,
        width:"90%",
        padding:10,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:'rgba(0,0,0,0.1)'
    },
    btn:{
        minHeight:70,
        color:"white",
        width:"90%",
        backgroundColor:'green',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    c4:{
        borderWidth:1,
    
    }
    


})