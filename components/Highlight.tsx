import { Text, View } from "react-native";

interface HighlighProps {
  title: string;
  subtitle: string;
}

export function Highlight({title, subtitle}: HighlighProps) {
  return (
    <View className="w-full my-8">
        <Text className="text-white font-bold text-xl text-center">
            {title}
        </Text>

        <Text className="text-gray300 font-regular text-md text-center">
            {subtitle}
        </Text>

    </View>
  );
}
