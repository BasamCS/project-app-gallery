import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView,Dimensions, TouchableOpacity } from 'react-native';
import { } from 'react-native-paper';
import { createAppContainer, createStackNavigator } from 'react-navigation';


let id = 0;
const generateId = () => ++id
class HomeScreen extends React.Component {
  state = {
    gallary: [
      { id: generateId(), name: require('./image/1.jpg'), title: 'natural', more: 'size:400.400, type:jpg' },
      { id: generateId(), name: require('./image/2.jpeg'), title: 'sea', more: 'size:400.400, type:jpj' },
      { id: generateId(), name: require('./image/3.jpeg'), title: 'beautiful forest', more: 'size:400.400, type:jpg' },
      { id: generateId(), name: require('./image/4.jpeg'), title: 'Tree', more: 'size:400.400, type:jpg' },
      { id: generateId(), name: require('./image/5.jpeg'), title: 'spring', more: 'size:400.400, type:jpg' },
      { id: generateId(), name: require('./image/6.jpg'), title: 'Mask', more: 'size:400.400, type:jpg' },
      { id: generateId(), name: require('./image/9.jpg'), title: 'Cat', more: 'size:400.400, type:jpg' },
      { id: generateId(), name: require('./image/11.jpg'), title: 'mauntain', more: 'size:400.400, type:jpg' }]
  }
  render() {
    return (
      <View >
        
        <ScrollView>
        <View style={styles.container}>
        
          {
            this.state.gallary.map(s => <TouchableOpacity key={s.id}
              onPress={() => this.props.navigation.navigate('Details', { photo: s })}
            >
              <View style={styles.imagewarp}>
                <Image key={s.id}

                  source={s.name} ></Image>
              </View>
            </TouchableOpacity>)
          }
        </View>
</ScrollView>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center',  }}>
        
        <Text style={{ fontSize: 40,fontWeight: 'bold', paddingTop: 2, }}>
        {this.props.navigation.state.params.photo.title}</Text>

        <Image style={styles.images}
         source={this.props.navigation.state.params.photo.name} />

        <Text style={{ fontSize: 20,fontWeight: 'bold', paddingTop: 4, }}>
        {this.props.navigation.state.params.photo.more}</Text>

      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#eee',
    
  },
  imagewarp: {
    margin: 2,
    padding: 2,
    flexDirection: 'column',
    height: (Dimensions.get('window').height / 3) - 40,
    width: (Dimensions.get('window').width / 2) - 4,
    backgroundColor: '#fff',
  },
  images:{
    marginTop: 20,
    width:null,
    height: 500,
    alignSelf: 'stretch',
  }
  
});
