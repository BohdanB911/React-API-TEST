class SwapiService {

    _apiBase = 'https://swapi.dev/api'

    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${ res.status}`
            )
        }

        const data = await res.json();
        return data
    }

    async getAllPeople() {
        const rez = await this.getResourse(`/people/`)
        return rez.results.map(this._transformPerson)
    }

    async getPerson(id) {
        const person = await this.getResourse(`/people/${id}/`);
        return this._transformPerson(person)
    };
    async getAllPlanets() {
        const rez = await this.getResourse(`/planets/`)
        return rez.results.map(this._transformPlanet)
    }

    async getPlanet(id) {
        const planet = await this.getResourse(`/planets/${id}/`);
        return this._transformPlanet(planet)
    };
    async getAllStarships() {
        const rez = await this.getResourse(`/starships/`)
        return rez.results.map(this._transformStarship)
    }

    async getStarship(id) {
        const starship = await this.getResourse(`/starships/${id}/`);
        return this._transformStarship(starship)
    };
    _extractId(item) {
        const idRegExp = /\/([0-9])*\/$/;
        return item.url.match(idRegExp)[1]
    }

    _transformPlanet(planet) {

        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }
    _transformStarship(starship) {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    }
    _transformPerson(person) {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor
        }
    }

};

const swapi = new SwapiService();

swapi.getPerson(3).then((data) => {
    console.log(data.name)
});
swapi.getPlanet(3).then((data) => {
    console.log(data.name)
});
swapi.getStarship(3).then((data) => {
    console.log(data.name)
});

export default SwapiService;