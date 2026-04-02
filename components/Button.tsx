import { StyleSheet, Text, TouchableOpacity } from "react-native";

//Definindo o tipo das props com TypeScript
type ButtonProps = {
    title: string;
    onPress: () => void;
    color?: string; //? Significa que é opcional, caso nenhuma cor seja definida, uma cor padão será assumida
}

export default function Button({ title, onPress, color = "#b587e2ff", }: ButtonProps) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: color }]}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#c2a0e5ff",
        paddingVertical: 16,
        paddingHorizontal: 40,
        borderRadius: 12,
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: '600',
    },
})