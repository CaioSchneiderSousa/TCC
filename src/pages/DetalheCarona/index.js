import React from "react";
import { View, 
    Text, 
    StyleSheet, 
    Image, 
    TouchableOpacity } from "react-native";

import *as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function DetalheCarona() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            
            <View style={styles.containerLogo}>

                <Animatable.Text style={styles.title} animation="zoomIn"> Detalhes da Carona</Animatable.Text>


                <Animatable.Image 
                    animation="zoomIn"
                    source={require('../../assest/Perfil.webp')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                    
                />

            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.text}>Detalhe da Sua Carona</Text>
                <View style={styles.caixa}>
                    <Text style={styles.texto}>Motorista: Maria Rosa</Text>
                    <Text style={styles.texto}>Saida: 24/05/2023 19:00</Text>
                    <Text style={styles.texto}>De: Enseada do Sua</Text>
                    <Text style={styles.texto}>Para: UVV</Text>
                    <Text style={styles.texto}>Vagas: 3</Text>
                    <Text style={styles.texto}>Carro: Chevrolet Onix</Text>
                    <Text style={styles.texto}>Placa: RGB5A55</Text>
                    <Text style={styles.texto}>Observações: Indo pela reta da penha</Text>

                </View>
                
                
                
            </Animatable.View>
            <TouchableOpacity style={styles.button2} 
                onPress={ () => navigation.navigate('Principal')}
                >
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
    },

    containerLogo:{
        flex: 1,
        backgroundColor: '#0052A5',
        justifyContent: 'center',
        alignItems:'center',
        


    },

    containerForm: {
        flex: 1.5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },

    title:{
        fontSize: 27,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 10,
    },

    text:{
        color: '#a1a1a1',
        marginTop: 28,
    },

    button2:{
        backgroundColor:'#0052A5',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '10%',
        alignItems:'center',
    },

    buttonText:{
        fontSize: 15,
        color: '#fff',
    },

    caixa: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        margin: 10,
        padding: 10,
        borderWidth: 2, // Largura da borda
        borderColor: "black", // Cor da borda        
    },

      texto: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000000",
        alignSelf: "flex-start",
    },
})