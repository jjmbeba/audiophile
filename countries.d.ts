type Language = {
    official: string;
    common: string;
  };
  
  type Name = {
    common: string;
    official: string;
    nativeName: {
      eng: Language;
    };
  };
  
  type Currency = {
    name: string;
    symbol: string;
  };
  
  type IdD = {
    root: string;
    suffixes: string[];
  };
  
  type Capital = string[];
  
  type LanguageMap = {
    eng: string;
  };
  
  type Translations = {
    [key: string]: Language;
  };
  
  type Demonyms = {
    eng: {
      f: string;
      m: string;
    };
  };
  
  type Maps = {
    googleMaps: string;
    openStreetMaps: string;
  };
  
  type Car = {
    signs: string[];
    side: string;
  };
  
  type Flags = {
    png: string;
    svg: string;
  };
  
  type CapitalInfo = {
    latlng: number[];
  };
  
  type Territory = {
    name: Name;
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: {
      USD: Currency;
    };
    idd: IdD;
    capital: Capital;
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: LanguageMap;
    translations: Translations;
    latlng: number[];
    landlocked: boolean;
    area: number;
    demonyms: Demonyms;
    flag: string;
    maps: Maps;
    population: number;
    car: Car;
    timezones: string[];
    continents: string[];
    flags: Flags;
    coatOfArms: {};
    startOfWeek: string;
    capitalInfo: CapitalInfo;
  };
  