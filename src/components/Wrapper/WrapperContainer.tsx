import React from 'react';
import { StatusBar } from 'react-native';
import Colors from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStyles } from '@/components/Wrapper/styles';
import { WrapperContainerProps } from '@/components/types';

const WrapperContainer: React.FC<WrapperContainerProps> = ({
  children,
  style,
  ...safeAreaProps
}) => {
  const styles = useStyles();
  return (
    <SafeAreaView
      style={[
        styles.container,
        style,
        {
          backgroundColor: Colors.WHITE,
        },
      ]}
      {...safeAreaProps}
    >
      <StatusBar barStyle="dark-content" backgroundColor={Colors.WHITE} />
      {children}
    </SafeAreaView>
  );
};

export default React.memo(WrapperContainer);
