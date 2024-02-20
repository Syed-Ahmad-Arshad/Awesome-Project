import { StyleSheet } from "react-native"
import { View, Text, Pressable } from "react-native";

export default function GoalItem({text, id, onDeleteItem}) {

    return (
        <Pressable style={({pressed})=>pressed&&styles.pressedItem} android_ripple={{color: '#dddddd'}} onPress={onDeleteItem.bind(this, id)}>
            <View style={styles.activityContainer}>
                <Text style={styles.activity}>
                    {text}
                </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    activity: {
      color: '#311b6b',
      paddingVertical: 8,
      backgroundColor: '#EFE2FF',
      marginVertical: 13,
      textAlignVertical: 'center',
      alignSelf: 'center',
      fontWeight: 'bold'
    },
    activityContainer: {
      backgroundColor: "#EFE2FF",
      marginVertical: 2,
      borderRadius: 12,
    },
    pressedItem: {
        opacity: 0.5,
    },
  });