import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import ProductCard from './ProductCard';
import {getProductByCategory} from '../services/get';

export default function Products({menu}) {
  const product = getProductByCategory(menu);
  return (
    <ScrollView vertical>
      {product.map((i, key) => (
        <ProductCard
          desc={i.descriProducto}
          nombre={i.nombreProducto}
          precio={i.precioProducto}
          imagen={i.imagenProducto}
          key={key}
        />
      ))}
      <View style={{height: 240}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
