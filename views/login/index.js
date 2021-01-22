import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Image, TouchableOpacity, Text, Alert } from 'react-native';
import registros from '../../api/registros';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _ste: true,
            Usr: null,
            Psw: null
        };
        this.handleMostrarTrue = this.handleMostrarTrue.bind(this);
        this.handleMostrarFalse = this.handleMostrarFalse.bind(this);
    }
    handleMostrarTrue() {
        this.setState({ _ste: true }, () => { });
    }
    handleMostrarFalse() {
        this.setState({ _ste: false }, () => { });
    }
    render() {
        const { _ste, Usr, Psw } = this.state;
        return (
            <View style={styles.container}>
                <Image
                    resizeMode="contain"
                    style={styles.logo}
                    source={require('../.././assets/logo.png')} />
                <View style={styles.subContainer}>
                    <View style={styles.sectionStyle}>
                        <Image
                            source={{
                                uri:
                                    'https://icon-icons.com/icons2/1378/PNG/64/avatardefault_92824.png',
                            }}
                            style={styles.imageStyle} />
                        <TextInput
                            style={{ flex: 1 }}
                            placeholder="Usuario"
                            underlineColorAndroid="transparent"
                            onChangeText={usr => this.setState({ Usr: usr })} />
                    </View>
                    <View style={styles.sectionStyle}>
                        <Image
                            source={{
                                uri:
                                    'https://icon-icons.com/icons2/2072/PNG/64/internet_lock_locked_padlock_password_secure_security_icon_127078.png',
                            }}
                            style={styles.imageStyle}
                        />
                        <TextInput
                            secureTextEntry={_ste}
                            style={{ flex: 1 }}
                            placeholder="Contraseña"
                            underlineColorAndroid="transparent"
                            onChangeText={psw => this.setState({ Psw: psw })} />
                        <TouchableOpacity style={styles.btnMostrarC}
                            onPress={(_ste == true) ? this.handleMostrarFalse : this.handleMostrarTrue}>
                            <Image
                                source={{
                                    uri:
                                        'https://icon-icons.com/icons2/1102/PNG/64/1485969926-11-valid_78891.png',
                                }}
                                style={
                                    (_ste == false) ? styles.imageStyle : { width: 0, height: 0 }
                                }
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity

                        style={styles.btnEntrar}
                        onPress={() => {
                            registros.getOne(Usr)
                                .then(resp => {
                                    if (resp.status == 200) {
                                        //Login correcto
                                        this.props.navigation.navigate('Menu', {
                                            usuario: Usr,
                                            nombre: resp.data[0]['USUARIO'],
                                            nip: resp.data[0]['ESTADO']
                                        });
                                    }

                                }
                                )
                        }

                        } >
                        <Text style={styles.textBtn}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                    <Text
                        onPress={() => Alert.alert('Esto funciona')}
                        style={styles.textOC}>
                        Olvide mi contraseña</Text>
                    <Text
                        onPress={() => Alert.alert('Esto funciona')}
                        style={styles.textReg}>
                        Registrar una nueva cuenta</Text>
                </View>
            </View>);

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 30,
        alignItems: 'center',
        flexDirection: 'column'
    },
    logo: {
        marginTop: 40,
    },
    subContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        margin: 10,
    },
    imageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    sectionChecked: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        margin: 10,
    },
    btnMostrarC: {
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#000'
    },
    btnEntrar: {
        width: "100%",
        height: 50,
        borderRadius: 20,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBtn: {
        color: 'white',
        fontSize: 20
    },
    textOC: {
        marginTop: 10,
        fontSize: 15,
        color: '#b2bec3',
        textDecorationLine: 'underline'
    },
    textReg: {
        marginTop: 10,
        fontSize: 15,
        color: '#0984e3',
        fontWeight: "500",
        textDecorationLine: 'underline'
    }
})


export default Login;