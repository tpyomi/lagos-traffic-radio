import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
import * as Facebook from "expo-auth-session/providers/facebook";
import * as WebBrowser from "expo-web-browser";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../../utils/constant/colors";

WebBrowser.maybeCompleteAuthSession();
const facebookClientId = process.env.EXPO_PUBLIC_FACEBOOK_CLIENT_ID;

export default function FacebookLoginButton (){    
  console.log("|||FACEBOOK ",facebookClientId," |||");
    const [user, setUser] = useState(null);
    const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: facebookClientId
  });
  const navigation = useNavigation();

    useEffect(() => {
    if (response && response.type === "success" && response.authentication) {
      (async () => {
        const userInfoResponse = await fetch(
        `https://graph.facebook.com/me?access_token=${response.authentication.accessToken}&fields=id,name,picture.type(large)`);

        const userInfo = await userInfoResponse.json();

        setUser(userInfo);
       navigation.navigate("Home", {user}); 
      })();
    }
  }, [response]);

    const handleFacebookPressAsync = async () => {
      const result = await promptAsync();
      console.log(result);
      if(result.type !== "success"){
        alert("Oooops. Something went wrong");
        return;
      }
    };

    return( 
        <TouchableOpacity
            onPress={handleFacebookPressAsync}
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
              source={require("../../assets/icons/facebook.png")}
              style={{
                height: 26,
                width: 26,
                marginRight: 8,
              }}
              resizeMode="contain"
            />
            <Text>Facebook</Text>
          </TouchableOpacity>);
}