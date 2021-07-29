import { TestBed } from '@angular/core/testing';

import { CustomPokemonService } from './custom-pokemon.service';

describe('CustomPokemonService', () => {
  let service: CustomPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
