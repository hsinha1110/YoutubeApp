import React from 'react';
import { Image, Text, View } from 'react-native';
import { useStyles } from '@/components/Header/styles';
import { HeaderProps } from '@/components/types';

const Header: React.FC<HeaderProps> = ({ title, image }) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image source={image} style={styles.image} />
    </View>
  );
};

export default Header;
