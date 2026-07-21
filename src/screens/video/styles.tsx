import { StyleSheet } from 'react-native';

export const useStyles = () =>
  StyleSheet.create({
    itemContainer: {
      margin: 10,
    },
    videoImage: {
      width: '100%',
      height: 220,
      borderRadius: 16,
      resizeMode: 'cover',
    },
  });
