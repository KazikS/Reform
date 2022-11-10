import  React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./pages/Main";
import Settings from "./pages/Sett"
import Profile from "./pages/Profile";
import Music from "./pages/Music";
import Example from "./pages/Example";
import Practic from "./pages/Practic";

const Stack = createStackNavigator();

export default function Navigate(){
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
            name = "Main"
            component = {Main}
            options = {
                {title: "Главная", headerStyle: { height: 0 }}
            }
            />
            <Stack.Screen 
            name = "Settings"
            component = {Settings}
            options = {{title: "Настройки", headerStyle: { height: 0 }, headerLeft: ()=> null,}}
            />
            <Stack.Screen 
            name = "Profile"
            component = {Profile}
            options = {{title: "Профиль", headerStyle: { height: 0 }, headerLeft: ()=> null,}}
            />

            <Stack.Screen 
            name = "Music"
            component = {Music}
            options = {{title: "Профиль", headerStyle: { height: 0 }, headerLeft: ()=> null,}}
            />

            <Stack.Screen 
            name = "Example"
            component = {Example}
            options = {{title: "Профиль", headerStyle: { height: 0 }, headerLeft: ()=> null,}}
            />

            <Stack.Screen 
            name = "Practic"
            component = {Practic}
            options = {{title: "Профиль", headerStyle: { height: 0 }, headerLeft: ()=> null,}}
            />

        </Stack.Navigator>
    </NavigationContainer>;
}
