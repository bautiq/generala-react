
import {Alert} from 'react-native';

const AuthAlert = {

    showAlert(error)  {
        const errorMessage = !!error && !!error.response && !!error.response.data ? error.response.data : "Hubo un problema en la conexion";
        Alert.alert(
            "Error",
            errorMessage,[
              { text: "OK"}],
            { cancelable: false }
          );
    }
}

export default AuthAlert;
   