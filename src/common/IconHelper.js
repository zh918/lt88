import FontAwesome from 'react-native-vector-icons/FontAwesome'


export default class IconHelper {

    static getIcon(type,name,size) {
      let icon = null;
      if (type == 'FontAwesome') {
        FontAwesome.getImageSource(name, size).then(result=>{
          icon = result;
          return icon;
        })
      }
    }
}
