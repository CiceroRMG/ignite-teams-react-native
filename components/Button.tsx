import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { tv } from "tailwind-variants";

const buttonStyle = tv({
    base: "flex-1 min-h-[56px] max-h-[56px] bg-green700 rounded-md justify-center items-center",
    variants: {
        color: {
            primary: "bg-green700",
            secondary: "bg-redDark300",
        },
    },
    defaultVariants: {
        color: "primary",
    },
})

interface ButtonProps extends TouchableOpacityProps {
    color?: 'primary' | 'secondary';
    title: string;
}

export function Button({title, color, ...rest}: ButtonProps) {
  return (
    <TouchableOpacity
        {...rest} 
        className={buttonStyle({color})}
    >
        <Text className="text-white font-bold text-md">
            {title}
        </Text>

    </TouchableOpacity>
  );
}
