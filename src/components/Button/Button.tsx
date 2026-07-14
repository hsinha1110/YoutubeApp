import { Pressable, Text } from 'react-native';
import { useStyles } from './styles';
import { IconTextButtonProps } from '@/components/types';

const IconTextButton = ({
  title,
  Icon,
  onPress,
  style,
  color,
}: IconTextButtonProps) => {
  const styles = useStyles();

  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      {Icon && <Icon size={28} color={color} />}
      {title && <Text style={styles.text}>{title}</Text>}
    </Pressable>
  );
};

export default IconTextButton;
