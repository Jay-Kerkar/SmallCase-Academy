import React from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"
import Courses from "../api/Course"

const CourseDetails = ({ navigation, route }) => {
    const id = route.params.courseId

    const selectedCourse = Courses.find((element) => {
        return id === element.id
    });

    return (
        <View style={styles.mainContainer}>
            <View style={styles.courseContainer}>
                <View>
                    <Image
                        style={styles.cardImage}
                        source={selectedCourse.image}
                        resizeMode="contain"
                    />
                </View>
                <Text style={styles.mainHeader}>{selectedCourse.title}</Text>
                <Text style={styles.description}>{selectedCourse.description}</Text>
                <Text style={[styles.description, styles.subCourse]}>
                    {selectedCourse.utility[0].name}
                </Text>
                <Text style={[styles.description, styles.subCourse]}>
                    {selectedCourse.utility[1].name}
                </Text>
                <Text style={[styles.description, styles.subCourse]}>
                    {selectedCourse.utility[2].name}
                </Text>
                <View style={styles.buttonContainer}>
                    <Text style={styles.price}> {selectedCourse.price} </Text>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => navigation.navigate("Course")}>
                        <Text style={styles.buttonText}> Join Now </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 20,
    },
    courseContainer: {
        padding: 30,
        backgroundColor: "rgba(255, 255, 255, 0.90)",
        textAlign: "center",
        borderRadius: 5,
        shadowColor: "grey",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
        marginVertical: 12,
    },

    cardImage: {
        width: "100%",
        display: "flex",
        alignSelf: "center",
        height: 150,
        aspectRatio: 1,
    },

    mainHeader: {
        fontSize: 22,
        color: "#344055",
        textTransform: "uppercase",
        fontWeight: "500",
        paddingTop: 10,
        paddingBottom: 15,
        textAlign: "center",
    },

    subHeader: {
        fontSize: 18,
        color: "#344055",
        textTransform: "uppercase",
        fontWeight: "500",
        paddingBottom: 15,
        textAlign: "center",
    },

    description: {
        fontSize: 16,
        color: "#7d7d7d",
        paddingBottom: 20,
        lineHeight: 20,
    },
    subCourse: {
        textTransform: "uppercase",
        color: "#344055",
        textAlign: "center",
    },

    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },

    price: {
        backgroundColor: "#344055",
        color: "#eee",
        paddingVertical: 10,
        paddingHorizontal: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottomLeftRadius: 1,
        borderTopLeftRadius: 1,
        fontSize: 20,
        textAlign: "center"
    },
    buttonStyle: {
        backgroundColor: "#809fff",
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 18,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 20,
        color: "#eee"
    },
});

export default CourseDetails