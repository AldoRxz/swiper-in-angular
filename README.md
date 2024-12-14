# Angular Swiper Project

Este proyecto es una aplicación desarrollada con Angular que utiliza **SwiperJS**, una poderosa biblioteca para crear carruseles, deslizamientos, y slides interactivos y responsivos.

## 📋 Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión LTS recomendada)
- [Angular CLI](https://angular.io/cli)

## ⚙️ Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local:

1. Clona el repositorio:

   ```bash
   git clone https://.......
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd slideshow-angular-swiper
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   ng serve
   ```

5. Abre tu navegador y ve a `http://localhost:4200`.

## 🛠️ Funcionalidades

- Deslizamientos responsivos con configuraciones avanzadas.
- Carruseles que integran imágenes y videos.
- Totalmente personalizable mediante los parámetros de configuración de **SwiperJS**.
- Transiciones suaves, navegación táctil, y compatibilidad con dispositivos móviles.

## 📂 Estructura del proyecto

```plaintext
slide_SW_JS/           # Deslizamientos simples en JavaScript
slide_video/           # Carruseles que integran videos
slideshow-angular-swiper/ # Proyecto Angular principal
swiper/               # Configuraciones generales de SwiperJS
swiperJs/             # Ejemplos adicionales con SwiperJS
.gitignore            # Archivo para exclusión en Git
README.md             # Documentación del proyecto
```

## 🌟 SwiperJS: ¿Qué es y cómo se usa?

**SwiperJS** es una biblioteca moderna y multiplataforma para crear interfaces de usuario con deslizamientos. Es extremadamente ligera, flexible y soporta una amplia variedad de configuraciones para personalizar su comportamiento.

### Características principales de SwiperJS:

- **Soporte táctil nativo**: Perfecto para dispositivos móviles y tablets.
- **Modos de bucle y autoplay**: Para crear carruseles que se deslizan automáticamente.
- **Deslizamiento vertical y horizontal**: Adaptable según las necesidades del proyecto.
- **Lazy loading**: Optimización de carga para imágenes grandes.
- **Integración fácil con Angular**: SwiperJS tiene soporte directo para Angular, lo que simplifica su uso.

### Cómo lo usamos en este proyecto:

En este proyecto, SwiperJS se utiliza para:

1. **Galerías de imágenes**: Crear deslizamientos interactivos de imágenes.
2. **Carruseles de video**: Implementar carruseles multimedia que soportan la reproducción de videos.
3. **Configuraciones personalizadas**: Ajustar la velocidad, las transiciones y el diseño de los carruseles.

### Instalación de SwiperJS en Angular:

Si deseas instalar SwiperJS en tu proyecto Angular desde cero, sigue estos pasos:

1. Instala SwiperJS:
   ```bash
   npm install swiper
   ```

2. Importa el módulo en tu componente Angular:
   ```typescript
   import { SwiperModule } from 'swiper/angular';
   ```

3. Usa el componente en tus plantillas:
   ```html
   <swiper [config]="swiperConfig">
     <ng-template swiperSlide>Slide 1</ng-template>
     <ng-template swiperSlide>Slide 2</ng-template>
     <ng-template swiperSlide>Slide 3</ng-template>
   </swiper>
   ```

4. Configura las opciones del carrusel en el archivo `.ts`:
   ```typescript
   swiperConfig = {
     slidesPerView: 1,
     spaceBetween: 10,
     navigation: true,
     pagination: { clickable: true },
     autoplay: { delay: 5000 },
   };
   ```

## 🧑‍💻 Tecnologías utilizadas

- **Angular**: Framework principal para la aplicación.
- **SwiperJS**: Biblioteca de carruseles y deslizamientos.
- **TypeScript**: Lenguaje de programación para tipado seguro.
- **HTML5/CSS3**: Para estructurar y estilizar la interfaz de usuario.


