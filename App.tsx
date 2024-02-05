/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import i18nData from './assets/data/i18nData';
import colors from './assets/styles/colors';
import Header from './src/components/Header';
import Knowledges from './src/screens/knowledges';
import Experiences from './src/screens/experiences';
import Trainings from './src/screens/trainings';
import Links from './src/screens/links';
import Downloads from './src/screens/downloads';
import ObliquesStrategies from './src/screens/obliques-strategies';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  i18nData.locale = 'fr';
  const menuData = i18nData.t('header', {returnObjects: true});

  const data = [
    {name: 'Knowledges', component: Knowledges},
    {name: 'Experiences', component: Experiences},
    {name: 'Trainings', component: Trainings},
    {name: 'Links', component: Links},
    {name: 'Downloads', component: Downloads},
    {name: 'ObliquesStrategies', component: ObliquesStrategies},
  ];

  return (
    <>
      <NavigationContainer>
        {/* T O P */}
        <StatusBar backgroundColor={colors.red} />
        <Header />
        {/* S C R E E N S */}
        <Stack.Navigator
          initialRouteName="Knowledges"
          screenOptions={{
            headerShown: false,
          }}>
          {data.map((stack, index) => (
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
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
