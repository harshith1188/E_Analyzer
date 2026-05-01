import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
export default function LastMonthDetails(){

    const[name,setname]=useState('');
    const[pin,setPin]=useState('');
    const[city,setcity]=useState('');
    const[kwh,setkwh]=useState('');
    const[fixedch,setfixedch]=useState('');
    const[epp,setepp]=useState('');
    const[pp,setpp]=useState('');
    const[subsi,setsubsi]=useState('');
useFocusEffect(
  useCallback(() => {
    const reload = async () => {
      const storedobj = await AsyncStorage.getItem('lastMonthData');

      if (storedobj) {
        const parsedData = JSON.parse(storedobj);
        console.log(parsedData.name);
        setname(parsedData.name);
        setPin(parsedData.pin);
        setcity(parsedData.city);
        setkwh(parsedData.units);
        setfixedch(parsedData.fixedCharges);
        console.log(parsedData.fixedCharges);
        setepp(parsedData.extraChargePerUnit);
        setpp(parsedData.pricePerUnit);
        setsubsi(parsedData.subsidyUnits)
      }
    };

    reload();
  }, [])
);
    const handleinputs = async () => {
  if (!name || !pin || !city || !kwh || !fixedch || !epp || !pp ||!subsi) {
    Alert.alert("Error", "Enter all the fields");
    return;
      }
  const obj = {
    name,
    pin,
    city,
    units: (kwh),
    fixedCharges:fixedch,
    extraChargePerUnit:(epp),
    pricePerUnit:(pp),
    subsidyUnits:(subsi),

  };

  await AsyncStorage.setItem('lastMonthData', JSON.stringify(obj));

  Alert.alert("Success", "Data saved successfully");
    
  let units=Number(kwh)-Number(subsi);
  let price=Number(pp);
  let fixed=Number(fixedch);
  let extra=Number(epp);

  let finalbill=(units*price)+fixed+(units*extra);
  alert("final bill is"+finalbill);
 
};

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
            value={name}
            onChangeText={setname}
            />

            <Text style={styles.h2}>Pin Code</Text>
            <TextInput style={styles.input}
            maxLength={6}
            value={pin}
            onChangeText={setPin}
            keyboardType="number-pad"
            placeholder="Enter your 6-digit Pin code"
            />
        
            <Text style={styles.h2}>city</Text>
            <TextInput style={styles.input}
            placeholder="Enter your city"
            value={city}
            onChangeText={setcity}
            keyboardType="default"
            />
        </View>

        {/* c3 */}
        <View style={styles.c3}>
          <Text style={styles.h1}><MaterialIcons name="pages" size={28}/> Last Month Bill Details</Text>


           <Text style={styles.h2}>Total units consumed (kWh)</Text>
            <TextInput style={styles.input}
            placeholder="Enter Total units"
            value={kwh}
            onChangeText={setkwh}
            keyboardType="number-pad"
            />

            <Text style={styles.h2}>Fixed charge Amount</Text>
            <TextInput style={styles.input}
            placeholder="Enter the fixed charges"
            value={fixedch}
            keyboardType="number-pad"
            onChangeText={setfixedch}
            />
        
            <Text style={styles.h2}>Extra charge per unit</Text>
            <TextInput style={styles.input}
            placeholder="Enter extra charge per unit"
            keyboardType="number-pad"
            value={epp}
            onChangeText={setepp}
            />

            <Text style={styles.h2}>Electricity  Price (per unit)</Text>
            <TextInput style={styles.input}
            placeholder="Enter price per unit"
            value={pp}
            keyboardType="number-pad"
            onChangeText={setpp}
            />
            <Text style={styles.h2}>Subsidy Eligible Units (kwh)</Text>
            <TextInput style={styles.input}
            placeholder="Enter Subsidy units"
            value={subsi}
            keyboardType="number-pad"
            onChangeText={setsubsi}/>

            <Text style={styles.h2}>final bill amount after  subsidy </Text>
            <TextInput style={styles.input}
            placeholder="final bill amount"
            editable={false}
            keyboardType="number-pad"/>
      
        </View>

        {/* c4 */}
        <View style={styles.c4}>
        <Text style={[styles.h2,{color:'green'}]}><MaterialIcons name="info" size={28} color={"green"}/>  Why do we  need this?</Text>
        <Text style={styles.h3}>These details help us analyze  your  consumption pattern and provide accurate cost & savings</Text>
        </View>

        {/* c5 */}
        <TouchableOpacity style={styles.c5} onPress={handleinputs}>
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
        minHeight:800,
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