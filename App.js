import React from 'react';
import {Font} from 'expo';
// import Sentry from 'sentry-expo';

// Components
import Loading from './containers/Loading/Loading';
import Landing from './containers/Landing/Landing';

// Sentry.config('https://b01ce80788b94854837fbc9d8ce0f178@sentry.io/216306').install();

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
            <Landing />
        );
    }
}
