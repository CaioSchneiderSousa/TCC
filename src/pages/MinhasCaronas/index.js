import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

export default function MinhasCaronas() {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>
          <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            <Text style={styles.message}>Minhas Caronas</Text>
          </Animatable.View>
    
          <Animatable.View animation="fadeInUp" style={styles.containerForm}>
            <ScrollView>
                <View style={styles.caixa}>
                    <Text style={styles.texto}>Motorista: João Paulo</Text>
                    <Text style={styles.texto}>Para: UVV</Text>
                    <Text style={styles.texto}>Data: 24/05/2023</Text>
                    <Text style={styles.texto}>Carro: Onix</Text>
                    <Text style={styles.texto}>Placa: RGB5A55</Text>
                </View>
                <View style={styles.caixa}>
                    <Text style={styles.texto}>Motorista: Guilherme</Text>
                    <Text style={styles.texto}>Para: UVV</Text>
                    <Text style={styles.texto}>Data: 05/02/2023</Text>
                    <Text style={styles.texto}>Carro: HB20</Text>
                    <Text style={styles.texto}>Placa: BCD99C9</Text>
                </View>
                <View style={styles.caixa}>
                    <Text style={styles.texto}>Motorista: Paulo</Text>
                    <Text style={styles.texto}>Para: CASA</Text>
                    <Text style={styles.texto}>Data: 15/07/2023</Text>
                    <Text style={styles.texto}>Carro: Corola</Text>
                    <Text style={styles.texto}>Placa: PCK66C6</Text>
                </View>
                <View style={styles.caixa}>
                    <Text style={styles.texto}>Motorista: Caio</Text>
                    <Text style={styles.texto}>Para: UVV</Text>
                    <Text style={styles.texto}>Data: 13/05/2023</Text>
                    <Text style={styles.texto}>Carro: Cruze</Text>
                    <Text style={styles.texto}>Placa: JML44B4</Text>
                </View>
                
            </ScrollView>
            <ScrollView>

            </ScrollView>
            <ScrollView>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Principal")}>
                <Text style={styles.buttonText}>Voltar</Text>
              </TouchableOpacity>
            </ScrollView>
          </Animatable.View>
        </ScrollView>
      );
    }
    
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#0052A5",
    },
    containerHeader: {
      marginTop: "14%",
      marginBottom: "8%",
      paddingStart: "5%",
    },
    message: {
      fontSize: 28,
      fontWeight: "bold",
      color: "#fff",
    },
    containerForm: {
      backgroundColor: "#fff",
      flex: 1,
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
      paddingStart: "5%",
      paddingEnd: "5%",
    },
    title: {
      fontSize: 20,
      marginTop: 28,
    },
    input: {
      borderBottomWidth: 1,
      height: 40,
      marginBottom: 12,
      fontSize: 16,
      width: "100%",
    },
    button: {
      backgroundColor: "#0052A5",
      width: "100%",
      borderRadius: 4,
      paddingVertical: 8,
      marginTop: 14,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
    },
    selectedVehicle: {
      fontSize: 16,
      marginBottom: 12,
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
        fontSize: 15,
        fontWeight: "bold",
        color: "#000000",
      },
  });
  