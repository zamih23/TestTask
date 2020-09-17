import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';

class Browse extends React.Component  {
  render(){
    const url = this.props.route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
      style = {styles.image}
      source = {{uri: url.url , }}
      />
    </View>
  );
}
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',

  },
});



export default Browse;
