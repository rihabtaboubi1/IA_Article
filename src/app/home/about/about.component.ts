import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutUsComponent {
  title: string = 'À propos de nous';
  description1: string = `Welcome to our platform! Here, we are dedicated to sharing articles on the latest innovations and fascinating facts in the field of Artificial Intelligence. Our mission is to provide insights and knowledge to everyone, enabling you to stay informed about the rapidly evolving world of AI.`;
  description2: string = `Notre équipe est composée d'experts dans différents domaines qui travaillent ensemble pour atteindre nos objectifs.`;
  description3: string = `Whether you are a seasoned professional or simply curious about this transformative technology, we aim to inspire and educate through engaging content that sparks ideas and discussions.`;
}
