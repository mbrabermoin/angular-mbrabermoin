import { Component, computed, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Job } from '../job/job';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';

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
export class JobsList {
  private http = inject(HttpClient);

  jobsSignal = toSignal<any[], any[]>(
    this.http.get<any[]>('/assets/jobs.json').pipe(catchError(() => of([]))),
    { initialValue: [] }
  );

  jobs = computed<JobDetails[]>(() => this.jobsSignal() ?? []);
}
