import React from 'react';
import { Image, Pressable } from 'react-native';
import { navigate } from '@/utils/navigationUtils';
import Routes from '@/constants/Routes';
import { useStyles } from '@/screens/video/styles';
import { ItemVideoProps } from '@/types';

const ItemVideo: React.FC<ItemVideoProps> = ({ item }) => {
  const styles = useStyles();

  return (
    <Pressable
      style={styles.itemContainer}
      onPress={() =>
        navigate(Routes.VIDEO_PLAYER_SCREEN, {
          url: item.Link,
        })
      }
    >
      <Image source={{ uri: item.Image }} style={styles.videoImage} />
    </Pressable>
  );
};

export default ItemVideo;
