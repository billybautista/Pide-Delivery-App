import React from 'react';
import {View, ScrollView} from 'react-native';
import ProductCard from './ProductCard';
import {getProductsByCategory} from '../services/get';
import PropTypes from 'prop-types';

/**
 * Este componente va mostrar los productos dependiendo del Tab seleccionado
 */
export default function Products({menu}) {
  const product = getProductsByCategory(menu);
  return (
    <ScrollView vertical>
      {product.map((i, key) => (
        <ProductCard
          description={i.descriProducto}
          name={i.nombreProducto}
          price={i.precioProducto}
          image={i.imagenProducto}
          key={key}
        />
      ))}
      <View style={{height: 230}} />
    </ScrollView>
  );
}

Products.prototypes = {
  menu: PropTypes.array.isRequired,
};
