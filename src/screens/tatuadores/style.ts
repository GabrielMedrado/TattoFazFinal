
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFF',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 90,
    alignSelf: 'center',
    marginLeft: 300,
    marginTop: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
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
  artistList: {
    marginTop: 10,
  },
  artistContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  artistImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
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
});