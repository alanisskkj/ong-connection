import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView
} from "react-native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        Keyboard.dismiss();
        console.table({ email, password });

        if (email.includes('@') && password.length > 6) {
            console.log("✅ Acesso autorizado para:", email);
        } else {
            console.log("❌ Falha no login: E-mail inválido ou senha muito curta.");
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollContent}>

                { }
                <View style={styles.header}>
                    <Image
                        source={require('../assets/images/ong-logo.png')}
                        style={styles.logo}
                    />
                </View>

                { }
                <View style={styles.form}>
                    <Text style={styles.title}>Entrar na Conta</Text>

                    { }
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                        placeholderTextColor="#9a67cc"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={email}
                        onChangeText={setEmail}
                    />

                    { }
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        placeholderTextColor="#9a67cc"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />

                    { }
                    {email.length > 0 && (
                        <Text style={styles.helperText}>
                            Logando como: <Text style={{ fontWeight: '700' }}>{email}</Text>
                        </Text>
                    )}
                </View>

                { }
                <View style={styles.footer}>
                    <TouchableOpacity
                        style={styles.buttonEnter}
                        onPress={handleLogin}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => router.back()}>
                        <Text style={styles.linkText}>Voltar</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e3cff8ff",
    },
    scrollContent: {
        flexGrow: 1,
        padding: 30,
        justifyContent: 'space-between',
    },
    header: {
        alignItems: "center",
        marginTop: 40,
    },
    logo: {
        width: 180,
        height: 80,
        resizeMode: 'contain',
    },
    form: {
        width: '100%',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: "#8038cdff",
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        backgroundColor: "#fff",
        height: 55,
        borderRadius: 12,
        paddingHorizontal: 20,
        fontSize: 16,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#c2a0e5ff",
    },
    helperText: {
        color: "#6a4a8c",
        fontSize: 12,
        marginTop: -5,
        textAlign: 'center',
    },
    footer: {
        width: '100%',
        marginBottom: 20,
    },
    buttonEnter: {
        backgroundColor: "#8038cdff",
        height: 55,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        elevation: 3,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    linkText: {
        color: "#8038cdff",
        textAlign: 'center',
        marginTop: 20,
        textDecorationLine: 'underline',
    }
});