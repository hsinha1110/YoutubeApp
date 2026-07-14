import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { PlusIcon } from 'react-native-heroicons/solid';
import { useStyles } from '@/screens/details/styles';
import WrapperContainer from '@/components/Wrapper/WrapperContainer';
import IconTextButton from '@/components/Button/Button';
import Colors from '@/constants/Colors';
import AddVideoModal from '@/components/Modal/AddVideoModal';

const DetailsScreen: FC = () => {
    const [youtubeLink, setYoutubeLink] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const styles = useStyles();

    const handleAddVideo = () => {
        setIsModalVisible(true);
    };

    return (
        <WrapperContainer edges={['top', 'bottom']}>
            <View style={styles.container}>
                <IconTextButton
                    Icon={PlusIcon}
                    onPress={handleAddVideo}
                    style={styles.addButton}
                    color={Colors.WHITE}
                />
                <AddVideoModal
                    visible={isModalVisible}
                    youtubeLink={youtubeLink}
                    setYoutubeLink={setYoutubeLink}
                    onClose={() => setIsModalVisible(false)}
                    onSave={() => { }}
                />
            </View>
        </WrapperContainer>
    );
};

export default DetailsScreen;