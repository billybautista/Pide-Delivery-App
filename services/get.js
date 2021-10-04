import data from '../data/Test_Data.json';

/**
 * Trae el id de las categorias asociadas del comercio
 * @return {Array} retorna un array de IDs
 */
export function getIdCategoriesBusiness() {
  const products = data.Productos;
  const categories = [];
  for (const category in products) {
    categories.push(products[category].idCategoria);
  }
  const idsCategories = [...new Set(categories)];
  return idsCategories;
}

/**
 * Trae el nombre de las categorias que pasemos su id
 * @param {Array} Ids array de Ids de las Categorias
 * @return {Array} retorna un array con el nombre de las categorias
 */
export function getNameCategories(array) {
  const categories = data.Categorias;
  const categoryNames = [];
  for (const name in categories) {
    if (array.includes(categories[name].idCategoria)) {
      categoryNames.push(categories[name].nombreCat);
    }
  }
  return categoryNames;
}

/**
 * Trae el nombre de la categoria pasemos su id
 * @param {String} nombre El nombre de la categoria
 * @return {Number} retorna el id de la categoria
 */
export function getIdCategory(name) {
  const categories = data.Categorias;
  const array = [];
  array.push(name);
  let idCategory;
  for (const category in categories) {
    if (array.includes(categories[category].nombreCat)) {
      idCategory = categories[category].idCategoria;
    }
  }
  return idCategory;
}

/**
 * Trae los productos filtrados por el id de la categoria.
 * @param {Number} id
 * @return {Array} retorna un array de productos filtrados por el id de la categoria
 */
export function getProductsByCategory(idCategory) {
  const products = data.Productos;
  const array = [];
  array.push(idCategory);
  const listProducts = [];
  for (const product in products) {
    if (array.includes(products[product].idCategoria)) {
      listProducts.push(products[product]);
    }
  }
  return listProducts;
}

/**
 * Trae el banner del comercio
 * @return {Element} retorna el banner del comercio
 */
export function getBanner() {
  const comercio = data.Comercio;
  return comercio.bannerComercio;
}
