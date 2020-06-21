import React, {useState, Component} from 'react';
import {ScrollView, StyleSheet, View, Dimensions} from 'react-native';
import {Card} from './Card';

const {width} = Dimensions.get('window');



class Slider extends Component {
  index = 0;


  handleScrollEnd = (e) => {
    if (!e) {
      return;
    }
    const {nativeEvent} = e;
    const newBound = nativeEvent.contentOffset.x;
    const { onSwipeLeft, onSwipe, onSwipeRight } = this.props;
    if(newBound == 0){
        if(this.index == 0) return; // There is no change
        onSwipe && onSwipe(0);
        onSwipeLeft && onSwipeLeft();
        return;
    }
    const newIndex = newBound / width;
    if(this.index == newIndex) return;
    if(newIndex > this.index && onSwipeRight) onSwipeRight();
    else if(newIndex < this.index && onSwipeLeft) onSwipeLeft();
    this.index = newIndex;
    onSwipe && onSwipe(newIndex);

  };

  isEnd = () => {
    const { data } = this.props;
    return data?.length == this.index + 1 ? true : false;
  }

  next = () => {
      const { onSwipe, onSwipeRight, onReachEnd } = this.props;
      if(this.isEnd()) return;
      let newIndex = this.index + 1;
      let scrollValue = newIndex * width;
      this.scrollViewRef.scrollResponderScrollTo({
        x: scrollValue,
        animated: true
      });
      onSwipeRight && onSwipeRight();
      onSwipe && onSwipe(newIndex);
      this.index = newIndex;
      if(this.isEnd() && onReachEnd) onReachEnd();
  };

  previous = () => {
    const { onSwipe, onSwipeLeft, onReachStart } = this.props;
    if(this.index == 0 ) return;
      let newIndex = this.index - 1;
      let scrollValue = newIndex * width;
      this.scrollViewRef.scrollResponderScrollTo({
        x: scrollValue,
        animated: true
      });
      onSwipeLeft && onSwipeLeft();
      onSwipe && onSwipe(newIndex);
      this.index = newIndex;
      if(this.index == 0 && onReachStart ) onReachStart ();
  }

  goEnd = () => {
    if(this.isEnd()) return;
    const { data, onSwipe, onSwipeRight, } = this.props;
    let scrollValue =  (data.length - 1) * width;
    this.scrollViewRef.scrollResponderScrollTo({
      x: scrollValue,
      animated: true
    });
    this.index = data.length -1;
    onSwipeRight && onSwipeRight();
    onSwipe && onSwipe(this.index);

  }

  goStart = () => {
    if(this.index == 0) return;
    const { data, onSwipe, onSwipeLeft, } = this.props;
    let scrollValue =  (data.length - 1) * width;
    this.scrollViewRef.scrollResponderScrollTo({
      x: scrollValue,
      animated: true
    });
    this.index = 0;
    onSwipeLeft && onSwipeLeft();
    onSwipe && onSwipe(0);
  }

  scrollContent = () => {
    const { data } = this.props;
    return data?.map((data, i) => (
            <View key={i} style={[styles.card]}>
              <Card
                title={data.title}
                image={data.image}
                content={data.description}
              />
            </View>
          ));
  }
    

  render() {
    return (
        <View>
          <ScrollView
            ref={(ref) => {
              this.scrollViewRef = ref;
            }}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={this.handleScrollEnd}>
            {this.scrollContent()}
          </ScrollView>
        </View>
    );
  }
}



export default Slider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  card: {
    width: width,
  },
});
