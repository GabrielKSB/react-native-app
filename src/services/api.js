import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


const api = axios.create({
    baseURL: "http://10.2.3.25:3333"
  },
);


/*

const accessToken = AsyncStorage.getItem("AccessToken")

onsole.log(accessToken)
const api = axios.create({
    baseURL: "http://10.2.3.25:3333",
    headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

*/


export default api