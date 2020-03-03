import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>

            <Text> The Game is  Over! </Text>
            <Text>Number of rounds: {props.roundsNumber}</Text>
            <Text>Number was: {props.userNumber}</Text>
            <Button title="NEW GAME" onPress={ props.onRestart } />
        </View> >
    );
}//Ga
const styles = StyleSheet.create({
    flex: 1,
    justifyContent: 'center'
    alignItems: 'center'

});
export default GameOverScreen;
