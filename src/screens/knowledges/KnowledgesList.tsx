import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Action, Dispatch} from '@reduxjs/toolkit';

import {
  IconAdobe,
  IconBootstrap,
  IconCss,
  IconSass,
  IconCypress,
  IconDrupal,
  IconDynamics,
  IconEz,
  IconGit,
  IconGulp,
  IconHtml,
  IconHybris,
  IconJavascript,
  IconJira,
  IconJquery,
  IconMongodb,
  IconNextjs,
  IconNodejs,
  IconPolymer,
  IconPostgresql,
  IconRails,
  IconReact,
  IconRemix,
  IconRuby,
  IconScrum,
  IconSelenium,
  IconStrapi,
  IconSupabase,
  IconTailwind,
  IconTypescript,
  IconVuejs,
  IconWebpack,
  IconZustand,
  IconRedux,
  IconTransparent,
  IconMaterialUi,
  IconTwig,
  IconPug,
} from '../../../assets';

export default function KnowledgesList({item}: any) {
  const picto: string = item.picto
    ? item.picto.replace('.svg', '').replace('.png', '')
    : undefined;
  const [iconName, setIconName]: [undefined, Dispatch<Action<string>>] =
    useState('');

  const getIconsTech = (pictoFile: string) => {
    switch (pictoFile) {
      case 'scrum':
        return setIconName(IconScrum);
      case 'git':
        return setIconName(IconGit);
      case 'jira':
        return setIconName(IconJira);
      case 'webpack':
        return setIconName(IconWebpack);
      case 'gulp':
        return setIconName(IconGulp);
      case 'adobe':
        return setIconName(IconAdobe);
      case 'html':
        return setIconName(IconHtml);
      case 'sass':
        return setIconName(IconSass);
      case 'css':
        return setIconName(IconCss);
      case 'javascript':
        return setIconName(IconJavascript);
      case 'typescript':
        return setIconName(IconTypescript);
      case 'ruby':
        return setIconName(IconRuby);
      case 'jquery':
        return setIconName(IconJquery);
      case 'tailwind':
        return setIconName(IconTailwind);
      case 'bootstrap':
        return setIconName(IconBootstrap);
      case 'polymer':
        return setIconName(IconPolymer);
      case 'react':
        return setIconName(IconReact);
      case 'redux':
        return setIconName(IconRedux);
      case 'remix':
        return setIconName(IconRemix);
      case 'nextjs':
        return setIconName(IconNextjs);
      case 'zustand':
        return setIconName(IconZustand);
      case 'vuejs':
        return setIconName(IconVuejs);
      case 'nodejs':
        return setIconName(IconNodejs);
      case 'rails':
        return setIconName(IconRails);
      case 'cypress':
        return setIconName(IconCypress);
      case 'selenium':
        return setIconName(IconSelenium);
      case 'supabase':
        return setIconName(IconSupabase);
      case 'strapi':
        return setIconName(IconStrapi);
      case 'mongodb':
        return setIconName(IconMongodb);
      case 'postgresql':
        return setIconName(IconPostgresql);
      case 'dynamics':
        return setIconName(IconDynamics);
      case 'drupal':
        return setIconName(IconDrupal);
      case 'ez':
        return setIconName(IconEz);
      case 'hybris':
        return setIconName(IconHybris);
      case 'material-ui':
        return setIconName(IconMaterialUi);
      case 'pugjs':
        return setIconName(IconPug);
      case 'twig':
        return setIconName(IconTwig);
      case undefined:
        return setIconName(IconTransparent);
    }
  };

  useEffect(() => {
    getIconsTech(picto);
  }, []);

  useEffect(() => {
    getIconsTech(picto);
  }, [item]);

  return (
    <View style={styles.container}>
      {iconName && <Image source={iconName} style={styles.picto} />}
      <Text style={item.fav ? styles.nameBold : styles.name}>{item.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 7.5,
    marginRight: 10,
    display: 'flex',
    alignItems: 'center',
  },
  picto: {
    width: 40,
    height: 24,
    marginBottom: 5,
    resizeMode: 'contain',
  },
  pictoSquare: {
    width: 24,
    height: 24,
    marginBottom: 5,
    resizeMode: 'contain',
  },
  name: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
  },
  nameBold: {
    fontFamily: 'Roboto-Bold',
  },
});
