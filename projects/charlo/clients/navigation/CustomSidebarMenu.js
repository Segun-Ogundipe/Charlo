import * as React from 'react';
import { Image } from "react-native";
import { SafeAreaView, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import * as Linking from 'expo-linking';
import { Layout, useTheme } from '@ui-kitten/components';

export const CustomSidebarMenu = (props) => {
  const theme = useTheme();
  const BASE_PATH =
    '../assets/';
  const proileImage = 'adaptive-icon.png';

  return(
    <SafeAreaView style={{flex: 1}}>
      <Layout style={{flex: 1}}>
        <Image
          source={{ uri: BASE_PATH + proileImage }}
          style={styles.sideMenuProfileIcon}/>

        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem
            activeTintColor={theme['text-basic-color']}
            activeBackgroundColor={theme['color-primary-transparent-600']}
            inactiveTintColor={theme['text-basic-color']}
            label="About"
            onPress={() => Linking.openURL('https://celo.org/')}/>
        </DrawerContentScrollView>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100/2,
    alignSelf: 'center'
  }
});