import React, { useCallback, useEffect } from "react";
import {
    Container,
    Content,
    Button,
    Text,
    Footer,
    View,
    FooterTab,
    List,
    ListItem,
    Tab,
    Tabs
} from "native-base";

import { useSelector, useDispatch } from "react-redux";

import styles from "./styles";
import style from "../../Theme/Style";

import NavigationService from "../../components/navigation/AppNavigator";

import getUser from "selectors/UserSelectors";
import { getOtorisasi, approve } from "../../actions/MenuActions";
import { selectOtorisasi } from "../../selectors/MenuSelectors";
import numFormat from "../../components/common/numFormat";

const status_descs = {
    P: "Pending",
    R: "Revise",
    C: "Cancel",
    A: "Approve"
};

function ViewDetail(props) {
    const dispatch = useDispatch();
    const {
        request_dept_name,
        request_staff_id,
        doc_no,
        amount,
        entity_cd,
        entity_name,
        descs,
        module: modules
    } = props.navigation.state.params.data;

    const user = useSelector(state => getUser(state));
    const otorisasi = useSelector(state => selectOtorisasi(state));
    console.log("otorisasi", otorisasi);

    const getOtorisasis = useCallback(
        () => dispatch(getOtorisasi(entity_cd, doc_no, modules)),
        [dispatch]
    );

    const getMessage = useCallback(() => `${user && user.name}`, [user]);

    useEffect(() => {
        getOtorisasis();
    }, []);

    useEffect(() => {
        if (user !== null) {
            props.navigation.navigate("App");
        }
    });

    const submit = (type) => {
        dispatch(approve(type, props.navigation.state.params.data));
    };

    return (
        <Container style={styles.bgMain}>
            <View style={styles.header}></View>
            <Content
                style={style.layoutInner}
                contentContainerStyle={style.layoutContent}
            >
                <View style={styles.owner}>
                    <View style={styles.ownerAvatar}>
                        {/* <Image
                source={require("@Asset/images/avatar.png")}
                style={styles.ownerAvatarImg}
              /> */}
                    </View>
                    <View style={styles.ownerInfo}>
                        <View>
                            <Text style={styles.ownerName}>{getMessage()}</Text>
                            <Text style={styles.ownerLocation}>
                                {entity_name}
                            </Text>
                            <Text style={styles.ownerLocation}>
                                {request_dept_name}
                            </Text>
                        </View>
                    </View>
                </View>
                <Tabs tabBarUnderlineStyle={styles.tabBorder}>
                    <Tab
                        tabStyle={styles.tabGrey}
                        textStyle={styles.tabTextActive}
                        activeTabStyle={styles.tabGrey}
                        activeTextStyle={styles.tabTextActive}
                        heading="Informations"
                    >
                        <List style={styles.infoTab}>
                            <ListItem style={styles.infoItem}>
                                <View>
                                    {/* <Text style={Styles.infoHeader}>{'Address'.toUpperCase()}</Text> */}
                                    <Text style={styles.infoDesc}>
                                        Doc No : {doc_no}
                                    </Text>
                                </View>
                            </ListItem>
                            <ListItem style={styles.infoItem}>
                                <View>
                                    <Text style={styles.infoDesc}>
                                        Staff ID : {request_staff_id}
                                    </Text>
                                </View>
                            </ListItem>
                            <ListItem style={styles.infoItem}>
                                <View>
                                    <Text style={styles.infoDesc}>
                                        Dept : {request_dept_name}
                                    </Text>
                                </View>
                            </ListItem>
                            <ListItem style={styles.infoItem}>
                                <View>
                                    <Text style={styles.infoDesc}>
                                        Description : {descs}
                                    </Text>
                                </View>
                            </ListItem>
                            <ListItem
                                style={[styles.infoItem, styles.infoItemLast]}
                            >
                                <View>
                                    <Text style={styles.infoTotal}>
                                        Rp.{numFormat(amount)}
                                    </Text>
                                </View>
                            </ListItem>
                        </List>
                    </Tab>
                    <Tab
                        tabStyle={styles.tabGrey}
                        textStyle={styles.tabText}
                        activeTabStyle={styles.tabGrey}
                        activeTextStyle={styles.tabText}
                        heading="Otorisasi"
                    >
                        {otorisasi.map((data, key) => (
                            <List key={key} style={styles.infoTab}>
                                <ListItem style={styles.infoItem}>
                                    <View>
                                        <View style={styles.itemRow}>
                                            <View style={styles.itemOverview}>
                                                <View>
                                                    <Text
                                                        style={
                                                            styles.itemLocation
                                                        }
                                                    >
                                                        {
                                                            data.approval_user_name
                                                        }
                                                    </Text>
                                                    <Text
                                                        style={
                                                            styles.itemLocation
                                                        }
                                                    >
                                                        {data.approval_name}
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={styles.itemRight}>
                                                <Text style={styles.itemDate}>
                                                    Status
                                                </Text>
                                                <View style={styles.itemBtn1}>
                                                    <Text
                                                        style={
                                                            styles.itemEntity
                                                        }
                                                    >
                                                        {
                                                            status_descs[
                                                                data
                                                                    .approval_status
                                                            ]
                                                        }
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </ListItem>
                            </List>
                        ))}
                    </Tab>
                </Tabs>
            </Content>
            <Footer style={style.greyTopLine}>
                <FooterTab style={style.bgBot}>
                    <Button style={style.bgBotGreen} onPress={()=>submit("A")}>
                        <Text style={[style.textBot, { color: "#fff" }]}>
                            Approve
                        </Text>
                    </Button>
                    <Button style={style.bgBotBlue} onPress={()=>submit("R")}>
                        <Text style={[style.textBot, { color: "#fff" }]}>
                            Revise
                        </Text>
                    </Button>
                    <Button style={style.bgBotRed} onPress={()=>submit("C")}>
                        <Text style={[style.textBot, { color: "#fff" }]}>
                            Cancel
                        </Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
}

ViewDetail.navigationOptions = {
    headerTransparent: true,
    headerStyle: {
        marginTop: 30
    },
    tabBarVisible: false
};

export default ViewDetail;
