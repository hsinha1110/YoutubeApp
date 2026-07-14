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
          flex: 1,
          backgroundColor: Colors.WHITE,
        },

        headerButton: {
          borderRadius: moderateScale(12),
          paddingVertical: moderateScale(14),
          paddingHorizontal: moderateScale(20),
        },

        bannerContainer: {
          marginTop: moderateScale(20),
        },

        bannerTitle: {
          fontFamily: FONTS.POPPINS_SEMIBOLD,
          fontSize: FONT_SIZE.XL,
          marginHorizontal: moderateScale(30),
          color: Colors.BLACK,
        },

        imagePickerStyle: {
          marginTop: moderateScale(20),
        },

        inputContainer: {
          paddingHorizontal: moderateScale(20),
          marginTop: moderateScale(20),
        },

        errorText: {
          color: Colors.RED,
          fontFamily: FONTS.POPPINS_REGULAR,
          fontSize: FONT_SIZE.SM,
          marginTop: moderateScale(5),
          marginLeft: moderateScale(5),
        },

        errorContainer: {
          marginTop: moderateScale(5),
        },
        addButton: {
          backgroundColor: Colors.GREEN,
          marginTop: moderateScale(20),
          marginHorizontal: moderateScale(20),
          color: Colors.WHITE,
          borderRadius: moderateScale(10),
        },
        addButtonText: {
          padding: moderateScale(5),
          color: Colors.WHITE,
          fontSize: moderateScale(16),
          fontFamily: FONTS.POPPINS_SEMIBOLD,
        }
      }),
    [],
  );
