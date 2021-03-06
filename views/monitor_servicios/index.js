import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Image } from 'react-native';
import registros from '../../api/registros';
import { AuthContext } from '../../components/context';
import CustomIcon from '../../components/Custom_Icon';

class monitor_servicios extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const _ultimaMillaImageUri  = 'https://icon-icons.com/icons2/1642/PNG/72/careshippingservicehandlingpackage_109799.png';
        const _rutaImageUri         = 'https://cdn.icon-icons.com/icons2/54/PNG/128/map_route_10854.png';
        const _monitorearImageUri   = 'https://cdn.icon-icons.com/icons2/710/PNG/128/placeholder_icon-icons.com_62048.png';
        const _cerrarSImageUri      = 'https://cdn.icon-icons.com/icons2/1372/PNG/128/logout_90894.png';

        return (
            <View style={styles.container}>
                <View style={styles.subcontainerTitulo}>
                    <Text style={styles.title} >
                        Monitreo de Servicios</Text>
                    <Text style={styles.subtitle}>
                        Avance de entrega</Text>
                </View>
                <View style={styles.subcontainerIconos}>
                    
                </View>
            </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    subcontainerTitulo: {
        flex: 1,
        backgroundColor: '#1e3799',
        paddingTop : 20,
        paddingLeft : 10,
        borderBottomRightRadius : 200

    },
    subcontainerIconos: {
        flex: 2,
        margin: 10,
        flexDirection: 'column',
    },
    title: {
        fontSize: 22,
        fontWeight : 'bold',
        color: 'white',
        marginLeft: 15
    },
    subtitle: {
        fontSize: 22,
        fontWeight : 'bold',
        color: '#32B5C2',
        marginLeft: 15
    }
})
export default monitor_servicios;