import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:8080/api';  // URL de votre API

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

  constructor(private http: HttpClient) {}

  // Récupère tous les projets
  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(`${BASE_URL}/projects`);
  }

  // Ajoute un nouveau projet
  addProject(project: any): Observable<any> {
    return this.http.post<any>(`${BASE_URL}/projects`, project);
  }

  // Met à jour un projet
  updateProject(project: any): Observable<any> {
    return this.http.put<any>(`${BASE_URL}/projects/${project.id}`, project);
  }

  // Supprime un projet
  deleteProject(id: number): Observable<any> {
    return this.http.delete<any>(`${BASE_URL}/projects/${id}`);
  }

  // Récupère un projet par ID
  getProjectById(id: number): Observable<any> {
    return this.http.get<any>(`${BASE_URL}/projects/${id}`);
  }
}
