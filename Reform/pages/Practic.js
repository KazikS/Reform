import React from "react";
import { Text, SafeAreaView, ImageBackground, Image, TouchableOpacity, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { gStyle } from "../Styles";

export default function Practic({ navigation }){


    const loadset = () => {
        navigation.navigate('Settings')
    }
    const loadprof = () => {
        navigation.navigate('Profile')
    }
    const loadmain = () => {
        navigation.navigate('Main')
    }
    const loadprlist = () => {
        navigation.navigate('PracticList')
    }


    const bgImage = require('../images/image104.png')
    const breath = require('../images/breath.png')
    const meditatio = require('../images/meditatio.png')
    const prof = require("../images/profile.png")
    const list = require("../images/listscreen.png")
    const home = require("../images/krug.png")
    const imagebar = require('../images/Rectangle3.png')


    return(
        <SafeAreaView style = {gStyle.container}>
            <ImageBackground source={bgImage} style = {gStyle.image}>
                
                <Text style = {gStyle.choose}>Выберите практику</Text>
                
                <TouchableOpacity style = {{position: "absolute", left: 32, top: 348}} onPress = {loadprlist} >
                    <Image source={breath}/>
                </TouchableOpacity>
            
                <TouchableOpacity style = {{position: "absolute", left: 209, top: 348}} onPress = {loadprlist} >
                    <Image source={meditatio}/>
                </TouchableOpacity>

                <Image style={gStyle.bar} source={imagebar}/>

                <TouchableOpacity onPress={loadset} activeOpacity = {0.02} style = {gStyle.listtouch}>
                    <Image source={list} style = {gStyle.listpos}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={loadprof} activeOpacity = {0.02} style = {{top: 715, left: 327}}>
                    <Image source={prof} style = {gStyle.profpos} />
                </TouchableOpacity>

                <TouchableOpacity style = {{left: 160, top: 670, position: "absolute"}}  onPress = {loadmain}>
                    <Image source={home}/>
                </TouchableOpacity>
            
            </ImageBackground>
        </SafeAreaView>
    );
}