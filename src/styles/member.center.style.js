import { StyleSheet } from 'react-native'

export default Styles = StyleSheet.create({
  container:{
    flex:1,
    width:$Size.toDp(750),
    height:$Size.toDp(1334),
    backgroundColor:'#1c1a21'
  },
  container_baseinfo_bg:{
    position:'absolute',
    width:$Size.toDp(750),
    height:$Size.toDp(474),
  },

  baseinfo:{
    width:$Size.toDp(750),
    height:$Size.toDp(474),
  },
  title_view:{
    justifyContent:'flex-end',
    width:$Size.toDp(750),
    height:$Size.toDp(88),
  },
  title:{
    fontSize:$Size.toDp(32),
    color:'#fff',
    textAlign:'center',
  },

  info:{
    flexDirection:'row',
    marginTop:$Size.toDp(60),
    marginLeft:$Size.toDp(60),
    marginRight:$Size.toDp(24),
    height:$Size.toDp(140),
    borderColor:'#000',
    borderWidth:1
  },
  col1:{
    width:$Size.toDp(140),
    height:$Size.toDp(140),
    borderColor:'red',
    borderWidth:1
  },
  col2:{
    flex:1,
    flexDirection:'column',
    justifyContent:'space-between',
    marginLeft:$Size.toDp(32),
    borderColor:'red',
    borderWidth:1
  },
  col3:{
    justifyContent:'center',
    alignItems:'flex-end',
    borderColor:'blue',
    borderWidth:1
  },

  balance:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:$Size.toDp(32+30),
    marginLeft:$Size.toDp(80),
    marginRight:$Size.toDp(80),

    height:$Size.toDp(115),
    borderColor:'red',
    borderWidth:1
  },
  balance_col1:{
    flex:1
  },
  balance_col2:{
    flex:1,
    alignItems:'center'
  },

  font24:{
    fontSize:$Size.toDp(24)
  },
  font42:{
    fontSize:$Size.toDp(42)
  },

  menu_fast:{
    marginTop:$Size.toDp(-20),
    width:$Size.toDp(750),
    height:$Size.toDp(180),
    borderTopLeftRadius:$Size.toDp(20),
    borderTopRightRadius:$Size.toDp(20),
    backgroundColor:'#252932'
  },
  menus:{
    flex:1,
    flexDirection:'column',
    marginTop:$Size.toDp(30),
    backgroundColor:'#252932'
  }



});
