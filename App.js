import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import ErrorBoundary from "react-native-error-boundary";
import FallbackComponent from "./components/FallBackComponent";
import ErrorComponent from "./components/ErrorComponent";

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
        {showError && <ErrorComponent />}
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
