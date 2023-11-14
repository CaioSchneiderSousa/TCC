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

export default function OferecerCarona() {
  const navigation = useNavigation();
  const route = useRoute();
  const [veiculo, setVeiculo] = useState("");
  const [de, setDe] = useState("");
  const [para, setPara] = useState("");
  const [quando, setQuando] = useState("");
  const [vagas, setVagas] = useState("");
  const [observacoes, setObservacoes] = useState("");

  const { marca, modelo, placa, quantidadePassageiros, cor } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Oferecer Carona</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <View>
          <Text style={styles.title}>Veículo</Text>
          <Text style={styles.selectedVehicle}>
            {marca} {modelo} ({placa})
          </Text>

          <Text style={styles.title}>De</Text>
          <TextInput
            placeholder="De"
            style={styles.input}
            value={de}
            onChangeText={(text) => setDe(text)}
          />

          <Text style={styles.title}>Para</Text>
          <TextInput
            placeholder="Para"
            style={styles.input}
            value={para}
            onChangeText={(text) => setPara(text)}
          />

          <Text style={styles.title}>Quando</Text>
          <TextInput
            placeholder="Quando"
            style={styles.input}
            value={quando}
            onChangeText={(text) => setQuando(text)}
          />

          <Text style={styles.title}>Vagas</Text>
          <TextInput
            placeholder="Vagas"
            style={styles.input}
            value={vagas}
            onChangeText={(text) => setVagas(text)}
          />

          <Text style={styles.title}>Observações</Text>
          <TextInput
            placeholder="Observações"
            style={styles.input}
            value={observacoes}
            onChangeText={(text) => setObservacoes(text)}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.button}
           onPress={() => navigation.navigate("MinhasCaronas")}
          >
            <Text style={styles.buttonText}>Cadastrar Carona</Text>
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
  selectedVehicle: {
    fontSize: 16,
    marginBottom: 12,
  },
});
