import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { routes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';


export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCIVYLJIapxu5b7QHU1MXDjrRn47ssk-H0",
    authDomain: "delivery-fffde.firebaseapp.com",
    projectId: "delivery-fffde",
    storageBucket: "delivery-fffde.firebasestorage.app",
    messagingSenderId: "244577228746",
    appId: "1:244577228746:web:b828118e21a2df1b596133",
    measurementId: "G-2QLPE6BHRE"
  },
};

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideMessaging(() => getMessaging()), provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    })]
};
