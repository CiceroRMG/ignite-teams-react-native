import { UsersThree } from "phosphor-react-native";
import { TouchableOpacity, TouchableOpacityProps, Text, View } from "react-native";

interface GroupCardProps extends TouchableOpacityProps {
  title: string;
}

export function GroupCard({title, ...rest}: GroupCardProps) {
  return (
    <TouchableOpacity
        {...rest} 
        className="w-full h-[90px] bg-gray400 rounded-md flex-row items-center p-6 mb-3"
    >
        <View className="mr-5">
          <UsersThree
              size={32}
              color="#00875F" 
              weight="fill"
          />
        </View>

        <Text className="text-gray200 font-regular text-md">
            {title}
        </Text>

    </TouchableOpacity>
  );
}
