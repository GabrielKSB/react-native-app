import { NavigationContainer } from "@react-navigation/native"
import { useAuth } from "../hooks/userAuth"
import { PrivateStack } from "./privateRoutes"
import { PublicStack } from "./publicRoutes"

export const Routes = () => {
  const {token} = useAuth()
  return(
    <NavigationContainer>      
      {token? <PrivateStack/> : <PublicStack/>}
  </NavigationContainer>
)}