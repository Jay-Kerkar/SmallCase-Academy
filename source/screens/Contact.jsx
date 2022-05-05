import React, { useState } from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native"
import Checkbox from "expo-checkbox"

const Contact = ({ navigation }) => {
    const [name, setName] = useState("")
    const [emailId, setEmailId] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
    const [message, setMessage] = useState("")
    const [checkBox, setCheckBox] = useState(false)

    const submit = () => {
        if (!name && !emailId && !mobileNumber && !message) {
            Alert.alert("Please fill all the details")
        } else {
            Alert.alert(`Thank You ${name}`)
            navigation.navigate("Home")
            setName("")
            setEmailId("")
            setMobileNumber("")
            setMessage("")
            setCheckBox("")
            setCheckBox(false)
        }
    };

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeader}>Get in touch with Us </Text>

            <Text style={styles.description}>
                Feel free to ask queries/questions at jaykerkar0405@gmail.com
            </Text>

            <View style={styles.inputContainer}>
                <Text style={styles.labels}> Enter your name </Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder={"Jay Kerkar"}
                    value={name}
                    onChangeText={(name) => setName(name)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labels}> Enter your email id </Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder={"example@domain.com"}
                    autoCapitalize="none"
                    value={emailId}
                    onChangeText={(emailId) => setEmailId(emailId)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labels}> Enter your mobile number</Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder={"8389022114"}
                    value={mobileNumber}
                    onChangeText={(mobileNumber) => setMobileNumber(mobileNumber)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labels}> How can we help you? </Text>
                <TextInput
                    style={[styles.inputStyle, styles.multilineStyle]}
                    placeholder={"Ask your doubts"}
                    value={message}
                    onChangeText={(message) => setMessage(message)}
                    numberOfLines={5}
                    multiline={true}
                />
            </View>

            <View style={styles.wrapper}>
                <Checkbox
                    value={checkBox}
                    onValueChange={() => setCheckBox(!checkBox)}
                    color={checkBox ? "#4630EB" : undefined}
                />
                <Text style={styles.wrapperText}>
                    I have read and agreed with the T&C
                </Text>
            </View>

            <TouchableOpacity
                style={[
                    styles.buttonStyle,
                    {
                        backgroundColor: checkBox ? "#4630EB" : "grey",
                    },
                ]}
                disabled={!checkBox}
                onPress={submit}>
                <Text style={styles.buttonText}> Submit </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        paddingHorizontal: 30,
        backgroundColor: "#fff"
    },
    mainHeader: {
        fontSize: 24,
        color: "#344055",
        fontWeight: "500",
        paddingTop: 20,
        paddingBottom: 15,
        textTransform: "capitalize"
    },
    description: {
        fontSize: 18,
        color: "#7d7d7d",
        paddingBottom: 20,
        lineHeight: 25
    },

    inputContainer: {
        marginTop: 20,
    },
    labels: {
        fontSize: 15,
        color: "#7d7d7d",
        paddingBottom: 5,
        lineHeight: 25
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.3)",
        paddingHorizontal: 15,
        paddingVertical: 6,
        borderRadius: 2
    },
    multilineStyle: {
        paddingVertical: 4
    },
    buttonStyle: {
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 18,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 15
    },
    buttonText: {
        color: "#eee",
    },
    wrapper: {
        display: "flex",
        flexDirection: "row",
        marginTop: 10
    },
    wrapperText: {
        marginLeft: 10,
        color: "#7d7d7d"
    },
});

export default Contact