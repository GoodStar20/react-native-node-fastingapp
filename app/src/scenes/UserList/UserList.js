import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image, TouchableOpacity } from 'react-native';
import { Container, Content, View, Text, Button, Icon } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { getAllUsers } from 'Store/users/actions';
import { Header } from 'Components';
import { Images } from 'Theme';
import SettingModal from './SettingModal';
import styles from './styles';
import { Routes } from 'Navigators/routes';

const UserList = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { allList, counts } = useSelector(state => state.users);

  const [sort, setSort] = useState('name');
  const [subscribed, setSubscribed] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);

  const nextPage = () => {
    if (currentPage + 1 < maxPage) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(maxPage);
    }
  };

  const prevPage = () => {
    if (currentPage - 1 > 0) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(0);
    }
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    setCurrentPage(0);
    dispatch(getAllUsers(sort, subscribed, 0));
  }, [sort, subscribed]);

  useEffect(() => {
    dispatch(getAllUsers(sort, subscribed, currentPage));
  }, [currentPage]);

  useEffect(() => {
    setMaxPage(Math.ceil(counts / 5));
  }, [counts]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(getAllUsers(sort, currentPage));
    });
    return unsubscribe;
  }, [navigation]);

  const UsersList = ({ user }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() =>
        navigation.navigate(Routes.UserEdit, {
          userId: user._id
        })
      }>
      <Image source={Images.avatar} style={styles.itemAvatar} />
      <View style={styles.itemView}>
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userRole}>{user.mode}</Text>
      </View>
      <View style={styles.ageView}>
        <Text style={styles.userAge}>{user.age}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <Container style={styles.background}>
      <Header
        title="Users"
        rightComponent={
          <TouchableOpacity onPress={toggleModal} style={styles.settingView}>
            <Icon
              type="Entypo"
              name="dots-three-horizontal"
              style={styles.sortIcon}
            />
          </TouchableOpacity>
        }
      />
      <Content contentContainerStyle={styles.contentView}>
        {allList.length > 0 &&
          allList.map((user, index) => <UsersList user={user} key={index} />)}
        <View style={styles.pagination}>
          <Button small rounded onPress={prevPage} disabled={currentPage === 0}>
            <Icon type="MaterialCommunityIcons" name="skip-previous" />
          </Button>
          <Text>
            {currentPage + 1} / {maxPage}
          </Text>
          <Button
            small
            rounded
            onPress={nextPage}
            disabled={currentPage === maxPage - 1}>
            <Icon type="MaterialCommunityIcons" name="skip-next" />
          </Button>
        </View>
      </Content>

      <SettingModal
        sort={sort}
        setSort={setSort}
        subscribed={subscribed}
        setSubscribed={setSubscribed}
        toggleModal={toggleModal}
        isModalVisible={isModalVisible}
      />
    </Container>
  );
};

export default UserList;
