import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'job',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job.html',
  styleUrl: './job.css',
})
export class Job {
  job = input<{
    title: string;
    company: string;
    tasks: string[];
    startDate: string;
    endDate: string;
    location: string;
    technologies: string[];
  }>({
    title: '',
    company: '',
    tasks: [],
    startDate: '',
    endDate: '',
    location: '',
    technologies: [],
  });
}
