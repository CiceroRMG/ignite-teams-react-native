import { MaterialIcons } from "@expo/vector-icons";
import { Text, View, ViewProps } from "react-native";
import { twMerge } from "tailwind-merge";
import { ButtonIcon } from "./ButtonIcon";

interface PlayerCardProps extends ViewProps {
    name: string;
    icon: keyof typeof MaterialIcons.glyphMap;
    onRemove: () => void;
}

export function PlayerCard({name, icon, onRemove, ...rest}: PlayerCardProps) {
    const mergedClasses = twMerge(
        'h-[56px] w-full bg-gray400 flex-row items-center mb-4 rounded-[6px] gap-2',
        rest.className,
    )

  return (
    <View
        {...rest} 
        className={mergedClasses}
    >  
        <MaterialIcons
            name={icon}
            size={24}
            color="#C4C4CC"
            className="ml-4 mr-1"
        />

        <Text className="text-gray200 font-regular text-md">
            {name}
        </Text>

        <ButtonIcon
            icon="close"
            iconColor="secondary"
            className="ml-auto mr-1"
            onPress={onRemove}
        />

    </View>
  );
}
