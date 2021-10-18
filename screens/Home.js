import React from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	StatusBar,
	TouchableOpacity,
	Image,
	ScrollView,
} from "react-native";
import { Avatar } from "react-native-elements";
import { MaterialIcons } from "react-native-vector-icons";
import { Feather } from "react-native-vector-icons";

import { FontAwesome } from "react-native-vector-icons";
import { Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { transaction } from "../data/transactionData";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Home = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar backgroundColor="#F1F1FB" barStyle="dark-content" />

			<View style={styles.header}>
				<Avatar
					rounded
					size="medium"
					source={{
						uri: "https://scontent-frx5-2.xx.fbcdn.net/v/t1.6435-9/83503810_1844210712377405_5153236228576903168_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeG_gILGeHLGZ2KyuY8Cln9OU9KnOnwT0ZtT0qc6fBPRmzovVvx3XPk7_qc2OjPFhlveBssFwT2ZKA4drvQSXm8B&_nc_ohc=VTkcDh96Ot8AX_EJFjW&_nc_ht=scontent-frx5-2.xx&oh=418cf24e3b88c719fe9cefb41ec82fa8&oe=618BE977",
					}}
				/>
				<View style={styles.divider}>
					<FontAwesome name="bell" size={30} color="#000" />
				</View>
			</View>
			<Text
				style={{
					fontSize: 20,
					color: "#2E3192",
					justifyContent: "flex-start",
				}}>
				Welcome Tony Bradley!
			</Text>
			<View style={styles.moneyContainer}>
				<View style={styles.amountContainer}>
					<Text
						style={{
							color: "gray",
							fontSize: 13,
							fontWeight: "bold",
							textAlign: "center",
							marginBottom: 10,
						}}>
						You Orramo Balance
					</Text>
					<View style={{ justifyContent: "center" }}>
						<View style={{ flexDirection: "column" }}>
							<View>
								<Text style={styles.amount}>XAF 250,000</Text>
							</View>
						</View>
					</View>
				</View>
			</View>

			<View style={styles.buttons}>
				<View>
					{/**Top up Button */}
0
					<TouchableOpacity
						onPress={() => navigation.navigate("Home", { screen: "Topup" })}
						style={[styles.button, { zIndex: 999 }]}>
						<MaterialIcons
							style={{ top: 4 }}
							name="call-received"
							size={35}
							color="#fff"
						/>
					</TouchableOpacity>
					<Text
						style={[
							styles.buttonText,
							{
								right: 11,
							},
						]}>
						Top-Up
					</Text>
				</View>
				<View>
					{/**Send Money Button */}

					<TouchableOpacity style={[styles.button, { zIndex: 999 }]}>
						<Feather style={{ top: 4 }} name="send" size={35} color="#fff" />
					</TouchableOpacity>
					<Text
						style={[
							styles.buttonText,
							{
								right: 15,
							},
						]}>
						Withdraw
					</Text>
				</View>

				<View>
					{/**Semd Button */}

					<TouchableOpacity style={[styles.button, { zIndex: 999 }]}>
						<Ionicons style={{ top: 4 }} name="grid" size={35} color="#fff" />
					</TouchableOpacity>
					<Text
						style={[
							styles.buttonText,
							{
								right: 28,
							},
						]}>
						Send and More
					</Text>
				</View>

				{/**History Details */}
			</View>
			<View style={styles.recent}>
				<Text style={styles.activity}>Transaction History</Text>

				<ScrollView
					showsVerticalScrollIndicator={false}
					style={{
						marginTop: 10,
						backgroundColor: "#fff",
						borderTopLeftRadius: 20,
						width: "100%",
						borderTopRightRadius: 20,
					}}>
					{transaction.map((data, index) => (
						<View key={index} style={styles.history}>
							<Avatar
								rounded
								size="small"
								source={{
									uri: data.image,
								}}
							/>
							<View style={{ flexDirection: "column" }}>
								<Text
									style={{ color: "#14213D", fontSize: 15, paddingLeft: 20 }}>
									{data.name}
								</Text>
								<Text
									style={{ color: "#fca311", fontSize: 12, paddingLeft: 20 }}>
									{data.date}
								</Text>
							</View>
							<View style={styles.transactionList}>
								<Text style={{ fontSize: 13, color: "gray" }}>
									{data.currency}
								</Text>
								<Text
									style={{
										fontWeight: "bold",
										color: "#14213D",
										opacity: 0.8,
										fontSize: 15,
									}}>
									{data.amount}
								</Text>
							</View>
						</View>
					))}
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

function Options() {
	const Stack = createNativeStackNavigator();
	return (
		<NavigationContainer>
			<Stack.Screen
				name="Topup"
				component={TopupOptions}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Withdraw"
				component={WithdrawOptions}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="MoreOptions"
				component={MoreOptions}
				options={{
					headerShown: false,
				}}
			/>
		</NavigationContainer>
	);
}
export default Home;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#F1F1FB",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	amountContainer: {
		paddingTop: 10,
		borderRadius: 8,
	},
	header: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		marginTop: 10,
	},
	divider: {
		paddingLeft: Dimensions.get("window").width - 130,
	},
	activity: {
		paddingRight: Dimensions.get("window").width - 160,
		color: "gray",
		opacity: 0.5,
	},
	amount: {
		color: "#3B3D99",
		fontSize: 40,
		fontWeight: "400",
	},
	moneyContainer: {
		flex: 1,
		marginTop: 20,
	},
	buttons: {
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		marginLeft: 30,
	},
	button: {
		justifyContent: "center",
		flexDirection: "row",
		backgroundColor: "#fca311",
		padding: 12,
		width: 70,
		height: 70,
		borderRadius: 40,
		marginBottom: 20,
		marginRight: 20,
		marginLeft: 20,
	},
	buttonText: {
		marginLeft: 40,
		bottom: 15,
		color: "gray",
	},
	recent: {
		flex: 2.5,
		alignContent: "center",
		alignItems: "center",
	},
	history: {
		padding: 10,
		flexDirection: "row",
		marginTop: 10,
		borderRadius: 8,
		zIndex: -99,
		elevation: 0,
	},
	transactionList: {
		flexDirection: "row",
		paddingLeft: 100,
	},
	transactionItems: {},
});
