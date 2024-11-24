import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const RecipeCard = ({title, author, image, onPress}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>{author}</Text>
        </View>
        <Text style={styles.arrow}>→</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    marginRight: 20,
    backgroundColor: '#000',
  },
  image: {
    width: 100,
    height: 100,
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {fontSize: 16, fontWeight: 'bold'},
  author: {fontSize: 14, color: '#777'},
  arrow: {fontSize: 18, color: '#2E7D32'},
});

export default RecipeCard;
