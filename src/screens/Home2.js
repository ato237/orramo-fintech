import React from "react";
import { StyleSheet, Text, View,StatusBar } from "react-native";
import { FontAwesome } from "react-native-vector-icons";
import { Dimensions } from "react-native";
import { Avatar } from "react-native-elements";

const Home2 = () => {
	return (
		<View style={styles.container}>
			<StatusBar backgroundColor="#14213D" barStyle="light-content" />

			<View style={styles.header}>
				<Avatar
					rounded
					size="medium"
					source={{
						uri: "https://scontent-frx5-2.xx.fbcdn.net/v/t1.6435-9/83503810_1844210712377405_5153236228576903168_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeG_gILGeHLGZ2KyuY8Cln9OU9KnOnwT0ZtT0qc6fBPRmzovVvx3XPk7_qc2OjPFhlveBssFwT2ZKA4drvQSXm8B&_nc_ohc=VTkcDh96Ot8AX_EJFjW&_nc_ht=scontent-frx5-2.xx&oh=418cf24e3b88c719fe9cefb41ec82fa8&oe=618BE977",
					}}
				/>
				<View style={styles.divider}>
					<FontAwesome name="bell" size={30} color="#fff" />
				</View>
			</View>
            <View style={styles.moneyContainer}>
                <Text></Text>
            </View>
		</View>
	);
};

export default Home2;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#14213D",
		alignItems: "center",
        opacity: 0.2
	},
    moneyContainer:{

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
});
