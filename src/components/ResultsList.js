import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import ResultsDetail from '../components/ResultsDetail'
import {withNavigation} from 'react-navigation'


const ResultsList = ({ title, results, navigation }) => {

    if(!results.length){
        return null
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity 
                        onPress={()=>
                        navigation.navigate('ResultShow',{id:item.id})}>

                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    titleStyle: {
        marginLeft: 15,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    container: {
        marginBottom: 10,
    }

});
//its with the withNavigation warped
export default withNavigation(ResultsList);