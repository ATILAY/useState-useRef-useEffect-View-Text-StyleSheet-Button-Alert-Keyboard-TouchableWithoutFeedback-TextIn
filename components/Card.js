import React from 'react';
import {View, StyleSheet }  from  'react-native';

const  Card = props =>{
    return (
    <View style={{...styles.card, ...props.style}}>
        {props.children}
    </View>
    );
}//card

const styles = StyleSheet.create({
    card : {
        flexDirection: 'column',
        
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.30,
        backgroundColor: 'white',
        elevation: 5,
        padding: 20,
        borderRadius: 10,
        // width: 300,
        // maxWidth: '80%',
        // alignItems: 'center',

    },
});

export default Card;
