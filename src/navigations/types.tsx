import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import Routes from '@/constants/Routes';

export type RootStackParamList = {
  [Routes.HOME_SCREEN]: undefined;
  [Routes.ADD_SCREEN]: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  typeof Routes.HOME_SCREEN
>;

export type AddScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  typeof Routes.ADD_SCREEN
>;

export type HomeScreenRouteProp = RouteProp<
  RootStackParamList,
  typeof Routes.HOME_SCREEN
>;

export type AddScreenRouteProp = RouteProp<
  RootStackParamList,
  typeof Routes.ADD_SCREEN
>;
export interface InputFieldProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}