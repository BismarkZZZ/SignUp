import React from 'react'
import { View, Image, StyleSheet, Text, TextInput } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export default function Profile({name, type, age, place}) {
    return (

        <View style={styles.container}>

            <Image source={require('../assets/profile.jpg')} style={styles.image} />

            <View style={styles.detailContainer}>
                <Text style={styles.detName}> {name} </Text>

                <Text style={styles.detText}> {type} </Text>

                <Text style={styles.detText}> {age} years old</Text>

                <View style={styles.loctainer}>
                    <EvilIcons name="location" size={24} />
                    <Text style={styles.location}> {place} </Text>
                </View>
            </View>

        </View>




    )
}


const styles = StyleSheet.create({
   
    container: {
        marginTop: 30,
        flexDirection: "row",
        marginHorizontal: 20,
        borderRadius: 20,
    },
    image: {
        width: 150,
        height: 170,
        borderRadius: 20
    },
    detailContainer: {
        backgroundColor:"white",
        justifyContent: 'center',
        alignSelf: 'center',
        shadowColor: "#000",
        height: 140,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        width: 180,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    },
    loctainer: {
        flexDirection: 'row',
        marginTop: 5
    },
    detText: {
       color: '#afafaf',
       fontSize: 17,
       marginVertical: 5
    },
    detName: {
        color: '#4f53a5',
        fontWeight: 'bold',
        fontSize: 23
    },
    location: {
        color: '#afafaf',
       fontSize: 17
    },
    searchContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        marginHorizontal: 30,
        height: 50,
        borderRadius: 9,
        alignContent: 'center'
    }
})