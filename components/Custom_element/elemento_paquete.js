import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, View, Linking} from 'react-native';

class Elemento extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '1234123',
            mobileNo: this.props.telefono || 0
        };
        // this.action = this.action.bind(this);
    }
    call = () => {
        console.log("+++++++++callNumber ", this.state.mobileNo);
        let phoneNumber = this.state.mobileNo;
        if (Platform.OS !== "android") {
            phoneNumber = `telprompt:${this.state.mobileNo}`;
        } else {
            phoneNumber = `tel:${this.state.mobileNo}`;
        }
        Linking.canOpenURL(phoneNumber)
            .then(supported => {
                if (!supported) {
                    Alert.alert("El numero no es valido");
                } else {
                    return Linking.openURL(phoneNumber);
                }
            })
            .catch(err => console.log(err));
    }; 

    action = () => {
        const { id } = this.props;
        this.props.navigation.navigate('Entrega',{ID:id});
    };
    render() {
        const { imagePath } = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.subContainer}
                onPress={this.action}>
                    <View style={styles.containerImagen}>
                        <Image
                            source={{
                                uri: 'https://cdn.icon-icons.com/icons2/2249/PNG/128/alpha_r_circle_outline_icon_139989.png',
                            }}
                            style={styles.imageStyle} />
                    </View>
                    <View style={styles.containerInfo}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>2331237482384778</Text>
                        <Text style={{ color: '#74b9ff' }}>Ruta Melshert,733. Col. Esperanza</Text>
                        <Text style={{ color: '#74b9ff' }}>CP. 56710 Nezahualcoyotl Edo. Mex</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.containerCall}>
                    <TouchableOpacity
                        onPress={this.call}>
                        <Image
                            source={{
                                uri: 'https://cdn.icon-icons.com/icons2/1130/PNG/128/calltelephoneauricularincircularbutton_80086.png',
                            }}
                            style={styles.imageStyle} />

                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        height: 100,
        flexDirection: 'row'
    },
    containerImagen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    subContainer: {
        flex: 4,
        flexDirection: 'row',
        backgroundColor: '#cce7e8'
    },
    imageStyle: {
        width: 50,
        height: 50
    },
    containerInfo: {
        flex: 3
    },
    containerCall: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#cce7e8'
    }

});

export default Elemento;