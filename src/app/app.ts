import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./components/footer/footer";
import { Navbar } from "./components/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [Navbar,Footer], //RouterOutlet
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('navbar-footer-activities-profile_angular-scss');
}
