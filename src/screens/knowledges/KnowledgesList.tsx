import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
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
} from '../../../assets';
import colors from '../../../assets/styles/colors';

export default function KnowledgesList({item}) {
  const [isLoading, setIsLoading]: [undefined, boolean] = useState(true);
  const picto: string = item.picto.replace('.svg', '');

  const getIconsTech = (
    pictoFile: string,
    styles: StyleProp<ViewStyle>,
    stylesSquare: StyleProp<ViewStyle>,
  ) => {
    if (isLoading) {
      return (
        <ActivityIndicator size="small" color={colors.red} style={styles} />
      );
    } else {
      switch (pictoFile) {
        case 'scrum':
          return <Image source={IconScrum} style={styles} />;
        case 'git':
          return <Image source={IconGit} style={styles} />;
        case 'jira':
          return <Image source={IconJira} style={styles} />;
        case 'webpack':
          return <Image source={IconWebpack} style={styles} />;
        case 'gulp':
          return <Image source={IconGulp} style={styles} />;
        case 'adobe':
          return <Image source={IconAdobe} style={styles} />;
        case 'html':
          return <Image source={IconHtml} style={styles} />;
        case 'sass':
          return <Image source={IconSass} style={styles} />;
        case 'css':
          return <Image source={IconCss} style={styles} />;
        case 'javascript':
          return <Image source={IconJavascript} style={styles} />;
        case 'typescript':
          return <Image source={IconTypescript} style={styles} />;
        case 'ruby':
          return <Image source={IconRuby} style={styles} />;
        case 'jquery':
          return <Image source={IconJquery} style={styles} />;
        case 'tailwind':
          return <Image source={IconTailwind} style={styles} />;
        case 'bootstrap':
          return <Image source={IconBootstrap} style={styles} />;
        case 'polymer':
          return <Image source={IconPolymer} style={styles} />;
        case 'react':
          return <Image source={IconReact} style={styles} />;
        case 'redux':
          return <Image source={IconRedux} style={styles} />;
        case 'remix':
          return <Image source={IconRemix} style={styles} />;
        case 'nextjs':
          return <Image source={IconNextjs} style={styles} />;
        case 'zustand':
          return <Image source={IconZustand} style={stylesSquare} />;
        case 'vuejs':
          return <Image source={IconVuejs} style={styles} />;
        case 'nodejs':
          return <Image source={IconNodejs} style={styles} />;
        case 'rails':
          return <Image source={IconRails} style={styles} />;
        case 'cypress':
          return <Image source={IconCypress} style={styles} />;
        case 'selenium':
          return <Image source={IconSelenium} style={styles} />;
        case 'supabase':
          return <Image source={IconSupabase} style={styles} />;
        case 'strapi':
          return <Image source={IconStrapi} style={styles} />;
        case 'mongodb':
          return <Image source={IconMongodb} style={styles} />;
        case 'postgresql':
          return <Image source={IconPostgresql} style={styles} />;
        case 'dynamics':
          return <Image source={IconDynamics} style={styles} />;
        case 'drupal':
          return <Image source={IconDrupal} style={styles} />;
        case 'ez':
          return <Image source={IconEz} style={styles} />;
        case 'hybris':
          return <Image source={IconHybris} style={styles} />;
      }
    }
  };

  return (
    <View style={styles.container}>
      {getIconsTech(picto, styles.picto, styles.pictoSquare)
        ? getIconsTech(picto, styles.picto, styles.pictoSquare)
        : null}
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
