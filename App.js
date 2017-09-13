import React from 'react';
import {Font} from 'expo';
import {StyleSheet, Text, View} from 'react-native';
import Loading from './containers/Loading/Loading';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true
        };
    }
    componentDidMount() {
        /* eslint-disable */
        Font.loadAsync({
            'Merriweather-Black': require('./assets/fonts/Merriweather-Black.ttf'),
            'Merriweather-Bold': require('./assets/fonts/Merriweather-Bold.ttf'),
            'Raleway-Italic': require('./assets/fonts/Raleway-Italic.ttf'),
            'Raleway-Light': require('./assets/fonts/Raleway-Light.ttf'),
            'ScopeOne-Regular': require('./assets/fonts/ScopeOne-Regular.ttf')
        }).then(() => {
            this.setState(() => ({
                isLoading: false
            }));
        });
        /* eslint-enable */
    }
    render() {
        if (this.state.isLoading) {
            return <Loading />;
        }
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
            </View>
        );
    }
}
