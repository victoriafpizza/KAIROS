# 📱 FIAP AsyncStorage CRUD App

[![Expo](https://img.shields.io/badge/Expo-49.0.0-000?logo=expo&logoColor=fff)](https://expo.dev/)
[![React Native](https://img.shields.io/badge/React%20Native-0.74-blue?logo=react&logoColor=fff)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=fff)](https://www.typescriptlang.org/)
[![AsyncStorage](https://img.shields.io/badge/Storage-AsyncStorage-green)](https://react-native-async-storage.github.io/async-storage/)

Aplicativo desenvolvido em **React Native (Expo + TypeScript)** para a disciplina de mobile **SPRINT 1 (FIAP)**.  
O app implementa um sistema de **Login + CRUD de Usuários** utilizando **AsyncStorage**.

---

## 🎨 Tema

- **Cor principal (FIAP):** `#ed145b`  
- Paleta escura (`dark mode`) com cartões, textos e estados (OK, Warning, Danger).  
- Header customizado: `FIAP • AsyncStorage CRUD`.

---

## 🚀 Funcionalidades

✅ **Login**  
- Autenticação local por **e-mail e senha**.  
- Persistência da sessão com `AsyncStorage`.  

✅ **Cadastro de Usuário**  
- Criação de novos usuários com:
  - Nome  
  - E-mail  
  - Senha  
  - Avatar (URL personalizada ou padrão)  
- Validação de duplicidade de e-mail.  

✅ **Perfil**  
- Exibe dados do usuário logado: nome, e-mail e avatar.  
- Botões para editar, listar usuários ou sair da conta.  

✅ **Edição / Exclusão**  
- Atualização de nome, e-mail, senha e avatar.  
- Validação ao alterar e-mail (não duplicar).  
- Exclusão de usuário com confirmação.  

✅ **Lista de Usuários**  
- Lista todos os usuários cadastrados no dispositivo.  
- Ações rápidas: **Abrir Perfil** ou **Editar**.  

✅ **Sessão**  
- Controle de login persistente.  
- Logout com limpeza do `AsyncStorage`.  

---

## 🛠️ Tecnologias

- [Expo](https://expo.dev/) (CLI, Metro bundler)  
- [React Native](https://reactnative.dev/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)  

---

## 📂 Estrutura

