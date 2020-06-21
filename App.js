/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef, useState} from 'react';
import Slider from './src/components/slider';
import { View, StyleSheet, Platform } from 'react-native';
import { CustomButton as Button } from './src/components/button';
import { Dots } from './src/components/dots';

const App = () => {
  let slider = null;
  const [index, setIndex] = useState(0);
  
  return (
    <View style={styles.container}>
      <Slider 
        data={DATA} 
        ref={ref => slider = ref} 
        onSwipe={(i) => setIndex(i)}
        onSwipeLeft = {() => console.log('onSwipeLeft')}
        onSwipeRight = {() => console.log('onSwipeRight')}
      />
      <Dots numberOfDots={DATA.length} activeIndex={index} />
      <Button title={'Next'} onPress={() => slider.next()} />
      <Button title={'Previous'} onPress={() => slider.previous()} />
      <Button title={'Go End'} onPress={() => slider.goEnd()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignSelf: 'stretch',
    marginTop: Platform.OS == 'ios' ? 40 : 20,
  }
})

const DATA = [
  {
    title: 'Başlık 1',
    description: 'Açıklama 1',
    image: 'https://picsum.photos/200/300',
  },
  {
    title: 'Başlık 2',
    description: 'Açıklama 2',
    image: 'https://picsum.photos/200/300',
  },
  {
    title: 'Başlık 2',
    description: 'Açıklama 2',
    image: 'https://picsum.photos/200/300',
  },
  {
    title: 'Başlık 2',
    description: 'Açıklama 2',
    image: 'https://picsum.photos/200/300',
  },
  {
    title: 'Başlık 2 **kalın yazi**',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    image: 'https://picsum.photos/200/300',
  },
  {
    title: 'Başlık 2',
    description: 'Açıklama 2 **kalın yazi**',
    image: 'https://picsum.photos/200/300',
  },
];



export default App;
