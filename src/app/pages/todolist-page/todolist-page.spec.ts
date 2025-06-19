import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistPage } from './todolist-page';

describe('TodolistPage', () => {
  let component: TodolistPage;
  let fixture: ComponentFixture<TodolistPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodolistPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodolistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
