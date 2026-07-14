import React from 'react';
import { Text, View } from 'react-native';
import { navigate } from '@/utils/navigationUtils';
import { useStyles } from '@/screens/home/styles';
import { PlusIcon } from 'react-native-heroicons/solid';
import WrapperContainer from '@/components/Wrapper/WrapperContainer';
import Colors from '@/constants/Colors';
import IconTextButton from '@/components/Button/Button';
import Images from '@/constants/Images';
import Header from '@/components/Header/Header';
import Routes from '@/constants/Routes';

const HomeScreen = () => {
  const styles = useStyles();

  const handlePress = () => {
    navigate(Routes.ADD_SCREEN);
  };
  return (
    <WrapperContainer edges={['top', 'bottom']}>
      <View style={styles.container}>
        <Header title="Courses" image={Images.BOY} />
        <IconTextButton
          onPress={handlePress}
          style={styles.addButton}
          Icon={PlusIcon}
          color={Colors.WHITE}
        />
        <View style={styles.greenContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Hi, Himanshu!</Text>
            <Text style={styles.subTitle}>
              Embark on a thrilling journey where React Native come to change
              life !
            </Text>
          </View>

          <View style={styles.whiteCard}>
            <Text>Embark on a thrilling...</Text>
          </View>
        </View>
      </View>
    </WrapperContainer>
  );
};

export default HomeScreen;
