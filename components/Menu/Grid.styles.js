import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    menuGrid: {
        width,
        height: height - 200 - 15
    },
    menuGridContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingTop: 15,
        paddingLeft: 5,
        paddingRight: 5
    }
});

export default styles;
