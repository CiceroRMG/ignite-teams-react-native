import { Text, View, StyleSheet } from "react-native";

export default function Groups() {
  return (
    <View style={styles.container}>
      <Text className="text-lg font-bold text-blue-500">Abra cadabra</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }
    })
