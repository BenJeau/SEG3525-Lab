import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setRestaurant } from '../redux/actions';
import { Button, Chip, Snackbar } from 'react-native-paper';

const cities = [
  "Ottawa, ON",
  "Toronto, ON",
  "Vancouver, BC",
  "Montréal, QC",
  "Québec, QC",
]

const types = [
  "Petit déjeuner",
  "Lunch",
  "Dîner",
  "À emporter",
  "Boissons",
]

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCity: null,
      selectedType: null,
      showSnackbar: false
    }
  }

  componentDidMount() {
    this.props.navigation.addListener('willFocus', () => {
      this.setState({
        showSnackbar: this.props.navigation.getParam('showSnackbar', false)
      })
    });
  }

  render() {
    const { selectedType, selectedCity, showSnackbar } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Image resizeMode='contain' style={styles.logo} tintColor="#454545" source={require('../assets/icon.png')} />
          <Text style={styles.welcome}>Bienvenue aux restaurants uOttawa</Text>
          <Text style={styles.description}>Déguster et régaler en famille</Text>
        </View>
        <View style={styles.bottomSection}>
          <View style={styles.chipSection}>
            <Text style={styles.chipTitle}>Veuillez choisir une ville</Text>

            <View style={styles.chipGroup}>
              {
                cities.map((i, key) =>
                  <Chip key={key}
                    style={styles.chip}
                    selected={selectedCity === key}
                    onPress={() => this.setState({ selectedCity: selectedCity === key ? null : key })}>
                    {i}
                  </Chip>)
              }
            </View>

            <Text style={styles.chipTitle}>Veuillez choisir un type de repas</Text>

            <View style={styles.chipGroup}>
              {
                types.map((i, key) =>
                  <Chip key={key}
                    style={styles.chip}
                    selected={selectedType === key}
                    onPress={() => this.setState({ selectedType: selectedType === key ? null : key })}>
                    {i}
                  </Chip>)
              }
            </View>
          </View>
          <Button disabled={selectedType === null || selectedCity === null}
            mode="contained"
            onPress={() => this.props.navigation.navigate("Restaurants")}>
            Accéder les restaurants
        </Button>
        </View>
          <Snackbar
            visible={showSnackbar}
            onDismiss={() => this.setState({ showSnackbar: false })}
            action={{
              label: 'Rejeter',
              onPress: () => {
                this.setState({ showSnackbar: false })
              },
            }}
          >
            Votre commande a été envoyé!
        </Snackbar>
      </View>
    );
  }
}

const mapState = state => {
  return {
    restaurant: state.UserReducer.restaurant
  };
};

const mapDispatch = dispatch => {
  return bindActionCreators({ setRestaurant }, dispatch);
};

export default connect(mapState, mapDispatch)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  welcome: {
    paddingTop: 30,
    fontSize: 22,
    textAlign: 'center',
    margin: 10,
    color: "#454545",
    fontWeight: 'bold'
  },
  description: {
    marginTop: -10,
    fontSize: 16
  },
  logo: {
    width: '70%',
    height: '35%',
  },
  topSection: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 20
  },
  bottomSection: {
    backgroundColor: "#454545",
    flex: 0.6,
    justifyContent: 'space-evenly',
    padding: 20
  },
  chip: {
    margin: 5
  },
  chipGroup: {
    flex: 1,
    width: '100%',
    marginHorizontal: -5,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chipSection: {
    flex: 0.65,
    width: '100%'
  },
  chipTitle: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 10
  }
});

