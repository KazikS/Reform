import React from "react";
import { Text, SafeAreaView, ImageBackground, Image, TouchableOpacity, TextInput } from "react-native";
import { gStyle } from "../Styles";

export default function Music({ navigation }) {

    const loadset = () => {
        navigation.navigate('Settings')
    }
    const loadprof = () => {
        navigation.navigate('Profile')
    }
    const loadmain = () => {
        navigation.navigate('Main')
    }
    const loadExample = () => {
        navigation.navigate('Example')
    }

    const [text, onChangeText] = React.useState("");
    const dolphin = require ('../images/dolphin.png')
    const sleep = require ('../images/sleep.png')
    const stars = require ('../images/stars.png')
    const concentration = require ('../images/concentration.png')
    const bgImage = require('../images/image104.png')
    const search = require('../images/search.png')
    const bgRelax = require('../images/bgRelax.png')
    const relax = require('../images/relax.png')
    const moon = require('../images/moon.png')
    const prof = require("../images/profile.png")
    const list = require("../images/listscreen.png")
    const home = require("../images/krug.png")
    const imagebar = require('../images/Rectangle3.png')


    return(
        <SafeAreaView style = {gStyle.container}>

            <ImageBackground source={bgImage} resizeMode="cover" style={gStyle.image}>

                <Text style = {gStyle.musictext}>Музыка</Text>
                <Image source={search} style = {gStyle.search}/>
                <TextInput
                    style={gStyle.input}
                    onChangeText={onChangeText}
                    value={text}
                />

                <TouchableOpacity style = {{position: "absolute"}} onPress = {loadExample}>
                    <Image source = {sleep} style = {gStyle.sleep} />
                </TouchableOpacity>

                <TouchableOpacity style = {{position: "absolute"}} onPress = {loadExample}>
                    <Image source = {dolphin} style = {gStyle.dolphin} />
                </TouchableOpacity>

                <TouchableOpacity style = {{position: "absolute"}} onPress = {loadExample}>
                    <Image source = {concentration} style = {gStyle.concentration} />
                </TouchableOpacity>

                <TouchableOpacity style = {{position: "absolute"}} onPress = {loadExample}>
                    <Image source = {stars} style = {gStyle.stars} />
                </TouchableOpacity>

                <TouchableOpacity style = {{position: "absolute"}} onPress = {loadExample}>
                    <Image source = {bgRelax} style = {gStyle.relaxmoon} />
                    <Image source = {moon} style = {gStyle.moon} />
                    <Image source = {relax} style = {gStyle.relaxtex} />
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
    )
}