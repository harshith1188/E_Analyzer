import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
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
            
            </View>
    
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
        minHeight:600,
        backgroundColor:'rgba(0,0,0,0.1)',
        width:'90%',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'space-evenly',
        marginBottom:100
   
    }
    


})