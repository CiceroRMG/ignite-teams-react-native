import { GroupCard } from "@/components/GroupCard";
import { Header } from "@/components/Header";
import { Highlight } from "@/components/Highlight";
import { ListEmpty } from "@/components/ListEmpty";
import { useState } from "react";
import { FlatList, View } from "react-native";

export default function Groups() {
  const [groups, setGroups] = useState<string[]>(['Turma 1', 'Turma 2', 'Turma 3', 'Turma 4']);

  return (
    <View className="flex-1 justify-center pt-20 bg-gray500 px-6">
      <Header />

      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        className="w-full"
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
          />
        )}
        contentContainerClassName={groups.length === 0 ? 'flex-1' : 'gap-3'}
        ListEmptyComponent={
          <ListEmpty text="Que tal cadastrar sua primeira turma?" />
        }
      />
      
    </View>
  );
}
