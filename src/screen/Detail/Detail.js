import React, { useCallback, useEffect, useState } from "react";
import {
    TouchableOpacity,
    StatusBar,
    ScrollView,
    ActivityIndicator
} from "react-native";
import {
    Container,
    Header,
    Content,
    Text,
    View,
} from "native-base";

import { useSelector, useDispatch } from "react-redux";

import styles from "./styles";
import Style from "../../Theme/Style";

import strings from "localization";
import getUser from "selectors/UserSelectors";
import { getDetail } from "../../actions/MenuActions";
import { selectDetail } from "../../selectors/MenuSelectors";
import numFormat from "../../components/common/numFormat";

function Detail(props) {
    const dispatch = useDispatch();
    const {
        approval_name,
        approval_user,
        approval_id
    } = props.navigation.state.params.data;
    
    const user = useSelector(state => getUser(state));
    const [load, setLoad] = useState(true);
    const detail = useSelector(state => selectDetail(state));

    const getDetails = useCallback(
        async ()  => {
            await dispatch(getDetail(approval_user, approval_id))
            setLoad(false);
        },
        [dispatch]
    );

    useEffect(() => {
        getDetails();
    }, []);

    useEffect(() => {
        if (user !== null) {
            props.navigation.navigate("App");
        }
    });

    return (
        <Container style={Style.bgMain}>
            <Header style={Style.navigation}>
                <StatusBar
                    backgroundColor="#00aeef"
                    animated
                    barStyle="light-content"
                />

                <View style={Style.actionBarLeft}></View>
                <View style={Style.actionBarMiddle}>
                    <Text style={Style.actionBarText}>
                        {approval_name.toUpperCase()}
                    </Text>
                </View>
                <View style={Style.actionBarRight}>
                    {/* <Button transparent style={Style.actionBtnRight} onPress={() => {
                        NavigationService.navigate('MemberPropertyAdd')
                    }}>
                        <Icon active name='plus' style={Style.actionIcon} type="FontAwesome" />
                    </Button> */}
                </View>
            </Header>

            <Content
                style={styles.layoutInner}
                contentContainerStyle={styles.layoutContent}
            >
                <ScrollView>
                    {!load ? (
                        detail.map((data, key) => (
                            <TouchableOpacity
                                key={key}
                                style={styles.item}
                                underlayColor="transparent"
                                onPress={() =>
                                    props.navigation.navigate("View", { data })
                                }
                            >
                                <View>
                                    <View style={styles.itemRow}>
                                        <View style={styles.itemOverview}>
                                            <View>
                                                <Text
                                                    style={
                                                        styles.itemEntityName
                                                    }
                                                >
                                                    {data.entity_name}
                                                </Text>
                                                <Text
                                                    style={styles.itemLocation}
                                                >
                                                    Doc No : {data.doc_no}
                                                </Text>
                                                <Text
                                                    style={styles.itemLocation}
                                                >
                                                    Staff ID :{" "}
                                                    {data.request_staff_id}
                                                </Text>
                                                <Text
                                                    style={styles.itemLocation}
                                                >
                                                    Dept :{" "}
                                                    {data.request_dept_name}
                                                </Text>
                                                <Text style={styles.itemPrice}>
                                                    Rp.{numFormat(data.amount)}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={styles.itemRight}>
                                            {/* <Text style={styles.itemDate}>{data.doc_date}</Text> */}
                                            <Text style={styles.itemEntity}>
                                                {data.entity_cd}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.itemRowIcon}>
                                        <View style={styles.itemLeft}>
                                            <View style={styles.itemBtn}>
                                                <Text style={styles.itemDate}>
                                                    {data.descs}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))
                    ) : (
                        <View style={styles.nullList}>
                            <ActivityIndicator size="large" />
                        </View>
                    )}
                </ScrollView>
            </Content>
        </Container>
    );
}

Detail.navigationOptions = {
    headerTransparent: true,
    headerTintColor: "white",
    headerTitleStyle: { color: "white" }
};

export default Detail;
