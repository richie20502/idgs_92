import { useState, useEffect } from "react";
import ProductModel from "../models/ProductModel";
import { fetchProducts } from "../data/ApiService";

const useProductListViewModel = () => {
    const [products, setProducts] = useState<ProductModel[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");


    
    return { products };
}

export default useProductListViewModel;