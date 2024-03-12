import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import ErrorBoundary from "react-native-error-boundary";
import FallbackComponent from "./components/ErrorFallbackComponent";
import ComponentThatThrowsError from "./components/ComponentThatThrowsError";

const App = () => {
  const [showError, setShowError] = useState(false);

  const handleError = (error, stackTrace) => {
    console.log("error : ", error);
    console.log("stackTrace : ", stackTrace);
  };

  return (
    <ErrorBoundary onError={handleError} FallbackComponent={FallbackComponent}>
      <View style={styles.container}>
        <Button
          title="Throw new Error"
          onPress={() => {
            setShowError(true);
          }}
        />
        {showError && <ComponentThatThrowsError />}
      </View>
    </ErrorBoundary>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
