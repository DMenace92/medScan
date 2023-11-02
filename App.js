import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from './app/screens/Main'
import Scanner from './app/screens/Scanner'
// import scanner from './deviceTool/scanner'
const Stack = createNativeStackNavigator()
export default function App() {

  _handlePress=(e)=>{
    // e.preventDefault()
    console.log("hello")

  }
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="test window" component={Main}/>

      {/* <Stack.Screen name="test window1" component={Scanner}/> */}

    </Stack.Navigator>

   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
