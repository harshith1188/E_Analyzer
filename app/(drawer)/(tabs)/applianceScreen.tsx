import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  Alert,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";

export default function Appliances() {

  const [extraAppliances, setExtraAppliances] = useState([]);
  const [power,setpower]=useState(334);
  const[units,setunits]=useState(0);

  useFocusEffect(
    useCallback(() => {
      const loadData = async () => {
        const data = await AsyncStorage.getItem("appliances");

        if (data) {
          let parsedData = JSON.parse(data);
          setExtraAppliances(parsedData);

          const totalExtraPower = parsedData.reduce((sum, item) => {
            return sum + item.power;
          }, 0);

          setpower(totalExtraPower);
          await AsyncStorage.setItem('totalwatts', totalExtraPower.toString());

          const totalExtraUnits = parsedData.reduce((sum, item) => {
            return sum + (item.power * item.hours * 30) / 1000;
          }, 0);

          const fixedUnits =
            (9*5*30)/1000 +
            (75*10*30)/1000 +
            (100*4*30)/1000 +
            (150*24*30)/1000;

          const totalUnits = fixedUnits + totalExtraUnits;
          setunits(totalUnits);

          await AsyncStorage.setItem("totalUnits", totalUnits.toString());

        } else {
          setExtraAppliances([]);
          setpower(0);
        }
      };

      loadData();
    }, [])
  );

  // ✅ DELETE SINGLE APPLIANCE
  const handleDeleteOne = (index) => {
    Alert.alert("Delete", "Delete this appliance?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          const updated = extraAppliances.filter((_, i) => i !== index);
          setExtraAppliances(updated);
          await AsyncStorage.setItem("appliances", JSON.stringify(updated));
        },
      },
    ]);
  };

  // ✅ DELETE ALL
  const handledelete = () => {
    Alert.alert("Delete",
      "do you want to delete all the extra appliances ?",
      [
        { text:'cancel', style:"cancel" },
        {
          text:'delete',
          style:'destructive',
          onPress: handleconfirmdelete
        }
      ]
    )
  }

  const handleconfirmdelete = async () => {
    await AsyncStorage.removeItem('appliances');
    setExtraAppliances([]);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: 40,
        }}
      >

        {/* HEADER */}
        <View style={styles.c1}>
          <Text style={styles.h1}>Appliances</Text>
          <Text style={styles.h3}>
            Manage your appliances and track energy usage
          </Text>
        </View>

        {/* STATS */}
        <View style={styles.c2}>
          <ScrollView horizontal contentContainerStyle={{ gap: 30 }}>

            <View style={styles.c2_1}>
              <Text style={styles.h2}>
                <MaterialIcons name="electrical-services" size={30} color="green" />
                Total Appliances
              </Text>
              <Text style={styles.h1}>
                {4 + extraAppliances.length}
              </Text>
            </View>

            <View style={styles.c2_2}>
              <Text style={styles.h2}>
                <MaterialIcons name="bolt" size={30} color="green" />
                Total Power
              </Text>
              <Text style={styles.h1}>
                {9+75+100+150+power} Watts
              </Text>
            </View>

            <View style={styles.c2_3}>
              <Text style={styles.h2}>
                <MaterialIcons name="bolt" size={30} color="green" />
                Total Units
              </Text>
              <Text style={styles.h1}>
                {units.toFixed(2)} kWh
              </Text>
            </View>

          </ScrollView>
        </View>

        {/* BASIC APPLIANCES (UNCHANGED) */}
        <View style={styles.c3}>
          <Text style={styles.h2}>Basic Appliances</Text>

          {/* Bulb */}
          <View style={styles.dives}>
            <Image source={require("../../../assets/images/bulb.png")} style={styles.img} />
            <View style={styles.mid}>
              <Text style={styles.h2}>LED Bulb</Text>
              <Text style={styles.h3}>usage: 5 h/day</Text>
            </View>
            <Text style={styles.power}>9 W</Text>
          </View>

          {/* Fan */}
          <View style={styles.dives}>
            <Image source={require("../../../assets/images/fan.png")} style={styles.img} />
            <View style={styles.mid}>
              <Text style={styles.h2}>Ceiling Fan</Text>
              <Text style={styles.h3}>usage: 10 h/day</Text>
            </View>
            <Text style={styles.power}>75 W</Text>
          </View>

          {/* TV */}
          <View style={styles.dives}>
            <Image source={require("../../../assets/images/tv.png")} style={styles.img} />
            <View style={styles.mid}>
              <Text style={styles.h2}>LED TV</Text>
              <Text style={styles.h3}>usage: 4 h/day</Text>
            </View>
            <Text style={styles.power}>100 W</Text>
          </View>

          {/* Fridge */}
          <View style={styles.dives}>
            <Image source={require("../../../assets/images/fridge.png")} style={styles.img} />
            <View style={styles.mid}>
              <Text style={styles.h2}>Refrigerator</Text>
              <Text style={styles.h3}>usage: 24 h/day</Text>
            </View>
            <Text style={styles.power}>150 W</Text>
          </View>
        </View>

        {/* EXTRA APPLIANCES */}
        <View style={styles.c4}>
          <Text style={styles.h2}>Additional Appliances</Text>

          <FlatList
            data={extraAppliances}
            scrollEnabled={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={styles.dives}>
                
                <View style={styles.mid}>
                  <Text style={styles.h2}>{item.name}</Text>
                  <Text style={styles.h3}>
                    usage: {item.hours} h/day
                  </Text>
                </View>

                <View style={styles.right}>
                  <Text style={styles.power}>{item.power} W</Text>

                  {/* DELETE BUTTON */}
                  <TouchableOpacity
                    onPress={() => handleDeleteOne(index)}
                    style={styles.deleteBtn}
                  >
                    <MaterialIcons name="delete" size={22} color="white" />
                  </TouchableOpacity>
                </View>

              </View>
            )}
            ListEmptyComponent={
              <Text style={{ textAlign: "center", marginTop: 10 }}>
                No additional appliances
              </Text>
            }
          />
        </View>

        {/* ADD BUTTON */}
        <TouchableOpacity style={styles.btn} onPress={() => router.navigate("/addAppliance")}>
          <Text style={{ fontSize: 22, color: "white" }}>
            Add Appliance
          </Text>
        </TouchableOpacity>

        {/* DELETE ALL */}
        <TouchableOpacity style={[styles.btn,{backgroundColor:'red'}]} onPress={handledelete}>
          <Text style={{ fontSize: 22, color: "white" }}>
            Delete all Appliance
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  c1:{minHeight:120,width:"90%",padding:20,backgroundColor:"rgba(0,0,0,0.1)",borderRadius:10},
  h1:{fontSize:28,fontWeight:"bold",color:"green"},
  h2:{fontSize:20},
  h3:{fontSize:15},

  c2:{minHeight:200,width:"90%"},
  c2_1:{minHeight:180,width:290,alignItems:"center",justifyContent:"space-evenly",backgroundColor:"rgba(0,0,0,0.1)",borderRadius:10},
  c2_2:{minHeight:180,width:290,alignItems:"center",justifyContent:"space-evenly",backgroundColor:"rgba(0,0,0,0.1)",borderRadius:10},
  c2_3:{minHeight:180,width:290,alignItems:"center",justifyContent:"space-evenly",backgroundColor:"rgba(0,0,0,0.1)",borderRadius:10},

  c3:{width:"90%",borderRadius:10,padding:10,borderWidth:1,gap:10},
  c4:{width:"90%",borderRadius:10,padding:10,borderWidth:1,gap:20},

  dives:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",backgroundColor:"rgba(0,0,0,0.1)",borderRadius:10,padding:10,marginTop:10},
  img:{width:60,height:60,resizeMode:"contain"},
  mid:{width:"50%",alignItems:"center"},
  right:{width:"30%",alignItems:"center"},
  power:{fontSize:18,fontWeight:"bold",color:"green"},

  deleteBtn:{
    marginTop:5,
    backgroundColor:"red",
    padding:6,
    borderRadius:6
  },

  btn:{minHeight:70,width:"90%",backgroundColor:"green",borderRadius:10,alignItems:"center",justifyContent:"center"}
});