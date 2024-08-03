import React, {useEffect, useState} from 'react'
import { View, Text, TextInput, Button, ActivityIndicator } from 'react-native'
import styles from './LoginStyle'
// Uso de navegacion
import { useNavigation } from '@react-navigation/native'
// guardar valores en storage
import AsyncStorage from '@react-native-async-storage/async-storage'
// llamada de api para autentifiacion
import { authenticateUser } from '../../data/ApiService'



export const LoginScreen = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const navigation = useNavigation() 

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const token = await AsyncStorage.getItem('authToken')
                if (token) {
                    console.log('direccion');
                    navigation.navigate('ProductList')
                }else{
                    console.log('no direcciona');
                }
            } catch (error) {
                console.log('this erros :', error);
            }
        }
        checkAuth()
    }, [navigation])

    const handleLogin  = async () =>{
        setLoading(true)
        setError('')
        try {
            const data = await authenticateUser(username, password);
            if(data.token && data.user){
                await AsyncStorage.setItem('authToken', data.token)
                await AsyncStorage.setItem('userId', data.user._id)
                await AsyncStorage.setItem('username', data.user.username)
                await AsyncStorage.setItem('userEmail', data.user.email)
            }else{
                setError('Invalid credentials')
            }
        } catch (error) {
            setError(error.message)
        }finally{
            setLoading(false)
            const token = await AsyncStorage.getItem('authToken')
            console.log(token , token);
        }
    }


    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>Login</Text>
            <TextInput onChangeText={setUsername} style={ styles.input } placeholder='Email' value={username}/>
            <TextInput onChangeText={setPassword} style={ styles.input } placeholder='Password' value={password}/>
            <Button title='Login' onPress={handleLogin}/>
        </View>
    )
}


