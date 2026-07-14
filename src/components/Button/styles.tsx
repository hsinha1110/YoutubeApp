import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';
import { moderateScale } from '@/styles/scaling';
import { FONT_SIZE, FONTS } from '@/constants/Fonts';

export const useStyles = () =>
  useMemo(
    () =>
      StyleSheet.create({
        container: {
          flexDirection: 'row',
          alignItems: 'center',
          padding: 12,
          backgroundColor: Colors.WHITE,
          borderRadius: moderateScale(10),
          gap: moderateScale(10),
        },
        text: {
          fontSize: FONT_SIZE.TITLE,
          fontFamily: FONTS.POPPINS_SEMIBOLD,
          flex: 1,
          textAlign: 'center',
        },
      }),
    [],
  );
