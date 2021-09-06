import { StyleSheet, Dimensions } from 'react-native';
import { screenWidth } from 'Theme';

const deviceWidth = Dimensions.get('window').width;

const scale = deviceWidth / screenWidth;

export default StyleSheet.create({
  header: {
    backgroundColor: 'white',
    height: 60 * scale
  },
  headerTitle: {
    fontSize: 25 * scale,
    fontWeight: '600',
    alignSelf: 'center'
  },
  headerLeft: {
    justifyContent: 'center',
    paddingLeft: 15 * scale,
    position: 'absolute',
    left: 10 * scale,
    top: 15 * scale
  },
  sortIcon: {
    fontSize: 25 * scale
  }
});
