import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobsList } from './jobs-list';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('JobsList', () => {
  let component: JobsList;
  let fixture: ComponentFixture<JobsList>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsList, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(JobsList);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    fixture.detectChanges();

    const req = httpMock.expectOne('/assets/jobs.json');
    expect(req.request.method).toBe('GET');

    req.flush([]);

    expect(component).toBeTruthy();
  });

  it('should load jobs list via HTTP', () => {
    fixture.detectChanges();

    const mockJobs = [
      {
        title: 'Frontend Dev',
        company: 'Company A',
        tasks: ['Develop UI', 'Write tests'],
        startDate: '2023-01-01',
        endDate: '2023-12-31',
        location: 'Remote',
        technologies: ['Angular', 'TypeScript'],
      },
      {
        title: 'Backend Dev',
        company: 'Company B',
        tasks: ['Develop API', 'Database design'],
        startDate: '2022-05-01',
        endDate: '2023-04-30',
        location: 'Onsite',
        technologies: ['Node.js', 'PostgreSQL'],
      },
    ];

    const req = httpMock.expectOne('/assets/jobs.json');
    expect(req.request.method).toBe('GET');

    req.flush(mockJobs);

    expect(component.jobs).toEqual(mockJobs);
  });
});
