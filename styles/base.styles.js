import {StyleSheet} from 'react-native';
import colors from './colors.styles';

const base = StyleSheet.create({
    bigTitle: {
        fontSize: 26,
        color: colors.text
    },
    titleText: {
        fontFamily: 'Merriweather-Black'
    },
    regularText: {
        fontFamily: 'ScopeOne-Regular'
    },
    boldText: {
        fontFamily: 'Merriweather-Bold'
    },
    italicText: {
        fontFamily: 'Raleway-Italic'
    },
    lightText: {
        fontFamily: 'Raleway-Light'
    }
});


export default base;
