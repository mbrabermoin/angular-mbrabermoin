import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Job } from '../job/job';

interface JobDetails {
  title: string;
  company: string;
  tasks: string[];
  startDate: string;
  endDate: string;
  location: string;
  technologies: string[];
}

@Component({
  selector: 'job-list',
  standalone: true,
  imports: [CommonModule, Job],
  templateUrl: './jobs-list.html',
  styleUrl: './jobs-list.css',
})
export class JobsList implements OnInit {
  jobs: JobDetails[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<JobDetails[]>('/assets/jobs.json').subscribe((res) => {
      this.jobs = res;
    });
  }
}
