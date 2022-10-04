export interface PokeList {
    count:    number;
    next:     null;
    previous: null;
    results:  PokemItem[];
}

export interface PokemItem {
    name: string;
    url:  string;
}
