import React from 'react'
import { FlatList, Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Courses from '../api/Course'

const Course = ({ navigation }) => {
    const courseCard = ({ item }) => {
        return (
            <View style={styles.container}>
                <View style={styles.course}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{ uri: `${item.image}` }} resizeMode="contain" />
                    </View>
                    <Text style={styles.title}>
                        {item.title}
                    </Text>
                    <Text style={styles.description}>
                        {item.description}
                    </Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => {
                            navigation.navigate("CourseDetails", {
                                courseId: item.id,
                            })
                        }}>
                            <Text style={styles.buttonText}>Course Details</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <FlatList keyExtractor={(item) => { item.id }} data={Courses} renderItem={courseCard} />
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    course: {
        padding: 30,
        textAlign: "center",
        borderRadius: 5,
        backgroundColor: "rgba(255,255,255,0.90)",
        shadowColor: "grey",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
        marginVertical: 30
    },
    image: {
        width: "100%",
        height: undefined,
        aspectRatio: 1
    },
    title: {
        fontSize: 22,
        color: "#344055",
        textTransform: "uppercase",
        paddingBottom: 15
    },
    description: {
        textAlign: "left",
        paddingBottom: 15,
        lineHeight: 20,
        fontSize: 16,
        color: "#7d7d7d"
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    button: {
        backgroundColor: "#809fff",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        fontSize: 20,
        color: "#eee",
        textTransform: "capitalize"
    }
})

export default Course