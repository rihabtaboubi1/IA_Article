import { Task } from './task.model';

export interface Project {
  id: number;
  name: string;
  description: string;
  progress: number; // Ajout de la propriété progress
  tasks: Task[]; // Tableau de tâches
}
