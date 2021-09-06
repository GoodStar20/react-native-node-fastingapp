import { StyleSheet, Dimensions } from 'react-native';
import { screenWidth } from 'Theme';

const deviceWidth = Dimensions.get('window').width;

const scale = deviceWidth / screenWidth;

export default StyleSheet.create({
  background: {
    backgroundColor: 'white'
  },
  contentView: {
    position: 'relative',
    flexGrow: 1,
    paddingHorizontal: 20 * scale
  },

  //----header view----//
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
  },
  //----content view----//
  itemView: {
    paddingVertical: 5 * scale,
    marginHorizontal: 10 * scale,
    marginVertical: 5 * scale,
    borderWidth: 0,
    borderColor: 'transparent',
    marginTop: 10 * scale
  },
  itemIcon: {
    fontSize: 25 * scale,
    color: 'black'
  },
  itemText: {
    fontSize: 18 * scale,
    color: 'black'
  },
  inputView: {
    marginHorizontal: 5 * scale,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    fontSize: 16 * scale
  },
  saveBtn: {
    marginTop: 20 * scale,
    alignSelf: 'center'
  }
});
