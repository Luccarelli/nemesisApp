import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TabBar from "../../components/TabBar/TabBar";
import TopBar from "../../components/TopBar/TopBar";

export default function UserAccount() {
  return (
    <>
      <TopBar />
      <View style={styles.container}>
        <Text style={styles.text}>Conta do Usuáriooo</Text>
      </View>
      <TabBar />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
