import React, { useState } from 'react';
import { Text, Icon, View, Button, CheckBox, Switch } from 'native-base';
import Modal from 'react-native-modal';

import styles from './styles';

const SettingModal = ({
  sort,
  setSort,
  subscribed,
  setSubscribed,
  toggleModal,
  isModalVisible
}) => {
  const [checked, setChecked] = useState(sort);
  const [activeSubscribed, setActiveSubscribed] = useState(subscribed);

  const changeSetting = () => {
    setSort(checked);
    setSubscribed(activeSubscribed);
    toggleModal();
  };
  return (
    <Modal
      isVisible={isModalVisible}
      animationIn="fadeIn"
      animationOut="fadeOut">
      <View style={styles.modalContainer}>
        <Icon
          type="AntDesign"
          name="close"
          color={'black'}
          onPress={toggleModal}
          style={styles.modalCloseIcon}
        />
        <Text style={styles.modalTitle}>Settings</Text>
        <View style={styles.checkView}>
          <CheckBox
            checked={checked === 'name'}
            onPress={() => setChecked('name')}
            style={styles.checkbox}
          />
          <Text style={styles.checkedText}>Name</Text>
        </View>
        <View style={styles.checkView}>
          <CheckBox
            checked={checked === 'age'}
            onPress={() => setChecked('age')}
            style={styles.checkbox}
          />
          <Text style={styles.checkedText}>Age</Text>
        </View>
        <View style={styles.switchView}>
          <Switch
            style={styles.switchItem}
            value={activeSubscribed}
            onValueChange={value => setActiveSubscribed(value)}
          />
          <Text style={styles.switchText}>ActiveSubscribed</Text>
        </View>

        <Button success style={styles.modalBtn} onPress={changeSetting}>
          <Text style={styles.todayText}>Okay</Text>
        </Button>
      </View>
    </Modal>
  );
};

export default SettingModal;
