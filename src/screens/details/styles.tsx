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
        headerContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: moderateScale(20),
        },

        courseTitle: {
          flex: 1,
          fontSize: moderateScale(20),
          fontWeight: 'bold',
          marginRight: moderateScale(16),
        },

        bannerImage: {
          width: moderateScale(100),
          height: moderateScale(100),
          borderRadius: moderateScale(12),
          resizeMode: 'cover',
        },
        addButton: {
          position: 'absolute',
          right: moderateScale(20),
          bottom: moderateScale(20),
          width: moderateScale(60),
          height: moderateScale(60),
          borderRadius: moderateScale(18),

          backgroundColor: Colors.GREEN,
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: Colors.BLACK,
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.25,
          shadowRadius: moderateScale(20),
          elevation: 5,
        },
        greenContainer: {
          marginTop: moderateScale(20),
          height: moderateScale(300),
          backgroundColor: Colors.GREEN,
          borderTopLeftRadius: moderateScale(30),
          borderTopRightRadius: moderateScale(30),
          alignItems: 'center',
        },
        videoImage: {
          width: '100%',
          height: moderateScale(200),
          borderRadius: moderateScale(10),
          marginTop: moderateScale(20),
        },
      }),
    [],
  );
