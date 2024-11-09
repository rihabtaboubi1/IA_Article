import { Component } from '@angular/core';
import { Router } from '@angular/router';
 // Service pour interagir avec la base de données
import { CommonModule } from '@angular/common'; // Import de CommonModule pour les directives Angular
import { FormsModule } from '@angular/forms';
// Assurez-vous d'importer votre modèle de projet
import { RouterModule } from '@angular/router';
import { ProjectService } from '../../project.service';
import { Project } from '../../project.model';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  newProjectName: string = ''; // Nom du nouveau projet à créer
  newProjectDescription: string = '';  // Project description
  projects: Project[] = []; // Liste des projets existants, typée avec l'interface Project

  constructor(private projectService: ProjectService, private router: Router) {
    this.loadProjects(); // Charge les projets existants lors de l'initialisation
  }

  // Crée un nouveau projet
  createProject() {
    if (this.newProjectName.trim()) {
      const newProject: Project = {
        id: 0, // Utilisez 0 si votre API génère l'ID automatiquement
        name: this.newProjectName,
        description: this.newProjectDescription,  // Include description
        progress: 0, // Ajoutez une description si nécessaire
        tasks: [] // Initialisez le tableau des tâches si nécessaire
      };

      // Appelle le service pour ajouter le projet à la base de données
      this.projectService.addProject(newProject).subscribe(
        response => {
          this.projects.push(response); // Ajoute le projet créé à la liste locale
          this.newProjectName = ''; // Réinitialise le champ de saisie
          this.newProjectDescription = '';  // Reset description input
        },
        error => {
          console.error('Erreur lors de la création du projet:', error); // Gère les erreurs potentielles
        }
      );
    }
  }

  // Charge les projets depuis la base de données
  loadProjects() {
    this.projectService.getProjects().subscribe(
      response => {
        this.projects = response; // Met à jour la liste des projets
      },
      error => {
        console.error('Erreur lors du chargement des projets:', error); // Gère les erreurs potentielles
      }
    );
  }

  // Redirige vers la page spécifique d'un projet (par exemple /project/1)
  goToProject(project: any) {
    this.router.navigate(['/project', project.id]); // Redirection vers la page du projet
  }
}