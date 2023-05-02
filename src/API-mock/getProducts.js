import products from './products';

const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products);
          }, 2000);
    });
};

export default getProducts;