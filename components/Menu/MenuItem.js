import React from 'react';
import {View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';

import styles from './MenuItem.styles';
import base from '../../styles/base.styles';

// /* eslint-disable-next-line */
// const headerImage = require('../../assets/images/landing-header.jpg');

const MenuItem = ({name, imageUrl}) => (
    <View style={styles.item}>
        <Image style={styles.thumb} source={{uri: imageUrl}} />
        <View style={styles.cardTitle}>
            <Text style={[base.regularText, styles.title]} >{name}</Text>
        </View>
    </View>
);

MenuItem.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
};

export default MenuItem;
