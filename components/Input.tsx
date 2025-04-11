import {  TextInputProps, TextInput } from "react-native";
import { twMerge } from "tailwind-merge";

interface InputProps extends TextInputProps {
}

export function Input({...rest}: InputProps) {
    const mergedClasses = twMerge(
        "flex-1 bg-gray700 min-h-[56px] max-h-[56px] rounded-md p-4 font-regular text-md text-white placeholder:text-gray300",
        rest.className,
    )

  return (
    <TextInput
        {...rest} 
        className={mergedClasses}
    >

    </TextInput>
  );
}
