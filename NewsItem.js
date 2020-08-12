import React, { Component } from 'react';
import { View, Text, Dimensions, ImageBackground, Image, TouchableOpacity, LayoutAnimation } from 'react-native';
import moment from 'moment';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class NewsItem extends Component{
  constructor(props){
    super(props);
    this.state = { desc: false }
  }
  componentDidMount(){
  }
  render(){
    return (
      <View style={{ marginBottom: 48 }}>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Detail', { item: this.props.item })}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16, width: SCREEN_WIDTH-32, marginHorizontal: 16, borderRadius: 6, borderWidth: 0.3, borderColor: 'black', marginBottom: 20 }}>
          <Text style={{ color:'white', width: 220, fontWeight: '800', fontSize: 16, lineHeight: 24 }}>{this.props.item.title}</Text>
          <ImageBackground
            source={{uri: this.props.item.urlToImage}}
            style={{ height: 120, width: 120, borderRadius: 12, borderWidth: 0.2, borderColor: 'white' }}
            resizeMode='cover'
          />
        </View>
        </TouchableOpacity>
        {
          this.state.desc &&
          <View style={{ width: SCREEN_WIDTH-32, marginHorizontal: 16, marginBottom: 24, marginTop: 8 }}>
            <Text style={{ color: 'white', fontWeight: '500', fontSize: 14, lineHeight: 19 }}>{this.props.item.description}</Text>
          </View>
        }
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: SCREEN_WIDTH-32, marginHorizontal: 16 }}>
          <Text style={{ color: 'white', fontWeight: '500', fontSize: 14, width: (SCREEN_WIDTH-32)/2-18 }}>{moment(this.props.item.publishedAt).fromNow()}</Text>
          <TouchableOpacity onPress={()=>{
            LayoutAnimation.easeInEaseOut();
            this.setState({ desc: !this.state.desc })
          }}>
          <Image source={this.state.desc? require('./up.png'):require('./arrow.png')} style={{ height: this.state.desc? 14: 14, width: this.state.desc? 28: 36, marginTop: 18 }} resizeMode='cover' />
          </TouchableOpacity>
          <Text style={{ textAlign: 'right', color: 'white', fontWeight: '600', fontSize: 14, width: (SCREEN_WIDTH-32)/2-18 }}>By {this.props.item.author}</Text>
        </View>
      </View>
    )
  }
}

export default NewsItem;
