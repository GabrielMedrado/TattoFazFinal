import { View, Text } from "react-native";
import { stylesCadastro } from "./styles";

export default function CadastroScreen() {
  return (
    <View 
      style={stylesCadastro.container}>
        <Text 
          style={stylesCadastro.title}>
            Cadastro Screen
        </Text>
    </View>
  );
}
