import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './MenuItem.styles';
import base from '../../styles/base.styles';

// /* eslint-disable-next-line */
// const headerImage = require('../../assets/images/landing-header.jpg');

const MenuItem = ({name, imageUrl}) => (
    <View style={styles.item}>
        <Image style={styles.thumb} source={{uri: imageUrl}} />
        <Text style={[base.boldText, styles.title]} >{name}</Text>
    </View>
);

export default MenuItem;
