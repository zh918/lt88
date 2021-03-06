// 统一菜单配置
import IconHelper from '../common/IconHelper'

export default{
  iconMap:null,

  initTabs:()=>{
    let _this = this;

    return new Promise(function(resolve,reject){
      IconHelper.getIcons([
          {type:'Octicons',name:'flame',size:30},
          {type:'FontAwesome',name:'home',size:30},
          {type:'Octicons',name:'octoface',size:30},
          {type:'FontAwesome',name:'user',size:20},
      ]).then(result=> {
          _this.iconMap = result;
          let menusArray = [

            {
                label: 'One2',
                screen: 'lt.home',
                title: 'Screen One',
                icon: _this.iconMap.get('home')
            },{
                label: 'Two',
                screen: 'lt.home',
                title: 'Screen Two',
                icon: _this.iconMap.get('home')
            },
            {
                label: '我的',
                screen: 'lt.member.about',
                title: 'Screen One',
                icon: _this.iconMap.get('home')
            }
          ];
          resolve(menusArray);
      });
    });
  },
  tabStyle:{
      navBarHidden:true
  },
  appStyle:{
      forceTitlesDisplay:true,
      tabBarTranslucent:true,
      // tabBarBackgroundColor:'#0f2362',
      // tabBarButtonColor:'#fff',
      // tabBarSelectedButtonColor:'blue',
      // tabBarLabelColor:'red'
  }

}
