import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { ListInvestmentsService } from './list-investments.service';
import { HttpClient } from '@angular/common/http';

describe('ListInvestmentsService', () => {
  let service: ListInvestmentsService;

  let httpTestingController: HttpTestingController;

  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ListInvestmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
