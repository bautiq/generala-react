
import {Alert} from 'react-native';

const AuthAlert = {

    showAlert(error)  {
        console.log(error);
        Alert.alert(
            "Error",
            error.response.data,[
              { text: "OK"}],
            { cancelable: false }
          );
    }
}

export default AuthAlert;
   