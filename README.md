# challenge-amigo-secreto
##Esta aplicacion permite que se agreguen nombres a una lista a traves de un campo de texto y de un boton llamado "anadir". Si se intenta agregar un nombre vacio, aparecera una alerta indicando que se debe ingresar un nombre valido.
  La aplicacion dispone de un boton "sortear amigo" que elige un nombre aleatoriamente y muestra el mensaje "El amigo  secreto sorteado es: nombre".
  ###Descripcion de funcionalidades
  Funcion 1: AgregarAmigo. La funcion toma el valor ingresado al campo de texto y lo evalua. Si es valido lo empuja a una lista y llama a la funcion 2, si no es valido se muestra una alerta que  dice que "se debe ingresar un nombre"
  
![Image](https://github.com/user-attachments/assets/6c1b134c-9fa7-4189-802a-233e33c02cb4)

  Funcion 2: ActualizaLista. Si el valor ingresado al campo es valido (evaluado en la funcion 1) el nombre se ingresara a la lista mediante el clic en el boton anadir y se mostrara bajo el campo de texto. A medida que se ingresen nombres validos se iran mostrando uno sobre el otro en forma de columna

![Image](https://github.com/user-attachments/assets/6c1b134c-9fa7-4189-802a-233e33c02cb4)

  Funcion 3: SortearAmigo Esta funcion escoge aleatoriamente un numero entre 0 y la longitud de la lista ingresada y mostrara sobre el boton sortear amigo el mensaje "El amigo secreto sorteado es: niombre". la funcion es llamada con el clic en el boton
