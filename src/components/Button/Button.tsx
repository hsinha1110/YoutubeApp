import { Pressable, Text, TextStyle } from 'react-native';
import { useStyles } from '@/components/Button/styles';
import { IconTextButtonProps } from '@/components/types';

const IconTextButton = ({
  title,
  Icon,
  onPress,
  style,
  color,
  textStyle,
}: IconTextButtonProps) => {
  const styles = useStyles();

  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      {Icon && <Icon size={28} color={color} />}
      {title && <Text style={[styles.text, textStyle]}>{title}</Text>}
    </Pressable>
  );
};

export default IconTextButton;
