import React from 'react'
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Navbar = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.navbar}>
            <TouchableOpacity style={styles.navitems} onPress={() => { navigation.navigate("Course") }}>
                <Image style={styles.navicons} source={{ uri: "https://cdn1.iconfinder.com/data/icons/literary-genres-color/64/teaching-training-course-lessons-skill-presentation-512.png" }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navitems} onPress={() => { navigation.navigate("About") }}>
                <Image style={styles.navicons} source={{ uri: "https://www.nicepng.com/png/detail/239-2396381_join-us-society-icon-png.png" }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navitems} onPress={() => { navigation.navigate("Contact") }}>
                <Image style={styles.navicons} source={{ uri: "https://thumbs.dreamstime.com/b/icon-support-customer-service-call-center-vector-icons-help-phone-contact-business-line-symbol-communication-telephone-technology-140921551.jpg" }} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    navicons: {
        width: "100%",
        height: 50,
        aspectRatio: 1
    }
})

export default Navbar