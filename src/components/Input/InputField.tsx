import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { useStyles } from '@/components/Input/styles';
import Colors from '@/constants/Colors';
import { InputFieldProps } from '@/components/types';

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
}) => {
  const styles = useStyles();

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={Colors.GREY}
        />
      </View>
    </View>
  );
};

export default InputField;
