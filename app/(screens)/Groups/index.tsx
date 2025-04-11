import { GroupCard } from "@/components/GroupCard";
import { Header } from "@/components/Header";
import { Highlight } from "@/components/Highlight";
import { View } from "react-native";

export default function Groups() {
  return (
    <View className="flex-1 justify-center items-center bg-gray500 px-6">
      <Header hasBackButton />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />
      <GroupCard title="Turma 1" />
    </View>
  );
}
