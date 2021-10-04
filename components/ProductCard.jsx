import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Heart from 'react-native-vector-icons/AntDesign';
import Cart from 'react-native-vector-icons/AntDesign';
import PropTypes from 'prop-types';

/**
 * Este componente sirve para mostrar en un card, el nombre, descripción,
 * precio y la imagen de un producto
 */

const {width} = Dimensions.get('window');
export default function ProductCard({description, name, price, image}) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{uri: image}}
          style={{width: 120, height: 120, borderRadius: 10}}
        />
        <View style={styles.paragraph}>
          <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>
            {name}
          </Text>
          <Text style={{fontSize: 14, height: 50}}>{description}</Text>
          <View style={styles.priceBox}>
            <Text style={styles.priceText}>${price}</Text>
          </View>
        </View>
        <View style={styles.iconContainer}>
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

ProductCard.prototypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    backgroundColor: 'white',
    height: 120,
    borderRadius: 10,
    marginVertical: 10,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
  },
  paragraph: {
    width: 180,
    marginLeft: 15,
    marginVertical: 5,
  },
  priceBox: {
    backgroundColor: '#A763AF',
    width: 100,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: 5,
  },
  iconContainer: {
    marginLeft: width < 400 ? -5 : width - (width - 15),
    justifyContent: 'space-between',
    marginVertical: 10,
    alignItems: 'center',
  },
  priceText: {
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
});
