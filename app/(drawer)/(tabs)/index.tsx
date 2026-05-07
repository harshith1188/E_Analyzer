import { calculateFinalBill } from "@/components/utils/calculate_bill";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default  function HomeScreen(){

  const[units,setunits]=useState(0);
  const[finalbill,setfinalbill]=useState(0);
  const[l_finalbill,setl_finalbill]=useState(0);
  const[msg,setmsg] = useState(''); 
  const[color,setcolor]=useState('black');
  const[color2,setcolor2]=useState('black');

const [highAppliance, setHighAppliance] = useState(null);
  useFocusEffect(
    useCallback(()=>{
      const load=async()=>{
        //getting the last month data to calculate the bill for the current month
        let data=await AsyncStorage.getItem('lastMonthData'); 
        if(data){
          let parseddata=JSON.parse(data);
          let fixed_charges=parseddata.fixedCharges;
          let subsidy_units=parseddata.subsidyUnits;
          let extra_charges=parseddata.extraChargePerUnit;
          let pp=parseddata.pricePerUnit;
       
          //getting the total units consumed in the current month
          let totalunits=await AsyncStorage.getItem('totalUnits');
       
        //calculating the final bill for the current month
          const result = calculateFinalBill({
          totalUnits: Number(totalunits),
          subsidyUnits: Number(subsidy_units),
          pricePerUnit: Number(pp),
          extraChargePerUnit: Number(extra_charges),
          fixedCharges: Number(fixed_charges),
            });
            await AsyncStorage.setItem('currentMonthData',JSON.stringify({result}));
            setfinalbill(result.finalBill);
            setl_finalbill(parseddata.finalbill);
            setunits(totalunits);

            if(result.finalBill < parseddata.finalbill){
              setmsg('You saved money this month ! '+(parseddata.finalbill - result.finalBill).toFixed(2)+ ' ₹');
              setcolor('green');
              setcolor2('red');
            }
            else if(result.finalBill > parseddata.finalbill){
              setmsg('Your bill increased this month by ₹'+(result.finalBill - parseddata.finalbill).toFixed(2));
              setcolor('red');
              setcolor2('green');
            }
         

      // 🔹 get appliances
        let appData = await AsyncStorage.getItem("appliances");

      if (appData) {
      let appliances = JSON.parse(appData);

        if (appliances.length > 0) {

         // 🔥 BEST LOGIC → based on usage (power × hours)
      let maxItem = appliances.reduce((max, item) => {
          let currentUsage = item.power * item.hours;
          let maxUsage = max.power * max.hours;
          return currentUsage > maxUsage ? item : max;
    });

    setHighAppliance(maxItem);
      }
  }      
}
}
      load();
        
    },[])
  )


  return(
  <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
  <ScrollView contentContainerStyle={{alignItems:'center',justifyContent:'center',gap:30}} style={{flex:1}}>
    
    {/* c1*/}
    <View  style={styles.c1}>
    <Text style={styles.h2}>Hello user 🖐️</Text>
    <Text style={styles.h3}>Here's your electricity overview</Text>
    </View>

    {/* c2 */}
    <View style={styles.c2}>
      
 
    <View style={styles.c2_2}>
        <Text style={styles.h2}>Estimated Bill 🧾</Text>
        <Text style={styles.h2}>₹ {finalbill.toFixed(2)}</Text>
          <View style={{padding:10,borderRadius:10}}>
            <Text style={[styles.h3,{color}]}>{msg}</Text>
          </View>
    </View>

    </View>

    {/* c3 */}
    <View style={styles.c3}>
      
      <View style={styles.c3_1}>
        <View style={{backgroundColor:'blue',height:80,width:80,borderRadius:100,alignItems:'center',justifyContent:'center'}}><MaterialIcons name="electric-bolt" size={38} color={"white"}/></View>
       <Text style={styles.h2}>Total units Consumed</Text>
       <Text style={[styles.h2,{color:'blue'}]}>{units} kWh</Text>  
      </View>

    </View>

    {/* c4 */}
    <View style={styles.c4}>

    <Text style={styles.h2}>Bill Comparision</Text>
    
    <View style={styles.c4_1}>
      <Text style={{fontSize:20,fontWeight:'bold'}}>This Month</Text>
      <Text style={[styles.h2,{color}]}>₹{finalbill.toFixed(2)}</Text>
    </View>

    <View style={styles.c4_2}>
      <Text style={{fontSize:20,fontWeight:'bold'}}>Last Month</Text>
      <Text style={[styles.h2,{color:color2}]}>₹{l_finalbill}</Text>
      </View>

      <View style={{padding:10,}}><Text style={{fontSize:14,fontWeight:'bold',color:color}}>{msg}</Text></View>
    </View>
        
  <View style={styles.c5}>
  
  <Text style={styles.h2}>Energy Insights ⚡</Text>

  {/* 🔹 Highest Appliance */}
  <View style={styles.c5_1}>
    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
      Highest Consumption Appliance
    </Text>
  </View>

  {/* 🔥 SHOW IN c5_2 */}
  <View style={styles.c5_2}>

    {highAppliance ? (
      <>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {highAppliance.name}
          </Text>

          <Text style={{ fontSize: 16 }}>
            Usage: {highAppliance.hours} h/day
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 18, color: "red", fontWeight: "bold" }}>
            {highAppliance.power} W
          </Text>

          <Text style={{ fontSize: 14 }}>
            {(highAppliance.power * highAppliance.hours * 30 / 1000).toFixed(2)} kWh/month
          </Text>
        </View>
      </>
    ) : (
      <Text>No appliance data</Text>
    )}
  </View>

</View>  
    {/* c6 */}
    <View style={styles.c6}>
      <View style={styles.c6_1}>
            <MaterialIcons name="sunny" size={28} color={"white"}/>
      </View>

      <View style={styles.c6_2}>
        <Text style={[styles.h2,{color:'green'}]}>Tip of the Day</Text>
        <Text style={styles.h3}>use solar energy, to save money</Text>
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
    fontWeight:'bold',
    color:"green"
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
    height:50,
    width:50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'green',
    borderRadius:100
  },
  c2_2:{
    minHeight:150,
    padding:10,
    width:"100%",
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
    width:'90%',
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
    backgroundColor:"rgba(206, 196, 196, 0.3)",
    borderWidth:0.5,
    borderColor:'rgba(0,0,0,0.3)',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'space-evenly'
  },
 c4_2:{
    minHeight:150,
    width:"100%",
    backgroundColor:"rgba(206, 196, 196, 0.3)",
    borderRadius:10,
    borderWidth:0.5,
    borderColor:'rgba(0,0,0,0.3)',
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
    alignItems:'center',
    borderColor:'rgba(0,0,0,0.3)',
    borderWidth:0.5,
    borderRadius:10,
    justifyContent:'space-between'
  },
  c5_2:{
    minHeight:150,
    width:"100%",
    padding:20,
    flexDirection:'row',
    alignItems:'center',
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
    justifyContent:'space-evenly',
  }


})