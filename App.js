import React from 'react';
import {View, StatusBar} from 'react-native';
import {Font} from 'expo';
import ApolloClient, {createNetworkInterface} from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
// import Sentry from 'sentry-expo';

// Styles
import base from './styles/base.styles';

// Components
import Loading from './containers/Loading/Loading';
import Landing from './containers/Landing/Landing';

// Sentry.config('https://b01ce80788b94854837fbc9d8ce0f178@sentry.io/216306').install();

const client = new ApolloClient({
    networkInterface: createNetworkInterface({uri: 'https://api.graph.cool/simple/v1/cj5wyr1lgr60o0183qbxkpjll'})
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
            <View style={base.appContainer}>
                <StatusBar
                    currentHeight={56}
                    translucent={false}
                    backgroundColor="rgba(0, 0, 0, 0.20)"
                    animated
                />
                <ApolloProvider client={client}>
                    <Landing />
                </ApolloProvider>
            </View>
        );
    }
}
