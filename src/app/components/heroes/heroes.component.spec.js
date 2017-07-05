"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var hero_service_1 = require("../../common/services/heroService/hero.service");
var heroes_component_1 = require("./heroes.component");
var MockHeroService = (function () {
    function MockHeroService() {
    }
    MockHeroService.prototype.getHeroes = function () {
        return Promise.resolve([
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' }
        ]);
    };
    MockHeroService.prototype.getHero = function (id) {
        return this.getHeroes()
            .then(function (heroes) { return heroes.find(function (hero) { return hero.id === id; }); });
    };
    return MockHeroService;
}());
describe('Component: heroesComponent', function () {
    var app, fixture, mockHeroService, router;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [heroes_component_1.HeroesComponent],
            providers: [{ provide: hero_service_1.HeroService, useClass: MockHeroService }]
        });
    });
    it('check Hero service', testing_1.async(function () {
        testing_1.TestBed.compileComponents().then(function () {
            fixture = testing_1.TestBed.createComponent(heroes_component_1.HeroesComponent);
            // Access the dependency injected component instance
            app = fixture.componentInstance;
            expect(app).toBeDefined();
            var name = mockHeroService.getHero(12).name;
            expect(name).toBe('Narco'); // Detect changes as necessary
            fixture.detectChanges();
        });
    }));
});
describe('Component: herosDetail', function () {
    it('check Hero service', function () {
        expect(true).toBe(true);
    });
});
//# sourceMappingURL=heroes.component.spec.js.map