import React from "react";
import { Text, SafeAreaView, ImageBackground, Image, TouchableOpacity, TextInput } from "react-native";
import { gStyle } from "../Styles";

export default function Example({ navigation }){

    const loadset = () => {
        navigation.navigate('Settings')
    }
    const loadprof = () => {
        navigation.navigate('Profile')
    }
    const loadmain = () => {
        navigation.navigate('Main')
    }

    const [text, onChangeText] = React.useState("")
    const bgImage = require('../images/image104.png')
    const search = require('../images/search.png')
    const one = require('../images/one.png')
    const two = require('../images/two.png')
    const three = require('../images/three.png')
    const four = require('../images/four.png')
    const five = require('../images/five.png')
    const prof = require("../images/profile.png")
    const list = require("../images/listscreen.png")
    const home = require("../images/krug.png")
    const imagebar = require('../images/Rectangle3.png')


    return(
       <SafeAreaView style = {gStyle.container}>
            <ImageBackground source={bgImage} style = {gStyle.image}>
                <Text style = {gStyle.musictext}>Музыка</Text>
                <Image source={search} style = {gStyle.search}/>
                <TextInput
                    style={gStyle.input}
                    onChangeText={onChangeText}
                    value={text}
                />

                <Image source={one} style = {gStyle.one}/>
                <Image source={two} style = {gStyle.two}/>
                <Image source={three} style = {gStyle.three}/>
                <Image source={four} style = {gStyle.four}/>
                <Image source={five} style = {gStyle.five}/>

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
    )
}