import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

/**
 * Este componente solo muestra el logo, los iconos y se le pasa por props navigation,
 * para que el onPress de los iconos tenga acceso al  DrawerScreen
 */

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

Header.propTypes = {
  img: PropTypes.any.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};

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
