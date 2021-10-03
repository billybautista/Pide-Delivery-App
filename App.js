import React, {useState} from 'react';
import {View, Text, Dimensions, StatusBar, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import {ScrollView} from 'react-native-gesture-handler';
import Tabs from './components/Tabs';
import Products from './components/Products';
import {getProductByCategory, getBanner} from './services/get';

const {width, height} = Dimensions.get('window');
const img = require('./assets/pide-logo.png');

function Home({navigation}) {
  const [menu, setMenu] = useState();

  return (
    <View>
      <Header img={img} navigation={navigation} />
      <Image source={{uri: getBanner()}} style={{height: 120}} />

      <Tabs setMenu={setMenu} menu={menu} />
      <Products menu={menu} />
    </View>
  );
}

function Favorite() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function Shipping() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifications Screen</Text>
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
