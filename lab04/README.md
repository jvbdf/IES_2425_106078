# REACT #

- React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.

- Usar export default é útil quando você deseja exportar uma única entidade (como um componente React, uma função ou uma classe) do arquivo, tornando o código mais limpo e simples.

- Props enable data sharing between components by passing information from a parent to its child components. São valores passados para um componente React de seu componente pai. Elas permitem que os componentes compartilhem dados de forma imutável.As props são configuradas pelo componente pai e não podem ser modificadas pelo componentet que as recebe.

- State, on the other hand, is used to store dynamic data within a component. Directly modifying objects in state is discouraged. To update an object in state, create a new object (or copy
the existing one) and set the state to reference this updated version. This method ensures changes are
properly detected, maintaining React’s reactivity and efficient rendering process.

- Props are the information that you pass to a JSX tag. For example, className, src, alt, width, and height are some of the props you can pass to an <img>. 

## Passing props to a component 

### Step 1: Pass props to the child component 

``` JSX
export default function Profile() {
  return (
    <Avatar
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
    />
  );
}
```

### Step 2: Read props inside the child component 

- You can read these props by listing their names person, size separated by the commas inside ({ and }) directly after function Avatar. This lets you use them inside the Avatar code, like you would with a variable.

``` JSX
return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
```

## Updating Objects in State

- State can hold any kind of JavaScript value, including objects. But you shouldn’t change objects that you hold in the React state directly. Instead, when you want to update an object, you need to create a new one (or make a copy of an existing one), and then set the state to use that copy.

- Although objects in React state are technically mutable, you should treat them as if they were immutable—like numbers, booleans, and strings. Instead of mutating them, you should always replace them.

-  You should treat any JavaScript object that you put into state as read-only.

- useState é um hook do React usado para adicionar estado a um componente funcional. Ele permite que você defina uma variável de estado e uma função para atualizar essa variável dentro do componente. 
```JSX
import { useState } from 'react';
```

- You can use the ... object spread syntax so that you don’t need to copy every property separately.

```JSX
setPerson({
  ...person, // Copy the old fields
  firstName: e.target.value // But override this one
});

```

## Passind Data Deeply With Context

- Context lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props.

- Context lets a parent component provide data to the entire tree below it.




