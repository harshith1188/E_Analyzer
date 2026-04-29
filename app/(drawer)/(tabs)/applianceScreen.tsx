import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
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

  // 🔹 State for additional appliances
  const [extraAppliances, setExtraAppliances] = useState([]);
  const [power,setpower]=useState(334);

useFocusEffect(
  useCallback(() => {
    const loadData = async () => {
      const data = await AsyncStorage.getItem("appliances");

      if (data) {
        let parsedData = JSON.parse(data);
        setExtraAppliances(parsedData);

        // ✅ calculate total extra power
        const totalExtraPower = parsedData.reduce((sum, item) => {
          return sum + item.power;
        }, 0);
        setpower(totalExtraPower);
        await  AsyncStorage.setItem('totalwatts',totalExtraPower);
      } else {
        setExtraAppliances([]);
        setpower(0);
      }
    };

    loadData();
  }, [])
);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: 40,
        }}
        style={{ flex: 1 }}
      >

        {/* c1 */}
        <View style={styles.c1}>
          <Text style={styles.h1}>Appliances</Text>
          <Text style={styles.h3}>
            Manage your appliances and track energy usage
          </Text>
        </View>

        {/* c2 */}
        <View style={styles.c2}>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{
              justifyContent: "space-evenly",
              alignItems: "center",
              gap: 30,
            }}
            style={{ padding: 20 }}
          >
            <View style={styles.c2_1}>
              <Text style={styles.h2}>
                <MaterialIcons
                  name="electrical-services"
                  size={39}
                  color={"green"}
                />{" "}
                Total Appliances
              </Text>
              <Text style={styles.h1}>
                {4 + extraAppliances.length}
              </Text>
            </View>

            <View style={styles.c2_2}>
              <Text style={styles.h2}>
                <MaterialIcons name="bolt" size={39} color={"green"} /> Total Power
              </Text>
              <Text style={styles.h1}>
                {/* you can calculate later */}
                {9+75+100+150+power}
              </Text>
            </View>
          </ScrollView>
        </View>

        <Text style={styles.h1}>Your Appliances</Text>

        {/* c3 (FIXED - unchanged) */}
        <View style={styles.c3}>
          <Text style={styles.h2}>Basic Appliances</Text>

          {/* Bulb */}
          <TouchableOpacity style={styles.dives}>
            <View style={styles.imgBox}>
              <Image source={require("../../../assets/images/bulb.png")} style={styles.img} />
            </View>
            <View style={styles.mid}>
              <Text style={styles.h2}>LED Bulb</Text>
              <Text style={styles.h3}>usage: 5 h/day</Text>
            </View>
            <View style={styles.right}>
              <Text style={styles.power}>9 W</Text>
            </View>
          </TouchableOpacity>

          {/* Fan */}
          <TouchableOpacity style={styles.dives}>
            <View style={styles.imgBox}>
              <Image source={require("../../../assets/images/fan.png")} style={styles.img} />
            </View>
            <View style={styles.mid}>
              <Text style={styles.h2}>Ceiling Fan</Text>
              <Text style={styles.h3}>usage: 10 h/day</Text>
            </View>
            <View style={styles.right}>
              <Text style={styles.power}>75 W</Text>
            </View>
          </TouchableOpacity>

          {/* TV */}
          <TouchableOpacity style={styles.dives}>
            <View style={styles.imgBox}>
              <Image source={require("../../../assets/images/tv.png")} style={styles.img} />
            </View>
            <View style={styles.mid}>
              <Text style={styles.h2}>LED TV</Text>
              <Text style={styles.h3}>usage: 4 h/day</Text>
            </View>
            <View style={styles.right}>
              <Text style={styles.power}>100 W</Text>
            </View>
          </TouchableOpacity>

          {/* Fridge */}
          <TouchableOpacity style={styles.dives}>
            <View style={styles.imgBox}>
              <Image source={require("../../../assets/images/fridge.png")} style={styles.img} />
            </View>
            <View style={styles.mid}>
              <Text style={styles.h2}>Refrigerator</Text>
              <Text style={styles.h3}>usage: 24 h/day</Text>
            </View>
            <View style={styles.right}>
              <Text style={styles.power}>150 W</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* c4 (NEW - Additional Appliances) */}
        <View style={styles.c4}>
          <Text style={styles.h2}>Additional Appliances</Text>

          <FlatList
            data={extraAppliances}
            scrollEnabled={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.dives}>
                <View style={styles.mid}>
                  <Text style={styles.h2}>{item.name}</Text>
                  <Text style={styles.h3}>
                    usage: {item.hours} h/day
                  </Text>
                </View>
                <View style={styles.right}>
                  <Text style={styles.power}>
                    {item.power} W
                  </Text>
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

        {/* Add Button */}
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            router.navigate("/addAppliance");
          }}
        >
          <Text style={{ fontSize: 22, color: "white" }}>
            Add Appliance
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  c1: {
    minHeight: 120,
    width: "90%",
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 10,
  },
  h1: {
    fontSize: 28,
    fontWeight: "bold",
    color: "green",
  },
  h2: {
    fontSize: 20,
  },
  h3: {
    fontSize: 15,
  },
  c2: {
    minHeight: 200,
    width: "90%",
  },
  c2_1: {
    minHeight: 180,
    width: 290,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 10,
  },
  c2_2: {
    minHeight: 180,
    width: 290,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 10,
  },
  c3: {
    width: "90%",
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    gap: 10,
  },
  c4: {
    width: "90%",
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    gap: 30,
  },
  dives: {
    minHeight: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 10,
    padding: 10,
    marginTop:20
  },
  imgBox: {
    width: "20%",
    alignItems: "center",
  },
  img: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  mid: {
    width: "50%",
    alignItems: "center",
  },
  right: {
    width: "30%",
    alignItems: "center",
  },
  power: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
  },
  btn: {
    minHeight: 70,
    width: "90%",
    backgroundColor: "green",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});