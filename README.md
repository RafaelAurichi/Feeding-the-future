# Colheita Certa

Nós somos uma plataforma que conecta pequenos produtores agrícolas com consumidores finais e/ou revendedores, com o objetivo de fomentar o comércio de pequenos negócios.

A plataforma conta com uma IA para auxiliar os produtores na administração das colheitas com base no clima e com informações do solo trazidas por sensores IoT. E, na parte do usuário final nossa IA capta o perfil e lhe dá sugestões personalizadas.

Teremos um sistema simples de gameficação onde o agricultor ganhará colecionáveis e por consequência será melhor rankeado conforme seguir as oritentações da aplicação. 
 
# Estrutura de pastas
## /app-react-native
Contém os arquivos necessários para rodar o projeto em react native do aplicação mobile
 
### Iniciar aplicação
 - Abra a pasta em um Ambiente de Desenvolvimento (ex: Visual Studio Code)
 - Certifique-se de que tenha o [Node.js](https://www.alura.com.br/artigos/como-instalar-node-js-windows-linux-macos?gclid=CjwKCAjw1YCkBhAOEiwA5aN4ASAemF6qwJklrTyYnpgA0IoEU_05CItBNrJP2DFtOd5e-DQkbcME3RoC3DEQAvD_BwE) e o [Expo](https://docs.expo.dev/get-started/installation/) instalados
 - Abra o terminal e siga os passos a seguir:
 ````
 cd (caminho até a pasta do projeto)
 ````
 ````
 npm install
 ````
 ````
 expo start
 ````
  
  
## /pag-institucional
Contém os arquivos necessários para abrir o projeto em HTML e Bootstrap da página institucional
 
### Iniciar aplicação
- Abra o arquivo `index.html` no seu navegador
 
 
## /backend
Contém os conteiners Docker com o backend do projeto em PHP e MySQL, alimentando uma API REST.
 
### Iniciar aplicação
- Abra a pasta em um Ambiente de Desenvolvimento (ex: Visual Studio Code)
- Iniciando pelo Docker:
  - Certifique-se de que tenha o [Docker](https://www.docker.com/products/docker-desktop/) instalado.
  - Abra o Docker Desktop e inicie o serviço
  - Abra o terminal e siga os passos a seguir:
  ````
  cd (caminho até a pasta do projeto)
  ````
  ````
  docker-compose up
  ````
  - #### Criando o banco
   - Acesse esse [link](http://localhost:8080) em seu navegador
   - Efetue o login no PHPMyAdmin
   - Acesse a opção "Importar" no menu e suba o arquivo `db.sql` que está na pasta `/src`
 
#### Acessando o sistema
- Acesse esse [link](http://localhost) em seu navegador
- Se cadastre caso queira ou acesse o sistema com as 
