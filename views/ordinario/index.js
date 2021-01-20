import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import registros from '../../api/registros';
import Elemento_Recoleccion from '../../components/Custom_element/elemento_recoleccion';
import Elemento_Paquete from '../../components/Custom_element/elemento_paquete';
import Elemento_Acuse from '../../components/Custom_element/elemento_acuse';
import { TextInput } from 'react-native-gesture-handler';


class Ordinario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _recolecciones: "10",
            _paquetes: "100",
            _acuses: "1",
            _entregas: "20",
            _escaneados: "2",
            _listaEntregas: []

        };
        this.btnUltimaMilla = this.btnUltimaMilla.bind(this);
    }
    btnUltimaMilla() {
        this.props.navigation.pop();
    }
    Entregas = () => {
        //Consulta

    }

    render() {
        const { _recolecciones, _paquetes, _acuses, _entregas, _escaneados } = this.state;
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
                        <TouchableOpacity style={styles.imageStyle}>
                            <Image
                                source={{
                                    uri: 'https://cdn.icon-icons.com/icons2/1603/PNG/512/price-scan-scanner-bar-barcode-code_108573.png',
                                }}
                                style={{ flex: 1, margin: 5 }} />
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={styles.subcontainerBotones}>
                    <TouchableOpacity style={styles.boton1}
                        onPress={this.btnUltimaMilla}>
                        <Text style={styles.textUM}>Última milla</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton2}>
                        <Text style={styles.textOrdinario}>Reg. Ordinario</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
                    <View style={styles.subcontainer2}>
                        <Text style={styles.text3}
                        >{_escaneados}</Text>
                        <Text style={styles.text3}
                        >escaneados</Text>
                    </View>

                    <View style={{ width: '90%', height: 70, flexDirection: 'row', marginTop: 10 }}>
                        <View style={{ flex: 3 }}>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <Text style={{ color: '#0984e3' }}>Escanear</Text>
                            </View>
                            <View style={{ flex: 3 }}>
                                <TextInput style={{ borderBottomColor: '#74b9ff', borderBottomWidth: 1 }}></TextInput>
                            </View>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity style={styles.imageStyle}>
                                <Image
                                    source={{
                                        uri: 'https://cdn.icon-icons.com/icons2/1603/PNG/512/price-scan-scanner-bar-barcode-code_108573.png',
                                    }}
                                    style={{ flex: 1, margin: 5 }} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            
                        </View>
                    </View>
                    <ScrollView style={{width:'100%'}}>
                                    <Elemento_Paquete/>
                                    <Elemento_Recoleccion/>
                                    <Elemento_Paquete/>
                                    <Elemento_Recoleccion/>
                                    <Elemento_Paquete/>
                                    <Elemento_Recoleccion/>
                    </ScrollView>
                </View>
            </View>);
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
        alignItems: 'center'
    },
    boton2: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    textUM: {
        fontSize: 20,
        color: '#74b9ff'
    },
    textOrdinario: {
        borderBottomColor: 'blue',
        borderBottomWidth: 1,
        fontSize: 20,
        color: '#74b9ff'
    },
    subcontainerBotones: {
        width: '100%',
        height: 50,
        flexDirection: 'row'
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
    text3: {
        fontSize: 20,
        color: '#1e3799',
        fontWeight: 'bold',
        margin: 10
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
export default Ordinario;