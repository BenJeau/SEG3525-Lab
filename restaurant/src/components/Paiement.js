import React from 'react';
import { StyleSheet, View, ScrollView, Text, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { Button, RadioButton, TextInput } from 'react-native-paper';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Header } from 'react-navigation';
import { Dropdown } from 'react-native-material-dropdown';


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
				CVV = (<TextInput
					label='CVV'
					mode='outlined'
					style={styles.textInput}
					value={this.state.cvv}
					onChangeText={cvv => this.setState({ cvv })} />)
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

					<TextInput
						label='Numéro de carte'
						mode='outlined'
						style={styles.textInput}
						value={this.state.numCarte}
						onChangeText={numCarte => this.setState({ numCarte })} />
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
									onChangeText={numRue => this.setState({ numRue })} />

								<TextInput
									label='Nom de rue'
									mode='outlined'
									style={styles.textInput}
									value={this.state.nomRue}
									onChangeText={nomRue => this.setState({ nomRue })} />

								<TextInput
									label='Ville'
									mode='outlined'
									style={styles.textInput}
									value={this.state.ville}
									onChangeText={ville => this.setState({ ville })} />

								<TextInput
									label='Code postal'
									mode='outlined'
									style={styles.textInput}
									value={this.state.codePostal}
									onChangeText={codePostal => this.setState({ codePostal })} />

								<TextInput
									label='Pays'
									mode='outlined'
									style={styles.textInput}
									value={this.state.pays}
									onChangeText={pays => this.setState({ pays })} />
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

							<Button mode="contained" style={{ marginTop: 20, marginBottom: 20 }} onPress={() => this.props.navigation.navigate("Home", { showSnackbar: true })}>
								Confirmer le paiement
					</Button>
						</View>
					</KeyboardAvoidingView>
				</ScrollView>
			</View>
		);
	}
}

export default connect()(Paiement);

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