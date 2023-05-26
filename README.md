# Entrega Final Ezequiel Zarza

CoderHouse React Js - Entrega Final

Este es el projecto del curso de React Js de Coderhouse

Para el mismo se realizo un e-commerce.

La tematica de este projecto es un e-commerce de venta de autos y otros vehiculos, similar a Kavak

El projecto se realizo con [Create React App](https://github.com/facebook/create-react-app).

## Tecnologias Usadas

El projecto esta hecho con [React 18](https://react.dev/blog/2022/03/29/react-v18).

Para poder navegar dentro de la aplicaccion a los distintos links, se uso [React-Router-Dom](https://reactrouter.com/en/main).

Ademas se uso la biblioteca de componentes [Material UI](https://mui.com/), debido a la cantidad de componentes que brinda,
su documentacion y la relativa flexibilidad que brinda para darle estilos a los mismos


Como plataforma de storage, se uso [Firebase](https://firebase.google.com/?hl=es), mas precisamente la db Firestore del mismo.

NOTE: Previo a usar Firestore, se hicieron mocks para simular la interaccion con una db
Estos archivos estan en la carpeta API-mocks, que no se esta usando pero se deja a modo comparativo

Para realizar el deploy de la aplicacion, se uso [Vercel](https://vercel.com/)

La version que fue "deployada" se encuentra en el siguiente link: [Codervak](https://pre-entrega1-zarza.vercel.app/).


## Arquitectura de la aplicacion

### src

Dentro del codigo fuente, se tienen 4 carpetas

### utils 
    Tiene implementadas las funciones para interacturar con la db (Firestore)

### firestore

    Tiene la configuracion para poder interacciar con dicha db

### context

    Posee 2 contextos usados a lo largo de la aplicacion:

    1. CartContext: maneja el contexto de carrito de compras (items, cantidad, precio) asi como tambien las interacciones con el mismo (agregar, quitar productos)

    2. BuyerContext: maneja el contexto del comprador  (datos del mismo, como nombre, telephono y email) asi como tambien las interacciones con el mismo (reiniciarlo)

### Components

    Tiene todos los components:

    1. Cart (folder): los archivos que conforman al carrito de compras

    2. Checkout (folder): los archivos que conforman el formulario para finalizar la compra

    3. CodervakUI (folder): los archivos con estilos customizados, que se usan a lo alrgo de la aplicacion

    4. Item (folder): los archivos que conforman como se muestras y como se opera con los items a lo largo de la aplicacion

    5. CategoryList: archivo que proporciona las distintas categorias por las cuales se puede navegar

    6. NavBar: la barra de navegacion para poder acceder tanto a las categorias, como al carrito o al inicio

    7. NotFound: usado para mostrar que se esta en un lugar incorrecto (redirecciona al usuario)

    8. PurchaseRsult: Muestra al usuario el resultado de la compra, sea exitosa o no


## Comandos

Para installar las dependecias:

### `npm install`

Para correr la aplicacion:

### `npm start`

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

