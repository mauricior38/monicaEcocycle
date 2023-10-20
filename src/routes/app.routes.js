import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home  from "../pages/Home";
import Details from "../pages/Details";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen name="home" component={Home} />
      <Screen name="details" component={Details} />
    </Navigator>
  );
}
