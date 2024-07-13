import { useState, useEffect } from "react";
import ProductModel from "../models/ProductModel";
import { fetchProducts } from "../data/ApiService";

const useProductListViewModel = () => {
    const [products, setProducts] = useState<ProductModel[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(()=> {
        const loadProducts = async() => {
            try {
                const productData = await fetchProducts();
                console.log(" ----- 1 --------");
                console.log(productData);
                const productList = productData.map(
                    (product : any) =>  new ProductModel(
                        product.id,
                        product.name,
                        product.description,
                        product.price,
                        product.category,
                        product.createdAt,
                        product.updatedAt 
                    )
                );
                console.log(" ----- 1 --------");
                console.log(productList);
                setProducts(productList);
            } catch (error) {
                setError(error.message);
            } finally{
                setLoading(false);
            }
        }
        loadProducts();  
    }, []);


    
    return { products, loading, error };
}

export default useProductListViewModel;