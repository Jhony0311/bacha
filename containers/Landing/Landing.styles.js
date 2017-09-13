import {StyleSheet} from 'react-native';
import colors from '../../styles/colors.styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.back,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    header: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: colors.primary,
        width: '100%'
    },
    headerTitle: {
        fontSize: 32,
        color: colors.white,
        textAlign: 'center'
    }
});

export default styles;
