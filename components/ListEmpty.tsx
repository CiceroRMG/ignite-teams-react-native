import { Text, View, ViewProps } from "react-native";

interface ListEmptyProps extends ViewProps{
  text: string;
}

export function ListEmpty({text, ...rest}: ListEmptyProps) {
  return (
    <View className="flex-1 justify-center items-center" {...rest}>
      <Text className="text-gray300 font-regular text-sm text-center">
        {text}
      </Text>
    </View>
  );
}
