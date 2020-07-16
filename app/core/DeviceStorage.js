import { AsyncStorage } from 'react-native';

const deviceStorage = {
    
    async saveKey(key, valueToSave) {
        try {
            await AsyncStorage.setItem(key, valueToSave);
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },

    async saveUser(user){
        await AsyncStorage.setItem('USER', JSON.stringify(user));
    },

    async loadUser(callback) {
        try {
           await AsyncStorage.getItem('USER', callback);
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },

    async deleteUser() {
        try {
            await AsyncStorage.removeItem('USER')
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },
};

export default deviceStorage;