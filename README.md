# Scheduler - Sistema de Agendamento

Sistema completo de agendamento com backend em Nest.js e frontend em React.js.

## Índice
- Visão Geral
- Estrutura do Projeto
- Funcionalidades
- Pré-requisitos
- Instalação e Configuração
- Scripts e Comandos
- API Endpoints
- Deploy
- Contribuição

## 🚀 Visão Geral

O Scheduler é uma aplicação completa para gerenciamento de agendamentos e serviços, desenvolvida com:

- Backend: API RESTful construída com Nest.js, TypeScript e Prisma
- Frontend: Interface moderna desenvolvida com React.js, TypeScript e Vite
- Banco de Dados: PostgreSQL com ORM Prisma para gestão de dados

## 📁 Estrutura do Projeto

### Backend (scheduler-backend/)
scheduler-backend/
├── node_modules/
├── prisma/
│   ├── migrations/         # Migrações do banco de dados
│   └── schema.prisma      # Schema do Prisma
├── src/
│   ├── appointments/       # Módulo de agendamentos
│   │   ├── appointments.controller.ts
│   │   ├── appointments.service.ts
│   │   └── appointments.module.ts
│   ├── services/          # Módulo de serviços
│   │   ├── services.controller.ts
│   │   ├── services.service.ts
│   │   └── services.module.ts
│   ├── prisma/            # Configuração do Prisma
│   │   ├── prisma.service.ts
│   │   └── prisma.module.ts
│   └── main.ts            # Ponto de entrada
├── package.json
└── tsconfig.json

### Frontend (scheduler-frontend/)
scheduler-frontend/
├── public/                # Arquivos públicos
├── src/
│   ├── api/              # Serviços de API
│   │   └── services.ts
│   ├── assets/           # Recursos estáticos
│   │   └── react.svg
│   ├── components/       # Componentes reutilizáveis
│   │   ├── AppointmentForm.tsx
│   │   ├── AppointmentList.tsx
│   │   └── ServiceList.tsx
│   ├── contexts/         # Contextos React
│   │   ├── AuthContext.tsx
│   │   ├── AuthProvider.tsx
│   │   └── useAuth.tsx
│   ├── pages/            # Páginas da aplicação
│   │   ├── Login.tsx
│   │   ├── Schedule.tsx
│   │   └── Services.tsx
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── vite.config.ts

## ✨ Funcionalidades

### Backend
- Gestão de agendamentos (CRUD completo)
- Gestão de serviços
- Autenticação e autorização
- Validação de dados
- Banco de dados com PostgreSQL
- ORM Prisma para queries seguras
- API RESTful bem estruturada

### Frontend
- Interface responsiva e moderna
- Formulários de agendamento
- Listagem de serviços
- Sistema de autenticação
- Context API para gerenciamento de estado
- Integração com API backend

## 🛠️ Pré-requisitos

- Node.js 16+ 
- npm ou yarn
- PostgreSQL 12+
- Git

## ⚙️ Instalação e Configuração

### 1. Clone o repositório
git clone https://github.com/SamuelRBatista/scheduler.git
cd scheduler

### 2. Configuração do Backend
cd scheduler-backend
npm install
cp .env.example .env
npx prisma migrate dev
npm run start:dev

### 3. Configuração do Frontend
cd scheduler-frontend
npm install
cp .env.example .env
npm run dev

## 📜 Scripts e Comandos

### Backend
npm run start          # Inicia a aplicação
npm run start:dev      # Inicia em modo desenvolvimento
npm run test           # Executa testes
npm run test:watch     # Executa testes em modo watch
npx prisma migrate dev # Executa migrações do banco
npx prisma studio      # Abre interface do Prisma para o BD

### Frontend
npm run dev           # Inicia em desenvolvimento
npm run build         # Build para produção
npm run preview       # Preview do build de produção
npm run test          # Executa testes

## 🌐 API Endpoints

### Agendamentos
- GET /appointments - Lista todos os agendamentos
- GET /appointments/:id - Busca agendamento por ID
- POST /appointments - Cria novo agendamento
- PUT /appointments/:id - Atualiza agendamento
- DELETE /appointments/:id - Remove agendamento

### Serviços
- GET /services - Lista todos os serviços
- GET /services/:id - Busca serviço por ID
- POST /services - Cria novo serviço
- PUT /services/:id - Atualiza serviço
- DELETE /services/:id - Remove serviço

## 🚀 Deploy

### Backend (Exemplo para Heroku/Vercel)
npm run build

### Frontend (Vercel/Netlify)
npm run build
npm i -g vercel
vercel --prod

## 🤝 Contribuição

1. Faça o fork do projeto
2. Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)
3. Commit suas mudanças (git commit -m 'Add some AmazingFeature')
4. Push para a branch (git push origin feature/AmazingFeature)
5. Abra um Pull Request

## 📞 Suporte

Para dúvidas ou problemas:
- Issues: GitHub Issues (https://github.com/SamuelRBatista/scheduler/issues)

Desenvolvido com ❤️ por Samuel Batista
