import {GoogleSignin, GoogleSigninButton, statusCodes} from "@react-native-google-signin/google-signin";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View } from "react-native";

const googleClientId = process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID;
export default function MyGoogleSigninButton(){
    const navigation = useNavigation();
    const [error, setError] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

  console.log("|||GOOGLE ",googleClientId," |||");

    const configureGoogleSignin = () => {
        GoogleSignin.configure({
            androidClientId: googleClientId
        })
    }

    useEffect(() => {
        configureGoogleSignin();
    });

    const signIn = async() => {
        console.log("signin pressed");

        try {
            await GoogleSignin.hasPlayServices();
                        console.log("userInfo");

            const user = await GoogleSignin.signIn();
  console.log("|||GOOGLE USER ",user," |||");

            setError();
            setUserInfo(user);
            navigation.navigate("Home")
        } catch (error) {
            setError(error);
        }
        
    }

    return(
        <View>
            <GoogleSigninButton 
                size={GoogleSigninButton.Size.Standard} 
                color={GoogleSigninButton.Color.Light} 
                onPress={() => signIn()}/>
        </View>
    );
}