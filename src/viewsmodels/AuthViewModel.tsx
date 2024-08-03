import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuthentication = async () => {
            const token = await AsyncStorage.getItem("authToken");
            setIsAuthenticated(!!token);
        };
        checkAuthentication();
    }, []);

    return { isAuthenticated };
}; 

export default useAuth;