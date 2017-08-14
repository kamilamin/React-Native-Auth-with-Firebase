import React, { Component } from 'react';
import { Text, View, TextInput, TouchableHighlight } from 'react-native';
import firebase from 'firebase';

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'grey',
    },
    header: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 20
    },
    signIN: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 20
    },
    emailText: {
        fontSize: 20
    },
    cardStyle: {
        top: 50,
        marginRight: 20,
        marginLeft: 20,
        backgroundColor: 'grey'
    },
    submitBtn: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#4F5CC5',
        borderRadius: 5,
        height: 40,
        justifyContent: 'center',
        marginBottom: 40,
        marginLeft: 250,
        marginTop: 30,
        width: 100,
        paddingLeft: 20,
        paddingRight: 20,
    },
    submitText: {
        color: '#4F5CC5',
        fontWeight: '600'
    },
    gotoSignup: {
        alignItems: 'center',
        width: 300,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#4F5CC5',
        height: 40,
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 40,
        marginLeft: 30,
        borderRadius: 5
    },
    gotoSignupText: {
        color: '#4F5CC5',
        fontWeight: '200',
        textAlign: 'center'
    }
};

export class AboutComponent extends Component {
    state = { isLoggedIn: true }
    gotoNextPage() {
        const { navigate } = this.props.navigation;
        if (this.state.isLoggedIn) {
            navigate('SignUp');
        }
    }
    loginBtn() {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function(user) {
            alert('you are logged in');
        }).catch(function(e) {
            alert(e);
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>
                    Welcome to Patient Tracking App
                </Text>
                <Text style={styles.signIN}>
                    SIGN IN
                </Text>
                <Text style={styles.emailText}>
                    Email:
                </Text>
                <TextInput placeholder="Enter Email" onChangeText={(email) => this.setState({ email })} />
                <Text style={styles.emailText}>
                    Password:
                </Text>
                <TextInput placeholder="Enter Password" secureTextEntry onChangeText={(password) => this.setState({ password })} />
                <View>
                    <TouchableHighlight onPress={this.loginBtn.bind(this)} style={styles.submitBtn}>
                        <Text style={styles.submitText}>Login</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.gotoSignup} onPress={this.gotoNextPage.bind(this)}>
                        <Text style={styles.gotoSignupText}>New User Goto Sign Up</Text>
                    </TouchableHighlight>
                </View>
                
            </View>
        );
    }
}
AboutComponent.navigationOptions = () => ({
    title: 'Welcome to SIGN IN'
});