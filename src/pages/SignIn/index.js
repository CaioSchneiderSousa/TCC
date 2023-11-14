import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

import *as Animatable from 'react-native-animatable'

export default function SignIn(){
    const navigation = useNavigation();

    /// campo de senha 
    const [input, setInput] = useState('');
    const [hidePass, setHidePass] = useState(true);


    return(
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-Vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <View>
                    <Text style={styles.title}>Usuário</Text>
                    <TextInput 
                        placeholder="Insira seu usuario"
                        style={styles.input}
                    />
                </View>

                <View>
                    <Text style={styles.title}>Senha</Text>
                    <View style={styles.inputArea}>
                        <TextInput 
                            style={styles.input2}
                            placeholder="Insira sua senha"
                            value={input}
                            onChangeText={ (texto) => setInput(texto) }
                            secureTextEntry= {hidePass}
                        />  
                        <TouchableOpacity style={styles.icon} onPress={ () => setHidePass(!hidePass) }>
                            { hidePass ?
                                <Ionicons name="eye" color="#0052A5" size={25}/> 
                                :
                                <Ionicons name="eye-off" color="#0052A5" size={25}/>
                            }
                            
                        </TouchableOpacity>
                    </View>

                    
                </View>

                <View>
                    <TouchableOpacity style={styles.button} 
                    onPress={ () => navigation.navigate('Principal')}>
                        <Text style={styles.buttonText}>Acessar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity styles={styles.buttonRegister} 
                    onPress={ () => navigation.navigate('Register')}
                    >
                        <Text style={styles.buttonRegister}>Não Possui uma conta? Cadastras-se</Text>
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
    buttonRegister:{
        marginTop: 15,
        color: '#a1a1a1'
    },
    inputArea:{
        flexDirection: 'row',
        width: '90%',


    },
    input2:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16, 
        width: '100%',
    },
    icon:{
        width: '15%',
        height : 50,
        justifyContent: 'center',
        alignItems: 'center',
    }
})