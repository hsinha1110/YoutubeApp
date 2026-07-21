import React, { FC, useEffect, useState } from 'react';
import { Alert, FlatList, Image, Text, View } from 'react-native';
import { PlusIcon } from 'react-native-heroicons/solid';
import { useStyles } from '@/screens/details/styles';
import { useRoute } from '@react-navigation/native';
import { AddDetailsRouteProp } from '@/navigations/types';
import WrapperContainer from '@/components/Wrapper/WrapperContainer';
import IconTextButton from '@/components/Button/Button';
import Colors from '@/constants/Colors';
import firestore from '@react-native-firebase/firestore';
import AddVideoModal from '@/components/Modal/AddVideoModal';
import Header from '@/components/Header/Header';
import ItemVideo from '@/screens/video/ItemVideos';

const DetailsScreen: FC = () => {
  const [youtubeLink, setYoutubeLink] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [videos, setVideos] = useState<any[]>([]);
  const styles = useStyles();
  const routes = useRoute<AddDetailsRouteProp>();
  const { course } = routes.params;

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('courses')
      .doc(course.id)
      .collection('Videos')
      .onSnapshot(
        snapshot => {
          console.log('Course ID:', course.id);
          console.log('Documents:', snapshot.size);

          const data = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));

          console.log('Videos:', data);

          setVideos(data);
        },
        error => {
          console.log('Firestore Error:', error);
        },
      );

    return () => unsubscribe();
  }, [course.id]);
  const handleAddVideo = () => {
    setIsModalVisible(true);
  };
  const handleSaveVideo = async () => {
    if (!youtubeLink.trim()) {
      Alert.alert('Please enter YouTube link');
      return;
    }

    try {
      const videoId = youtubeLink.split('v=')[1]?.split('&')[0];
      const image = `https://img.youtube.com/vi/${videoId}/0.jpg`;

      await firestore()
        .collection('courses')
        .doc(course.id)
        .collection('Videos')
        .add({
          Link: youtubeLink,
          Image: image,
        });

      await firestore()
        .collection('courses')
        .doc(course.id)
        .update({
          count: firestore.FieldValue.increment(1),
        });

      Alert.alert('Video Added Successfully');
      setYoutubeLink('');
      setIsModalVisible(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WrapperContainer edges={['top', 'bottom']}>
      <View style={styles.container}>
        <Header title="Courses" image={{ uri: course.banner }} />
        <FlatList
          data={videos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <ItemVideo item={item} />}
        />
        <IconTextButton
          Icon={PlusIcon}
          onPress={handleAddVideo}
          style={styles.addButton}
          color={Colors.WHITE}
        />
        <AddVideoModal
          visible={isModalVisible}
          youtubeLink={youtubeLink}
          setYoutubeLink={setYoutubeLink}
          onClose={() => setIsModalVisible(false)}
          onSave={handleSaveVideo}
        />
      </View>
    </WrapperContainer>
  );
};

export default DetailsScreen;
