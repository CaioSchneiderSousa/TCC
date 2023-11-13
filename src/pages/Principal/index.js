import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'

import *as Animatable from 'react-native-animatable'

export default function Principal(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Tela Principal</Text>

            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                
                <View>
                    <TouchableOpacity style={styles.button}
                        onPress={ () => navigation.navigate('MinhasCaronas')}
                        >
                        <Text style={styles.buttonText}>Minhas Caronas</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.button}
                        onPress={ () => navigation.navigate('OferecerCarona')}
                        >
                        <Text style={styles.buttonText}>Oferecer Carona</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Ir para a UVV</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Voltar da UVV</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.button}
                        onPress={ () => navigation.navigate('CadastrarVeiculo')}
                        >
                            <Text style={styles.buttonText}>Cadastrar Veiculo</Text>

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
        flex: 1,
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
        backgroundColor: '#0B0B61',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    
})