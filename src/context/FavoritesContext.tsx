import React, {createContext, useState, useContext, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';

const FavoritesContext = createContext({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  isFavorite: () => {},
  fetchFavorites: () => {},
});

export const FavoritesProvider = ({children}) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    const favoriteList = [];
    const querySnapshot = await firestore().collection('favorites').get();
    querySnapshot.forEach(documentSnapshot => {
      favoriteList.push({
        ...documentSnapshot.data(),
        id: documentSnapshot.id,
      });
    });
    setFavorites(favoriteList);
  };

  const addFavorite = async recipe => {
    // await firestore().collection('favorites').doc(recipe.id).set(recipe);
    // setFavorites(prevFavorites => [...prevFavorites, recipe]);
    try {
      const ref = await firestore().collection('favorites').doc();
      const response = await ref.add(recipe);
      setFavorites(prevFavorites => [...prevFavorites, recipe]);
      console.log(response);

      return response;
    } catch (error) {
      return error;
    }
  };

  const removeFavorite = async recipeId => {
    // await firestore().collection('favorites').doc(recipeId).delete();
    // setFavorites(prevFavorites =>
    //   prevFavorites.filter(recipe => recipe.id !== recipeId),
    // );
    const response = await firebase
      .firestore()
      .collection('favorites')
      .doc(recipeId)
      .delete();
    setFavorites(prevFavorites =>
      prevFavorites.filter(recipe => recipe.id !== recipeId),
    );

    return response;
  };

  const isFavorite = recipeId => {
    console.log(favorites);

    return favorites.some(recipe => recipe.id === recipeId);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
        fetchFavorites,
      }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
