import React, {useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  getIdCategories,
  getNameCategory,
  getIdbyCategory,
} from '../services/get';
import PropTypes from 'prop-types';

/**
 * Este componente sirve para mostrar las categorias asociadas al comercio en forma de Top tabs,
 * además recibe setMenu, para indicar que tab fue presionada
 */
export default function Tabs({setMenu, menu}) {
  const categoryList = getNameCategory(getIdCategories());

  useEffect(() => {
    setMenu(getIdbyCategory(categoryList[0]));
  }, []);

  return (
    <View>
      <View style={styles.container}>
        {categoryList.map((i, key) => (
          <TouchableOpacity
            key={key}
            onPress={() => setMenu(getIdbyCategory(i))}>
            <Text style={{fontSize: 18}}>{i}</Text>
            <View style={getIdbyCategory(i) == menu && styles.active} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

Tabs.propTypes = {
  menu: PropTypes.array.isRequired,
  setMenu: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
    height: 30,
  },
  active: {
    backgroundColor: '#00AA9D',
    height: 3,
  },
});
