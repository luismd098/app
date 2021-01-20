import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Image, TouchableOpacity, Text, Button } from 'react-native';
import registros from '../../api/registros';
// import CheckboxFormX from '@react-native-community/checkbox'

class InputIcon extends Component {
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
                        onChangeText={usr => this.setState({Usr: usr})} />
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
                        onChangeText={psw => this.setState({Psw: psw})} />
                </View>

                <View style={styles.sectionChecked}>
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
                    <Text style={{
                        flex: 1,
                        fontSize: 15,
                        fontStyle: 'normal',
                    }}>   Mostrar contraseña</Text>
                </View>
                <Button
                    title="Entrar"
                    onPress={() => {
                        registros.getOne(1)
                            .then(resp => {
                                if (resp.status == 200) {
                                    //Login correcto
                                    const navR = React.useRef(null);
                                    navR.current.navigate('Menu');
                                    // this.props.navigation.('Menu');
                                    console.log(resp.data);
                                    console.log(Usr+Psw)
                                }

                            }
                            )
                    }
                    } />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    boton: {
        height: 40,
        width: 100,
    },
    btnMostrarC: {
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#000'
    }
});

export default InputIcon;