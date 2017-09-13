import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './Landing.styles';
import base from '../../styles/base.styles';

/* eslint-disable-next-line */
const headerImage = require('../../assets/images/landing-header.jpg');

class Landing extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={headerImage} />
                    <Text style={[base.titleText, styles.headerTitle]}>Que se te antoja hoy?</Text>
                </View>
                <View>
                    <Text>The Menu here</Text>
                </View>
            </View>
        );
    }
}

export default Landing;
