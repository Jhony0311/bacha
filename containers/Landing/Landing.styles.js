import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors.styles';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        flex: 0,
        height: 200,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: colors.primary,
        width: '100%'
    },
    headerTitle: {
        flex: 0,
        fontSize: 32,
        color: colors.accent,
        textAlign: 'center',
        textShadowColor: colors.black,
        textShadowOffset: {
            width: 2,
            height: 2
        },
        zIndex: 3
    },
    headerImage: {
        position: 'absolute',
        width,
        height: 200,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    }
});

export default styles;
