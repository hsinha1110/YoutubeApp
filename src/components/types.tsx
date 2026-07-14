import { ImageSourcePropType, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { SafeAreaViewProps } from 'react-native-safe-area-context';


export interface IconTextButtonProps {
  title?: string;
  Icon?: any;
  onPress: () => void;
  style?: any;
  color?: string;
  textStyle?: TextStyle;
}

export interface WrapperContainerProps extends SafeAreaViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export interface HeaderProps {
  title: string;
  image: ImageSourcePropType;
}
export interface InputFieldProps {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}
export interface ImagePickerProps {
  image?: string;
  onChange: (uri: string) => void;
}

export interface AddVideoModalProps {
  visible: boolean;
  youtubeLink: string;
  setYoutubeLink: (text: string) => void;
  onClose: () => void;
  onSave: () => void;
}