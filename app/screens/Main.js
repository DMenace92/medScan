import React from "react";
import { StyleSheet, TextInput, Text, View,Button } from 'react-native';


const Main = ()=>{
    return(
        <View style={styles.container}>
            <TextInput 
             style={styles.input}
            //  onChangeText={onChangeText}
            //  value={text}
            ></TextInput>
            <Button  title="Scanner"></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    input:{
       
            height: 40,
            width:200,
            margin: 15,
            borderWidth: 1,
            padding: 10,
    }
})
export default Main