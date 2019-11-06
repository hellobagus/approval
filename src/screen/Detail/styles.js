import { StyleSheet } from 'react-native';
import Colors from 'helpers/Colors';

const styles = StyleSheet.create({
  

  header:{
    backgroundColor: "#00BCD4",
    height:50,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  eventList:{
    marginTop:20,
  },
  eventBox: {
    padding:10,
    marginTop:5,
    marginBottom:5,
    flexDirection: 'row',
  },
  eventDate:{
    flexDirection: 'column',
  },
  eventDay:{
    fontSize:50,
    color: "#0099FF",
    fontWeight: "600",
  },
  eventMonth:{
    fontSize:16,
    color: "#0099FF",
    fontWeight: "600",
  },
  eventContent: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft:10,
    backgroundColor: '#FFFFFF',
    padding:10,
    borderRadius:10
  },
  description:{
    fontSize:15,
    color: "#646464",
  },
  eventTime:{
    fontSize:18,
    color:"#151515",
  },
  userName:{
    fontSize:16,
    color:"#151515",
  },
  card:{
    backgroundColor:'rgba(56, 172, 236, 1)',
    borderWidth:0,
    borderRadius:20,
    height: 150
},
item: {
  flex: 1,
  width: '90%',
  marginHorizontal: '5%',
  marginVertical: 20,
  backgroundColor: '#FFF',
  borderRadius: 5,
  elevation: 10,
  shadowOffset: { 
      width: 5, 
      height: 5 
  },
  shadowColor: "#42B649",
  shadowOpacity: 0.1,
  shadowRadius: 0,
},
itemImg: {
  marginBottom: 10,
  width: '100%',
  height: 200,
  borderTopLeftRadius: 5,
  borderTopRightRadius: 5,
},
itemImgBg: {
  position: 'absolute',
  marginBottom: 10,
  width: '100%',
  height: 200,
  borderTopLeftRadius: 5,
  borderTopRightRadius: 5,
  opacity: 0.4,
  backgroundColor: '#000',
},
itemFavorite: {
  position: 'absolute',
  alignSelf: 'flex-end',
  color: '#309224',
  marginTop: 10,
  paddingRight: 10,
  fontSize: 24,
},
itemPrice: {
  color: '#666',
  fontSize: 16,
  fontFamily: 'Montserrat-SemiBold',
},

itemLocation: {
  color: '#999',
  fontSize: 11,
  fontFamily: 'Montserrat-Regular',
  marginBottom: 10,
},
itemEntityName: {
  color: '#00AEEF',
  fontSize: 11,
  fontFamily: 'Montserrat-Regular',
  marginBottom: 10,
},
itemRow: {
  flexDirection: 'row',
  paddingHorizontal: 15,
  paddingBottom: 5,
  marginBottom: 15,
  borderBottomWidth: 1,
  borderColor: '#e7e7e7',
},
itemRowIcon: {
  flexDirection: 'row',
  paddingHorizontal: 15,
  paddingBottom: 5,
  marginBottom: 15,
},
itemLeft: {
  flexGrow: 1,
  flexDirection: 'row',
},
itemRight: {
  flexGrow: 1,
  alignItems: 'flex-end',
  paddingVertical: 15

},

itemOverview: {
  flexGrow: 1,
  flexDirection: 'row',
  paddingVertical: 15
},
itemOverviewIcon: {
  flexGrow: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
},
itemIcon: {
  color: '#999',
  marginRight: 5,
  fontSize: 24,
},
itemLeftIcon: {
  color: '#333',
  marginRight: 5,
  fontSize: 24,
},
itemNo: {
  color: '#666',
  marginRight: 5,
  fontFamily: 'Montserrat-SemiBold',
  marginTop: 5,
  fontSize: 14,
},
itemDate: {
  color: '#999',
  fontFamily: 'Montserrat-Regular',
  fontSize: 11,
  textAlign: 'left',
},
itemEntity: {
  color: '#00AEEF',
  fontFamily: 'Montserrat-Regular',
  fontSize: 16,
  alignItems:'center',
  justifyContent:'center',


},
itemText: {
  color: '#333',
  marginRight: 5,
  fontFamily: 'Montserrat-SemiBold',
  marginTop: 5,
  fontSize: 12,
},
itemBtn: {
  flexDirection: 'row',
  backgroundColor: '#f0f0f0',
  color: '#333',
  paddingHorizontal: 10,
  paddingVertical: 8,
  borderRadius: 10,
  marginRight: 10,
},
itemBtn1: {
  flexDirection: 'row',
  backgroundColor: '#00AEEF',
  color: '#333',
  marginTop:8,
  padding: 10,
  borderRadius: 180,
  marginRight: 10,
  width: 50,
  justifyContent:'center'
},
});

export default styles;
