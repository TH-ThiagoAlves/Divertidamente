# Divertidamente

# Instruções para entregar seu projeto

### Antes de começar a desenvolver:

⚠️ **Esse projeto tem um fluxo um pouco diferente dos outros. Os passos 1 a 6 devem ser feitos por uma pessoa da dupla (a que vai criar a branch de trabalho). A outra pessoa deve fazer apenas o passo 1 e depois mudar para a branch criada pela primeira pessoa. Exemplo:**

```bash
git checkout joao-silva-trybewarts
```

1. Clone o repositório
  * `git clone git@github.com:ThiagoTrybe19/Divertidamente.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd Divertidamente`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`

3. Crie uma branch a partir da branch `main`
  * Verifique que você está na branch `main`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `main`
    * Exemplo: `git checkout main`
  * Agora, crie uma branch onde você vai guardar os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-sobrenome-nome-do-projeto`
    * Exemplo: `git checkout -b joao-silva-trybewarts`

4. Crie na raiz do projeto os arquivos que você precisará desenvolver:
  * Verifique que você está na raiz do projeto
    * Exemplo: `pwd` -> o retorno vai ser algo como _/Users/joao/code/**sd-019-a-project-trybewarts**_

  * Crie os arquivos index.html, style.css e script.js
    * Exemplo: `touch index.html style.css script.js`

5. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (devem aparecer listados os novos arquivos em vermelho)

  * Adicione o novo arquivo ao _stage_ do Git
    * Exemplo:
      * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
      * `git status` (devem aparecer listados os arquivos em verde)

  * Faça o `commit` inicial
    * Exemplo:
      * `git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
      * `git status` (deve aparecer uma mensagem como _nothing to commit_ )

6. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin joao-silva-trybewarts`

7. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-019-a-project-trybewarts/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_ no seguinte formato: `[Joao Silva e Maria Souza] Trybewarts`, e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-019-a-project-trybewarts/pulls) e confira que o seu _Pull Request_ está criado

---

### Durante o desenvolvimento

* Faça `commits` das alterações que você fizer no código regularmente;

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto;

* Os comandos que você utilizará com mais frequência são:

  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_;

  2. `git add` _(para adicionar arquivos ao stage do Git)_;

  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_;

  5. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_;

  4. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_.

---

# Como desenvolver

Você irá desenvolver este projeto em **quarteto** e é fundamental que siga as instruções do repositório.

Todos os requisitos tem como base a página a seguir, que representa um formulário de avaliação da **Escola de Magia de Trybewarts**. Use a imagem da maju como base e respeite o posicionamento dos elementos, mas quanto às cores e elementos de design que não interfiram nesses aspectos sinta-se livre para deixar a sua criatividade fluir!

# Requisitos do projeto

### 1. Criar um Header com titulo da pagina, nav com os links para acessar diferentes partes do site. `[MAJU]`

#### Observações técnicas:

* Este header deve possuir a classe `header`
* O Hearder deve possuir uma nav bar `header`
* Cada elemento deve possuir uma classe `header`

### 2. Acrescente uma section com um formulario de dados do usario `nome`, `sexo`, se pessoa prefere linguagem neutra. `[MAJU]`

#### Observações técnicas:

* Deve existir um input name `project-bonus-input-name`
* Deve existir um input para opção sexual `project-bonus-input-sex`

### 3. Acrescente uma section pra pessoa responder perguntas sobre suas emoções text area. `[THIAGO]`

#### Observações técnicas:

* Essa section deve possuir no minimo 4 perguntas `project-bonus-questions`

### 4. campo de emojis que recupere a informação de qual a pessoa escolheu. `[YUUT]`

#### Observações técnicas:

* Utilize um checkbox para pegar os emojis `checkbox`

### 5. section pra pessoa anotar sentimentos e pensamentos. `[MAJU]`

#### Observações técnicas:

* Deve existir um textarea `textarea`

### 6. guardar informações no local storage. `[THIAGO]`

#### Observações técnicas:

* Guarde as informações do form no local storage

### 7. section retornar o grafico de emções. `[YUUT]`

#### Observações técnicas:

* Retorne o grafico utilizando a api

### 8. campo de busca para as anotações de cada dia que vai ser recuperado com o date. `[VERONICA]`

#### Observações técnicas:

* Deverá haver um campo de busca funcional

### 9. campos para recomendação de conteudo. `[TODOS]`

#### Observações técnicas:

* Deverá conter pelo menos um artigo e um video para cada emoção

### 10. implementação de teste jest. `[VERONICA]`

#### Observações técnicas:

* Implemente no mínimo 1 teste para uma Hof
---
