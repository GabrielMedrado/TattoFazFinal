import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface TattooArtist {
  name: string;
  rating: number;
  distance: number;
  address: string;
  imageUrl: string;
}

interface TattooDesign {
  title: string;
  estimatedTime: string;
  imageUrl: string;
}

const tattooDesign: TattooDesign = {
  title: 'Índia',
  estimatedTime: '3 - 5 horas',
  imageUrl: 'url-da-imagem-da-tatuagem',
};

const tattooArtist: TattooArtist = {
  name: 'Paulo Ricardo',
  rating: 4.97,
  distance: 8,
  address: 'Av. Marechal Tito, 6829',
  imageUrl: 'url-da-imagem-do-tatuador',
};

const TattooBookingScreen: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChangeDate = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: 'url-do-logo' }} style={styles.logo} />
      </View>

      <View style={styles.tattooDesignContainer}>
        <Image source={{ uri: tattooDesign.imageUrl }} style={styles.tattooImage} />
        <Text style={styles.tattooTitle}>{tattooDesign.title}</Text>
        <Text style={styles.estimatedTime}>Tempo Estimado: {tattooDesign.estimatedTime}</Text>
      </View>

      <View style={styles.artistContainer}>
        <Image source={{ uri: tattooArtist.imageUrl }} style={styles.artistImage} />
        <View style={styles.artistInfo}>
          <Text style={styles.artistName}>{tattooArtist.name}</Text>
          <Text style={styles.artistRating}>{tattooArtist.rating} Estrelas</Text>
          <Text style={styles.artistDistance}>{tattooArtist.distance} KM de distância</Text>
          <Text style={styles.artistAddress}>{tattooArtist.address}</Text>
        </View>
      </View>

      <View style={styles.dateTimeContainer}>
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <Text style={styles.dateText}>Data: {date.toLocaleDateString()}</Text>
        </TouchableOpacity>
        <Text style={styles.timeText}>Horário: {date.getHours()}:{date.getMinutes().toString().padStart(2, '0')}</Text>
      </View>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}

      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>CONFIRMAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFF',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  tattooDesignContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  tattooImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  tattooTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  estimatedTime: {
    fontSize: 16,
    color: '#555',
    marginTop: 4,
  },
  artistContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  artistImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  artistInfo: {
    flex: 1,
  },
  artistName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  artistRating: {
    fontSize: 14,
    color: '#777',
  },
  artistDistance: {
    fontSize: 14,
    color: '#777',
  },
  artistAddress: {
    fontSize: 14,
    color: '#777',
  },
  dateTimeContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  confirmButton: {
    backgroundColor: '#FF0000',
    padding: 16,
    alignItems: 'center',
    borderRadius: 8,
  },
  confirmButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TattooBookingScreen;