import { useEffect } from "react";
import { Text, View } from "react-native";

const ErrorComponent = () => {
  useEffect(() => {
    throw new Error("Error from ComponentThatThrowsError");
  }, []);

  return (
    <View>
      <Text>You won't see this.</Text>
    </View>
  );
};

export default ErrorComponent;
