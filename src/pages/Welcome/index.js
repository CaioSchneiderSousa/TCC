import React from "react";
import { View, 
    Text, 
    StyleSheet, 
    Image, 
    TouchableOpacity } from "react-native";

import *as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style={style.container}>


            <View style={style.containerLogo}>
                <Animatable.Image 
                    animation="zoomIn"
                    source={require('../../assest/download.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                    
                />
                <Animatable.Text style={style.title} animation="zoomIn"> Bem Vindo ao Caronas UVV</Animatable.Text>

            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={style.containerForm}>
                <Text style={style.text}>Faça o login para começar</Text>
                
                <TouchableOpacity 
                style={style.button1} 
                onPress={ () => navigation.navigate('SignIn')}
                > 
                    <Text style={style.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.button2} 
                onPress={ () => navigation.navigate('Register')}
                >
                    <Text style={style.buttonText}>Cadastra-se</Text>
                </TouchableOpacity>
                
            </Animatable.View>


        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#0052A5',
    },
    containerLogo:{
        flex: 2,
        backgroundColor: '#0052A5',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 100002/2


    },
    containerForm: {
        flex: 1,
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

    button1:{
        position: 'absolute',
        backgroundColor:'#0052A5',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '50%',
        alignItems:'center',
    },

    button2:{
        position: 'absolute',
        backgroundColor:'#0052A5',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '25%',
        alignItems:'center',
    },

    buttonText:{
        fontSize: 15,
        color: '#fff',
    }
})