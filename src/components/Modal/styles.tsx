import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';
import { moderateScale } from '@/styles/scaling';

export const useStyles = () =>
  useMemo(
    () =>
      StyleSheet.create({
        overlay: {
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.45)',
          justifyContent: 'center',
          alignItems: 'center',
        },

        container: {
          width: '82%',
          backgroundColor: Colors.WHITE,
          borderRadius: moderateScale(20),
          padding: moderateScale(20),
        },

        closeButton: {
          position: 'absolute',
          top: moderateScale(12),
          left: moderateScale(12),
          zIndex: 1,
        },

        closeText: {
          fontSize: moderateScale(18),
          fontWeight: '700',
          color: Colors.BLACK,
        },

        title: {
          textAlign: 'center',
          fontSize: moderateScale(20),
          fontWeight: '700',
          color: Colors.INDIGO,
          marginBottom: moderateScale(20),
        },

        label: {
          fontSize: moderateScale(15),
          color: Colors.BLACK,
          marginBottom: moderateScale(8),
        },

        input: {
          height: moderateScale(45),
          borderWidth: 1,
          borderColor: Colors.GREY,
          borderRadius: moderateScale(10),
          paddingHorizontal: moderateScale(12),
          fontSize: moderateScale(15),
          color: Colors.BLACK,
        },

        saveButton: {
          marginTop: moderateScale(25),
          height: moderateScale(48),
          borderRadius: moderateScale(10),
          backgroundColor: Colors.INDIGO,
          justifyContent: 'center',
          alignItems: 'center',
        },

        saveText: {
          color: Colors.WHITE,
          fontSize: moderateScale(16),
          fontWeight: '600',
        },
      }),
    [],
  );