import 'zone.js';
import 'zone.js/testing';

import { getTestBed, TestBed } from '@angular/core/testing';
import {
  BrowserTestingModule,
  platformBrowserTesting,
} from '@angular/platform-browser/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

getTestBed().initTestEnvironment(
  BrowserTestingModule,
  platformBrowserTesting()
);

beforeAll(() => {
  TestBed.resetTestEnvironment(); // Reset previo
  getTestBed().initTestEnvironment(
    BrowserTestingModule,
    platformBrowserTesting()
  );
  TestBed.configureTestingModule({
    providers: [provideHttpClient(), provideHttpClientTesting()],
  });
});
