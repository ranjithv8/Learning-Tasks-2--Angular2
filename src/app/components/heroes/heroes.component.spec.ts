import { Component, OnInit } from '@angular/core';
import { TestBed,async } from '@angular/core/testing';
import { HeroService } from '../../common/services/heroService/hero.service';


import { FormGroup,ReactiveFormsModule } from '@angular/forms';

import { HeroesComponent } from './heroes.component';

import { Http, Response, RequestOptions } from '@angular/http';

import {Router} from '@angular/router';

class MockHeroService {
  getHeroes() {
    return Promise.resolve(
    	[
    		{ id: 11, name: 'Mr. Nice' },
  			{ id: 12, name: 'Narco' }
  		]
  	);
  }

  getHero(id: number):any {
    return this.getHeroes()
               .then(heroes => heroes.find(hero => hero.id === id));
  }
}

describe('Component: heroesComponent', () => {
	var app:HeroesComponent,fixture:any,
		mockHeroService:MockHeroService;
    beforeEach(() => {
	    TestBed.configureTestingModule({
	      declarations: [HeroesComponent],
	      providers: [{ provide: HeroService, useClass: MockHeroService },
	    });
  	});

  	it('check Hero service', async(() => {
  		TestBed.overrideComponent(HeroesComponent, {
	    	set: {
	       		template: '<div>Overridden template here</div>'
	       }
	    });
	    TestBed.compileComponents().then(() => {

		    fixture = TestBed.createComponent(HeroesComponent);

		    // Access the dependency injected component instance
		    app = fixture.componentInstance;
		    expect(app).toBeDefined();
		    var name = mockHeroService.getHero(12).name;	 
		    expect(name).toBe('Narco');  // Detect changes as necessary
		    fixture.detectChanges();
		});
	    
	}));
});