import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

import styles from './Landing.styles';
import base from '../../styles/base.styles';

import Loading from '../Loading/Loading';
import MenuItem from '../../components/Menu/MenuItem';

/* eslint-disable-next-line */
const headerImage = require('../../assets/images/landing-header.jpg');

const Landing = ({data: {loading, allCategories}}) => {
    if (loading) {
        return (
            <Loading />
        );
    }
    return (
        <View style={base.appContainer}>
            <View style={styles.header}>
                <Image style={styles.headerImage} source={headerImage} />
                <Text style={[base.titleText, styles.headerTitle]}>Que se te antoja hoy?</Text>
            </View>
            <ScrollView styles={styles.menuGrid} contentContainerStyle={styles.menuGridContainer}>
                {
                    allCategories.map((c) => {
                        if (c.isInMenu) {
                            return (
                                <MenuItem key={c.id} {...c} />
                            );
                        }
                        return false;
                    })
                }
            </ScrollView>
        </View>
    );
};

export default graphql(gql`
    query {
        allCategories {
            id
            name
            isInMenu,
            imageUrl
        }
}`)(Landing);
