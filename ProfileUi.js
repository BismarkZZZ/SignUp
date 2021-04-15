import React from 'react'
import {View, FlatList } from "react-native"
import Profile from './components/Profile'

export default function ProfileUi () {
    const profile = [
        {name: 'Marc', animal: 'Dog', year: '4', location: 'Westlands Blvd'},
        {name: 'Git', animal: 'Cat', year: '9', location: 'Madina Zongo'},
        {name: 'Varder', animal: 'Snail', year: '2', location: 'Osu Klottey'}
    ]


    return (
        <View>
            <FlatList 
                data={profile}
                renderItem={({ item }) => {
                    return <Profile name={item.name} type={item.animal} age={item.year} place={item.location}/>
                }}
                keyExtractor={(item)=>item.year} 
            />
        </View>
    )
}