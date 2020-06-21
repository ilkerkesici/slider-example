import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from '../../res';

export const Dots = ({numberOfDots, activeIndex, activeSize, color, inactiveSize}) => {
    const [data, setData] = useState([]);

    const makeDummy = () => {
        let tempArray = [];
        for(let i = 0; i < numberOfDots; i++){
            tempArray.push(i);
        }
        setData(tempArray);
    }

    useEffect(() => {
        makeDummy();
    }, []);

    const renderDots = () => data.map((data, i) => {
        return (
            i == activeIndex ? 
                        <ActiveDot key={i} size={activeSize} color={color} /> :
                        <InactiveDot key={i} size={inactiveSize} color={color} />
        )
    });
    console.log(data.length);
    return(
        <View style={styles.container}>
            {
                renderDots()
            }
        </View>
    );
}

const ActiveDot = ({size, color}) => {
    const style = {
        backgroundColor: color || colors.primary,
        width: size || 20,
        height: size || 20,
        borderRadius: size ? size / 2 : 10
    }
    console.log(style);
    return(
        <View style={[style, styles.dot]} />
    );
}

const InactiveDot = ({size, color}) => {
    const style = {
        backgroundColor: color || colors.primary,
        width: size ||10,
        height: size || 10,
        borderRadius: size ? size / 2 : 5
    };
    const insideStyle = {
        backgroundColor: 'rgba(255,255,255,0.5)',
        width: size ||10,
        height: size || 10,
        borderRadius: size ? size / 2 : 10,
    }
    return(
        <View style={[style, styles.dot]}>
            <View style={[insideStyle]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        flexDirection: 'row',
    },
    dot: {
        margin: 5
    }
});