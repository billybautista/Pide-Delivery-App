import data from '../data/Test_Data.json';

/**
 * Trae el id de las categorias asociadas del comercio
 * @return {Array} retorna un array de IDs
 */
export function getIdCategories() {
  const productos = data.Productos;
  const categories = [];
  for (const category in productos) {
    categories.push(productos[category].idCategoria);
  }
  const idCategory = [...new Set(categories)];
  return idCategory;
}

/**
 * Trae el nombre de las categorias que pasemos su id
 * @param {Array} Ids array de Ids de las Categorias
 * @return {Array} retorna un array con el nombre de las categorias
 */
export function getNameCategory(array) {
  const categories = data.Categorias;
  const categoryName = [];
  for (const name in categories) {
    if (array.includes(categories[name].idCategoria)) {
      categoryName.push(categories[name].nombreCat);
    }
  }
  return categoryName;
}

/**
 * Trae el nombre de la categoria pasemos su id
 * @param {String} nombre El nombre de la categoria
 * @return {Number} retorna el id de la categoria
 */
export function getIdbyCategory(name) {
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
export function getProductByCategory(idCategory) {
  const productos = data.Productos;
  const array = [];
  array.push(idCategory);
  const productosItem = [];
  for (const product in productos) {
    if (array.includes(productos[product].idCategoria)) {
      productosItem.push(productos[product]);
    }
  }
  return productosItem;
}

/**
 * Trae el banner del comercio
 * @return {Element} retorna el banner del comercio
 */
export function getBanner() {
  const comercio = data.Comercio;
  return comercio.bannerComercio;
}
