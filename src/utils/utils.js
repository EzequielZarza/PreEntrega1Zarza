import { db } from "../firebase/config"
import { collection, getDocs } from "firebase/firestore"

export const getProducts = async () => {
    const response = collection(db, "products");
    const query =  await getDocs(response);
    const products = query.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    
    return products;
};

export const getItem = async (itemId) => {
    const products = await getProducts();
    const [ item ] = products.filter(product => product.id === itemId)
    return item;
};

export const getCategories = async () => {
    const response = collection(db, "categories");
    const query =  await getDocs(response);
    const categories = query.docs.map(doc => doc.id);
    
    return categories;
};
