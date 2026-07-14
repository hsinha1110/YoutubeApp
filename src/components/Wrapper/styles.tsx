import Colors from '@/constants/Colors';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

export const useStyles = () =>
  useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: Colors.WHITE,
        },
      }),
    [],
  );
