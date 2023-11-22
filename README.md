App: 
	React Native + Expo + Android Studio 

Server + WEB:
	React + styled component
	Node + MongoDB (Mongoose -> ORM)

----- PRIMEIRO PASSO DE TODOS ----- 

*INSTALAÇÃO (NVM - WINDOWS) https://github.com/coreybutler/nvm-windows
**INSTALAÇÃO (EXPO - WINDOWS) https://docs.expo.dev/guides/local-app-development/ (https://www.npmjs.com/package/@expo/cli)

---- Criar Variável de ambiente  ANDROID_HOME - C:\Users\seu-usuario\AppData\Local\Android\Sdk
---- Adicionar Path (mesma janela para adicionar o variável de ambiente) PATH(C:\Users\seu-usuario\AppData\Local\Android\Sdk\platform-tools

------------------------------------------------------------------------------------------

APP 

1° Emular um "Celular" no Android Studio
2° Rodar NPM START na pasta do APP onde está o arquivo package.json
3° Esperar compilar e selecionar "a" - ANDROID

------------------------------------------------------------------------------------------

Server + WEB

1° Na pasta onde está o arquivo server.js, rodar NPM START. Esperar aparecer "MongoDB connected"
2° Ir até a pasta /client (usando no terminal cd /client) rodar PORT=8000 NPM START




*O Expo funciona apenas na versão 16.20.2, precisamos do NVM para particionar as versões do Node.js (20.9.0 e 16.20.2)
**Selecionar a versão 16.20.2 para realizar a instalação do Expo e seus pacotes adicionais.
Uma vez Expo e pacotes instalados na versão 16.20.2, retornar para a versão 20.9.0 (React).


DB_PASSWORD link -> server_client/config/.env (MONGO_URI)
grupo: mjv
password: vitor1994

