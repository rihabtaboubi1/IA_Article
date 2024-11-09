import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component'; 
import { HeadComponent } from './head/head.component';
import { SignInComponent } from './head/signin/signin.component';
import { RegisterComponent } from './head/register/register.component';
import { FooterComponent } from './home/footer/footer.component';
import { ArticleEditorComponent } from './project/article-editor/article-editor.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProjectComponent, HomeComponent, HeadComponent, SignInComponent, RegisterComponent, FooterComponent, ArticleEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  
}
