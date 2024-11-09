// src/app/article/article.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './article.model';

const BASE_URL = 'http://localhost:8080/api/projects'; // URL de l'API

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  // Récupérer tous les articles
  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(BASE_URL);
  }

  // Ajouter un nouvel article
  addArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(BASE_URL, article);
  }

  // Mettre à jour un article existant
  updateArticle(article: Article): Observable<Article> {
    return this.http.put<Article>(`${BASE_URL}/${article.id}`, article);
  }

  // Supprimer un article
  deleteArticle(id: number): Observable<void> {
    return this.http.delete<void>(`${BASE_URL}/${id}`);
  }

  // Obtenir un article par ID
  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`${BASE_URL}/${id}`);
  }
}
