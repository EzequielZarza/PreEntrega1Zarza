import products from './products';

const getItem = itemId => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(...products.filter(product => product.id === itemId));
          }, 2000);
    });
};

export default getItem;