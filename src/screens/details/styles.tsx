import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import Colors from '@/constants/Colors';
import { moderateScale } from '@/styles/scaling';

export const useStyles = () =>
  useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: Colors.WHITE,
        },

        addButton: {
          position: 'absolute',
          right: moderateScale(20),
          bottom: moderateScale(30),
          width: moderateScale(60),
          height: moderateScale(60),
          borderRadius: moderateScale(18),

          backgroundColor: Colors.GREEN,
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor:Colors.BLACK,
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.25,
          shadowRadius: moderateScale(20),
          elevation: 5,
        },
      }),
    [],
  );