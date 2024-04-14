# ⛰️React Earthquake App Frontend⚛️

## Iniciar server

```
npm i
run npm dev
```

## Rutas

#### Dashboard

```http
  /
```

Desde aquí se pueden consultar los movimientos sismicos registrados en la base de datos, así mismo se pueden crear y borrar comentarios sobre cada sismo

_nota:_ De no estar previamente autenticado sera redirigido a /login

#### Inicio de sesión

```http
  /login
```

Desde aquí se puede iniciar sesión en el sistema. De no tener sesión desde aquí podra redirigirse a /register

_nota:_ De estar previamente autenticado sera redirigido a /

#### Registro

```http
  /register
```

Desde aquí se puede registrar en el sistema. En caso de ya tener sesión desde aquí podra redirigirse a /login

_nota:_ De estar previamente autenticado sera redirigido a /

## Herramientas usadas

Para la elaboración de este proyecto se hizo uso de:

- 📌 Vite como servidor de desarrollo local
- 📌 React Router Dom para manejo de rutas
- 📌 TailwindCSS como libreria de estilos CSS
- 📌 HeroIcons como libreria de iconos
- 📌 HeadlessUI como libreria de componentes
- 📌 ContextAPI para manejo global del estado
