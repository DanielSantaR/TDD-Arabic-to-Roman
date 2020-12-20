import { TestBed } from '@angular/core/testing';
import { ArabigoToRomanService } from './arabigo-to-roman.service';

describe('ArabigoToRomanService', () => {
  let service: ArabigoToRomanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArabigoToRomanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`Number 1`, () => {
    expect(service.arabigo_to_roman(1)).toEqual('I');
  });

  it(`Number 3`, () => {
    expect(service.arabigo_to_roman(3)).toEqual('III');
  });

  it(`Number 4`, () => {
    expect(service.arabigo_to_roman(4)).toEqual('IV');
  });

  it(`Number 11`, () => {
    expect(service.arabigo_to_roman(11)).toEqual('XI');
  });

  it(`Number 27`, () => {
    expect(service.arabigo_to_roman(27)).toEqual('XXVII');
  });

  it(`Number 50`, () => {
    expect(service.arabigo_to_roman(50)).toEqual('L');
  });

  it(`Number 54`, () => {
    expect(service.arabigo_to_roman(54)).toEqual('LIV');
  });

  it(`Number 101`, () => {
    expect(service.arabigo_to_roman(101)).toEqual('CI');
  });

  it(`Number 499`, () => {
    expect(service.arabigo_to_roman(499)).toEqual('CDXCIX');
  });

  it(`Number 500`, () => {
    expect(service.arabigo_to_roman(500)).toEqual('D');
  });

  it(`Number 1000`, () => {
    expect(service.arabigo_to_roman(1000)).toEqual('M');
  });

  it(`Number 1001`, () => {
    expect(service.arabigo_to_roman(1001)).toEqual(
      'This conversion system does not accept numbers greater than 1000'
    );
  });
});
