import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-title',
  standalone: true,
  templateUrl: './project-title.component.html',
  styleUrls: ['./project-title.component.css']
})
export class ProjectTitleComponent {
  @Input() projectName: string = '';        // Receive project name from parent
  @Input() projectDescription: string = ''; // Receive project description from parent
}
