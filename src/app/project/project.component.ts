import { Component, OnInit } from '@angular/core';

import { ProjectTitleComponent } from './project-title/project-title.component';

import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';
import { ArticleEditorComponent } from './article-editor/article-editor.component';
@Component({
  selector: 'app-project',
  standalone: true,
  imports: [ProjectTitleComponent, ArticleEditorComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent implements OnInit {
  projectId!: number;
  project: any;

  constructor(
    private route: ActivatedRoute,  // Pour accéder aux paramètres de l'URL
    private projectService: ProjectService  // Service pour récupérer les projets
  ) {}

  ngOnInit(): void {
    // Récupère l'ID du projet à partir de l'URL
    this.projectId = Number(this.route.snapshot.paramMap.get('id'));

    // Charge les détails du projet
    this.projectService.getProjectById(this.projectId).subscribe((response) => {
      this.project = response;
    });
  }

  
}
