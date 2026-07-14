import { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';
import { SafeAreaViewProps } from 'react-native-safe-area-context';

export interface IconTextButtonProps {
  title?: string;
  Icon?: React.ComponentType<any>;
  onPress?: () => void | Promise<void>;
  style?: StyleProp<ViewStyle>;
  color?: string;
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
