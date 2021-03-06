import { Component, OnInit } from '@angular/core';
import { AuthService } from './components/auth/auth.service';
// import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'recipe-app';
  loadedFeature = 'recipe';

  constructor(private authService: AuthService
    // , private loggingService: LoggingService
    ) {}

  ngOnInit() {
    this.authService.autoLogin();
    // this.loggingService.printLog('Hello from AppComponent ngOnInit');
  }

  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // } 

}
