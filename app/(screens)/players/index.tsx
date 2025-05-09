import { Button } from "@/components/Button";
import { ButtonIcon } from "@/components/ButtonIcon";
import { Filter } from "@/components/Filter";
import { Header } from "@/components/Header";
import { Highlight } from "@/components/Highlight";
import { Input } from "@/components/Input";
import { ListEmpty } from "@/components/ListEmpty";
import { PlayerCard } from "@/components/PlayerCard";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Players() {
  const { teamName } = useLocalSearchParams();
  const [players, setPlayers] = useState<string[]>(['Rodrigo', 'Lucas', 'Gustavo', 'Gabriel', 'Felipe', 'João', 'Pedro', 'Thiago', 'Rafael', 'Matheus']);
  const [team, setTeam] = useState<string>('Time A');

  return (
    <SafeAreaView className="flex-1 bg-gray500 p-6">
        <Header hasBackButton backToHome />

        <Highlight 
          title={teamName as string}
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

        <View className="flex-row items-center justify-between mt-6" >

          <FlatList 
            data={['Time A', 'Time B']}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <Filter
                text={item}
                isActive={team === item}
                className="mr-3"
                onPress={() => setTeam(item)}
              />
            )}
            horizontal
          />

          <Text className="text-gray200 font-semibold text-sm mr-4">
            {players.length}
          </Text>
        </View>
          
        <View className="flex-1">
          <FlatList
            className="mt-4 gap-4 mb-4"
            data={players}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <PlayerCard 
                name={item} 
                icon="person"
                onRemove={() => {}}
              />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[{ paddingBottom: 50 }, players.length === 0 && { flex: 1 }]}
            ListEmptyComponent={() => (
              <ListEmpty 
                text="Não há pessoas nesse time"
              />
            )}
            
          />

          {players.length > 0 && (
            <Button
              title="Remover Turma"
              color="secondary"
              onPress={() => {}}
            />
          )}
        </View>
        
    </SafeAreaView>
  );
}
