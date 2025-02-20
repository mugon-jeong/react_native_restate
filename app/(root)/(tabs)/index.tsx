import { Text, View } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className={"font-bold text-lg my-10 font-rubik text-3xl"}>
        Welcome to ReState
      </Text>
    </View>
  );
}
