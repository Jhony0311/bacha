import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors.styles';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    item: {
        backgroundColor: colors.secondary,
        flex: 0,
        width: (width / 2) - 15,
        height: (width / 2) - 15,
        marginBottom: 15
    },
    thumb: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0
    },
    title: {
        position: 'absolute',
        bottom: 15,
        width: '100%',
        color: colors.white,
        fontSize: 18,
        textAlign: 'center'
    }
});

export default styles;
