import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import COLORS from "../../utils/constant/colors";
import { getItem, setItem } from "../../utils/asyncStorage";
import { useNavigation } from "@react-navigation/native";

WebBrowser.maybeCompleteAuthSession();
//com.modetech.LagosTrafficRadio:/oauthredirect

const googleClientId = process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID;
export default function GoogleLoginButton () {
    const navigation = useNavigation();
    const [userInfo, setUserInfo] = useState(null);
    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: googleClientId
      });

    // useEffect(() => {       
    //   console.log("!!! ", request); 
    //   if(response){
    //    handleSigninWithGoogle();
    //   }        
    // },[response]);

    // const handleFacebookPressAsync = async () => {
    //   const result = await promptAsync();
    //   console.log(result);
    //   if(result.type !== "success"){
    //     alert("Oooops. Something went wrong");
    //     return;
    //   }
    // };

    // async function handleSigninWithGoogle () {
    //    const user = await getItem("@user");

    //    if (!user) {
    //     console.log("^^^ ", response);  
    //     if (response?.type === "success") {
    //         await getUserInfo(response.authentication.accessToken);
    //     }
    //    }else{
    //     setUserInfo(JSON.parse(user));
    //    }
    // }

    // const getUserInfo = async (token) => {
    //     if(!token) return;

    //     try {
    //         const response = await fetch(
    //             "https://www.googleapis.com/auth/userinfo.profile", 
    //             {
    //                 headers: {Authorization: `Bearer ${token}`}
    //             }
    //         )

    //         const user = await response.json();
    //         await setItem("@user", JSON.stringify(user));
    //         setUserInfo(user);
    //         navigation.navigate("Home");
    //     } catch (error) {
           
    //     }
    // }
    return(         
         <TouchableOpacity
            onPress={() => promptAsync()}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              height: 52,
              borderWidth: 1,
              borderColor: COLORS.gray,
              marginRight: 4,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../../assets/icons/google.png")}
              style={{
                height: 26,
                width: 26,
                marginRight: 8,
              }}
              resizeMode="contain"
            />
            <Text>Google</Text>
          </TouchableOpacity>);
}