import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors.styles';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    item: {
        backgroundColor: colors.black,
        flex: 0,
        width: (width / 2) - 20,
        height: (width / 2) - 20,
        marginBottom: 15,
        borderRadius: 5,
        borderWidth: 0
    },
    thumb: {
        borderRadius: 5,
        borderWidth: 0,
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        zIndex: 1
    },
    cardTitle: {
        backgroundColor: colors.white,
        paddingHorizontal: 5,
        paddingTop: 2,
        paddingBottom: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderWidth: 0,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        zIndex: 3
    },
    title: {
        width: '100%',
        color: colors.black,
        fontSize: 16,
        textAlign: 'center'
    }
});

export default styles;
