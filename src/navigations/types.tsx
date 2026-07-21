import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import Routes from '@/constants/Routes';

export type RootStackParamList = {
  [Routes.HOME_SCREEN]: undefined;

  [Routes.ADD_SCREEN]: undefined;

  [Routes.ADD_DETAILS_SCREEN]: {
    course: {
      id: string;
      courseName: string;
      banner: string;
    };
  };

  [Routes.VIDEO_PLAYER_SCREEN]: {
    url: string;
  };
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
export interface AddCourseParams {
  courseName: string;
  imagePath: string;
}

export type AddDetailsRouteProp = RouteProp<
  RootStackParamList,
  typeof Routes.ADD_DETAILS_SCREEN
>;
