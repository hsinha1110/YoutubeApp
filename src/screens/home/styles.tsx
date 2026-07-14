import Colors from '@/constants/Colors';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { moderateScale } from '@/styles/scaling';
import { FONT_SIZE, FONTS } from '@/constants/Fonts';
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
          right: 20,
          bottom: 20,

          width: 60,
          height: 60,
          borderRadius: 16,

          backgroundColor: Colors.GREEN,
          justifyContent: 'center',
          alignItems: 'center',

          zIndex: 999, // iOS
          elevation: 20, // Android

          shadowColor: Colors.BLACK,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 8,
        },
        greenContainer: {
          marginTop: moderateScale(20),
          height: moderateScale(300),
          backgroundColor: Colors.GREEN,
          borderTopLeftRadius: moderateScale(30),
          borderTopRightRadius: moderateScale(30),
          alignItems: 'center',
        },
        title: {
          fontFamily: FONTS.POPPINS_SEMIBOLD,
          fontSize: FONT_SIZE.TITLE,
          color: Colors.WHITE,
          marginBottom: moderateScale(10),
          textAlign: 'center',
        },
        subTitle: {
          fontFamily: FONTS.POPPINS_REGULAR,
          fontSize: FONT_SIZE.XL,
          color: Colors.WHITE,
          textAlign: 'center',
        },
        textContainer: {
          marginTop: moderateScale(30),
          alignItems: 'center',
          paddingHorizontal: moderateScale(20),
        },

        whiteCard: {
          position: 'absolute',
          top: moderateScale(150),
          width: '100%',
          height: '80%',
          backgroundColor: Colors.WHITE,
          borderRadius: moderateScale(20),
          padding: moderateScale(15),

          zIndex: 2,
          elevation: 5,
        },
      }),

    [],
  );
