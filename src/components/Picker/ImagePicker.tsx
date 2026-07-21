import React from 'react';
import Colors from '@/constants/Colors';
import { Image, Pressable } from 'react-native';
import { CameraIcon } from 'react-native-heroicons/solid';
import { launchImageLibrary } from 'react-native-image-picker';
import { useStyles } from '@/components/Picker/styles';
import { ImagePickerProps } from '@/components/types';

const ImagePicker: React.FC<ImagePickerProps> = ({ image, onChange }) => {
  const styles = useStyles();

  const handlePickImage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
      selectionLimit: 1,
    });

    if (result.assets?.length) {
      onChange(result.assets[0].uri!);
    }
  };

  return (
    <Pressable style={styles.container} onPress={handlePickImage}>
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <CameraIcon size={24} color={Colors.BLACK} />
      )}
    </Pressable>
  );
};

export default ImagePicker;
