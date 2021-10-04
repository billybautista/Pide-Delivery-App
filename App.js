import React, {useState} from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Header from './components/Header';
import Tabs from './components/Tabs';
import Products from './components/Products';
import {getBanner} from './services/get';

const logo = require('./assets/pide-logo.png');

function Home({navigation}) {
  const [menu, setMenu] = useState();

  return (
    <View>
      <Header img={logo} navigation={navigation} />
      <Image source={{uri: getBanner()}} style={{height: 120}} />
      <Tabs setMenu={setMenu} menu={menu} />
      <Products menu={menu} />
    </View>
  );
}

function Favorite() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Favorite Screen</Text>
    </View>
  );
}

function Shipping() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Shipping Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#008D83',
        drawerStyle: {
          width: 240,
        },
      }}>
      <Drawer.Screen name="Inicio" component={Home} />
      <Drawer.Screen name="Favoritos" component={Favorite} />
      <Drawer.Screen name="Mis pedidos" component={Shipping} />
    </Drawer.Navigator>
  );
}
const statusBarStyle = 'dark-content';
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={statusBarStyle} backgroundColor="#00AA9D" />
      <MyDrawer />
    </NavigationContainer>
  );
}
