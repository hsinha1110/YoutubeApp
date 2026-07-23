import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { goBack } from '@/utils/navigationUtils';
import { AddCourseParams } from '@/navigations/types';
import { useStyles } from '@/screens/add/styles';
import ImagePicker from '@/components/Picker/ImagePicker';
import Colors from '@/constants/Colors';
import WrapperContainer from '@/components/Wrapper/WrapperContainer';
import InputField from '@/components/Input/InputField';
import IconTextButton from '@/components/Button/Button';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const AddScreen: React.FC = () => {
  const [courseName, setCourseName] = useState('');
  const [courseNameError, setCourseNameError] = useState('');
  const [banner, setBanner] = useState('');
  const [loading, setLoading] = useState(false);
  const styles = useStyles();

  const handleBack = () => {
    goBack();
  };

  const addCourse = async ({
    courseName,
    imagePath,
  }: AddCourseParams) => {
    try {
      const fileName = `courses/${Date.now()}.jpg`;
      const reference = storage().ref(fileName);
      await reference.putFile(imagePath);
      const imageUrl = await reference.getDownloadURL();
      const docRef = await firestore().collection('courses').add({
        courseName,
        banner: imageUrl,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

      return docRef.id;
    } catch (error) {
      console.log('Firebase Error:', error);
      throw error;
    }
  };

  const handleSubmit = async () => {
    if (!courseName.trim()) {
      setCourseNameError('Course Name is required');
      return;
    }

    setCourseNameError('');
    if (!banner) {
      Alert.alert('Validation', 'Please select course banner');
      return;
    }
    try {
      setLoading(true);
      await addCourse({
        courseName,
        imagePath: banner,
      });
      Alert.alert('Success', 'Course added successfully');
      setCourseName('');
      setBanner('');
      goBack();
    } catch (error) {
      console.log('Upload Error:', error);
      Alert.alert('Error', 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <WrapperContainer
      style={styles.container}
      edges={['top', 'bottom']}
    >
      <IconTextButton
        title="Add Course"
        Icon={ChevronLeftIcon}
        color={Colors.BLACK}
        style={styles.headerButton}
        onPress={handleBack}
      />

      <View style={styles.bannerContainer}>
        <Text style={styles.bannerTitle}>
          Upload the Course Banner Picture
        </Text>
      </View>

      <View style={styles.imagePickerStyle}>
        <ImagePicker
          image={banner}
          onChange={setBanner}
        />
      </View>

      <View style={styles.inputContainer}>
        <InputField
          label="Course Name"
          placeholder="Course Name"
          value={courseName}
          onChangeText={text => {
            setCourseName(text);
            if (courseNameError) {
              setCourseNameError('');
            }
          }}
        />

        {!!courseNameError && (
          <Text style={styles.errorText}>
            {courseNameError}
          </Text>
        )}
      </View>

      <IconTextButton
        title={loading ? 'Uploading...' : 'Add Course'}
        onPress={handleSubmit}
        style={styles.addButton}
        color={Colors.WHITE}
        textStyle={styles.addButtonText}
      />
    </WrapperContainer>
  );
};

export default AddScreen;