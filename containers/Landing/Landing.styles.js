import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors.styles';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    header: {
        height: 200,
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
    },
    headerImage: {
        position: 'absolute',
        width,
        height: 200,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    },
    menuGrid: {
        width,
        height: height - 200 - 15
    },
    menuGridContainer: {
        paddingTop: 15,
        paddingBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    }
});

export default styles;
