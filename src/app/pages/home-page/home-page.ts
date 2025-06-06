import { Component } from '@angular/core';
import { JobsList } from '../../components/jobs-list/jobs-list';

@Component({
  selector: 'app-home-page',
  imports: [JobsList],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  name = 'Matías Ignacio Brabermoin';
  actualPosition = 'Senior React Developer';
  actualCompany = 'Trinetix';
  cvLink =
    'https://www.canva.com/design/DAGfYfB6p68/kyekgeQZP1Kk2809_zl7nQ/edit?utm_content=DAGfYfB6p68&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton';
  githubLink = 'https://github.com/mbrabermoin';
}
