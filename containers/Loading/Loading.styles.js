import {StyleSheet} from 'react-native';
import colors from '../../styles/colors.styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.back,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: colors.primary
    }
});


export default styles;
