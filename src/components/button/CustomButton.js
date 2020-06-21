import React from 'react';
import { TouchableOpacity, StyleSheet, Text  } from 'react-native';
import { colors } from '../../res';

export const CustomButton = ({title, onPress}) => {
    return(
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
            activeOpacity={0.5}
        >
            <Text style={styles.text}> {title} </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    text: {
        fontSize: 16,
        color: colors.white
    }
});
