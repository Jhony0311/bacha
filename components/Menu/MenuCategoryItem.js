import React from 'react';
import {View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';

import styles from './MenuCategoryItem.styles';
import base from '../../styles/base.styles';

const MenuItem = ({name, imageUrl}) => (
    <View style={styles.item}>
        <Image style={styles.thumb} source={{uri: imageUrl}} />
        <View style={styles.cardTitle}>
            <Text style={[base.boldText, styles.title]} >{name.toUpperCase()}</Text>
        </View>
    </View>
);

MenuItem.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
};

export default MenuItem;
