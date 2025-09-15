import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { H1 } from '../components/H1';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { DEFAULT_AVATAR, TEXT, MUTED, BRAND } from '../theme/tokens';
import { getUserById } from '../services/repositories/userRepository';
import type { User } from '../types/user';

type Props = {
  id: string;
  onLogout: () => void;
  onEdit: () => void;
  onOpenUsers: () => void;
};

export default function ProfileScreen({ id, onLogout, onEdit, onOpenUsers }: Props) {
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    (async () => {
      const u = await getUserById(id);
      setUser(u);
    })();
  }, [id]);

  if (!user) return <Text style={{ color: TEXT }}>Carregando...</Text>;

  return (
    <Card>
      <View style={{ alignItems: 'center', gap: 12 }}>
        <Image source={{ uri: user.avatarUrl || DEFAULT_AVATAR }} style={{ width: 110, height: 110, borderRadius: 999, borderWidth: 4, borderColor: BRAND }} />
        <Text style={{ color: TEXT, fontSize: 22, fontWeight: '800' }}>{user.name}</Text>
        <Text style={{ color: MUTED }}>{user.email}</Text>
        <View style={{ height: 1, backgroundColor: '#2a2a2f', alignSelf: 'stretch', marginVertical: 12 }} />
        <Button title="Editar perfil" onPress={onEdit} />
        <Button title="Lista de usuários" onPress={onOpenUsers} variant="ghost" />
        <Button title="Sair" onPress={onLogout} variant="danger" />
      </View>
    </Card>
  );
}