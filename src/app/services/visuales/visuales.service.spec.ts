/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VisualesService } from './visuales.service';

describe('Service: Visuales', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisualesService]
    });
  });

  it('should ...', inject([VisualesService], (service: VisualesService) => {
    expect(service).toBeTruthy();
  }));
});
