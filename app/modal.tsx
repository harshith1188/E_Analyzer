import { useState } from "react";
import { Pressable, SafeAreaView, TextInput, View,Text,StyleSheet} from "react-native";

export default function ()
{
  const [weight,setweight]=useState("");
  const [height,setheight]=useState("");
  const [calculate,setcalculate]=useState(null);
  const [category,setcategory]=useState("");

  const cal=()=>{
    let weight1=parseFloat(weight);
    let height1=parseFloat(height);
    

    if(!weight1 || !height1){
      alert("please enter the field")
    }
     let heightInMeters=height1;
     let res=weight1/(heightInMeters*heightInMeters);
    
     setcalculate(res.toFixed(2));
     if(res<18){
      setcategory("under weight")
     }
     else if(res>=18 && res<25){
      setcategory("normal weight")
     }
     else if(res>=25 && res<50){
      setcategory("over weight")
     }
     else{
      setcategory("problem")
     }

  }

  return(    
    <SafeAreaView style={{flex:1,alignItems:"center",justifyContent:"center"}}>
    <View style={styles.container}>
      <Text style={{fontSize:30,color:"blue",textAlign:"center",fontStyle:"normal"}}>BMI CALCULATOR</Text>
    <TextInput style={styles.input}
    placeholder="Enter the weight in kg:"
    value={weight}
    onChangeText={setweight}
    keyboardType="numeric"/>
    
    <TextInput style={styles.input}
    placeholder="Enter the height in m:"
    value={height}
    onChangeText={setheight}
    keyboardType="numeric"/>
    
    <Pressable onPress={cal}>
      <Text style={{backgroundColor:"white",fontSize:23,alignItems:"center",borderRadius:4,borderWidth:2,
      width:"40%",height:40,backgroundColor:"green"}}>Calculate</Text>
      </Pressable>
    {calculate && (  
   <View style={{width:"50%",height:80,borderColor:"white",alignItems:"center",justifyContent:"center",borderWidth:2,borderRadius:4,backgroundColor:"white"}}>
    <Text style={styles.btn1}>BMI:{calculate}</Text>
    <Text style={styles.btn1}>Category:{category}</Text>
    </View>
    )}
    </View>
    </SafeAreaView>
)}

  const styles=StyleSheet.create({
     container:{
      width:"90%",
      height:400,
      backgroundColor:"pink",
      alignItems:"center",
      justifyContent:"space-evenly",
      borderRadius:5
     },

     input:{
      height:50,
      width:"60%",
      backgroundColor:"white",
      fontSize:18,
      borderWidth:2,
      borderColor:"black"
     },

     btn1:{
        fontSize:19,
        color:"blue"
        
     }

})




