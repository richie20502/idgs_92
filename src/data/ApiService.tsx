import { Api } from "./Api";

export const fetchProducts =  async () => {
    try {
        const response  = await Api.get('/products');
        return response.data.map(( product : any) => ({
            id: product._id,
            name: product.name,
            description: product.description,
            price: product.price,
            category: product.category,
            createAt: product.createAt,
            updateAt: product.updateAt,
        }));
    } catch (error) {
        throw new Error(`Fetch Product failed : ${error.message}`);
    }
};

export const authenticateUser = async (email: string, password: string ) => {
    try {
        const response  = await Api.post('/users/login',{email, password});
        return response.data;
    } catch (error: any) {
        throw new Error(`Authentication failed : ${error.message}`);
    }
}