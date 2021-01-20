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
        margin: 10,
        flexDirection: 'row',
        height: 50
    },
    textStyle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1e3799'
    }

});

export default Registro;