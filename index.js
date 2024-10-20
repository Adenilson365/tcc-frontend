//Este arquivo JavaScript é o ponto de entrada do aplicativo. 
//Ele carrega o módulo raiz do seu aplicativo (App.js) e o registra como o componente raiz do seu aplicativo. 
//Isso significa que o App.js é o primeiro componente a ser renderizado no aplicativo.

import { registerRootComponent } from 'expo';

import App from './App';

registerRootComponent(App);
