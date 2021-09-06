import React from 'react';
import { Header, Text } from 'native-base';

import styles from './styles';

const CustomHeader = ({ title, leftComponent, rightComponent }) => {
  return (
    <Header iosBarStyle={'light-content'} androidStatusBarColor={'black'}>
      {leftComponent && leftComponent}
      <Text style={styles.headerTitle}>{title}</Text>
      {rightComponent && rightComponent}
    </Header>
  );
};

export default CustomHeader;
