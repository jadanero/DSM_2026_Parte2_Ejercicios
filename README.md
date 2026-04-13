# DSM_2026_Parte2_Ejercicios
## INFO
En caso de no tener las dependencias para poder levantar el servidor desde nuestro PC:
```
cd .\appEjerciciosclase\
npm install expo
npm audit fix
```

## INDICE
- [Info](#Ejercicio-1)
- [Ejercicios:](#Ejercicios)
    - [Ejercicio 1](#Ejercicio-1)
    - [Ejercicio 2](#Ejercicio-2)
    - [Ejercicio 3](#Ejercicio-3)

## Ejercicios
### Ejercicio 1

En este ejercicio he modificado el `App.js`. He modificado el texto en visualización(`<text>`) y el color de fondo(`backgroundColor`).

He empleado estos comandos para crear el proyecto:
```
npx create-expo-app@latest appEjerciciosclase --template blank@sdk-54
```
Después para poder encender el proyecto:
```
cd .\appEjerciciosclase\
npx expo start
```
### Ejercicio 2
Instalar contenido:
```
npx expo install react-native-paper
npx expo install react-native-safe-area-context
```
Existe un problema con el import de imagenes en el que se ponian dos puntos y no uno.
Me salta todo el rato un error de _StyleSheet doesn't exist_ eso quiere decir que se necesita importar a `App.js`. He aañadido al StyleSheet `backgroundColor: '#fff'` que si no no veia nada en pantalla. 

### Ejercicio 3
Añadir `DetalleExcursionComponent.js`, actualizamos el componente `CampobaseComponent.js` para que el metodo return renderice la información y añadimos el metodo _`OnPress()`_ al componente `CalendarioComponent.js`.

### Ejercicio 4
Modificar los archivos pedidos en el ejercicio 4 con los obtenidos de .zip. Modificación ligera del codifo de `CampobaseComponent.js` y de `DetalleExcursionComponent.js` para que se pueda ejecutar el programa bien ya que el import de `excursiones.js` no era correcto.