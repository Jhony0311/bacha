import React from 'react';
import {ScrollView} from 'react-native';
import PropTypes from 'prop-types';

import styles from './Grid.styles';

const Grid = props => (
    <ScrollView styles={styles.menuGrid} contentContainerStyle={styles.menuGridContainer}>
        {props.children}
    </ScrollView>
);

Grid.propTypes = {
    children: PropTypes.node
};

export default Grid;
