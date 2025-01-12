import { Component } from '@angular/core';
import { getMessaging, getToken, onMessage } from '@angular/fire/messaging';
import { RouterOutlet } from '@angular/router';
import { MessagingService } from './messaging/messaging.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers:[MessagingService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'firebasetest';

  message: any;

  constructor(private messagingService: MessagingService) {}

  ngOnInit() {
    this.messagingService.message$.subscribe({next:(data)=>{
      console.log(data);
      
    }})
  }
}
