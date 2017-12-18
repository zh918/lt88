
import FontAwesome from 'react-native-vector-icons/FontAwesome'


export default class IconHelper {
    /**
     * iconArray:[{type:'FontAwesome',name:'rocker',size:30}]
     */
    static getIcons(iconArray) {
      return new Promise(function(resolve, reject) {
        let resultMap = new Map();
        Promise.all(getImageSource(iconArray)).then(result=>{
          iconArray.forEach(function(icon,i){
            resultMap.set(icon.name,result[i]);
          });
          resolve(resultMap);
        });
      });

      function getImageSource(iconArray) {
        let result = [];
        iconArray.forEach((i)=>{
          result.push(FontAwesome.getImageSource(i.name,i.size));
        });
        return result;
      }
    }
}
