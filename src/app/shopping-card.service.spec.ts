import { TestBed, inject } from '@angular/core/testing';

import { ShoppingCartService } from './shopping-card.service';

describe('ShoppingCardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingCartService]
    });
  });

  it('should be created', inject([ShoppingCartService], (service: ShoppingCartService) => {
    expect(service).toBeTruthy();
  }));
});
