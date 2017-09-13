import React from 'react';
import {Text, View} from 'react-native';
import styles from './Loading.styles';
import baseStyles from '../../styles/base.styles';

const Loading = () => (
    <View style={styles.container}>
        <Text style={[baseStyles.bigTitle, styles.title]}>Loading</Text>
    </View>
);

export default Loading;
