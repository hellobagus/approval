import React, { useCallback, useEffect } from "react";
import {
    stylesheet,
    Image,
    TouchableOpacity,
    StatusBar,
    FlatList,
    ScrollView
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
import PropTypes from "prop-types";

import { useSelector, useDispatch } from "react-redux";

import styles from "./styles";
import Style from "../../Theme/Style";

import NavigationService from "../../components/navigation/AppNavigator";

import TextStyles from "helpers/TextStyles";
import strings from "localization";
import getUser from "selectors/UserSelectors";
import { Card } from "react-native-elements";
import SwipeablePanel from "rn-swipeable-panel";
import { getMenu } from "../../actions/MenuActions";
import { selectMenu } from "../../selectors/MenuSelectors";

function Home(props) {
    const dispatch = useDispatch();

    const user = useSelector(state => getUser(state));
    const menu = useSelector(state => selectMenu(state));

    const getMenus = useCallback(() => dispatch(getMenu(user.userID)), [
        dispatch
    ]);
    const getMessage = useCallback(
        () => `${strings.homeMessage} ${user && user.name}`,
        [user]
    );

    useEffect(() => {
        getMenus();
    }, []);

    useEffect(() => {
        if (user !== null) {
            props.navigation.navigate("App");
        }
    });

    return (
        <Container style={Style.bgMain}>
            <View style={styles.container}>
                <StatusBar
                    hidden={false}
                    backgroundColor="#00BCD4"
                    translucent={true}
                />
                <View style={styles.header}></View>
                <Image
                    style={styles.avatar}
                    source={{
                        uri:
                            "https://bootdey.com/img/Content/avatar/avatar6.png"
                    }}
                />
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <Text>{getMessage()}</Text>
                    </View>
                </View>
            </View>
            <Content
                style={Style.layoutInner}
                contentContainerStyle={Style.layoutContent}
            >
                <ScrollView>
                    {menu.map((data, key) => (
                        <TouchableOpacity
                            key={key}
                            style={styles.item}
                            underlayColor="transparent"
                            onPress={() =>
                                props.navigation.navigate("Detail", { data })
                            }
                        >
                            <View>
                                <View style={styles.itemRow}>
                                    <View style={styles.itemOverview}>
                                        <View>
                                            <Text style={styles.itemLocation}>
                                                Approval Name
                                            </Text>

                                            <Text style={styles.itemPrice}>
                                                {data.approval_name}
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={styles.itemRight}>
                                        <Text style={styles.itemDate}>
                                            Total Count
                                        </Text>
                                        <View style={styles.itemBtn1}>
                                            <Text style={styles.itemEntity}>
                                                {data.total_doc}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </Content>
        </Container>
    );
}

Home.navigationOptions = {
    title: strings.home,
    header: null
};

export default Home;
