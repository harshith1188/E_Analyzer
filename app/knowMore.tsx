import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export  default function KnowMore(){

const[current_month_bill,setfinal_current_month_bill]=useState(0);
const[solarbill,setsolarbill]=useState(0);
const[save,setsave]=useState(0);
    useFocusEffect(
        useCallback(()=>{
            const load=async()=>{
            let current_month_bill =Number(await AsyncStorage.getItem('currentMonthBill'));
            let solar_bill = Number(await AsyncStorage.getItem('solarBill'));  
            let sx= await AsyncStorage.getItem('currentMonthBill');
            setfinal_current_month_bill(current_month_bill);
            setsolarbill(solar_bill);
            setsave(current_month_bill - solar_bill);
            }
            load();
        },[])
    )
    return(
     <SafeAreaView style={{flex:1}}>
        <ScrollView style={{padding:20,flex:1}} contentContainerStyle={{flexGrow:1,alignItems:'center',justifyContent:'center',gap:20}}>
      
      {/* c1 */}
      <View style={styles.c1}>
        <Image source={require('../assets/images/know_more_img1.png')} style={{height:"100%",width:"100%",borderRadius:10}}/>
      </View>
      {/* c2 */}
      <View style={styles.c2}>
        <Text style={styles.h1}>Your Potential Savings</Text>
            <View style={styles.c2_1}>
                <View style={styles.c2_1_1}>
                    <Text style={styles.h3}>current bill</Text>
                    <Text style={[styles.h2,{color:'red'}]}>₹ {current_month_bill.toFixed(2)}</Text>
                    <Text style={styles.h3}>/Monthly</Text>
                </View>

                <View style={styles.c2_1_2}>
                    <Text style={styles.h3}>With Solar</Text>
                    <Text style={[styles.h2,{color:'green'}]}>₹ {solarbill.toFixed(2)}</Text>
                    <Text style={styles.h3}>/Monthly</Text>
                </View>

                <View style={styles.c2_1_3}>
                    <Text style={styles.h3}>You Save</Text>
                    <Text style={[styles.h2,{color:'blue'}]}>₹ {save.toFixed(2)}</Text>
                    <Text style={styles.h3}>/Monthly</Text>
                </View>
      
            </View>
      </View>

      {/* c3 */}
      <View style={styles.c3}>
        <Image source={require('../assets/images/know_more_img2.png')} style={{height:"100%",width:"110%",borderRadius:10}}/>
      </View>

      {/* c4 */}
      <View style={styles.c4}>
        <Text style={styles.h1}>Solar Energy Appliances</Text>
        <ScrollView horizontal contentContainerStyle={{gap:20,padding:10,alignItems:'center',justifyContent:'center'}} style={{width:"100%",height:150,borderRadius:10}}>
       
        <View style={styles.c4_1}>
            <Image source={require('../assets/images/solar_light.png')} style={{height:"80%",width:"80%",borderRadius:10}}/>
            <Text style={styles.h2}>Solar Light</Text>
        </View>

        <View style={styles.c4_1}>
            <Image source={require('../assets/images/solar_heater.png')} style={{height:"80%",width:"80%",borderRadius:10}}/>
            <Text style={styles.h2}>Solar Heaters</Text>
        </View>

        <View style={styles.c4_1}>
            <Image source={require('../assets/images/solar_pannel.png')} style={{height:"80%",width:"80%",borderRadius:10}}/>
            <Text style={styles.h2}>Solar Panels</Text>
        </View>

         <View style={styles.c4_1}>
            <Image source={require('../assets/images/solar_inverter.png')} style={{height:"80%",width:"80%",borderRadius:10}}/>
            <Text style={styles.h2}>Solar Inverter</Text>
         </View>
        </ScrollView>
      </View>

      {/* c5 */}
      <View style={styles.c5}>
        <Image source={require('../assets/images/know_more_img3.png')} style={{height:"100%",width:"110%",borderRadius:10}}/>
      </View>
        
    
        </ScrollView>
     </SafeAreaView>  
        
    )
}  


const styles = StyleSheet.create({
    h1:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        color:'green'
    },
    c1:{
        height:200,
        width:"100%",
        backgroundColor:'pink',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    c2:{
        minHeight:300,
        width:"100%",
        padding:10,
        backgroundColor:'white',
        borderRadius:10,
    },
    h2:{
        fontSize:20,
        fontWeight:'bold',
        
    },
    h3:{
        fontSize:16,
        textAlign:'center'
    },
    c2_1:{
        minHeight:200,
        width:"100%",
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    c2_1_1:{
        padding:5,
        alignItems:'center',
        justifyContent:'space-evenly',
        width:"30%",
        height:160,
        backgroundColor:'rgba(0,0,0,0.1)',
        borderColor:'black',
        borderRadius:5
    },
    c2_1_2:{
        padding:5,
        alignItems:'center',
        justifyContent:'space-evenly',
        width:"30%",
        height:160,
        backgroundColor:'rgba(0,0,0,0.1)',
        borderColor:'black',
        borderRadius:5
    },
    c2_1_3:{
        
        padding:5,
        alignItems:'center',
        justifyContent:'space-evenly',
        width:"30%",
        height:160,
        backgroundColor:'rgba(0,0,0,0.1)',
        borderColor:'black',
        borderRadius:5
    },
    c3:{
        height:200,
        width:"110%",
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        
    },
    c4:{
        minHeight:350,
        width:"100%",
        padding:10,
        backgroundColor:'white',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    c4_1:{
        height:250,
        width:250,  
        padding:10,
        alignItems:'center',
        justifyContent:'space-evenly',
        borderRadius:10,
        backgroundColor:'rgba(0,0,0,0.1)',
        borderColor:'black',
        borderWidth:0.5
    },
    c5:{
        height:400,
        width:"100%",
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginBottom:100
    }

})
