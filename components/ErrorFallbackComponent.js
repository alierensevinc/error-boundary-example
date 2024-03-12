import { Text, SafeAreaView, StyleSheet } from "react-native";

const FallbackComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Oops</Text>
      <Text style={styles.header}>An unexpected error occurred</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
  },
});

export default FallbackComponent;
