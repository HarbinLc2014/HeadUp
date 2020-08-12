import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, Dimensions, ScrollView, Linking, TouchableOpacity } from 'react-native';
import moment from 'moment'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class Detail extends Component {
  render(){
    const {navigation} = this.props;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'black'}}>
        <ScrollView>
          <TouchableOpacity onPress={async()=>{
            await Linking.openURL(this.props.route.params.item.url);
          }}>
            <Text style={{ color: 'white', fontSize: 28, fontWeight: '700', paddingHorizontal: 24, paddingVertical: 32 }}>{this.props.route.params.item.title}</Text>
          </TouchableOpacity>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', paddingHorizontal: 24, paddingVertical: 8 }}>{this.props.route.params.item.description}</Text>
          <Text style={{ color: 'white', fontSize: 14, fontWeight: '600', paddingHorizontal: 24, paddingVertical: 32 }}>By {this.props.route.params.item.author} • {moment(this.props.route.params.item.publishedAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}</Text>

          <Image
            source={{ uri: this.props.route.params.item.urlToImage }}
            style={{ width: SCREEN_WIDTH, height: 250 }}
            resizeMode='cover'
          />

          <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', paddingHorizontal: 24, paddingVertical: 16 }}>{this.props.route.params.item.content}</Text>
          <View>
          <Text style={{ color: 'white', fontSize: 14, fontWeight: '700', paddingHorizontal: 24, paddingVertical: 4 }}>See full content at </Text>
          <TouchableOpacity onPress={async()=>{
            await Linking.openURL(this.props.route.params.item.url);
          }}>
            <Text style={{ color: 'white', fontSize: 14, fontWeight: '700', paddingHorizontal: 24, paddingVertical: 4 }}>{this.props.route.params.item.url}</Text>
          </TouchableOpacity>
          </View>

        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default Detail;
