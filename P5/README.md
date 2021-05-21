 # Práctica 5
Esta aplicación web muestra simultáneamente dos fuentes de vídeo remotas, procedentes de las cámaras. En la parte superior, en grande, se muestra el vídeo que se está emitiendo en directo. Mediante tres botones la persona encargada de las emisiones (el realizador) selecciona qué fuente de vídeo es la que se muestra en la parte superior (que es la que se está emitiendo en directo). La fuente puede ser la cámara 1, la cámara 2 o bien una imagen estática de prueba (test).

Inicialmente la aplicación arranca con las cámaras apagadas, y la imagen que se está emitiendo es la de pruebas. Los vídeos de las cámaras muestran también esta imagen de pruebas.
En esta situación ninguno de los botones tienen efecto alguno, salvo el de Fuentes ON. Al apretarlo se empezarán a reproducir los vídeos que simulan las fuentes de las cámaras. Estos videos son remotos.
Tras apretar el botón de Fuentes ON los botones Vídeo 1, Vídeo 2 y Test se seleccionará lo que se quiere emitir en directo: la cámara 1, la cámara 2 ó una imagen de pruebas.

Si se aprieta el botón Fuentes OFF aparecerá la imagen de Test en todas las cámaras y el vídeo en directo, y se vuelve a la situación inicial.

Los vídeos que se reproducen en las cámaras están en silencio (muted). Sólo se escuchará el vídeo que se está emitiendo en directo.

Mejoras:

Modo automático: Mediante un botón se activa el modo automático. Si se está en este modo, se retransmiten 3 segundos de cada cámara, alternativamente. Los pulsadores de selección no funcionan en este modo, salvo el de test por si se quiere tapar esos 3 segundos de video. Al apretar el pulsador de modo normal, se vuelve al modo normal.

Reproducción en bucle: Mediante un botón se activa el modo bucle. Si se activa este modo, cada vez que se selecciona una fuente, se reproduce sólo durante 2 segundos y se vuelve atrás (2 segundos), repitiéndose ese trozo de dos segundos en bucle, constantemente. Mientras está activo ese modo se debe poder cambiar la fuente de vídeo (y el bucle se hará con la nueva fuente). Y al igual que el modo automático al apretar el pulsador de modo normal, se vuelve al modo normal.

Diseño: A parte del diseño en general de toda la aplicación, la cámara que este seleccionada en ese momento aparecerá un marco rojo alrededor suya, y por otra parte, para saber en que modo se encuentra (normal, automático o en bucle) cambiará el borde del pulsador según en el que estemos.
