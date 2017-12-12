import { StyleSheet } from 'react-native'

export default Styles = StyleSheet.create({
	container:{
		flex: 1,
	    justifyContent: 'flex-start',
	    alignItems: 'flex-start',
	    backgroundColor: '#ccc' 
	},

	topState:{    
		flexDirection:'row', 
		height:44,

		backgroundColor:'#ec9600',  
		paddingLeft:12,
		paddingRight:12 
	},
	topStateLeft:{ 
		width:20,  
		justifyContent:'flex-end',
		// backgroundColor:'blue'
	},
	topStateTitle:{ 
		flex:1,  
		height:44,  
		alignItems:'center',
		justifyContent:'flex-end',
		// backgroundColor:'yellow', 
	},
	topStateRight:{  
		width:20,  
		justifyContent:'flex-end',
		// backgroundColor:'blue',
	},

	content:{
		flex:1,
		width:375,
		backgroundColor:'blue'
	},


	footer:{  
		// height:50,
		// flex:0.2,
		width:375,
		justifyContent:'flex-end',
		alignItems:'flex-start', 
		backgroundColor:'red'
	}
});