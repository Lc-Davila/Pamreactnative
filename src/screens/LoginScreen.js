import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Pressable, StyleSheet } from 'react-native';

// Componente funcional
export default function LoginScreen({ navigation }) {
  const [welcomeMessage, setWelcomeMessage] = useState("Ótimo dia!");

  // useEffect simulando carregamento de mensagem
  useEffect(() => {
    const timer = setTimeout(() => {
      setWelcomeMessage("Bem-vindo de volta!");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* Imagem do cachorro e da mulher */}
      <Image 
        source={{ uri: 'https://i.ibb.co/5WymrHh/dog-woman.png' }} 
        style={styles.image}
      />

      {/* Mensagem dinâmica */}
      <Text style={styles.title}>{welcomeMessage}</Text>
      <Text style={styles.subtitle}>Como deseja acessar?</Text>

      {/* Botão estilo Google */}
      <TouchableOpacity 
        style={styles.googleButton}
        onPress={() => alert("Login com Google")}
      >
        <Text style={styles.googleText}>Continuar com Google</Text>
      </TouchableOpacity>

      {/* Botão alternativo */}
      <Pressable 
        style={styles.otherButton}
        onPress={() => navigation.navigate("OutraTela")} // vamos criar depois
      >
        <Text style={styles.otherText}>Outras opções</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  image: {
    width: 220,
    height: 220,
    marginBottom: 20,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333'
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 25,
    color: '#555'
  },
  googleButton: {
    flexDirection: 'row',
    backgroundColor: '#34A853',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 15
  },
  googleText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  otherButton: {
    borderWidth: 1,
    borderColor: '#34A853',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8
  },
  otherText: {
    color: '#34A853',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
