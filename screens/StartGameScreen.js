import React, { useState } from 'react';
import { Alert, Keyboard, View, StyleSheet, Text, Button, TouchableWithoutFeedback } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/color';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));

    }; //input
    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };//res
    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number', 'Number has to be between 1 and 99', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]);
            return;
        }//if
        setConfirmed(true);
        setEnteredValue('');
        setSelectedNumber(parseInt(enteredValue));
        Keyboard.dismiss();
         



    };//conf
    let confirmedOutput;
    if (confirmed) {
        confirmedOutput = <Card style={styles.summaryContainer}>
            <Text>You  selected</Text>
            <NumberContainer>
                {selectedNumber}
            </NumberContainer>
            <Button title="START GAME" onPress={ ()=>{ props.onStartGame(selectedNumber)  }}>

            </Button>
            {/* <View>
                <Text>
                {selectedNumber}
                </Text>
            </View> */}
        </Card>
    }//if

    return (
        <TouchableWithoutFeedback onPress={() => {

            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.titleContainer}>Start a New Game</Text>
                {/* <View style={styles.inputContainer}> */}
                <Card style={styles.inputContainer}>
                    <Text>
                        Select a Number
                </Text>
                    <Input style={styles.input}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                        blurOnSubmit autoCapitalize='none'
                        keyboardType="numeric"
                        maxLength={2} />
                    <View style={styles.button}>
                        <View style={styles.perButton}><Button title="Reset" onPress={resetInputHandler} color={Colors.secondary}></Button></View>
                        <View style={styles.perButton}><Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary}></Button></View>
                    </View>
                </Card>
                {confirmedOutput}
                {/* </View> */}
            </View>
        </TouchableWithoutFeedback>
    );
}; //StartGame

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',

    },
    button: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    titleContainer: {
        fontSize: 24,
        marginVertical: 10,

    },
    perButton: {
        width: 100,

    },
    input: {
        width: 50,
        textAlign: 'center',
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center',


    },
});

export default StartGameScreen;