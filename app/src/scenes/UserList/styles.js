import { StyleSheet, Dimensions, Platform } from 'react-native';
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
    paddingBottom: 30 * scale
  },
  content: {
    position: 'relative',
    flex: 1
  },
  //----header view----//
  settingView: {
    alignItems: 'center',
    right: 10,
    top: 15,
    position: 'absolute'
  },
  sortIcon: {
    fontSize: 25 * scale,
    marginRight: 10 * scale
  },

  //----content view----//
  listContainer: {
    flex: 1,
    marginTop: 10 * scale
  },
  listItem: {
    marginVertical: 10 * scale,
    marginHorizontal: 25 * scale,
    padding: 15,
    backgroundColor: 'white',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 10,
    borderRadius: 10 * scale,
    justifyContent: 'center'
  },
  itemAvatar: {
    width: 80 * scale,
    height: 80 * scale,
    borderRadius: 50 * scale
  },
  itemView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 20 * scale
  },
  userRole: {
    fontSize: 18 * scale,
    marginTop: 5 * scale
  },
  ageView: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginLeft: 10 * scale
  },
  userAge: {
    fontSize: 18 * scale,
    justifyContent: 'center'
  },
  pagination: {
    paddingHorizontal: 40 * scale,
    marginTop: 20 * scale,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  modalContainer: {
    position: 'relative',
    backgroundColor: 'white',
    padding: 30 * scale,
    borderRadius: 10 * scale,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  },
  modalCloseIcon: {
    fontSize: 20 * scale,
    position: 'absolute',
    top: 15 * scale,
    right: 15 * scale
  },
  modalTitle: {
    fontSize: 28 * scale,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20 * scale
  },
  modalBtn: {
    alignSelf: 'center'
  },
  checkView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15 * scale
  },
  checkbox: {
    width: 20 * scale,
    height: 20 * scale
  },
  checkedText: {
    fontSize: 15 * scale,
    fontWeight: '400',
    marginLeft: 20 * scale
  },
  switchView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10 * scale,
    marginBottom: 20 * scale
  },
  switchItem: {
    transform: Platform.OS
      ? [{ scaleX: 0.7 }, { scaleY: 0.7 }]
      : [{ scaleX: 1 }, { scaleY: 1 }]
  },
  switchText: {
    fontSize: 15 * scale,
    fontWeight: '400',
    marginLeft: 10 * scale
  }
});
