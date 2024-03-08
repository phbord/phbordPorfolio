/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as StoreProvider} from 'react-redux';

import i18nData from './assets/data/i18nData';
import colors from './assets/styles/colors';
import store from './src/services/store/store';
import dataHeader from './assets/data/dataHeader';
import Header from './src/components/Header';
import Knowledges from './src/screens/knowledges';
import Experiences from './src/screens/experiences';
import Trainings from './src/screens/trainings';
import Links from './src/screens/links';
import Downloads from './src/screens/downloads';
import ObliquesStrategies from './src/screens/obliques-strategies';
import ExperiencesDescription from './src/screens/experiences/ExperiencesDescription';
import Cv from './src/screens/cv';
import DownloadsCertificate from './src/screens/downloads/DownloadsCertificate';
import LinksExample from './src/screens/links/LinksExample';
import TrainingsExample from './src/screens/trainings/TrainingsExample';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  i18nData.locale = 'fr';
  const menuData = i18nData.t('header', {returnObjects: true});

  const data = [
    {name: dataHeader[0], component: Knowledges},
    {name: dataHeader[1], component: Experiences},
    {name: dataHeader[2], component: Trainings},
    {name: dataHeader[3], component: Links},
    {name: dataHeader[4], component: Downloads},
    {name: dataHeader[5], component: ObliquesStrategies},
    {name: dataHeader[6], component: ExperiencesDescription},
    {name: dataHeader[7], component: Cv},
    {name: dataHeader[8], component: DownloadsCertificate},
    {name: dataHeader[9], component: LinksExample},
    {name: dataHeader[10], component: TrainingsExample},
  ];

  return (
    <StoreProvider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          {/* T O P */}
          <StatusBar backgroundColor={colors.red} />
          <Header />
          {/* S C R E E N S */}
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            {data.map((stack: any, index: React.Key | null | undefined) => (
              <Stack.Screen
                key={index}
                name={stack.name}
                options={{title: menuData[index].name}}>
                {props => (
                  <stack.component {...props} title={menuData[index].name} />
                )}
              </Stack.Screen>
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </StoreProvider>
  );
}

export default App;
