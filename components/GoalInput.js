import { StyleSheet } from "react-native"
import { View, TextInput, Button, Modal, Image } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

export default function GoalInput({onAddGoal, isVisible, setModalVisible}) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText);
    }

    function closeModal(){
        setModalVisible(false);
    }

    function addGoalHandler(){
        onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <>
            <Modal visible={isVisible} animationType="slide">
            <StatusBar style="light"/>
            <View style={styles.inputContainer}>
            <Image
                source={require('../assets/reddit-logo.png')}
                style={styles.folderImage}
            />
                <TextInput 
                    value={enteredGoalText} 
                    style={styles.textInput} 
                    placeholder='Your course goal!' 
                    onChangeText={goalInputHandler}
                    onSubmitEditing={addGoalHandler}
                />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title='Cancel' onPress={closeModal} color='#f31282'/>
                        </View>
                        <View style={styles.button}>
                            <Button title='Add' onPress={addGoalHandler} color='#b180f0'/>
                        </View>
                    </View>
                    
                </View>
            </Modal>

        </>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#311b6b',
        paddingBottom: 32,
      },
      buttonContainer: {
        flexDirection: 'row',
      },
      button: {
        width: '30%',
        marginHorizontal: 8,
      },
      textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: '85%',
        padding: 8,
        borderRadius: 6,
        marginVertical: 10,
        color: '#CEA7FF',
        backgroundColor: '#efd0ff'
      },
      folderImage: {
        marginTop: -100,
        margin: 10,
        alignSelf: 'center',
        objectFit: 'contain',
        height: 100,
        width: 100,
      },
  });