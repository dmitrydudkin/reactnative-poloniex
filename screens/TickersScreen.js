// @flow
import * as React from 'react';
import { observable, computed, action } from 'mobx';
import { observer, Observer } from 'mobx-react';

import { ActivityIndicator } from 'react-native'
import type { NavigationState } from 'react-navigation/src/TypeDefinition';

import { TickerType } from '../types';

import {
  View,
  Content,
  Container,
  Header,
  Text,
  List,
  ListItem,
  Left,
  Grid,
  Col,
  Body,
  Right,
  Button,
  Icon,
  Title
} from 'native-base';

import Ticker from '../components/Ticker';

type Props = {
  navigation: NavigationState,
  api: Object
}

export default class TickersScreen extends React.Component<Props> {
  @observable tickers: Array<TickerType> = [];

  async getTickets() {
    // TODO: catch error
    const response: Response = await this.props.api.getTickets();

    if (!response.ok) return;

    const data: Object = response.data;
    const codes: Array<string> = Object.keys(data);

    this.tickers = codes.map((ticker: string) => {
      const { last, highestBid, percentChange } = data[ticker];

      return { code: ticker, last, highestBid, percentChange }
    });
  }

  componentDidMount() {
    this.getTickets(); // first load

    //TODO: clear interval when tab changed
    setInterval(() => {
      this.getTickets()
    }, 5000);
  }

  list(): List {
    if (!this.tickers.length)
      return <ActivityIndicator />

    const rows: Array<ListItem> = this.tickers.map((ticker: ticker) => {
      return (
        <ListItem key={ticker.code}>
          <Ticker ticker={ticker} />
        </ListItem>
      )
    })

    return <List>{rows}</List>
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
          </Left>
          <Body>
            <Title>Tickets</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <Content>
          <Observer>
            { this.list.bind(this) }
          </Observer>
        </Content>
      </Container>
    );
  }
}

interface Response {
  ok: string;
  data: Object
}
