import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { twMerge } from "tailwind-merge";

interface FilterProps extends TouchableOpacityProps {
    isActive?: boolean;
    text: string;
}

export function Filter({isActive = false, text, ...rest}: FilterProps) {
    const mergedClasses = twMerge(
        'h-[38px] w-[70px] justify-center items-center border-solid border-[1px] rounded-[4px] border-transparent mr-3',
        rest.className,
        isActive ? 'border-green700' : 'bg-transparent',
    )

  return (
    <TouchableOpacity
        {...rest} 
        className={mergedClasses}
    >  
        <Text className="text-white font-bold text-sm uppercase">
            {text}
        </Text>

    </TouchableOpacity>
  );
}
