import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native';

class Icon extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { imagePath, title, action } = this.props;
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={action}>
                <Image
                    source={{
                        uri: imagePath,
                    }}
                    style={styles.imageStyle} />
                <View style={styles.containerTitle}>
                    <Text style={styles.textStyle}>
                        {title}
                    </Text>
                </View>

            </TouchableOpacity>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        margin: 10,
        borderColor: '#bdc3c7',
        borderWidth: 1,
        borderRadius: 20,
        flexDirection: 'row',
        height: 100
    },
    imageStyle: {
        flex: 1,
        // height: 70,
        // width: 70,
        margin: 10
    },
    containerTitle: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1e3799'
    }

});

export default Icon;