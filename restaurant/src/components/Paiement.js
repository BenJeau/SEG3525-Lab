import React from 'react';
import { StyleSheet, View, ScrollView, Text, KeyboardAvoidingView, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Button, RadioButton, TextInput, HelperText } from 'react-native-paper';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Header } from 'react-navigation';
import { Dropdown } from 'react-native-material-dropdown';
import { bindActionCreators } from 'redux';
import { clearItems } from '../redux/actions';

class Paiement extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			
			paymentState: 'first',
			months: [
				{ value: 'Janvier', },
				{ value: 'Février', },
				{ value: 'Mars', },
				{ value: 'Avril', },
				{ value: 'Mai', },
				{ value: 'Juin', },
				{ value: 'Juillet', },
				{ value: 'Août', },
				{ value: 'Septembre', },
				{ value: 'Octobre', },
				{ value: 'Novembre', },
				{ value: 'Décembre', }
			],
			years: [
				{ value: '2019' },
				{ value: '2020' },
				{ value: '2021' },
				{ value: '2022' },
				{ value: '2023' },
				{ value: '2024' },
				{ value: '2025' },
				{ value: '2026' },
				{ value: '2027' },
				{ value: '2028' },
				{ value: '2029' },
				{ value: '2030' },
			]
		};
	}

	
	validate = (paymentState) => {
		
		let isfilled = true;
		let variables = ['ville', 'numRue', 'nomRue', 'codePostal', 'pays' ];
		if(paymentState == 'second' ){
			variables.push('nomComplet')
			variables.push('numCarte')
			
		}
		else if(paymentState == 'first'){
			variables.push('nomComplet')
			variables.push('numCarte')
			variables.push('cvv')
		}
		variables.forEach((i) => {
			
			if(this.state[i] == null || this.state[i] == '' ){
				this.setState({[i]: ''})
				isfilled = false
			} 
		});
		if(isfilled){
			this.props.navigation.navigate("Home", { showSnackbar: true })
			
			
		}
	}

	render() {
		const { paymentState } = this.state;


		let paiementContent = (
			<View>
				<Text>Faite certain d'emporter votre argent lors de la commande</Text>
			</View>
		)

		let CVV = (<View />);


		switch (paymentState) {
			case 'first':
				CVV = (
					<View>
					<TextInput
					label='CVV'
					mode='outlined'
					style={styles.textInput}
					value={this.state.cvv}
					keyboardType="number-pad"
					onChangeText={cvv => this.setState({ cvv })} />

					<HelperText
						type="error"
						visible={this.state.cvv == ""}
						>
						Le cvv est necessaire
					</HelperText>
					</View>
					)
				break;
			case 'second':
				break;
		}

		if (paymentState != 'third') {

			paiementContent = (
				<View>
					<TextInput
						label='Nom complet'
						mode='outlined'
						style={styles.textInput}
						value={this.state.nomComplet}
						onChangeText={nomComplet => this.setState({ nomComplet })} />
					<HelperText
						type="error"
						visible={this.state.nomComplet == ""}
						>
						Le Nom au complet est necessaire
					</HelperText>

					<TextInput
						label='Numéro de carte'
						mode='outlined'
						style={styles.textInput}
						value={this.state.numCarte}
						keyboardType="number-pad"
						onChangeText={numCarte => this.setState({ numCarte })} />
					<HelperText
						type="error"
						visible={this.state.numCarte == ""}
						>
						Le numero de la carte est necessaire
					</HelperText>
					{CVV}

					<Dropdown
						label='Mois'
						selectedItem={(selectedMonth) => this.setState({selectedMonth})}
						data={this.state.months} />

					<Dropdown
						label='Année'
						selectedItem={(selectedYear) => this.setState({selectedYear})}
						data={this.state.years}
					/>
				</View>
			)
		}


		return (
			<View style={styles.container}>
				<ScrollView>

					<KeyboardAvoidingView style={styles.content} behavior="padding" enabled>
						<View>
							<Text style={[styles.title, {marginTop: 0}]}>
								Méthode de paiement
							</Text>
							<View style={styles.radioContainer}>
								<RadioButton.Group
									onValueChange={paymentState => this.setState({ paymentState })}
									value={this.state.paymentState}>
									<View stlye={styles.radio}>
										<Text>Crédit</Text>
										<RadioButton value="first" />
									</View>
									<View stlye={styles.radio}>
										<Text>Débit</Text>
										<RadioButton value="second" />
									</View>
									<View stlye={styles.radio}>
										<Text>Cash à la livraison</Text>
										<RadioButton value="third" />
									</View>
								</RadioButton.Group>
							</View>

							{paiementContent}

							<Text style={styles.title}>
								Addresse de livraison
							</Text>

							<View style={styles.textInputs}>
								<TextInput
									label='Numéro de rue'
									mode='outlined'
									style={styles.textInput}
									value={this.state.numRue}
									keyboardType="number-pad"
									onChangeText={numRue => this.setState({ numRue })} />
								<HelperText
									type="error"
									visible={this.state.numRue == ""}
									>
									Le numéro de la rue est necessaire
								</HelperText>
								<TextInput
									label='Nom de rue'
									mode='outlined'
									style={styles.textInput}
									value={this.state.nomRue}
									onChangeText={nomRue => this.setState({ nomRue })} />
								
								<HelperText
									type="error"
									visible={this.state.nomRue == ""}
									>
									Le nom de la rue est necessaire
								</HelperText>

								<TextInput
									label='Ville'
									mode='outlined'
									style={styles.textInput}
									value={this.state.ville}
									onChangeText={ville => this.setState({ ville })} />
								
								<HelperText
									type="error"
									visible={this.state.ville == '' }
									>
									Le ville est necessaire
								</HelperText>

								<TextInput
									label='Code postal'
									mode='outlined'
									style={styles.textInput}
									value={this.state.codePostal}
									onChangeText={codePostal => this.setState({ codePostal })} />
								
								<HelperText
									type="error"
									visible={this.state.codePostal == ""}
									>
									Le code postal est necessaire
								</HelperText>
								<TextInput
									label='Pays'
									mode='outlined'
									style={styles.textInput}
									value={this.state.pays}
									onChangeText={pays => this.setState({ pays })} />
								<HelperText
									type="error"
									visible={this.state.pays == ""}
									>
									Le pays est necessaire
								</HelperText>
							</View>

							<Text style={styles.title}>
								Commentaire
							</Text>

							<TextInput
								mode='outlined'
								placeholder='Laissez un commentaire de votre commande ici'
								numberOfLines={3}
								multiline
								value={this.state.comment}
								onChangeText={comment => this.setState({ comment })}
							/>

							<Button mode="contained"  style={{ marginTop: 20, marginBottom: 20 }} onPress={() => this.validate(paymentState)}>
								Confirmer le paiement
							</Button>
						</View>
					</KeyboardAvoidingView>
				</ScrollView>
			</View>
		);
	}
}
const mapState = state => {
	return {
		items: state.UserReducer.items
	};
};

const mapDispatch = dispatch => {
	return bindActionCreators({ clearItems }, dispatch);
};

export default connect(mapState, mapDispatch)(Paiement);

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		flex: 1,
		padding: 20,
		paddingTop: 10 + getStatusBarHeight() + Header.HEIGHT,
	},
	radio: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,

	},
	radioContainer: {
		width: '100%',
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
		flex: 1,
		marginBottom: 10
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'black',
		marginVertical: 15
	},
	textInput: {
		marginBottom: 10
	}
});