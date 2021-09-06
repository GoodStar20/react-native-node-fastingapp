import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Content,
  Text,
  Icon,
  Item,
  Input,
  Button
} from 'native-base';

import { getEditUser, updateUser } from 'Store/users/actions';
import { Routes } from 'Navigators/routes';
import { ACTION_TYPES } from 'Store/actionTypes';
import { Header, ToastMessage } from 'Components';
import styles from './styles';

const UserEdit = ({ route }) => {
  const { userId } = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { user, editUserState } = useSelector(state => state.users);

  const [userData, setUserData] = useState({
    name: '',
    mode: '',
    age: 0
  });

  const updateUserData = () => {
    if (userData.name === '') {
      ToastMessage('Please input User Name', 'warning', 'bottom');
      return;
    }
    if (userData.mode === '') {
      ToastMessage('Please input User Mode', 'warning', 'bottom');
      return;
    }
    if (isNaN(userData.age)) {
      ToastMessage('Age is invalid', 'warning', 'bottom');
      return;
    }
    dispatch(updateUser(userId, userData));
  };

  const handleBack = () => {
    dispatch({ type: ACTION_TYPES.EDIT_USER_REQUEST });
    navigation.navigate(Routes.Main);
  };

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      setUserData({
        ...userData,
        name: user.name,
        mode: user.mode,
        age: user.age
      });
    }
  }, [user]);

  useEffect(() => {
    if (editUserState) {
      ToastMessage('User data updated successfully', 'success', 'bottom');
    }
  }, [editUserState]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(getEditUser(userId));
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <Container style={styles.background}>
      <Header
        title="User Edit"
        leftComponent={
          <TouchableOpacity onPress={handleBack} style={styles.headerLeft}>
            <Icon
              type="MaterialIcons"
              name="arrow-back-ios"
              style={styles.backIcon}
            />
          </TouchableOpacity>
        }
      />
      <Content contentContainerStyle={styles.contentView}>
        <Item style={styles.itemView}>
          <Icon type="FontAwesome" name="user-o" style={styles.itemIcon} />
          <Input
            placeholder="User Name"
            style={styles.inputView}
            value={userData.name}
            onChangeText={text => setUserData({ ...userData, name: text })}
          />
        </Item>
        <Item style={styles.itemView}>
          <Icon type="FontAwesome" name="user-o" style={styles.itemIcon} />
          <Input
            placeholder="User Role"
            style={styles.inputView}
            value={userData.mode}
            onChangeText={text => setUserData({ ...userData, mode: text })}
            autoCapitalize="none"
          />
        </Item>
        <Item style={styles.itemView}>
          <Icon
            type="FontAwesome5"
            name="birthday-cake"
            style={styles.itemIcon}
          />
          <Input
            placeholder="Age"
            style={styles.inputView}
            onChangeText={text => setUserData({ ...userData, age: text })}
            value={userData.age.toString()}
            keyboardType="numeric"
          />
        </Item>
        <Button style={styles.saveBtn} onPress={updateUserData}>
          <Text>Update</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default UserEdit;
