import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";

export default function CadastroScreen() {
  const [birthDate, setBirthDate] = useState('');
  const [cpf, setCpf] = useState('');

  const handleDateChange = (text) => {
    const cleaned = text.replace(/[^0-9]/g, '');
    let formattedDate = cleaned;
    if (cleaned.length >= 3) {
      formattedDate = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
    }
    if (cleaned.length >= 5) {
      formattedDate += `/${cleaned.slice(4, 8)}`;
    }
    setBirthDate(formattedDate);
  };

  const handleCpfChange = (text) => {
    const cleaned = text.replace(/[^0-9]/g, ''); 
    let formattedCpf = cleaned;
    if (cleaned.length >= 4) {
      formattedCpf = `${cleaned.slice(0, 3)}.${cleaned.slice(3, 6)}`;
    }
    if (cleaned.length >= 7) {
      formattedCpf += `.${cleaned.slice(6, 9)}`;
    }
    if (cleaned.length >= 10) {
      formattedCpf += `-${cleaned.slice(9, 11)}`;
    }
    setCpf(formattedCpf);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informe seus dados</Text>

      <View style={styles.divider} />

      <TextInput
        style={styles.input}
        placeholder="Informe seu e-mail"
        keyboardType="email-address"
        placeholderTextColor="#FFF"
      />

      <TextInput
        style={styles.input}
        placeholder="Informe seu celular"
        keyboardType="phone-pad"
        placeholderTextColor="#FFF"
      />

      <TextInput
        style={styles.input}
        placeholder="Informe sua senha"
        keyboardType="visible-password"
        placeholderTextColor="#FFF"
      />

      <TextInput
        style={styles.input}
        placeholder="Data de nascimento DD/MM/AAAA"
        keyboardType="numeric"
        placeholderTextColor="#FFF"
        maxLength={10} // Limita o tamanho para DD/MM/AAAA
        value={birthDate}
        onChangeText={handleDateChange}
      />

      <TextInput
        style={styles.input}
        placeholder="CPF"
        keyboardType="numeric"
        placeholderTextColor="#FFF"
        maxLength={14} // Limita o tamanho para XXX.XXX.XXX-XX
        value={cpf}
        onChangeText={handleCpfChange}
      />

      <View style={styles.divider} />
    </View>
  );
}
