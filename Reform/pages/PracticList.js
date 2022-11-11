import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, ImageBackground, View,  TouchableOpacity, Image } from 'react-native';
import { gStyle } from "../Styles";

export default function PractList ({navigation}) {
    const bgImage = require('../images/image104.png')
    const breath = require('../images/breath.png')
    const meditatio = require('../images/meditatio.png')
    const prof = require("../images/profile.png")
    const list = require("../images/listscreen.png")
    const home = require("../images/krug.png")
    const imagebar = require('../images/Rectangle3.png')
    const AirBaloon = require('../images/AirBaloon.png')
    const bgImageForScrollButtons = require('../images/scrollimages/bgAppleGarden.png')
    const bgTime = require('../images/scrollimages/bgForTime.png')
    const apple = require('../images/scrollimages/apple.png')
    const star = require('../images/scrollimages/star.png')
    
    const loadset = () => {
        navigation.navigate('Settings')
    }
    const loadprof = () => {
        navigation.navigate('Profile')
    }
    const loadmain = () => {
        navigation.navigate('Main')
    }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={bgImage} style = {gStyle.image}>  
            <ScrollView style={styles.scrollView}>

            <View>
              <TouchableOpacity>
                    <Image source={AirBaloon} style ={{marginHorizontal:12}}/>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                    <Image source={bgImageForScrollButtons} style ={{marginHorizontal:12, marginTop:24}}/>
                    <Image source={bgTime} style = {{position:"absolute", left: 254, marginTop:24}}/>
                    <Image source={apple} style = {{position:"absolute", marginLeft:268, marginTop:76}}/>
                    <Text style = {{position:"absolute", marginTop:76, marginLeft:32, color:'black',fontSize:20}}>Яблоневый сад</Text>
                    <Text style = {{position:"absolute", marginTop:27, marginLeft:272, color:'white',fontSize:12}}>4 мин</Text>
              </TouchableOpacity>
            </View>
            
            <View>
              <TouchableOpacity>
                    <Image source={bgImageForScrollButtons} style ={{marginHorizontal:12, marginTop:24}}/>
                    <Image source={bgTime} style = {{position:"absolute", left: 254, marginTop:24}}/>
                    <Image source={star} style = {{position:"absolute", marginLeft:268, marginTop:76}}/>
                    <Text style = {{position:"absolute", marginTop:76, marginLeft:32, color:'black',fontSize:20}}>Полет к звездам</Text>
                    <Text style = {{position:"absolute", marginTop:27, marginLeft:272, color:'white',fontSize:12}}>4 мин</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                    <Image source={bgImageForScrollButtons} style ={{marginHorizontal:12, marginTop:24}}/>
              </TouchableOpacity>
            </View>

            </ScrollView>

            <Image style={gStyle.bar} source={imagebar}/>

            <TouchableOpacity onPress={loadset} activeOpacity = {0.02} style = {gStyle.listtouch}>
                <Image source={list} style = {gStyle.listpos}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={loadprof} activeOpacity = {0.02} style = {{top: 715, left: 327, position: "absolute"}}>
                <Image source={prof} style = {gStyle.profpos} />
            </TouchableOpacity>

            <TouchableOpacity style = {{left: 160, top: 670, position: "absolute"}}  onPress = {loadmain}>
                <Image source={home}/>
            </TouchableOpacity>
        </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginLeft: 24,
    marginRight: 26,
    marginTop: 339,
  },
  text: {
    fontSize: 42,
  },
});

