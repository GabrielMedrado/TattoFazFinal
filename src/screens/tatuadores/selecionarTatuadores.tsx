import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const TatuadoresScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/logos/logo-rd.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>SELECIONE O TATUADOR</Text>

      <View style={styles.tattooContainer}>
        <Image
          source={require('../../../assets/logos/logo-rd.png')}
          style={styles.tattooImage}
        />
        <View style={styles.tattooInfo}>
          <Text style={styles.tattooTitle}>"SEM CORAÇÃO"</Text>
          <Text style={styles.tattooTime}>TEMPO ESTIMADO</Text>
          <Text style={styles.tattooDuration}>5-6 HORAS</Text>
          <FontAwesome name="heart" size={24} color="red" style={styles.icon} />
        </View>
      </View>

      <View style={styles.tatuador}>
        <TatuadorItem
          image={require('../../../assets/agendamento/tatuador1.png')}
          name="DEYVERSON ANTUNES"
          rating="4.95 ESTRELAS"
          distance="6 KM DE DISTÂNCIA"
        />
        <TatuadorItem
          image={require('../../../assets/agendamento/tatuador2.png')}
          name="MANOEL GOMES"
          rating="4.75 ESTRELAS"
          distance="6 KM DE DISTÂNCIA"
        />
        <TatuadorItem
          image={require('../../../assets/agendamento/tatuador3.png')}
          name="PAULA SILVA"
          rating="4.22 ESTRELAS"
          distance="6 KM DE DISTÂNCIA"
        />
      </View>
    </View>
  );
};

const TatuadorItem: React.FC<{ image: any; name: string; rating: string; distance: string }> = ({ image, name, rating, distance }) => {
  return (
    <View style={styles.tatuadorItem}>
      <Image source={image} style={styles.tatuadorImage} />
      <View>
        <Text style={styles.tatuadorName}>{name}</Text>
        <Text style={styles.tatuadorRating}>{rating}</Text>
        <Text style={styles.tatuadorDistance}>{distance}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 120,
    height: 90,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  tattooContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  tattooImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 16,
  },
  tattooInfo: {
    flex: 1,
  },
  tattooTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tattooTime: {
    fontSize: 14,
    color: '#666',
  },
  tattooDuration: {
    fontSize: 14,
    color: '#333',
  },
  icon: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  tatuador: {
    marginTop: 16,
  },
  tatuadorItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  tatuadorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  tatuadorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tatuadorRating: {
    fontSize: 14,
    color: '#666',
  },
  tatuadorDistance: {
    fontSize: 14,
    color: '#333',
  },
});

export default TatuadoresScreen;
