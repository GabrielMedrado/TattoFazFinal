import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation() as any;

  return (
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#FFF"
        />
         <TextInput
            style={styles.inputPassword}
            placeholder="Senha"
            placeholderTextColor="#FFF"
        />

        <View style={styles.divider} />

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>
            Esqueci minha senha
          </Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>

          <TouchableOpacity 
            style={styles.loginButton}>
              <Text style={styles.buttonText}
              onPress={() => navigation.navigate("MainTabs", { screen: "Feed" })}
              >
                Login
              </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.registerButton}
            onPress={() => navigation.navigate("Cadastro")}
            >
              <Text style={styles.buttonText}>
                Cadastro
              </Text>
          </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.googleButton}>

          <Image 
            source={require('../../../assets/googleLogo.png')}
            style={styles.googleLogo}
          />

          <Text style={styles.googleButtonText}>
            Login com Google
          </Text>
          
        </TouchableOpacity>

        <Image 
          source={require('../../../assets/logotatto.png')}
          style={styles.logo}
          resizeMode="contain"
        />

    </View>
  )
}