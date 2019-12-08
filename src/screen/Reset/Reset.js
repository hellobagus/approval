import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {Button , TextField, ErrorView} from '../../components/common';
import styles from './styles';

import ShadowStyles from 'helpers/ShadowStyles';
import TextStyles from 'helpers/TextStyles';
import getUser from 'selectors/UserSelectors';
import errorsSelector from 'selectors/ErrorSelectors';
import { isLoadingSelector } from 'selectors/StatusSelectors';
import strings from 'localization';
import { login, actionTypes } from 'actions/UserActions';

function Login(props) {
  const [newPass, setNewPass] = useState('');
  const [conPass, setConPass] = useState('');

  const user = useSelector(state => getUser(state));
  const isLoading = useSelector(state => isLoadingSelector([actionTypes.LOGIN], state));
  const errors = useSelector(state => errorsSelector([actionTypes.LOGIN], state));

  const dispatch = useDispatch();
  const resetUser = useCallback(() => dispatch(reset(newPass, conPass)), [newPass, conPass, dispatch]);
  
  useEffect(() => {
    console.log(user);
    // if (user !== null) {
    //   props.navigation.navigate('App');
    // }
  });

  return (
    
    <View style={styles.container}>

     <Image source={require('../../assets/images1.png')}/>
      <View style={[styles.formContainer]}>
        <Text style={TextStyles.fieldTitle}>
          {"New Password"}
        </Text>
        <TextField
          placeholder={"New Password"}
          onChangeText={setNewPass}
          value={newPass}
        />
        <Text style={TextStyles.fieldTitle}>
          {"Confirm Password"}
        </Text>
        <TextField
          placeholder={"Confirm Password"}
          value={conPass}
          onChangeText={setConPass}
          secureTextEntry
        />
        <ErrorView errors={errors} />
        <Button
          onPress={resetUser}
          title={isLoading ? strings.loading : "Reset"}
        />
      </View>
    </View>
  );
}

Login.navigationOptions = {
  header: null,
};

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Login;
