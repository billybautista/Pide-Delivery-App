import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ProductCard from './ProductCard';
import {getProductByCategory} from '../services/get';

export default function Products({menu}) {
  const product = getProductByCategory(menu);
  return (
    <View>
      {product.map((i, key) => (
        <ProductCard
          desc={i.descriProducto}
          nombre={i.nombreProducto}
          precio={i.precioProducto}
          imagen={i.imagenProducto}
          key={key}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
