import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreens from './screens/HomeScreen';
import { WebView } from 'react-native-webview';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './Profile1'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DailyCallScreen({ navigation }: {navigation: any}) {
  return (
     <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
      }}>
          <WebView
          source={{ uri: 'https://ios.daily.co/team-call' }}
          useWebKit={true}
          originWhitelist={['*']}
          allowsInlineMediaPlayback={true}
          style={{
              height: 600,
              width: 400,
          }}/>
      </View>
  );
}


function HomeScreen({ navigation }: {navigation: any}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello</Text>
      <Button
        title="Create a new call"
        onPress={() => navigation.navigate('DailyCallView')}
      />
    </View>
  );
}


function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Calls" component={HomeScreen} />
      <Drawer.Screen name="Sign out" component={HomeScreens} />
    </Drawer.Navigator>
  );
}


export default function App() {

  let [quote, setQuote] = React.useState('')
  let [source, setSource] = React.useState('')

  const fetchApiCall = () => {
    fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
        "x-rapidapi-key": "yourapikey"
      }
    })
      .then(response => response.json())
      .then(response => {
        setQuote(response.content);
        setSource(response.originator.name)
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={MyDrawer} /> 
        <Stack.Screen name="DailyCallView" component={DailyCallScreen} />
        <Stack.Screen name="Profile" component={Profile} />
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
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
