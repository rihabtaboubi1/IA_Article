import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { SignInComponent } from './head/signin/signin.component';
import { RegisterComponent } from './head/register/register.component';
import { ArticleEditorComponent } from './project/article-editor/article-editor.component';



export const routes: Routes = [
  { path: '', component: HomeComponent },    // Home page
  { path: 'sign-in', component: SignInComponent },
  { path: 'project/:id', component: ProjectComponent },
   { path: 'project/:id', component: ProjectComponent },  // Project details page
   { path: 'register', component: RegisterComponent},
   { path: 'article', component: ArticleEditorComponent}
 
];
