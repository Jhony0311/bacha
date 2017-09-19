import {StyleSheet} from 'react-native';
import colors from './colors.styles';

const base = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: colors.back,
        justifyContent: 'flex-start'
    },
    bigTitle: {
        fontSize: 26,
        color: colors.text
    },
    titleText: {
        fontFamily: 'Cabin-Bold'
    },
    regularText: {
        fontFamily: 'Raleway-Regular'
    },
    boldText: {
        fontFamily: 'Cabin-SemiBold'
    },
    italicText: {
        fontFamily: 'Raleway-Italic'
    },
    lightText: {
        fontFamily: 'Raleway-Light'
    }
});


export default base;
