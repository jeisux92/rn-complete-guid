import React from "react"
import { View, Text, StyleSheet } from "react-native"

const GoalItem = (props) =>
    (<View style={styles.listItem}>
        <Text>{props.value}</Text>
    </View>)


const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: "#CCC",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5
    }
})

export default GoalItem;