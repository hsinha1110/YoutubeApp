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
          backgroundColor: Colors.CREAM,
        },
        addButton: {
          position: 'absolute',
          right: moderateScale(20),
          bottom: moderateScale(60),
          width: moderateScale(60),
          height: moderateScale(60),
          borderRadius: moderateScale(16),
          backgroundColor: Colors.GREEN,
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 999,
          shadowColor: Colors.BLACK,
          shadowOffset: {
            width: 0,
            height: moderateScale(4),
          },
          shadowOpacity: 0.3,
          shadowRadius: moderateScale(8),
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
          height: moderateScale(700),
          backgroundColor: Colors.WHITE,
          borderRadius: moderateScale(20),
          padding: moderateScale(15),
          zIndex: 2,
          paddingBottom: moderateScale(150),
        },
        card: {
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: Colors.WHITE,
          borderRadius: moderateScale(15),
          padding: moderateScale(12),
          marginBottom: moderateScale(15),
          // Android
          elevation: 3,
          // iOS
          shadowColor: Colors.BLACK,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.15,
          shadowRadius: moderateScale(4),
        },

        image: {
          width: moderateScale(100),
          height: moderateScale(100),
          borderRadius: moderateScale(12),
        },

        info: {
          marginLeft: moderateScale(15),
        },

        courseName: {
          fontSize: moderateScale(18),
          fontWeight: '600',
          color: Colors.BLACK,
        },

        videoText: {
          marginTop: moderateScale(5),
          color: Colors.ORANGE,
          fontWeight: '600',
        },
        contentContainerStyle: {
          paddingBottom: moderateScale(30),
        },
      }),
    [],
  );
