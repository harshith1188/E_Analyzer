import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const [img, setImg] = useState(null);
  const[name,setname]=useState('User');
  const[email,setemail]=useState('user@example.com');

  // Load saved image
  useEffect(() => {
    const loadImage = async () => {
      const saved = await AsyncStorage.getItem("profile_image");
      if (saved) {
        setImg(saved)
    };
      let username=await AsyncStorage.getItem('name');
      let useremail=await AsyncStorage.getItem('email');
      setemail(useremail);
      setname(username);

    };

    loadImage();
  }, []);

  const handleedits = async () => {
     
    router.navigate('/editScreen');

  }

  const handle_image = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImg(uri);

      // Save image
      await AsyncStorage.setItem("profile_image", uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.c1}>
        <TouchableOpacity style={styles.image_picker} onPress={handle_image}>
          <Image
            source={{
              uri:
                img ||
                "https://cdn-icons-png.flaticon.com/512/149/149071.png",
            }}
            style={styles.image}
          />
        </TouchableOpacity>
      
      <Text style={{ marginTop: 20, fontSize: 20, color: "gray" }}>{name}</Text>
      <Text style={{ fontSize: 14, color: "gray" }}>{email}</Text>
    
       <TouchableOpacity style={{marginTop:20,backgroundColor:'red',padding:20,borderRadius:8,alignItems:'center',justifyContent:'center'}} onPress={handleedits}>
        <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}><MaterialIcons name="edit" size={28} color={"white"}/> Edit Profile</Text>
       </TouchableOpacity> 
    
    </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  c1: {
    width: "90%",
    minHeight:400,
    alignItems: "center",
    borderWidth:0.5,
    padding:20,
    borderRadius:10,
    justifyContent: "space-evenly",
  },

  image_picker: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth:7,
    borderColor:'green',
    overflow: "hidden", // IMPORTANT for circular image
    backgroundColor: "#ddd",
  },

  image: {
    width: "100%",
    height: "100%",
  },
});