import { FONT_SIZE, FONTS } from '@/constants/Fonts';
import { moderateScale, scale } from '@/styles/scaling';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

export const useStyles = () =>
  useMemo(
    () =>
      StyleSheet.create({
        container: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: moderateScale(20),
        },
        title: {
          fontFamily: FONTS.POPPINS_SEMIBOLD,
          fontSize: FONT_SIZE.TITLE,
        },
        image: {
          width: moderateScale(50),
          height: moderateScale(50),
          borderRadius: moderateScale(10),
        },
      }),
    [],
  );
