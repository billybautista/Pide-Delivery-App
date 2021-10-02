import data from '../data/Test_Data.json';

export function getIdCategories() {
  const productos = data.Productos;
  const categories = [];
  for (const category in productos) {
    categories.push(productos[category].idCategoria);
  }
  const idCategory = [...new Set(categories)];
  return idCategory;
}

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

export function getBanner() {
  const comercio = data.Comercio;
  return comercio.bannerComercio;
}
