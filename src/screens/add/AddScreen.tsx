import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { goBack } from '@/utils/navigationUtils';
import { useStyles } from './styles';
import ImagePicker from '@/components/Picker/ImagePicker';
import Colors from '@/constants/Colors';
import WrapperContainer from '@/components/Wrapper/WrapperContainer';
import InputField from '@/components/Input/InputField';
import IconTextButton from '@/components/Button/Button';

const AddScreen: React.FC = () => {
  const [courseName, setCourseName] = useState('');
  const [courseNameError, setCourseNameError] = useState('');
  const [banner, setBanner] = useState('');

  const styles = useStyles();

  const handleAddCourse = () => {
    goBack();
  };
  const handleSubmit = () => {
    if (!courseName.trim()) {
      setCourseNameError('Course Name is required');
      return;
    }

    setCourseNameError('');
  };
  return (
    <WrapperContainer style={styles.container} edges={['top', 'bottom']}>
      <IconTextButton
        title="Add Course"
        Icon={ChevronLeftIcon}
        color={Colors.BLACK}
        style={styles.headerButton}
        onPress={handleAddCourse}
      />
      <View style={styles.bannerContainer}>
        <Text style={styles.bannerTitle}>Upload the Course Banner Picture</Text>
      </View>
      <View style={styles.imagePickerStyle}>
        <ImagePicker image={banner} onChange={setBanner} />
      </View>
      <View style={styles.inputContainer}>
        <InputField
          label="Course Name"
          value={courseName}
          onChangeText={setCourseName}
          placeholder="Course Name"
        />
        {!!courseNameError && (
          <Text style={styles.errorText}>{courseNameError}</Text>
        )}
      </View>
      <IconTextButton
        onPress={() => {}}
        style={styles.addButton}
        color={Colors.WHITE}
      />
    </WrapperContainer>
  );
};

export default AddScreen;
