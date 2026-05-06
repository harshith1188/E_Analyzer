import { calculateFinalBill } from "@/components/utils/calculate_bill";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Savings() {
  
  const[final_last_month_bill,setfinal_last_month_bill]=useState(0);
  const[final_current_month_bill,setfinal_current_month_bill]=useState(0);
  const[color,setcolor]=useState('black');
  const[msg,setmsg]=useState('');
  const[color2,setcolor2]=useState('black');
  const[img,setimg]=useState(require("../../../assets/images/graphincrease.png"));
  const[solarbill,setsolarbill]=useState(0);
  useFocusEffect(
    useCallback(()=>{
      
      const load=async()=>{
         let last_month_bill=0;
         let parseddata_of_lastMonth;
         let current_month_units=0;
         let current_month_bill=0;
      let lastMonthData=await AsyncStorage.getItem('lastMonthData');
      if(lastMonthData){
         parseddata_of_lastMonth=JSON.parse(lastMonthData);
         last_month_bill=Number(parseddata_of_lastMonth.finalbill);
         await AsyncStorage.setItem('lastMonthBill', last_month_bill.toString());
        setfinal_last_month_bill(last_month_bill);
      }
     
      let currentMonthData=await AsyncStorage.getItem('currentMonthData');
      if(currentMonthData){
        let parseddata=JSON.parse(currentMonthData);
    
         //getting  currebt month bill and units  
         current_month_bill=Number(parseddata.result.finalBill);
         current_month_units=Number(parseddata.result.totalUnits);
         await AsyncStorage.setItem('currentMonthBill', current_month_bill.toString());
        setfinal_current_month_bill(current_month_bill);
      

        //solar bill calculation
        const solarCoverage=0.3; // 30% of the total units are covered by solar panels
    
        const solarUnits=current_month_units * solarCoverage;
        const gridUnits=current_month_units - solarUnits;
    
        const solar_bill_result = calculateFinalBill({
          totalUnits:Number(gridUnits),
            subsidyUnits:Number(parseddata_of_lastMonth.subsidyUnits),
            pricePerUnit: Number(parseddata_of_lastMonth.pricePerUnit),
            extraChargePerUnit: Number(parseddata_of_lastMonth.extraChargePerUnit),
            fixedCharges: Number(parseddata_of_lastMonth.fixedCharges),
        });
        
    
        //getting the total bill for solar and grid
        setsolarbill(solar_bill_result.finalBill);
        await AsyncStorage.setItem('solarBill', solar_bill_result.finalBill.toString());
        
      
    }
      
      if(currentMonthData && lastMonthData){
       if(current_month_bill < last_month_bill){
        setcolor('green');
        setcolor2('red');
        setmsg('Great job! You are saving money this month.');
        setimg(require("../../../assets/images/graphincrease.png"));
        }
        else if(current_month_bill > last_month_bill){
          setcolor('red');
          setcolor2('green');
          setmsg('Bad! You spent more this month.');
          setimg(require("../../../assets/images/graphdecrease.png"));
        }
        else{
          setcolor('black');
          setcolor2('black');
          setmsg('Your bill is the same as last month.');
        }
    
    }
     
    }
      load();
    },[])
  )


  const handlesolardetails=()=>{
    router.navigate('/knowMore');
  }



  return (
    <SafeAreaView style={{flex:1}}>
    <ScrollView style={{flex:1}} contentContainerStyle={{alignItems:"center",justifyContent:"space-evenly",gap:30}}>
    {/* c1 */}
     <View style={styles.c1}>
        <Text style={styles.h1}>Savings</Text>
        <Text style={styles.h3}>get comparision between the last month and this month usage,suggestion 
            for saving electricity </Text>
     </View>

     {/* c2 */}
     <View style={styles.c2}>
        <View style={styles.c2_1}>
            <Image style={{height:"100%",width:"100%",borderRadius:100}}
            source={img}/>
        </View>
        <View style={styles.c2_2}>
            <Text style={styles.h2}>Bill status</Text>
            <Text style={styles.h3}>{msg}</Text>
        </View>
        <View style={styles.c2_3}>
            <Text style={[styles.h3,{fontWeight:'bold'}]}>total savings</Text>
            <Text style={styles.h3}>(this month)</Text>
            <Text style={[styles.h3,{color}]}>{(final_last_month_bill - final_current_month_bill).toFixed(2)}</Text>
        </View>
    </View>


        {/* c3 */}
        <View style={styles.c3}>
            <Text style={styles.h1}>this month v/s last month</Text>
        <View style={styles.c3_1}> 
          <Text style={styles.h3 }>this month</Text>
          <Text style={[styles.h2,{color}]}>₹ {final_current_month_bill.toFixed(2)}</Text>
          <Text style={styles.h3}>total bill</Text>  
        </View>  
        <View style={styles.c3_2}>
            <Text style={styles.h3}>last month</Text>
            <Text style={[styles.h2,{color:color2}]}>₹ {final_last_month_bill.toFixed(2)}</Text>
            <Text style={styles.h3}>total bill</Text>
            </View> 

        </View>
        
        {/* c4 */}
        <View style={styles.c4}>
            <Text style={styles.h1}>( solar Bill )</Text>
            <Text  style={styles.h2}>₹ {solarbill.toFixed(2)}</Text>
            <Text style={styles.h3}>your bill would be<Text style={styles.h2}> ₹ {(final_current_month_bill - solarbill).toFixed(2)}</Text> less if you had solar panels</Text>
            <Text onPress={handlesolardetails} style={[styles.h3,{color:'blue',textDecorationLine:'underline'}]}>learn more about solar panels</Text>
        </View>

        {/* c5 */}
        <View style={styles.c5}>
            <Text style={styles.h1}>how to save more?</Text>
        <ScrollView style={{width:"100%",minHeight:250,backgroundColor:"white",padding:20}} 
        contentContainerStyle={{justifyContent:"space-evenly",alignItems:"center",gap:20}} 
        horizontal>
        <View style={styles.c5_1}>
        <Text style={styles.h2}>use LED lights</Text>
        <Text style={styles.h3}>save up to ₹30</Text>
        <Text style={styles.h3}>per month</Text>
        </View>  
        <View style={styles.c5_1}>
        <Text style={styles.h2}>use fans less</Text>
        <Text style={styles.h3}>save up to ₹25</Text>
        <Text style={styles.h3}>per month</Text>   
        </View>  
        <View style={styles.c5_1}>
        <Text style={styles.h2}>unplug devices</Text>
        <Text style={styles.h3}>save up to ₹20</Text>
        <Text style={styles.h3}>per month</Text>  
        </View>  
        <View style={styles.c5_1}>
        <Text style={styles.h2}>solar energy</Text>
        <Text style={styles.h3}>save up to ₹250</Text>
        <Text style={styles.h3}>per month</Text>  
        </View>  
        <View style={styles.c5_10}>
        <Text style={styles.h2}>unplug mobile chargers</Text>
        <Text style={styles.h3}>save up to ₹30</Text>
        <Text style={styles.h3}>per month</Text>   
        </View>  
        </ScrollView>

        </View>

    </ScrollView>

    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
    c1:{
        minHeight:120,
        width:"90%",
        alignItems:"center",
        justifyContent:"space-evenly",
        backgroundColor:"white",
        padding:10,
        borderWidth:1,
        borderRadius:10
    },
    h1:{
        fontSize:25,
        color:'green',
        fontWeight:"bold",
        textTransform:"capitalize"
    
    },
    h3:{
        fontSize:14,
        textAlign:'center',
        textTransform:"capitalize",
        
    },
    c2:{
        minHeight:200,
        width:"90%",
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-evenly",
        borderRadius:10,
        borderWidth:1,
        padding:10,
        backgroundColor:"white"
    },
    c2_1:{
        height:50,
        width:50,
        borderRadius:100,
        backgroundColor:"white"
    },
    c2_2:{
        minHeight:150,
        width:"40%",
        borderRadius:10,
        backgroundColor:"white",
        padding:20,
        alignItems:"center",
        justifyContent:"space-evenly"

    },
    h2:{
        fontSize:20,
        fontWeight:"bold",
        textTransform:"capitalize"
    },
    c2_3:{
        minHeight:150,
        width:"40%",
        borderRadius:10,
        backgroundColor:"white",
        padding:20,
        alignItems:"center",
        justifyContent:"space-evenly"

    },
    c3:{
        minHeight:350,
        width:"90%",
        alignItems:"center",
        flexDirection:"column",
        justifyContent:"space-evenly",
        borderRadius:10,
        borderWidth:1,
        padding:10,
        backgroundColor:"white"
    },
    c3_1:{
        minHeight:120,
        width:"70%",
        borderRadius:10,
        backgroundColor:"rgba(0,0,0,0.1)",
        padding:10,
        justifyContent:"space-evenly",
        alignItems:"center"
        
    },
    c3_2:{
        minHeight:120 ,
        width:"70%",
        borderRadius:10,
        backgroundColor:"rgba(0,0,0,0.1)",
        padding:10,
        justifyContent:"space-evenly",
        alignItems:"center"
    },
    c4:{
        minHeight:250,
        width:"90%",
        borderRadius:10,
        justifyContent:"space-evenly",
        alignItems:"center",
        padding:20,
        borderWidth:1,
        backgroundColor:'white',
    },

    c5:{
        minHeight:400,
        width:"90%",
        borderRadius:10,
        justifyContent:"space-evenly",
        alignItems:"center",
        padding:20,
        borderWidth:1,
          backgroundColor:"white",
    },
    c5_1:{
        minHeight:200,
        width:180,
          backgroundColor:"rgba(0,0,0,0.1)",
        alignItems:"center",
        justifyContent:"space-evenly",
        padding:10,
        borderRadius:10
    },
       c5_10:{
        minHeight:200,
        width:180,
        backgroundColor:"rgba(0,0,0,0.1)",
        alignItems:"center",
        justifyContent:"space-evenly",
        padding:10,
        marginRight:80,
        borderRadius:10
    }


})