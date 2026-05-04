import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function EditProfileScreen() {

    const[name,setname]=useState('');
    const[email,setemail]=useState('');


    useFocusEffect(
        useCallback(()=>{
            const load=async()=>{    
                let storedname=await AsyncStorage.getItem('name');                
                let storedemail=await AsyncStorage.getItem('email');
                setemail(storedemail);
                setname(storedname);
            }
            load();
        },[])
    )
    
    const handleSaveChanges = async () => {
        if(!name || !email){
            Alert.alert("Error","please fill all the details");
        }
        else{
            Alert.alert("Confirm",
                "Do you want to save the changes"
            ,[
                {
                    text:"Confirm",
                    style:"default",
                    onPress:handlesaveinfo
                },
                {
                    text:'cancel',
                    style:'cancel'
                }
            ])
        }
    }


    const handlesaveinfo=async()=>{
        await AsyncStorage.setItem('name',name);
        await AsyncStorage.setItem('email',email);
        router.back();
    }

    const handleCancel = () => {
        router.back();
    }

    return(
        <SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <View style={styles.c1}>
                <Text style={styles.h2}>Edit Profile</Text>
                <Text style={styles.h3}>This is where you can edit your profile information.</Text>
            
                <TextInput 
                    placeholder="Edit your username"
                    style={styles.input}
                    value={name}
                    onChangeText={setname}
                />
                <TextInput 
                    placeholder="Edit your email"
                    style={styles.input}
                    value={email}
                    onChangeText={setemail}
                />
                <TouchableOpacity style={styles.btn} onPress={handleSaveChanges}>
                    <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>Save Changes</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn1} onPress={handleCancel}>
                    <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>Cancel</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    c1: {
        width: "90%",
        minHeight: 500,
        alignItems: "center",
        borderWidth: 0.5,
        padding: 20,
        borderRadius: 10,
        justifyContent: "space-evenly",
    },
    h2:{
        fontSize:22,
        textTransform:'capitalize',
        fontWeight:'bold',
        color:"green"
    },
    h3:{
        fontSize:14
    },
    input:{
        width:"100%",
        fontSize:20,
        height:60,
        textAlign:'center',
        borderWidth:0.8,
        borderColor:'rgba(0,0,0,0.3)',
        borderRadius:8,
        padding:10
    },
    btn:{
        minHeight:70,
        width:"50%",
        backgroundColor:"green",
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center"
    },
    btn1:{
        minHeight:70,
        width:"50%",
        backgroundColor:"red",
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center"
    }

})