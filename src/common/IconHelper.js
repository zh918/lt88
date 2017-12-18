import FontAwesome from 'react-native-vector-icons/FontAwesome'


export default class IconHelper {

    static getIcon(type,name,size) {
      return new Promise(function(resolve, reject) {
        iconArray.forEach((i)=>{
          if (i.type == 'FontAwesome') {
              FontAwesome.getImageSource(i.name,i.size).then(result=>{
                  resolve(result);
              });
          }
          else if (i.type == 'icon') {

          }
        });
      });
    }

    /**
     * iconArray:[{type:'FontAwesome',name:'rocker',size:30}]
     */
    static getIcons(iconArray) {
      return new Promise(function(resolve, reject) {
        let resultMap = new Map();
        Promise.all(dispatch()).then(result=>{
          console.log('icon加载',result);
          iconArray.forEach(function(icon,i){
            resultMap.set(icon.name,result[i]);
          });
          resolve(resultMap);
        });
      });

      function dispatch(iconArray) {
        let result = [];
        iconArray.forEach((i)=>{
          // return new Promise(function(r,j) {
          //   if (i.type == 'FontAwesome') {
          //     r(FontAwesome.getImageSource(i.name,i.size));
          //   }
          // });

          result.push(FontAwesome.getImageSource(i.name,i.size));

        });

        return result;
      }
    }
}
