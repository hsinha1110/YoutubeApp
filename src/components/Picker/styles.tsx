import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import Colors from '@/constants/Colors';
import { moderateScale } from '@/styles/scaling';

export const useStyles = () =>
  useMemo(
    () =>
      StyleSheet.create({
        container: {
          width: moderateScale(120),
          height: moderateScale(120),
          borderWidth: 1.5,
          borderColor: Colors.GREY,
          borderRadius: moderateScale(12),
          backgroundColor: Colors.WHITE,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 6,
          shadowColor: Colors.BLACK,
          shadowOffset: {
            width: 0,
            height: 4, 
          },
          shadowOpacity: 0.18,
          shadowRadius: 6,
        },

        image: {
          width: '100%',
          height: '100%',
          borderRadius: moderateScale(12),
        },
      }),
    [],
  );
