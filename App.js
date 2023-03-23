import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AppTheme from './App/navigation/Theme';

import OffersScreenNavigation from './App/navigation/subScreenNavs/OffersScreenNavigation';
import EmiPlansScreen from './App/Screens/EmiPlansScreen';
import EmiConfirmScreen from './App/Screens/EmiConfirmScreen';
import BillsAndBookingScreen from './App/Screens/BillsAndBookingScreen';
import HomeScreen from './App/Screens/HomeScreen';
import DpinScreen from './App/Screens/DpinScreen';
import GetFriendContactScreen from './App/Screens/GetFriendContactScreen';
import SelfieScreen from './App/Screens/SelfieScreen';

const App = () => {
  return (
    // <SelfieScreen />
    // <GetFriendContactScreen />
    // <DpinScreen />
    // <EmiConfirmScreen />
    // <EmiPlansScreen />
    // <BillsAndBookingScreen />
    <HomeScreen />
    // <NavigationContainer theme={AppTheme}>
    //   <OffersScreenNavigation />
    // </NavigationContainer>
  );
};

export default App;
