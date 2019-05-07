# Registro de negocios

# Características generales de la aplicación

A partir del wireframe (prototipado de bajo nivel) incluido en `screens/` se ha de elaborar la siguiente página web con las siguientes caracterísiticas y cumpliendo los requisitos especificados más abajo:

- Look & feel libre

- RWD

- Información del api:

  - se debe clonar el siguiente mock-api https://www.mockapi.io/clone/5c939acd4dca5d0014ad8293, para ello habrá que logarse en la web de mock-api con el usuario de github, crear un projecto y utilizar la opción clonar

- Creación de dos rutas diferentes que corresponden a dos páginas diferentes

- En una página debe aparecer un formulario con los siguientes campos (todos son REQUERIDOS):

  - nombre: nombre de la empresa (maximo 150 caracteres)
  - fecha de creación: fecha de creación de la empresa (en formato Date). Ojo aquí, que el mockapi aunque le mandéis una fecha, lo convierte a timestamp y es lo que registra
  - dirección: dirección física de la empresa
  - país: país de la empresa, debe ser un select y debe tener las siguientes opciones:

  ```
  [{
      key: 'España',
      value: '1'
  },
  {
      key: 'Portugal',
      value: '2',
  },
  {
      key: 'Francia',
      value: '3',
  },
  {
      key: 'Italia',
      value: '4'
  }]

  ```

  - teléfono: número de teléfono de la empresa (ha de tener un mínimo y un máximo 9 caracteres)
  - tamaño de la empresa: tamaño de la empresa, debe ser un select y tener las siguientes opciones:

  ```
  [
      {
          key: 'Pequeña',
          value: '1'
      },
      {
          key: 'Mediana',
          value: '2'
      },
      {
          key: 'Grande',
          value: '3'
      }
  ]

  ```

  - descripción: una descripción del negocio (máximo 250 caracteres)

- La información del formulario debe enviarse mediante un POST al endpoint company del api. El objeto que se enviará en el POST debe tener los siguientes campos:

```
{
    name: string ->'nombre de empresa',
    createdAt: Date -> 'la fecha de creación de la empresa, debe ser un formato Date'
    address: string -> 'dirección: calle número etc',
    country: string -> 'el país de la empresa, aquí hay que pasar solo el código, que correspondería al value en el objeto del array',
    phone: string -> 'el número de teléfono',
    size: string -> 'el tamaño de la empresa, si es grande, pequeña o mediana, igual que con el país, también hay que pasar únicamente el código del value',
    description: string -> 'la descripción de la empresa'
}
```

- El formulario debe limpiarse después de enviarse (es decir, deben volver a aparecer los inputs en blanco)

- En la otra página debe aparecer un listado de las empresas registradas tal y como se indica en el diseño. Al principio no aparecerá ninguna al no haber registrado ninguna empresa pero en lugar de mostrar la pantalla vacía mostraremos un mensaje que indique que aún no hemos registrado ningún negocio, de esta manera evitamos que el usuario piense que existe un error de programación y mejoramos su experiencia, y si se realiza correctamente el formulario, cuando registremos las empresas deben aparecer en esta página de listado. Para ello tendremos que hacer un GET al endpoint company del api:

  - El get os devuelve un timestamp en el campo de la fecha, pero lo que hay que mostrar en el template es un formato dd/MM/yyyy

  - El teléfono debe tener un guión cada 3 caracteres.

# PLUS

- Si el POST se realiza correctamente, debemos mostrar un mensaje de success del tipo "Registro realizado correctamente" debajo del formulario.

- Si hay algún error al realizar el post (si el api devuelve un error), debe aparecer un mensaje del tipo "Hubo un error durante el registro" debajo del formulario. Debe aparecer solo cuando haya algún error, es decir, si luego se cambia algo en el formulario y se vuelve a enviar y todo va correctamente, debe desaparecer y en su lugar aparecer el de success.

# Requisitos HTML:

- HTML5.
- El HTML ha de ser semántico.
- Uso de la metodología BEM para crear los bloques (objetos).

# Requisitos CSS:

- Uso del preprocesador SCSS.

# Requisitos javascript

- Se debe utilizar obligatoriamente Angular
