// @flow
import * as React from 'react';
import { TabNavigator } from 'react-navigation';
import { Footer, FooterTab, Container, Header, Text, Left, Body, Right, Button, Icon, Title }
  from 'native-base';

import TickersScreen from './screens/TickersScreen';
import AboutScreen from './screens/AboutScreen';

import api from './services/api';

const customProps = { api: api.create()};

const App = TabNavigator({
  Tickers: { screen: props => (<TickersScreen {...props} {...customProps} />) },
  About: { screen: AboutScreen }
}, {
  tabBarPosition: 'bottom',
  tabBarComponent: props => {
    return (
      <Footer>
        <FooterTab>
          <Button
            vertical
            active={props.navigationState.index === 0}
            onPress={() => props.navigation.navigate('Tickers')}>
            <Icon name='logo-bitcoin' />
            <Text>Tickers</Text>
          </Button>
          <Button
            vertical
            active={props.navigationState.index === 1}
            onPress={() => props.navigation.navigate('About')}>
            <Icon name='ios-information' />
            <Text>About</Text>
          </Button>
        </FooterTab>
      </Footer>
    )
  }
})

export default App;
