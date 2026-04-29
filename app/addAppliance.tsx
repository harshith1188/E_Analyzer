import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddAppliance() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [power, setPower] = useState("");
  const [hours, setHours] = useState("");

  const handleAdd = async () => {
    if (!name || !power || !hours) {
      Alert.alert("Error", "Fill all fields");
      return;
    }

    const newItem = {
      name,
      power: parseFloat(power),
      hours: parseFloat(hours),
    };

    try {
      const existing = await AsyncStorage.getItem("appliances");
      const list = existing ? JSON.parse(existing) : [];

      list.push(newItem);

      await AsyncStorage.setItem("appliances", JSON.stringify(list));

      Alert.alert("Success", "Appliance added");
      router.back();
    } catch (err) {
      Alert.alert("Error", "Something went wrong");
    }
  };

  return (
    <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <View style={styles.container}>
      <Text style={styles.title}>Add Appliance</Text>

      <Text>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Iron, Heater"
        value={name}
        onChangeText={setName}
      />

      <Text>Power (Watts)</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. 1000"
        value={power}
        onChangeText={setPower}
        keyboardType="numeric"
      />

      <Text>Usage (hours/day)</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. 2"
        value={hours}
        onChangeText={setHours}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.btn} onPress={handleAdd}>
        <Text style={{ color: "white", fontSize: 18 }}>Add</Text>
      </TouchableOpacity>
    </View>

    <TouchableOpacity onPress={()=>{router.back()}} style={styles.cncl}>
        <Text style={{fontSize:22,color:'white',textTransform:'capitalize',fontWeight:'bold'}}>cancle</Text>
    </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"90%",
    gap:20,
    borderRadius:10,
    borderWidth:1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  btn: {
    backgroundColor: "green",
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
  },
  cncl:{
    minHeight:70,
    width:"50%",
    borderRadius:10,
    alignItems:'center',
    marginTop:50,
    justifyContent:'center',
    backgroundColor:'red'
  }
});