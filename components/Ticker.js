// @flow
import * as React from 'react';

import { StyleSheet } from 'react-native'

import {
  Text,
  List,
  ListItem,
  Grid,
  Col,
} from 'native-base';

import { TickerType } from '../types';

type Props = {
  ticker: TickerType
}

export default class Ticker extends React.Component<Props> {
  render() {
    const ticker: TickerType = this.props.ticker;
    const { code, last, highestBid, percentChange } = ticker;
    const percentChangeStyle = percentChange > 0 ? styles.positive :
      styles.negative;

    return (
      <Grid>
        <Col>
          <Text style={styles.code}>{code}</Text>
        </Col>
        <Col style={styles.last}>
          <Text style={styles.small}>{last}</Text>
        </Col>
        <Col style={styles.highestBid}>
          <Text style={styles.small}>{highestBid}</Text>
        </Col>
        <Col style={percentChangeStyle}>
          <Text style={styles.small}>{percentChange}%</Text>
        </Col>
      </Grid>
    )
  }
}

const styles = StyleSheet.create({
  code: {
    fontSize: 14
  },
  last: {},
  highestBid: {},
  small: {
    padding: 5,
    fontSize: 10
  },
  positive: {
    backgroundColor: '#00CE2F'
  },
  negative: {
    backgroundColor: 'red'
  }
})
