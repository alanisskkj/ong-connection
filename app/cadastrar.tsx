import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard, Alert, ActivityIndicator } from "react-native";
import ButtonCustom from "../components/Button";

export default function Register() {
    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = async () => {
        Keyboard.dismiss();

        if (!name.trim() || !email.trim() || !password || !confirmPassword) {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
            return;
        }

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            Alert.alert("Erro", "Insira um e-mail válido.");
            return;
        }

        if (password.length < 6) {
            Alert.alert("Erro", "A senha deve ter pelo menos 6 caracteres.");
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert("Erro", "As senhas não coincidem.");
            return;
        }

        try {
            setIsLoading(true);

            console.log("🚀 Enviando dados para o servidor:", { name, email });

            await new Promise(resolve => setTimeout(resolve, 1500));

            Alert.alert("Sucesso!", "Sua conta foi criada com sucesso.", [
                { text: "OK", onPress: () => router.replace('/login') }
            ]);
        } catch (error) {
            Alert.alert("Erro", "Não foi possível realizar o cadastro. Tente novamente.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../assets/images/ong-logo.png')}
                style={styles.logo}
            />

            <Text style={styles.title}>Crie sua conta</Text>
            <Text style={styles.subtitle}>Junte-se a nós e ajude causas incríveis!</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome Completo"
                    placeholderTextColor="#9a67cc"
                    value={name}
                    onChangeText={setName}
                />

                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    placeholderTextColor="#9a67cc"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#9a67cc"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Confirmar Senha"
                    placeholderTextColor="#9a67cc"
                    secureTextEntry={true}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
            </View>

            { }
            {isLoading ? (
                <ActivityIndicator size="large" color="#8038cdff" />
            ) : (
                <ButtonCustom
                    title="Cadastrar"
                    onPress={handleRegister}
                    color="#8038cdff"
                />
            )}

            <TouchableOpacity
                style={styles.backButton}
                onPress={() => router.back()}
                disabled={isLoading}
            >
                <Text style={[styles.backButtonText, isLoading && { opacity: 0.5 }]}>
                    Já tem uma conta? Faça Login
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#e3cff8ff"
    },
    logo: {
        width: 200,
        height: 80,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: "#8038cdff",
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: "#6a4a8c",
        marginBottom: 25,
        textAlign: 'center',
    },
    inputContainer: {
        width: '100%',
        gap: 12,
        marginBottom: 25,
    },
    input: {
        width: '100%',
        height: 55,
        backgroundColor: "#fff",
        borderRadius: 12,
        paddingHorizontal: 20,
        fontSize: 16,
        color: "#333",
        borderWidth: 1,
        borderColor: "#c2a0e5ff",
    },
    backButton: {
        marginTop: 20,
        padding: 10,
    },
    backButtonText: {
        color: "#8038cdff",
        fontSize: 14,
        fontWeight: '500',
        textDecorationLine: 'underline',
    }
});