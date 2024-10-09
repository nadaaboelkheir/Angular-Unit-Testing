import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HeroServiceForLab } from './hero.lab.service';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../../hero';

describe('HeroServiceForLab (HttpClient)', () => {
  let service: HeroServiceForLab;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  const mockHeroes: Hero[] = [
    {
      id: 1,
      name: 'Spider-Man',
      strength: 200,
    },
    {
      id: 2,
      name: 'Iron Man',
      strength: 50,
    },
  ];

  const mockHero: Hero = {
    id: 1,
    name: 'Spider-Man',
    strength: 200,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroServiceForLab],
    });

    service = TestBed.inject(HeroServiceForLab);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('getHeroes function: should send request and receive response successfully', () => {
    service.getHeroes().subscribe((heroes: string | any[]) => {
      expect(heroes.length).toBe(2);
      expect(heroes).toEqual(mockHeroes);
    });

    const req = httpMock.expectOne(service['heroesUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(mockHeroes);
  });

  it('updateHero function: should send request and receive response successfully', () => {
    service.updateHero(mockHero).subscribe((response: any) => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(service['heroesUrl']);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(mockHero);

    req.flush({ success: true });
  });

  afterAll(() => {
    httpMock.verify();
  });
});
