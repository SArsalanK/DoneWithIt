import React from 'react'
import { View, Text, Modal } from 'react-native'
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';

import AppText from '../components/AppText'
import styles from '../components/styles'
import colors from '../config/colors'

export default function UploadScreen({ onDone, progress = 0, visible = false }) {
    return (
        <Modal visible={visible}>
            <View style={styles.uploadScreenContainer}>
                {progress < 1 ? (<Progress.Bar color={colors.primary} progress={progress} width={200} />) : (<LottieView style={styles.lottieAnimation}autoplay loop={false} source={require('../assets/animations/done.json')} onAnimationFinish={onDone}></LottieView>) }
            </View>
        </Modal>
    )
}
