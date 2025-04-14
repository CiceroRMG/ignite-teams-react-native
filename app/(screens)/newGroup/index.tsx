import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Highlight } from "@/components/Highlight";
import { Input } from "@/components/Input";
import { useRouter } from "expo-router";
import { UsersThree } from "phosphor-react-native";
import { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NewGroup() {
  const router = useRouter();
  const [teamName, setTeamName] = useState<string>('');

  const handlePlayers = () => {
    router.push(`/players?teamName=${encodeURIComponent(teamName)}`);
  }

  return (
    <SafeAreaView className="flex-1 bg-gray500 p-6">
      <Header hasBackButton />

      <View className="flex-1 justify-center">
        <View className="self-center">
            <UsersThree size={56} color="#00875F" />
        </View>

        <Highlight title="Nova turma" subtitle="Crie a turma para adicionar as pessoas" />

        <Input 
          placeholder="Digite o nome da turma" 
          className="mb-5" 
          onChangeText={setTeamName}
        />

        <Button 
          title="Criar" 
          color="primary" 
          onPress={handlePlayers}
        />
        
      </View>
      
    </SafeAreaView>
  );
}
