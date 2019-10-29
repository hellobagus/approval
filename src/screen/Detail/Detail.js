import React, { useCallback, useEffect } from "react";
import {
  stylesheet,
  Image,
  TouchableOpacity,
  StatusBar,
  FlatList,
  ScrollView,
} from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  Icon,
  Text,
  Title,
  Left,
  Right,
  Body,
  Input,
  Item,
  Footer,
  View,
  FooterTab,
  Badge
} from "native-base";
import PropTypes from 'prop-types';


import { useSelector } from "react-redux";

import styles from "./styles";
import Style from "../../Theme/Style";

import NavigationService from "../../components/navigation/AppNavigator";

import TextStyles from "helpers/TextStyles";
import strings from "localization";
import getUser from "selectors/UserSelectors";
import { Card } from "react-native-elements";
import SwipeablePanel from "rn-swipeable-panel";



function Detail(props) {
  
  
  const user = useSelector(state => getUser(state));
  const getMessage = useCallback(
    () => `${strings.homeMessage} ${user && user.name}`,
    [user]
  );


  useEffect(() => {
    if (user !== null) {
      props.navigation.navigate('App');
    }
  });
  

  return (
      
    <Container style={Style.bgMain}>

        
        <View style={styles.header}></View>
              <Content
        style={Style.layoutInner}
        contentContainerStyle={Style.layoutContent}
      >
        <ScrollView>
          <TouchableOpacity
            style={styles.item}
            underlayColor="transparent"
          >
            <View>
              <View style={styles.itemRow}>
                <View style={styles.itemOverview}>
                  <View>
                    <Text style={styles.itemLocation}>Approval Name</Text>

                    <Text style={styles.itemPrice}>AP - CHANGE DUE DATE</Text>
                  </View>
                </View>

                <View style={styles.itemRight}>
                  <Text style={styles.itemDate}>Total Count</Text>
                  <View style={styles.itemBtn1}>
                    <Text style={styles.itemEntity}>6</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </Content>
    </Container>
  );
}


Detail.navigationOptions = {
    headerTransparent: true,
    headerStyle: {
        marginTop: 30,
      }, 
};
  


export default Detail;
