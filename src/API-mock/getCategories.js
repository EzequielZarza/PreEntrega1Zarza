import categories from './categories';

const getCategories = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categories);
          }, 2000);
    });
};

export default getCategories;