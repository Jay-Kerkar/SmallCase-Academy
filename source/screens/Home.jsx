import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Navbar from '../components/Navbar'

const Home = () => {
    const heading1 = "Welcome To"
    const heading2 = "SmallCase Academy"
    const description = "We offer quality education, ensure that each child is performing well and good and they score good marks in their examinations"

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.banner} resizeMode="contain" source={require("../../assets/banner.png")} />
                <Text style={styles.heading}>{heading1}</Text>
                <Text style={[styles.heading, { fontSize: 25, color: "#4c5dab", marginTop: 0 }]}>{heading2}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
            <View style={styles.navbar}>
                <View style={styles.line}></View>
                <Navbar />
                <View style={[styles.line, { marginVertical: 10 }]}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        textAlign: "center"
    },
    header: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        paddingHorizontal: 10
    },
    banner: {
        width: "100%",
        aspectRatio: 1,
        display: "flex",
        alignItems: "stretch",
        marginTop: 50,
        borderRadius: 20
    },
    heading: {
        fontSize: 20,
        color: "#344055",
        textTransform: "uppercase"
    },
    description: {
        textAlign: "left",
        fontSize: 19,
        color: "#7d7d7d",
        marginTop: 30,
        paddingBottom: 50,
        lineHeight: 26
    },
    line: {
        marginBottom: 10,
        borderWidth: 0.5,
        borderColor: "grey"
    }
})

export default Home
