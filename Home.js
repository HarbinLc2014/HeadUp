/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { SafeAreaView, Text, FlatList, RefreshControl, ActivityIndicator } from 'react-native';

import NewsItem from './NewsItem';

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('b06b6dbb2fc04dfc8347a5c57d9bd2d7');

class Home extends Component {
  constructor(props){
    super(props);
    this.state = { articles: [], refreshing: false }
  }
  async componentDidMount(){
    newsapi.v2.topHeadlines({
      sources: 'bbc-news,the-verge',
      language: 'en',
      from: '2020-08-12',
      to: '2020-08-12',
    }).then(response => {
      console.log(response)
      this.setState({ articles: response.articles })
    });
}
  async fetchArticles(){
    setTimeout(async()=>{
    newsapi.v2.topHeadlines({
      sources: 'bbc-news,the-verge',
      language: 'en',
      from: '2020-08-12',
      to: '2020-08-12',
    }).then(response => {
      console.log(response)
      this.setState({ articles: response.articles, refreshing: false })
    });
  }, 1500);
  }
  render(){
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <FlatList
        refreshControl={
          <RefreshControl
            tintColor='white'
            progressBackgroundColor='white'
            refreshing={this.state.refreshing}
            onRefresh={async()=>{
              this.setState({ refreshing: true })
              await this.fetchArticles();
            }}
            title='Refreshing...'
            titleColor='white'
          />
        }
        data={this.state.articles}
        renderItem={({ item }) => <NewsItem item={item} navigation={this.props.navigation}/>}
        keyExtractor={(item, index) => String(index)}
      />
      </SafeAreaView>
    );
  }
}

export default Home;
