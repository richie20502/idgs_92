import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: "center",
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    error: {
        color: "red",
        marginBottom: 12,
        textAlign: "center",
    },
});

export default styles;