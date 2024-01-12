export class Name {
    constructor(private _first: string, private _second:string){}

	get nameMessage(): string {
		return `Hello ${this._first} ${this._second}`;
	}
}

export class WeatherLocation {
   constructor(private _weather: string, private _city: string){}
    
	get weatherMessage(): string  {
		return `It is ${this._weather} in ${this._city}`;
	}
}
