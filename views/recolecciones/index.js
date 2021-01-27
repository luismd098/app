import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Elemento_Recoleccion from '../../components/Custom_element/elemento_recoleccion';
import Elemento_Paquete from '../../components/Custom_element/elemento_paquete';
import Elemento_Acuse from '../../components/Custom_element/elemento_acuse';
import AsyncStorage from '@react-native-community/async-storage';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import registros from '../../api/registros';

const STORAGE_KEY = '@save_prueba1'
const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};
class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            _recolecciones: "10",
            _paquetes: "100",
            _acuses: "1",
            _entregas: "20",
            _listaEntregas: [],
            _isLoading: true

        };
        // const [state, setstate] = useState(initialState);
        this.iconoUltimaMilla = this.iconoUltimaMilla.bind(this);
        this.btnOrdinario = this.btnOrdinario.bind(this);
        this.tomarFoto = this.tomarFoto.bind(this);
        this.readData();

    }

    consultaWS = async () => {
        try {

            await AsyncStorage.setItem(STORAGE_KEY, "PruebaDeAlmacenado")
            console.log('Data successfully saved')
        } catch (e) {
            console.log('Failed to save the data to the storage')
        }
    }

    readData = async () => {
        try {
            const value = await AsyncStorage.getItem(STORAGE_KEY)

            if (value !== null) {
                this.setState({ _isLoading: false });
                console.log(value)
            } else {
                this.saveData();
                console.log("Data is empty")
            }
        } catch (e) {
            console.log('Failed to fetch the data from storage')
        }
    }
    iconoUltimaMilla() {
        console.log("Ultima milla");
    }
    btnOrdinario() {
        this.props.navigation.navigate('Ordinario');
    }

    tomarFoto() {
        launchCamera(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else {

                console.log('ImagePicker Error Code: ', response.errorCode);
                console.log('ImagePicker Error: ', response.errorMessage);
            }
        });
    }



    render() {

        const { _recolecciones, _paquetes, _acuses, _entregas, _isLoading } = this.state;
        if (_isLoading) {
            return <View><Text>Loading...</Text></View>;
        }
        else {
            return (
                <View style={styles.container}>
                    <View style={styles.subcontainerTitulo}>
                        <View style={styles.subcontainerSubtitulo}>
                            <View style={styles.subcontainer2}>
                                <Text style={styles.text1}
                                >{_recolecciones}</Text>
                                <Text style={styles.text1}
                                >recolecciones</Text>
                            </View>
                            <View style={styles.subcontainer2}>
                                <Text style={styles.text1}
                                >{_paquetes}</Text>
                                <Text style={styles.text1}
                                >paquetes</Text>
                            </View>
                            <View style={styles.subcontainer2}>
                                <Text style={styles.text1}
                                >{_acuses}</Text>
                                <Text style={styles.text1}
                                >acuses</Text>
                            </View>
                            <View style={styles.subcontainer2}>
                                <Text style={styles.text2}
                                >{_entregas}</Text>
                                <Text style={styles.text2}
                                >entregas</Text>
                            </View>
                            <View style={styles.progressBar}>
                                <View style={{ flex: 1, backgroundColor: "#8BED4F", width: '50%' }} />
                            </View>
                        </View>
                        <View style={styles.subcontainerCodigo}>
                            <TouchableOpacity
                                style={styles.imageStyle}
                                onPress={this.tomarFoto}>
                                <Image
                                    source={{
                                        uri: 'https://cdn.icon-icons.com/icons2/1603/PNG/512/price-scan-scanner-bar-barcode-code_108573.png',
                                    }}
                                    style={{ flex: 1, margin: 5 }} />
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={styles.subcontainerBotones}>
                        <TouchableOpacity style={styles.boton1}>
                            <Text style={styles.textUM}>Última milla</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.boton2}
                            onPress={this.btnOrdinario}>
                            <Text style={styles.textOrdinario}>Reg. Ordinario</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={styles.subcontainerLista}>
                        <Elemento_Recoleccion />
                        <Elemento_Recoleccion />
                        <Elemento_Acuse telefono="4522033598" />
                        <Elemento_Paquete />
                        <Elemento_Acuse />
                        <Elemento_Paquete />


                        {/* {this.state._listaEntregas.map(item => (
                        <Text></Text>
                    ))} */}
                    </ScrollView>
                </View>);
        }
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    subcontainerTitulo: {
        // flex: 3,
        width: '100%',
        height: 190,
        backgroundColor: '#1e3799',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    subcontainerSubtitulo: {
        flex: 2,
        backgroundColor: '#1e3799',
        justifyContent: 'center'
    },
    subcontainerCodigo: {
        flex: 1,
        backgroundColor: '#1e3799',
        justifyContent: 'center',
        alignItems: 'center'
    },
    subcontainer2: {
        flexDirection: 'row',

    },
    boton1: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    boton2: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textUM: {
        borderBottomColor: 'blue',
        borderBottomWidth: 1,
        fontSize: 20,
        color: '#74b9ff'
    },
    textOrdinario: {
        fontSize: 20,
        color: '#74b9ff'
    },
    subcontainerBotones: {
        width: '100%',
        height: 50,
        flexDirection: 'row'
    },
    subcontainerLista: {
        flex: 6,
        flexDirection: 'column',
    },
    text2: {
        fontSize: 15,
        marginLeft: 15,
        color: 'white'
    },
    text1: {
        fontSize: 22,
        color: 'white',
        marginLeft: 15
    },
    progressBar: {
        height: 20,
        width: '75%',
        backgroundColor: 'white',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 5,
        marginLeft: 10,
        marginTop: 10
    },
    imageStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'white',
        borderRadius: 5
        // margin: 20
    },

})

export default Menu;