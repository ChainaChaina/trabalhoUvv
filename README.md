# _**TrabalhoUvv**_
Este projeto foi criado como atividade avaliativa para a aula de eng. de software 2.

### Sobre o projeto:

Este projeto simula uma frente de loja com: 

  * clientes
  
  * produtos
  
  * CRUD
   
 _Pra maiores informações, as sprints estarão no final desse arquivo!_

## Como rodar o projeto?
Você precisara ter na máquina:
* NPM

* Angular

Baixe os arquivos em uma pasta, os descompacte se for necessário, após isso: NPM install (_para garantir que tudo está certo_), ng server

___

# *Sprints:*

* 1º Sprint: Manter Cliente (17/11 – data de entrega) Valor: 1,5 pontos

Características do cliente: nome, endereço, telefone (celular e/ou residencial), cpf.
Cenários a serem trabalhados: inserir, consultar, alterar, remover e listar todos os clientes
Todos os dados são obrigatórios.
Restrição de integridade: cliente não pode ser removido se possui compra.

* 2º Sprint: Manter Compra (24/11 – data de entrega) Valor: 2,0 pontos

Requisitos básicos relacionados a manutenção de uma compra, consistem em ter produto e funcionário cadastrados. De um produto é necessário saber seu código, descrição, valor, quantidade em estoque, estoque mínimo, validade. Um produto não poderá ser removido, caso exista uma compra associada a ele. Já com relação ao funcionário, é preciso conhecer sua matrícula, nome, endereço, telefone, cpf e salário base. O cálculo do salário do funcionário está relacionado a uma comissão que feita sobre o volume total de vendas no mês. O percentual a ser aplicado é de 5% para volume de vendas inferior o R$ 10 mil reais e 7% para valor maior ou igual a R$ 10 mil reais.
Para a realização de uma compra é necessário ter um cliente associado, um funcionário vendedor e os produtos com suas respectivas quantidades. Para o valor total da compra é possível fornecer um desconto de acordo com o valor total: 3% para valor inferior a R$ 1 mil reais e 5 % para valor superior a R$ 1 mil reais. Também é necessário registrar a forma de pagamento que pode ser em dinheiro ou cartão de crédito. Para o cartão é possível parcelar em até 3 vezes caso o valor seja superior a R% 500 reais.

* 3º Sprint: Relatórios (01/12 – data de entrega) Valor: 0,5 pontos

Temos a necessidade de emissão de relatórios, que são: clientes que realizaram compra; compras realizadas em período selecionado; produtos abaixo do estoque mínimo; folha de pagamento dos salários dos funcionários vendedores.


