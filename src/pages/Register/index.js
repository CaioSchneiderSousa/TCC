import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'

import *as Animatable from 'react-native-animatable'

export default function Register(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-Vindo(a)</Text>
                <Text style={styles.message}>Cadastrar</Text>

            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <View>
                    <Text style={styles.title}>Usuário</Text>
                    <TextInput 
                        placeholder="Insira seu usuario"
                        style={styles.input}
                    />
                    <Text style={styles.title}>Senha</Text>
                    <TextInput 
                        placeholder="Insira sua Senha"
                        style={styles.input}
                    />
                    <Text style={styles.title}>Cofirmar Senha</Text>
                    <TextInput 
                        placeholder="Confirme sua Senha"
                        style={styles.input}
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.button}
                    onPress={ () => navigation.navigate('Welcome')}
                    >
                        <Text style={styles.buttonText}>Voltar</Text>

                    </TouchableOpacity>
                </View>
                
            </Animatable.View>

            
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#0052A5',
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },
    containerForm: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },

    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16, 
        width: '100%',
    },
    button: {
        backgroundColor: '#0052A5',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    
})