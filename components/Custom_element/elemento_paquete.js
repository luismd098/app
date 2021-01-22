import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native';

class Elemento extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileNo: this.props.telefono || 0
        };
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
                    Alert.alert("Number is not available");
                } else {
                    return Linking.openURL(phoneNumber);
                }
            })
            .catch(err => console.log(err));
    };
    render() {
        const { imagePath } = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.subContainer}>
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