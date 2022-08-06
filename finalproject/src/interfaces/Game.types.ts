export interface Game {
  image: string,
  logo?: string,
  title: string,
  genres: Array<string>;
  price?: number,
  video?: string,
  id: number,
  description?: string,
}


// TODO change
export interface Ggame { 
  category?: Category[] | undefined,
  description?: GameDescriptions,
  genres?: string,
  image: GameImages,
  logo: GameLogo,
  price: number,
  title: string,
  sliderTitle: string;
  videoLink?: string
  iframeVideo?: string;
  id: number
}

export interface GameDescriptions { 
  gamePageDescription: string,
  sliderDescription: string
}

export interface GameImages { 
  gamePageImage: string,
  shopimage: string,
  sliderGrandImage: string,
  sliderSmallImage: string,

}

export interface GameLogo { 
  grandLogo: string,
  smallLogo: string,
}

export interface Category { 
  id: string,
  title: string,
}