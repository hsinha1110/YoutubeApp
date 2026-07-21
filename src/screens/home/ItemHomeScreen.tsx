import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { useStyles } from './styles';
import { ItemHomeScreenProps } from '@/types';
import { navigate } from '@/utils/navigationUtils';
import Routes from '@/constants/Routes';

const ItemHomeScreen: React.FC<ItemHomeScreenProps> = ({ item }) => {
  const styles = useStyles();

  return (
    <Pressable
      onPress={() => navigate(Routes.ADD_DETAILS_SCREEN, { course: item })}
      style={styles.card}
    >
      <Image source={{ uri: item.banner }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.courseName}>{item.courseName}</Text>
        <Text style={styles.videoText}>{item.count ?? 0} Videos</Text>
      </View>
    </Pressable>
  );
};

export default ItemHomeScreen;
