
import {NativeModules} from 'react-native';
const { RNTwitterSignIn } = NativeModules;
import {Constants} from './constants'
export function _twitterSignIn() {
    return new Promise((resolve, reject) => {
    RNTwitterSignIn.init(Constants.TWITTER_COMSUMER_KEY, Constants.TWITTER_CONSUMER_SECRET)
    RNTwitterSignIn.logIn()
        .then(loginData => {
         resolve(loginData)
        const { authToken, authTokenSecret,email  } = loginData
        if (authToken && authTokenSecret) {
        }
        })
        .catch(error => {
        resolve(null);
        console.log(error)
        }
    )
    })
}
export function getImage(str){
    return str?`https://img.youtube.com/vi/${str.split("?v=")[1].split("&")[0]}/mqdefault.jpg`:null
}

export function getId(str){
    return str.split("?v=")[1].split("&")[0];
}

export function verifyEmail(str){
   return Constants.Regex.test(str)
}