import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { FONTS, FONT_SIZE } from '@/constants/Fonts';
import { moderateScale } from '@/styles/scaling';
import Colors from '@/constants/Colors';

export const useStyles = () =>
  useMemo(
    () =>
      StyleSheet.create({
        container: {
          height: moderateScale(50),
          backgroundColor: Colors.LIGHT_WHITE,
          borderRadius: moderateScale(12),
          justifyContent: 'center',
          paddingHorizontal: moderateScale(15),
          marginTop: moderateScale(5),
        },
        label: {
          marginBottom: moderateScale(8),
          fontFamily: FONTS.POPPINS_SEMIBOLD,
          fontSize: FONT_SIZE.XL,
          color: Colors.BLACK,
        },
        input: {
          fontFamily: FONTS.POPPINS_REGULAR,
          fontSize: FONT_SIZE.MD,
          color: Colors.BLACK,
          padding: 0,
          includeFontPadding: false,
          textAlignVertical: 'center',
        },
      }),
    [],
  );
