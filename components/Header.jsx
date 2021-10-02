import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/FontAwesome';

export default function Header({img, navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Icon
          name="menu"
          size={30}
          color="white"
          style={{
            marginLeft: 10,
          }}
        />
      </TouchableOpacity>
      <Image
        source={img}
        style={{
          width: 80,
          height: 40,
        }}
      />
      <TouchableOpacity onPress={() => alert('Mi carrito')}>
        <Icon1
          name="shopping-basket"
          size={25}
          color="white"
          style={{marginRight: 15}}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00AA9D',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
