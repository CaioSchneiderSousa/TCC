import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

export default function CadastrarVeiculo() {
  const navigation = useNavigation();
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [placa, setPlaca] = useState("");
  const [quantidadePassageiros, setQuantidadePassageiros] = useState("");
  const [cor, setCor] = useState("");

  const navigateToOferecerCarona = () => {
    navigation.navigate("OferecerCarona", {
      marca,
      modelo,
      placa,
      quantidadePassageiros,
      cor,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Cadastrar Veículo</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <View>
          <Text style={styles.title}>Marca</Text>
          <TextInput
            placeholder="Marca do Carro"
            style={styles.input}
            value={marca}
            onChangeText={(text) => setMarca(text)}
          />

          <Text style={styles.title}>Modelo</Text>
          <TextInput
            placeholder="Modelo do Carro"
            style={styles.input}
            value={modelo}
            onChangeText={(text) => setModelo(text)}
          />
          <Text style={styles.title}>Placa</Text>
          <TextInput
            placeholder="Placa do Carro"
            style={styles.input}
            value={placa}
            onChangeText={(text) => setPlaca(text)}
          />
          <Text style={styles.title}>Quantidade de Passageiros</Text>
          <TextInput
            placeholder="Quantidade"
            style={styles.input}
            value={quantidadePassageiros}
            onChangeText={(text) => setQuantidadePassageiros(text)}
          />
          <Text style={styles.title}>Cor</Text>
          <TextInput
            placeholder="Cor do Carro"
            style={styles.input}
            value={cor}
            onChangeText={(text) => setCor(text)}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={navigateToOferecerCarona}>
            <Text style={styles.buttonText}>Registrar Veículo e Oferecer Carona</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Principal")}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
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
});
