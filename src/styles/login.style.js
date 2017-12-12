import { StyleSheet, PixelRatio } from 'react-native'

export default Styles = StyleSheet.create({
  container:{
    flex:1,
    width:$Size.toDp(750),
    height:$Size.toDp(1334),
  },
  container_bg:{
    width:$Size.toDp(750),
    height:$Size.toDp(1334),
  },
  logo:{
    position:'absolute',
    // top:PixelRatio.getPixelSizeForLayoutSize(106) / PixelRatio.get(), // 106,
    top:$Size.toDp(166),
    width:$Size.toDp(750), // 375,
    resizeMode:'contain'
  },

  form:{
    flexDirection:'column',
    position:'absolute',
    top:$Size.toDp(376),
    width:$Size.toDp(750),
    paddingLeft:$Size.toDp(30),
    paddingRight:$Size.toDp(30),
    // borderWidth:1,
  },
  form_row:{
    flex:1,
    justifyContent:'flex-end',
    height:$Size.toDp(108),//PixelRatio.getPixelSizeForLayoutSize(108 / 2 / PixelRatio.get()) , // 108,
    paddingBottom:$Size.toDp(12),
    borderBottomWidth:1,
    borderBottomColor:'#fff'
  },
  form_row_input:{
    fontSize:$Size.toDp(34),
    color:'#ccc'
  },
  form_row_send:{
    position:'absolute',
    right:$Size.toDp(12),
    bottom:$Size.toDp(12)
  },
  form_row_send_text:{
    fontSize:$Size.toDp(30),
    color:'#ff9600'
  },

  operate:{
    position:'absolute',
    top:$Size.toDp(376+108*2+146),
    width:$Size.toDp(750),
    height:$Size.toDp(88),

    paddingLeft:$Size.toDp(30),
    paddingRight:$Size.toDp(30)
  },
  btn_submit_disable:{
    alignItems:'center',
    justifyContent:'center',
    width:$Size.toDp(750-30*2),
    height:$Size.toDp(88),
    borderWidth:1,
    borderRadius:$Size.toDp(10),
    borderColor:'#999',
    backgroundColor:'#999'
  },
  btn_submit_text_disable:{
    fontSize:$Size.toDp(34),
    color:'#ccc'
  },

  btn_submit_enabled:{
    alignItems:'center',
    justifyContent:'center',
    width:$Size.toDp(750-30*2),
    height:$Size.toDp(88),
    borderWidth:1,
    borderRadius:$Size.toDp(10),
    borderColor:'#ff9600',
    backgroundColor:'#ff9600'
  },
  btn_submit_text_enabled:{
    fontSize:$Size.toDp(34),
    color:'#fff'
  },



  agreement:{
    marginTop:$Size.toDp(24),
    fontSize:$Size.toDp(22),
    color:'#a8a8a8',
    backgroundColor:'transparent',
    textAlign:'center'
  },
  agreement_link:{
    color:'#ff7800'
  }




});
