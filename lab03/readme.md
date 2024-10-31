# Jakarta Persistence API (JPA)

A [**Jakarta Persistence API**](https://www.infoworld.com/article/2259807/what-is-jpa-introduction-to-the-java-persistence-api.html) é voltada para o gerenciamento da persistência de dados. Com ela é possível definir um modelo padrão para mapeamento objeto-relacional (ORM), permitindo trabalhar com bancos de dados relacionais diretamente em aplicações Java, sem a necessidade de escrever consultas SQL diretamente. Com JPA, é possível mapear classes Java para tabelas de um banco de dados e instâncias dessas classes para registros.

## Hibernate e JPA

O **Hibernate** implementa todos os conceitos e funcionalidades definidos pela JPA, como mapeamento objeto-relacional (ORM), consultas usando **JPQL**, transações e gerenciamento de entidades. Isso significa que, ao usar Hibernate, você está seguindo os padrões da JPA e pode trocar a implementação por outra (como EclipseLink) sem precisar mudar significativamente o código.

Ao usar JPA, é possível escolher o Hibernate como sua implementação subjacente. Isso é feito através do arquivo de configuração, onde especifica-se o provedor a ser utilizado.

## Spring Boot como Framework de Desenvolvimento

O **Spring Boot** simplifica o desenvolvimento de apps Java, oferecendo configuração mínima e integração fácil com vários componentes do Spring. Um dos focos principais do Spring Boot é reduzir a complexidade da configuração, especialmente para persistência de dados com JPA e Hibernate.

### JPA e Hibernate no Spring Boot

- JPA é uma especificação para persistência de dados em Java. Já o Hibernate é uma das implementações mais populares da JPA.
- Quando incluo a dependência `spring-boot-starter-data-jpa`, o Spring Boot configura automaticamente o Hibernate como provedor JPA (se estiver no classpath).
- Não preciso criar manualmente o arquivo `persistence.xml` como faria usando JPA puro. O Spring Boot usa o arquivo `application.properties` ou `application.yml` para configurar a persistência, incluindo o banco de dados,SQL e geração de esquema.


## Thymeleaf ""
- O Thymeleaf é um template engine para aplicações Java, utilizado em projetos Spring Boot para gerar páginas HTML dinâmicas.

### Java ORM ###

- Java ORM (Object-Relational-Mapping) simplifica a manipulação de dados em um banco de dados relacional dentro de uma aplicação Java. Os dados são representados em objetos em vez de utilizar SQL diretamente. Isso permite trabalhar com os dados de forma orientada a objetos. Cada entidade no banco de dados(Tabela) é mapeada para uma classe Java e cada linha da tabela passa a ser um objeto dessa classe.

- O principal benefício do ORM é abstrair a complexidade das consultas SQL, permitindo trabalhar diretamente com objetos em Java.

## Principais frameworks Java ORM ##

- Hibernate: é um dos frameworks mais populares de ORM para Java.
- JPA: Uma especificação de ORM que define uma API padrão para persistência de dados. Hibernate é a implementação mais comum de JPA.
- MyBatis: Embora tecnicamente não seja um ORM completo como o Hibernate, o MyBatis facilita o mapeamento entre objetos e tabelas, permitindo o uso de SQL customizado.

### Data Persistence em Java ###

- De uma perspectiva de programação, a ORM layer é uma adapter layer: ela adapta a linguagem dos gráficos de objetos à linguagem SQL e às tabelas relacionais

## JDBC - Java Database Connectivity ##
- JBDC é uma API do Java que permite a interação entre uma aplicação Java e um banco de dados relacional. JDBC é uma camada de abstração que permite que um aplicativo execute comandos SQL sem pensar na implementação do banco de dados.

### JPA Metadata Annotations ###

- As annotations são usadas para configurar o mapeamento de classes Java para tabelas em um banco de dados relacional. As annotations especificam como cada entidade e seus atributos se relacionam com a estrutura do banco de dados, sem a necessidade de configurar um arquivo XML(como era feito anteriormente).


## Principais Annotations para o mapeamento de entidades##

- **@Entity** : Marca uma classe Java como uma entidade persistente, ou seja, uma classe que será mapeada para uma tabela no banco de dados.
No exemplo abaixo, a tabela Pessoa será criada na DB.

```java
    @Entity
    public class Pessoa {
        // ...
    }
```

- **@Table** : Especifica a tabela do banco dedados com a qual a entidade será mapeada. É **opcional**, se não for usada, o JPA assume que o nome da tabela é o mesmo da classe. Também é possível usar alguns parâmetros.

```java
    @Entity
    @Table(name = "pessoas")
    public class Pessoa {
        // ...
    }
```

- **@GeneratedValue**: Configura a estratégia de geração automática para o campo identificado como chave primária. Existem várias estratégias, como AUTO, IDENTITY, SEQUENCE, e TABLE.

    ```java
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    ```

- **@Column**: Especifica o nome da coluna correspondente a um campo na tabela. Pode ser usada para definir outras propriedades da coluna, como comprimento máximo, se é nullable, etc.

    ```java
    @Column(name = "nome", length = 100, nullable = false)
    private String nome;
    ```

- **@Transient**: Marca um campo da classe como transitório, o que significa que ele não será persistido no banco de dados.

    ```java
    @Transient
    private int idadeCalculada;
    ```

- **@Temporal**: Especifica o tipo de dados de tempo (Date) para os campos de data e hora (DATE, TIME ou TIMESTAMP).

    ```java
    @Temporal(TemporalType.DATE)
    private Date dataNascimento;
    ```

## Relacionamentos com JPA

Além do mapeamento básico de campos, o JPA permite definir relacionamentos entre as entidades usando anotações específicas. Aqui estão algumas das mais comuns:

- **@OneToOne**: Define um relacionamento de um-para-um entre duas entidades.

    ```java
    @OneToOne
    @JoinColumn(name = "endereco_id")
    private Endereco endereco;
    ```

- **@OneToMany**: Define um relacionamento de um-para-muitos, onde uma entidade possui várias instâncias de outra entidade.

    ```java
    @OneToMany(mappedBy = "pessoa")
    private List<Pedido> pedidos;
    ```

- **@ManyToOne**: Define um relacionamento de muitos-para-um, onde várias entidades estão associadas a uma entidade.

    ```java
    @ManyToOne
    @JoinColumn(name = "pessoa_id")
    private Pessoa pessoa;
    ```

- **@ManyToMany**: Define um relacionamento de muitos-para-muitos. Geralmente, uma tabela intermediária é criada automaticamente pelo JPA para gerenciar esse relacionamento.

    ```java
    @ManyToMany
    @JoinTable(name = "pessoa_projeto", 
               joinColumns = @JoinColumn(name = "pessoa_id"),
               inverseJoinColumns = @JoinColumn(name = "projeto_id"))
    private List<Projeto> projetos;
    ```

## Exemplo Completo de Mapeamento de Entidade com Anotações JPA

Exemplo de uma classe `Pessoa` com mapeamento completo usando anotações JPA:

```java
import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "pessoas")
public class Pessoa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome", length = 100, nullable = false)
    private String nome;

    @Temporal(TemporalType.DATE)
    @Column(name = "data_nascimento")
    private Date dataNascimento;

    @Transient
    private int idadeCalculada;

    @OneToOne
    @JoinColumn(name = "endereco_id")
    private Endereco endereco;

    @OneToMany(mappedBy = "pessoa")
    private List<Pedido> pedidos;

    @ManyToMany
    @JoinTable(name = "pessoa_projeto", 
               joinColumns = @JoinColumn(name = "pessoa_id"),
               inverseJoinColumns = @JoinColumn(name = "projeto_id"))
    private List<Projeto> projetos;

    // Getters e Setters...
}
```

### Beans ###

- **Beans** são objetos que são instanciados, configurados e gerenciados pelo contêiner do Spring. Eles são componentes fundamentais em uma aplicação Spring e representam a lógica de negócios, serviços ou dados da aplicação.


### Injeção de Dependências ###

- Permite a criação de objetos que precisam de outras classes (dependências) sem que elas tenham que criar essas dependências por conta própria. Isso é feito pelo Spring.

### Anotação Autowired ###

- **@Autowired** a anotação @Autowired é utilizada no Spring para indicar que uma dependência deve ser injetada automaticamente pelo contêiner Spring. 


## Observação ##

- Em aplicações menores, é possível que não seja preciso de uma camada de serviços, pois pode-se implementar a lógica diretamente no controlador, utilizando os repositórios do JPA para acesso a dados.





