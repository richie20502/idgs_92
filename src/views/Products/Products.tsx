import React from 'react'
import useProductListViewModel from '../../viewsmodels/ProductListViewModel';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import styles from './ProductsStyle';

export const ProductScreen: React.FC = () => {
    const {error, loading, products } = useProductListViewModel();
    if (error){
        return <Text style={styles.error}>{error}</Text>
    }
    if (loading){
        return <ActivityIndicator size='large' color="#FF0000"/>
    }

    return(
        <View>
            <Text>Lista de Productos</Text>

            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({item})  => (
                    <View>
                        <Text>{item.name}</Text>
                        <Text>{item.price}</Text>
                        <Text>{item.description}</Text>
                        <Text>{item.catergory}</Text>
                        <Text>{item.createdAt}</Text>
                        <Text>{item.updatedAt}</Text>
                    </View>
                )}
            />
        </View>
    );
    
}