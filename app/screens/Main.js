import React,{useState} from "react";
import { StyleSheet, TextInput, Text, View,Button,Modal, SafeAreaView } from 'react-native';
import Scanner from './Scanner'


const Main = ()=>{
    const [visible, setVisible] = useState(false);
    const show =() => setVisible(true);
    const hide = ()=> setVisible(false);
    return(
        <View style={styles.container}>
            
                
            <SafeAreaView style={styles.smallView}>
            <Modal style={styles.smallModal} visible={visible} animationType="slide" onRequestClose={hide}>
                
                <Scanner/>
                <Button onPress={hide} title="close scanner"></Button>
                </Modal>
            </SafeAreaView>
            
            {/* <TextInput 
             style={styles.input}
          
            ></TextInput> */}
            <Button onPress={show} title="Scanner"></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    smallView:{
        borderWidth:1,
        height:300,
        width:400,
    },
    smallModal:{
        height:100,
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