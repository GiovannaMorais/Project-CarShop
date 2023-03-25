
# Car Shop

Este projeto é uma API com CRUD para gerenciar uma concessionária de veículos. A API foi desenvolvida utilizando a linguagem de programação JavaScript e o banco de dados MongoDB, através do framework do Mongoose.




# ⚠️ Instalação

Para começar com este projeto, clone o repositório e instale suas dependências:

```bash
  git clone git@github.com:GiovannaMorais/Project-CarShop.git
  cd Project-CarShop
  npm install
```
    
# 🎲 Executando a Aplicação


O projeto pode ser executado de duas formas: com Docker ou sem Docker.

## 🔸 Com Docker
- Certifique-se de ter o docker-compose instalado na versão 1.29 ou superior. Em seguida, rode os serviços node e db com o comando:

```bash
docker-compose up -d
```

- Caso esteja utilizando o Mongo localmente na porta padrão (27017), é necessário pará-lo antes de executar os serviços. Os serviços irão inicializar um container chamado car_shop e outro chamado car_shop_db.

- Para rodar o container car_shop, execute o comando:

```bash
docker exec -it car_shop bash
```

- Isso dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

- Atenção: Todos os comandos disponíveis no package.json devem ser executados dentro do container.

- Instale as dependências (caso existam) com npm install. Lembre-se de não rodar o comando npm audit fix, pois isso pode gerar conflitos com o avaliador.


## 🔸 Sem Docker
- Para executar o projeto sem Docker, é necessário ter o Node instalado em sua máquina (a versão 16).Em seguida, instale as dependências (caso existam) com npm install. Lembre-se de não rodar o comando npm audit fix, pois isso pode gerar conflitos com o avaliador.

# 📍Endpoints

Os seguintes endpoints estão disponíveis na API:

## Cars

#### POST /cars 

Cadastra um novo carro

#### GET /cars 

Lista todos os carros cadastrados

#### PUT /cars/:id

Atualiza um carro pelo ID informado

#### DELETE /cars/:id

Exclui um carro pelo ID informado

##  Motorcycles

#### POST /motorcycles 

Cadastra uma nova moto

#### GET /motorcycles

Lista todas as motos cadastradas

#### PUT /motorcycles/:id

Atualiza uma moto pelo ID informado

#### DELETE /motorcycles/:id

Exclui uma moto pelo ID informado

# 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Docker](https://www.docker.com/)
- [MongoDb](https://www.mongodb.com/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [Mongoose](https://www.npmjs.com/package/mongoose)

# 😊 Conclusão

Este projeto forneceu um ponto de partida para a construção de uma API para gerenciar uma concessionária de veículos. Você pode continuar a construir sobre este projeto e personalizá-lo para atender às suas necessidades específicas.

