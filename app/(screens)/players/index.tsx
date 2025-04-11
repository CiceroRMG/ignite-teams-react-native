import { Header } from "@/components/Header";
import { Highlight } from "@/components/Highlight";
import { View } from "react-native";

export default function Players() {

  return (
    <View className="flex-1 bg-gray500 pt-14 p-6">
        <Header hasBackButton />

        <Highlight 
            title="Nome da Turma" 
            subtitle="Adicione a galera e separe os times" 
        />

    </View>
  );
}
