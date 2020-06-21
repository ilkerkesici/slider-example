import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

export const Card = ({image, title, content }) => {
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image resizeMode={'contain'} source={{uri: image}} style={styles.image} />
            </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.content}>{content}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        //flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    image: {
      flex: 1,
      alignSelf: 'stretch'
    },
    title: {
        marginHorizontal: 10,
        fontWeight: 'bold',
        marginVertical: 20,
        fontSize: 18
    },
    content:{
        fontSize: 16,
        marginBottom: 5,
        marginHorizontal: 10
    },
    imageContainer:{
        height: 200,
        alignSelf: 'stretch'
    }
});
