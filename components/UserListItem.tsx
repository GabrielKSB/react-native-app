import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { UserData } from "../data/userList";

export function UserItem({ id, email, area_code, number, createdAt, updatedAt }: UserData) {
  return (
    <>
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.email}>{id} - {email}</Text>
        <Text numberOfLines={5} style={styles.telephone}>
          Telephone: {area_code} {number} 
        </Text>
        <Text numberOfLines={5} style={styles.telephone}>
          Created At: {createdAt} 
        </Text>
        <Text numberOfLines={5} style={styles.telephone}>
          Updated At: {updatedAt} 
        </Text>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal:5,
    paddingVertical: 15,
  },

  content: {
    flex: 1,
    marginLeft: 16,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 20,
    borderColor: "#754183",
    borderWidth: 1,
  },

  email: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#754183",
    marginBottom: 5,
  },
  telephone: {
    fontSize: 16,
    color: "#000",
    marginTop: 10
  },
});