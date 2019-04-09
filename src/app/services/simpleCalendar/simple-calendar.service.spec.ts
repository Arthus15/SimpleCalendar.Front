import { TestBed } from '@angular/core/testing';

import { SimpleCalendarService } from './simple-calendar.service';

describe('SimpleCalendarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleCalendarService = TestBed.get(SimpleCalendarService);
    expect(service).toBeTruthy();
  });
});
