import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LastMonthDetails(){
    return(
        <SafeAreaView style={{flex:1}}>
        <ScrollView style={{flex:1}} contentContainerStyle={{justifyContent:'space-evenly',alignItems:'center',gap:40}}>
        {/* c1 */}
        <View style={styles.c1}>
            <Text style={styles.h3}>enter your last month electricity bill details to get accurate analysis </Text>
        </View>

        {/* c2 */}
        <View style={styles.c2}>
            <Text style={styles.h1}><MaterialIcons name="person-2" size={28}/> Personal Information</Text>
           
            <Text style={styles.h2}>User name</Text>
            <TextInput style={styles.input}
            placeholder="Enter your name"
            />

            <Text style={styles.h2}>Pin Code</Text>
            <TextInput style={styles.input}
            placeholder="Enter your 6-digit Pin code"
            />
        
               <Text style={styles.h2}>city</Text>
            <TextInput style={styles.input}
            placeholder="Enter your city"
            />
        </View>

        {/* c3 */}
        <View style={styles.c3}>
          <Text style={styles.h1}><MaterialIcons name="pages" size={28}/> Last Month Bill Details</Text>


           <Text style={styles.h2}>Total units consumed (kWh)</Text>
            <TextInput style={styles.input}
            placeholder="Enter Total units"
            />

            <Text style={styles.h2}>Total Bill Amount</Text>
            <TextInput style={styles.input}
            placeholder="Enter the bill amount"
            />
        
            <Text style={styles.h2}>Average Power (watts)</Text>
            <TextInput style={styles.input}
            placeholder="Enter Average power"
            />

            <Text style={styles.h2}>Electricity  Price (per unit)</Text>
            <TextInput style={styles.input}
            placeholder="Enter price per unit"
            />
        </View>

        {/* c4 */}
        <View style={styles.c4}>
        <Text style={[styles.h2,{color:'green'}]}><MaterialIcons name="info" size={28} color={"green"}/>  Why do we  need this?</Text>
        <Text style={styles.h3}>These details help us analyze  your  consumption pattern and provide accurate cost & savings</Text>
        </View>

        {/* c5 */}
        <TouchableOpacity style={styles.c5}>
            <Text style={[styles.h2,{color:'white'}]}>Save & Analyse</Text>
        </TouchableOpacity>

        </ScrollView>
        </SafeAreaView>
    )
}


const styles =StyleSheet.create({
    c1:{
        minHeight:100,
        width:"90%",
        borderRadius:10,
        borderWidth:2,
        justifyContent:'center',
        padding:10,
        alignItems:'center',
        borderColor:'green',
        backgroundColor:"rgba(206, 196, 196, 0.3)"
    },
    h3:{
        fontSize:17,
        textAlign:'center',
        textTransform:'capitalize'
    },
    h1:{
        fontSize:22,
        fontWeight:'bold',
    },
    c2:{
        minHeight:500,
        width:"90%",
        padding:20,
        borderWidth:0.5,
        borderRadius:10,
        borderColor:'rgba(0,0,0,0.3)',
        backgroundColor:"rgba(206, 196, 196, 0.3)",
        alignItems:"flex-start",
        justifyContent:'space-evenly'
    },
    h2:{
        fontSize:20,
        fontWeight:'bold'
    },
    input:{
        borderWidth:0.7,
        width:"100%",
        fontSize:19,
        padding:20,
        height:60,
        textAlign:'center',
        borderRadius:10
    },
    c3:{
        minHeight:700,
        width:"90%",
        justifyContent:'space-evenly',
        alignItems:"flex-start",
        borderRadius:10,
        padding:20,
        borderColor:'rgba(0,0,0,0.3)',
        backgroundColor:"rgba(206, 196, 196, 0.3)",
        borderWidth:0.5     
    },
    c4:{
        minHeight:100,
        width:"90%",
        justifyContent:'space-evenly',
        alignItems:'center',
        borderRadius:10,
        padding:20,
        borderColor:'rgba(0,0,0,0.3)',
        backgroundColor:"rgba(206, 196, 196, 0.3)",
        borderWidth:0.5, 
    },
    c5:{
        minHeight:70,
        width:"90%",
        alignItems:'center',
        justifyContent:'center',
        borderRadius:12,
        marginBottom:100,
        backgroundColor:'green'
    }



})