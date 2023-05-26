import { db } from "../firebase/config";
import { collection, getDocs, addDoc, Timestamp } from "firebase/firestore";

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
    const [ item ] = products.filter(product => product.id === itemId);
    return item;
};

export const getCategories = async () => {
    const response = collection(db, "categories");
    const query =  await getDocs(response);
    const categories = query.docs.map(doc => doc.id);
    return categories;
};


export const dispatchPurchase = async ({ buyer, cartItems, price, setOrderId, setError}) => {
    const purchase = {
        buyer: buyer,
        purchaseItems: cartItems,
        price: price,
        date: Timestamp.fromDate(new Date()),
    };
    try{
        const purchaseCollection = collection(db, "purchase");
        const { id } = await addDoc(purchaseCollection, purchase);
        setOrderId(id);
    }catch(error){
        setError(error);
    };
};