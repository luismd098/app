import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Image } from 'react-native';
import registros from '../../api/registros';
import { AuthContext } from '../../components/context';
import CustomIcon from '../../components/Custom_Icon';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _nombre: 'Not Found',
            _nip: 'Not Found',

        };
        this.iconoUltimaMilla = this.iconoUltimaMilla.bind(this);
        this.iconMonitorServicios = this.iconMonitorServicios.bind(this);
    }
    iconoUltimaMilla() {
        console.log("Ultima milla");
        this.props.navigation.navigate('Recolecciones');
    }
    iconMonitorServicios() {
        console.log("Monitor de Servicios");
        this.props.navigation.navigate('monitor_servicios');
    }


    render() {
        const { _nombre, _nip } = this.state;
        const _ultimaMillaImageUri = 'https://icon-icons.com/icons2/1642/PNG/72/careshippingservicehandlingpackage_109799.png';
        const _rutaImageUri = 'https://cdn.icon-icons.com/icons2/54/PNG/128/map_route_10854.png';
        const _monitorearImageUri = 'https://cdn.icon-icons.com/icons2/710/PNG/128/placeholder_icon-icons.com_62048.png';
        const _cerrarSImageUri = 'https://cdn.icon-icons.com/icons2/1372/PNG/128/logout_90894.png';

        return (
            <View style={styles.container}>
                <View style={styles.subcontainerTitulo}>
                    <Text style={styles.text1}
                    >Bienvenido</Text>
                    <Text style={styles.text1}>
                        {_nombre}
                    </Text>
                    <Text style={styles.text2}>
                        {_nip}
                    </Text>
                </View>
                <View style={styles.subcontainerIconos}>
                    <CustomIcon imagePath={_ultimaMillaImageUri} title="Última milla" action={this.iconoUltimaMilla} />
                    <CustomIcon imagePath={_rutaImageUri} title="Finalizar Ruta" action={this.iconoUltimaMilla} />
                    <CustomIcon imagePath={_monitorearImageUri} title="Monitorear servicios" action={this.iconMonitorServicios} />
                    <SignOut uri={_cerrarSImageUri}/>
                </View>
            </View>);
    }
}

function SignOut({uri}) {
    const { signOut } = React.useContext(AuthContext);
    return <CustomIcon imagePath={uri} title="Cerrar sesión" action={signOut} />
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    subcontainerTitulo: {
        flex: 1,
        backgroundColor: '#1e3799',
        justifyContent: 'center'
    },
    subcontainerIconos: {
        flex: 5,
        margin: 10,
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
    }

})
export default Menu;