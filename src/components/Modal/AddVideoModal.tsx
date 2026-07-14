import React from 'react';
import { Modal, Pressable, Text, TextInput, View } from 'react-native';
import { AddVideoModalProps } from '../types';
import { useStyles } from './styles';
import Colors from '@/constants/Colors';

const AddVideoModal: React.FC<AddVideoModalProps> = ({
  visible,
  youtubeLink,
  setYoutubeLink,
  onClose,
  onSave,
}) => {
  const styles = useStyles();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Pressable
            style={styles.closeButton}
            onPress={onClose}
          >
            <Text style={styles.closeText}>✕</Text>
          </Pressable>

          <Text style={styles.title}>Add Video</Text>
          <Text style={styles.label}>Add Youtube Link</Text>

          <TextInput
            value={youtubeLink}
            onChangeText={setYoutubeLink}
            placeholder="Paste YouTube Link"
            placeholderTextColor={Colors.GREY}
            style={styles.input}
          />

          <Pressable
            style={styles.saveButton}
            onPress={onSave}
          >
            <Text style={styles.saveText}>Save</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default AddVideoModal;