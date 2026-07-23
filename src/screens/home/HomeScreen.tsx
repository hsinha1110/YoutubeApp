import React, { useEffect, useState } from 'react';
import { navigate } from '@/utils/navigationUtils';
import { useStyles } from '@/screens/home/styles';
import { PlusIcon } from 'react-native-heroicons/solid';
import { FlatList, Text, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import WrapperContainer from '@/components/Wrapper/WrapperContainer';
import Colors from '@/constants/Colors';
import IconTextButton from '@/components/Button/Button';
import Images from '@/constants/Images';
import Header from '@/components/Header/Header';
import Routes from '@/constants/Routes';
import ItemHomeScreen from '@/screens/home/ItemHomeScreen';

const HomeScreen: React.FC = () => {
  const [courses, setCourses] = useState<any[]>([]);
  const [courseCount, setCourseCount] = useState(0);

  const styles = useStyles();

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('courses')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        const list = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCourseCount(snapshot.size);
        console.log('Total Courses:', snapshot.size);
        setCourses(list);
      });
    return () => unsubscribe();
  }, []);

  const handlePress = () => {
    navigate(Routes.ADD_SCREEN);
  };

  return (
    <WrapperContainer style={styles.container}>
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
            Embark on a thrilling journey where React Native comes to change
            life!
          </Text>
        </View>

        <View style={styles.whiteCard}>
          <FlatList
            data={courses}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <ItemHomeScreen item={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}
          />
        </View>
      </View>
    </WrapperContainer>
  );
};

export default HomeScreen;
