import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import Unsplash, { toJson } from "unsplash-js";
import { connect, Provider } from "react-redux";
import { createStore } from "redux";
import { bindActionCreators } from "redux";
import { reducer } from "../store/reducers.js";
import { actionChangeJSON } from "../store/actions.js";

const unsplash = new Unsplash({
  accessKey: "oDHHApev43qr2LKJ3539crA5R_NlpA79O98WzpiHRCM",
});

class Item extends React.Component {
  render() {
    const username = this.props.username;
    const navigation = this.props.navigation;
    const description = this.props.description;
    const link = this.props.link;
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("Browse", { url: link.full })}
      >
        <Image style={styles.image} source={{ url: link.regular }} />
        <View style={styles.textBlock}>
          <Text style={styles.text}>Author: {username}</Text>
          <Text style={styles.text}>Caption: {description}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

class HomeScreen extends React.Component {
  fetchJSONData() {
    unsplash.photos
      .listPhotos(1, 20, "latest")
      .then(toJson)
      .then((json) => {
        this.props.changeJSON(json);
      });
  }

  componentDidMount() {
    this.fetchJSONData();
  }

  render() {
    const dispatch = this.props.dispatch;
    const renderItem = ({ item }) => (
      <Item
        link={item.urls}
        navigation={this.props.navigation}
        description={item.alt_description}
        username={item.user.username}
      />
    );

    return (
      <SafeAreaView style={styles.container}>
        <FlatList data={this.props.jsonDATA} renderItem={renderItem} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#696969",
    marginVertical: 10,
    marginHorizontal: 14,
    borderRadius: 16,
  },
  text: {
    fontSize: 18,
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
  },
  image: {
    width: "100%",
    height: 350,
    borderRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  textBlock: {
    marginVertical: 10,
    marginHorizontal: 5,
  },
});

const mapStateToProps = (state) => {
  return {
    jsonDATA: state.jsonDATA,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    changeJSON: bindActionCreators(actionChangeJSON, dispatch),
  };
};

const WrappedHomeScreen = connect(
  mapStateToProps,
  mapActionsToProps
)(HomeScreen);

export default WrappedHomeScreen;
