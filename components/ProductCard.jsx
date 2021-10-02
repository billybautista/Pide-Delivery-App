import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Heart from 'react-native-vector-icons/AntDesign';
import Cart from 'react-native-vector-icons/AntDesign';

export default function ProductCard({desc, nombre, precio, imagen}) {
  return (
    <View
      style={{
        marginHorizontal: 20,
        backgroundColor: 'white',
        height: 120,
        borderRadius: 10,
        marginVertical: 10,
      }}>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Image
          source={{uri: imagen}}
          style={{width: 120, height: 120, borderRadius: 10}}
        />
        <View style={{width: 180, marginLeft: 15}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 5}}>
            {nombre}
          </Text>
          <Text style={{fontSize: 14}}>{desc}</Text>
          <View
            style={{
              backgroundColor: '#A763AF',
              width: 100,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              marginTop: 5,
            }}>
            <Text
              style={{
                marginLeft: 5,
                fontWeight: 'bold',
                fontSize: 18,
                color: 'white',
              }}>
              ${precio}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginLeft: 15,
            justifyContent: 'space-between',
            marginVertical: 10,
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => alert('Favorito')}>
            <Heart name="hearto" size={25} color="#131313" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Se agrego al carrito')}>
            <Cart name="shoppingcart" size={30} color="#00AA9D" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
