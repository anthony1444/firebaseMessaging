import { Component } from '@angular/core';
import { getMessaging, getToken, onMessage } from '@angular/fire/messaging';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'firebasetest';

  mensaje: string | null = null;

  constructor() {}

  solicitarPermiso() {
    const messaging = getMessaging();

    // Solicita el permiso para notificaciones
    Notification.requestPermission()
      .then((permission) => {
        if (permission === 'granted') {
          return getToken(messaging, {
            vapidKey: 'BNQprvrTFTKgkkFiFiOg_H9P4Ry6RxEPvl2EB1hyawKuVwlZ010gNqj2SLWidZGtyeuXD90GlZC0EwdrERPA1UM', // Reemplaza con tu clave VAPID de Firebase
          });
        } else {
          console.warn('Permiso denegado para notificaciones');
          return 'error'
        }
      })
      .then((token) => {
        if (token) {
          console.log('Token recibido:', token);
          // Envía el token al servidor si es necesario
        }
      })
      .catch((err) => console.error('Error al obtener el token:', err));
  }

  ngOnInit() {
    const messaging = getMessaging();

    // Maneja mensajes recibidos en primer plano
    onMessage(messaging, (payload) => {
      console.log('Mensaje recibido:', payload);
      this.mensaje = payload.notification?.body || 'Mensaje recibido';
    });
  }
}
