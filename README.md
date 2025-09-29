# 🎲 NexTT (VTT)

## 📖 Sobre o Projeto
Este é um projeto de **Virtual TableTop (VTT)** desenvolvido em **Next.js**, focado em oferecer uma plataforma moderna e acessível para jogar RPGs de mesa online.  
O objetivo é criar uma ferramenta que permita mestres e jogadores interagirem em tempo real, com mapas, fichas, rolagens de dados e comunicação integrada.

---

## 🚀 Tecnologias Principais
- **Next.js** (React + SSR)  
- **WebSockets (Socket.IO ou equivalente)** para comunicação em tempo real  
- **TailwindCSS / Shadcn UI** para UI moderna  
- **Prisma + banco de dados** para persistência (MongoDB ou PostgreSQL)  
- **Auth.js** para autenticação  

---

## 🎯 Funcionalidades Essenciais

### 🧑‍🤝‍🧑 Multijogador
- Login e autenticação de usuários  
- Criação e gerenciamento de salas de jogo  
- Diferenciação entre **Mestre** e **Jogadores**  

### 🗺️ Mapas e Tabuleiro
- Upload de mapas (imagens)  
- Ferramenta de grid (hexagonal ou quadrada)  
- Tokens móveis para representar personagens e monstros  
- Controle de visão: névoa de guerra (fog of war)  

### 🎲 Sistema de Rolagem
- Rolagem de dados com sintaxe simples (`/roll 1d20+5`)  
- Histórico de rolagens no chat  
- Opção de rolagem privada para o mestre  

### 📜 Fichas de Personagem
- Criação e edição de fichas  
- Atributos customizáveis  
- Armazenamento persistente no banco de dados  

### 💬 Comunicação
- Chat em tempo real (texto)  
- Suporte a mensagens privadas (whispers)  
- Integração futura de voz/vídeo (WebRTC)  

### ⚙️ Painel do Mestre
- Controle de visibilidade de tokens/mapas  
- Criação de encontros (NPCs, monstros)  
- Notas privadas  

## 🛠️ Como Contribuir
1. Faça um fork do projeto  
2. Crie uma branch (`git checkout -b feature/nova-feature`)  
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`)  
4. Push para a branch (`git push origin feature/nova-feature`)  
5. Abra um Pull Request  
