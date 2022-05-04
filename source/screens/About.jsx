import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet } from 'react-native'

const About = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Jay Kerkar</Text>
            <Text style={styles.description}>A React-Native Developer</Text>
            <View>
                <Image style={styles.image} source={{ uri: "https://us.123rf.com/450wm/djvstock/djvstock1508/djvstock150806893/44095667-web-developer-design-vector-illustration-eps-10-.jpg" }} />
            </View>
            <View style={styles.about}>
                <Text style={styles.subHeader}>About Me</Text>
                <Text style={styles.aboutDescription}>I have a work experience of 2 years, worked in different technologies and have built efficient app for many clients</Text>
            </View>
            <Text style={[styles.header, { paddingBottom: 10 }]}>Follow Me On Social Newtwork</Text>
            <View style={styles.menu}>
                <TouchableOpacity onPress={() => Linking.openURL("")} style={styles.button}>
                    <Image style={styles.socialIcons} source={{ uri: "https://parentzone.org.uk/sites/default/files/Instagram%20logo_0.jpg" }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL("")} style={styles.button}>
                    <Image style={styles.socialIcons} source={{ uri: "https://cdn.shopify.com/app-store/listing_images/21d07b9a03ab6e538a053381def7b15d/icon/CJnzrtj0lu8CEAE=.jpg" }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL("")} style={styles.button}>
                    <Image style={styles.socialIcons} source={{ uri: "https://pbs.twimg.com/profile_images/378800000041711687/d6050eb6ce3f141847fe200a914205bc_400x400.png" }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    header: {
        fontSize: 18,
        color: "#344055",
        textTransform: "uppercase",
        fontWeight: "500",
        marginTop: 40,
        marginBottom: 10
    },
    description: {
        fontSize: 18,
        color: "#7d7d7d",
        paddingBottom: 30
    },
    about: {
        backgroundColor: "#4c5dab",
        paddingHorizontal: 30,
        marginTop: 20
    },
    subHeader: {
        fontSize: 18,
        color: "#fff",
        textTransform: "uppercase",
        fontWeight: "500",
        marginVertical: 15,
        alignSelf: "center"
    },
    aboutDescription: {
        color: "#fff",
        fontSize: 18,
        lineHeight: 26,
        paddingVertical:10
    },
    menu: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    socialIcons: {
        width: "100%",
        height: 50,
        aspectRatio: 1,
        marginTop:10,
        padding:33,
        borderRadius:50
    }
})

export default About