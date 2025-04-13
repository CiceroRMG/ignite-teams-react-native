import { ButtonIcon } from "@/components/ButtonIcon";
import { Filter } from "@/components/Filter";
import { Header } from "@/components/Header";
import { Highlight } from "@/components/Highlight";
import { Input } from "@/components/Input";
import { View } from "react-native";

export default function Players() {

  return (
    <View className="flex-1 bg-gray500 pt-14 p-6">
        <Header hasBackButton />

        <Highlight 
          title="Nome da Turma" 
          subtitle="Adicione a galera e separe os times" 
        />

        <View className="w-full bg-gray700 rounded-[6px] flex-row items-center">
          <Input 
              placeholder="Nome da pessoa"
              autoCorrect={false}
          />

          <ButtonIcon 
            size={28} 
            iconColor="primary" 
            icon="add"
          />

        </View>

        <Filter
          text="Time A"
          isActive
          className="mt-4"
        />
        
    </View>
  );
}
