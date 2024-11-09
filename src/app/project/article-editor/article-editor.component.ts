import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { Article } from '../../article.model'; // Import Article model (make sure this exists)
import { Observable } from 'rxjs'; // Import Observable if you want to use it
import { FooterComponent } from '../../home/footer/footer.component';

@Component({
  selector: 'app-article-editor',
  standalone: true,
  imports: [FormsModule, FooterComponent],
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.css'], // Corrected to styleUrls
})
export class ArticleEditorComponent {
  articleContent: string = ''; // Article content to be submitted

  constructor(private http: HttpClient) {} // Inject HttpClient

  submitArticle() {
    if (this.articleContent.trim()) {
      const newArticle: Article = { content: this.articleContent }; // Create new article object

      // Send the article to the backend
      this.http.post<Article>('http://localhost:8080/api/articles', newArticle)
        .subscribe({
          next: (response) => {
            console.log('Article submitted successfully:', response);
            alert('Article submitted successfully!');
            this.articleContent = ''; // Clear the textarea after submission
          },
          error: (error) => {
            console.error('Error submitting article:', error);
            alert('Error submitting article. Please check the console for more details.');
          }
        });
    } else {
      alert('The text area is empty. Please write something.');
    }
  }
}
