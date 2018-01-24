// @flow
import * as React from 'react';

import { Linking } from 'react-native';
import { View, Content, Container, Header, Left, Body, Right, Text, Title }
  from 'native-base';

import type { NavigationState } from 'react-navigation/src/TypeDefinition';

type Props = {
  navigation: NavigationState
}

export default class AboutScreen extends React.Component<Props> {
  render() {
    const goToRepo = () =>
      Linking.openURL('http://github.com/dmitrydudkin/reactnative-poloniex');

    return (
      <Container>
        <Header>
          <Left>
          </Left>
          <Body>
            <Title>About</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <Content >
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text
              style={{color: 'blue', fontSize: 14 }}
              onPress={goToRepo}>
              github.com/dmitrydudkin/reactnative-poloniex
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
}
