## Spatial Complexity

`Hasta ahora solo hemos hablado de la complejidad computacional. En general, si alguien habla de Big O y no especifica de qué tipo está hablando, generalmente se trata de la complejidad computacional o del análisis de cuánto tarda en ejecutarse algo. Hablemos de la complejidad espacial o cuánto espacio (por ejemplo, cuánta RAM o espacio en disco) necesita completar un algoritmo.`

## Linear

`Digamos que tenemos un algoritmo que para cada elemento de la matriz, necesita crear otra matriz en el proceso de clasificación. Entonces, para una matriz de longitud 10, nuestro algoritmo creará 10 matrices. Para una matriz de 100, crearía 100 matrices adicionales (o algo parecido, recuerde que son trazos generales, no exactos). Esto sería O(n) en términos de su complejidad espacial. Haremos algunos tipos que hacen esto.`

## Logrithmic

`¿Qué pasa con otro para cada elemento de la matriz? Necesitaba crear una cantidad decreciente de matrices adicionales. Por ejemplo: para una matriz de longitud 10, crearía 7 matrices. Para una matriz de 100, crearía 12 matrices. Para una matriz de 1000, había creado 20 matrices. Esto sería O(log n).`

## Constant

`¿Qué pasa si no creamos matrices adicionales cuando hicimos nuestro algoritmo? Simplemente usamos el mismo espacio que nos dieron cuando empezamos. ¿O si creamos solo 10 arreglos, sin importar qué tan largo sea el arreglo? Esto sería O(1) ya que es constante pase lo que pase. Su necesidad espacial no aumenta con matrices más largas.`

## Quadratic

`Por último, ¿qué pasaría si tuviéramos una aplicación que calcula las distancias entre códigos postales?

Un código postal en los Estados Unidos es un número de cinco dígitos que representa un área de tierra bastante pequeña. 98109 está en el centro de Seattle, Washington, mientras que 10001 está en el centro de la ciudad de Nueva York, NY.
Si un usuario pregunta cuál es la distancia entre 98109 y 10001, diríamos algo así como 2800 millas o 4500 km. Ahora, digamos que para cada código postal que agregamos a nuestro sistema, calculamos la distancia entre cada otro código postal en nuestro sistema y lo almacenamos. Si solo hubiera 10 códigos postales, claro, sería fácil, pero hay casi 42,000 códigos postales en los Estados Unidos y se agregarán más. La complejidad espacial en esto sería O(n²) porque por cada nuevo código postal que agreguemos, también tendríamos que agregar 42,000 elementos nuevos.

¿Es esta una buena idea? ¡Depende! Una empresa en la que solía trabajar hizo exactamente esto porque llamar a la API para obtener estos datos era muy costoso, por lo que hicieron todo el trabajo de cómputo una vez para averiguarlo y simplemente almacenarlo. Era una base de datos enorme, pero terminó siendo mucho más barata que la API.

Diré que O (n²) en complejidad espacial es bastante raro y una gran bandera roja.`

## Está bien, claro, pero ¿por qué?

`Como antes, esta es solo una herramienta para asegurarse de que su diseño se ajuste a sus necesidades. Uno no es necesariamente mejor que el otro. Y, con mucha frecuencia, es necesario compensar la complejidad computacional frente a la espacial. Algunos algoritmos comen mucha memoria pero van rápido y hay muchos que comen cero memoria pero van lentos. Solo depende de cuáles sean tus necesidades.

Aquí hay un ejemplo: supongamos que está escribiendo un código que se ejecutará en una PlayStation 3 y necesita ordenar 1000 programas de televisión de acuerdo con el programa que cree que el cliente querrá ver. Las PS3 tienen un procesador decente pero muy poca memoria disponible para las aplicaciones. En este caso, nos gustaría compensar a favor de la complejidad espacial y compensar la complejidad computacional: el procesador puede hacer más trabajo para que podamos ahorrar memoria.

Bien, ahora el mismo problema, pero tenemos 1,000,000 de videos y un servidor grande y robusto en la nube para hacer el trabajo por nosotros. En este caso, no tenemos recursos limitados ni por la memoria ni por la computación, por lo que podemos sentirnos libres de cambiar a favor de la computación, ya que queremos responder al usuario tan pronto como podamos.`
