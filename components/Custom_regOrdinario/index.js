import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

class Registro extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { title } = this.props;
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={console.log("Ordinario")}>
                    <Text style={styles.textStyle}>
                        {title}
                    </Text>

            </TouchableOpacity>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        // backgroundColor: 'black'
    },
    textStyle: {
        margin: 10,
        marginLeft: 15,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0984e3'
    }

});

export default Registro;