import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'
import { twMerge } from "tailwind-merge";

interface ButtonIconProps extends TouchableOpacityProps {
    iconColor?: 'primary' | 'secondary';
    size?: number;
}

const colors = {
    primary: "#00875F",
    secondary: "#F75A68",
}

export function ButtonIcon({iconColor = 'primary', size = 24, ...rest}: ButtonIconProps) {
    const mergedClasses = twMerge(
        'h-[56px] w-[56px] justify-center items-center ml-3',
        rest.className,
    )

  return (
    <TouchableOpacity
        {...rest}
        className={mergedClasses}
    >
        <MaterialIcons
            name="home"
            size={size}
            color={iconColor === 'primary' ? colors.primary : colors.secondary}
        />

    </TouchableOpacity>
  );
}
