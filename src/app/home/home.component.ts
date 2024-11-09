import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service'; // Service pour interagir avec la base de données
import { CommonModule } from '@angular/common'; // Import de CommonModule pour les directives Angular
import { FormsModule } from '@angular/forms';
import { Project } from '../project.model'; // Assurez-vous d'importer votre modèle de projet
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about/about.component';



@Component({
  selector: 'app-home',
  standalone: true, // Indique que c'est un composant autonome
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, FormsModule, RouterModule, SidebarComponent, FooterComponent, AboutUsComponent] // Importez CommonModule pour utiliser les directives Angular comme *ngIf et *ngFor
})
export class HomeComponent {
  
}
