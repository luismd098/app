import React, { Component } from 'react';
import { ScrollView, Button, View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import registros from '../../api/registros';
import Elemento_Recoleccion from '../../components/Custom_element/elemento_recoleccion';
import Elemento_Paquete from '../../components/Custom_element/elemento_paquete';
import Elemento_Acuse from '../../components/Custom_element/elemento_acuse';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _recolecciones: "10",
            _paquetes: "100",
            _acuses: "1",
            _entregas: "20",
            _listaEntregas: []

        };
        this.iconoUltimaMilla = this.iconoUltimaMilla.bind(this);
        this.btnOrdinario = this.btnOrdinario.bind(this);
    }
    iconoUltimaMilla() {
        console.log("Ultima milla");
    }
    btnOrdinario(){
        this.props.navigation.navigate('Ordinario');
    }
    Entregas = () => {
        //Consulta

    }

    render() {
        const { _recolecciones, _paquetes, _acuses, _entregas } = this.state;
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
                    <Elemento_Acuse />
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