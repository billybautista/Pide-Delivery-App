import React, {useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  getIdCategories,
  getNameCategory,
  getIdbyCategory,
} from '../services/get';

export default function Tabs({setMenu, menu}) {
  const categoryList = getNameCategory(getIdCategories());

  useEffect(() => {
    setMenu(getIdbyCategory(categoryList[0]));
  }, []);

  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginVertical: 10,
          height: 30,
        }}>
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

const styles = StyleSheet.create({
  active: {
    backgroundColor: '#00AA9D',
    height: 4,
  },
});
