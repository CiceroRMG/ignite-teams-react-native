import { Image, TouchableOpacity, View } from "react-native";
import logoImg from '@assets/images/logo.png';
import { CaretLeft } from "phosphor-react-native";

interface HeaderProps {
  hasBackButton?: boolean;
}

export function Header({hasBackButton = false}: HeaderProps) {
  return (
    <View className="w-full justify-center items-center flex-row">
      {hasBackButton && (
        <TouchableOpacity className="flex-1">
          <CaretLeft size={36} color="#FFF" />
        </TouchableOpacity>
      )}

        <Image source={logoImg} className="w-[46px] h-[55px]" />
    </View>
  );
}
