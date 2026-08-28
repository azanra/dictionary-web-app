interface ILicense {
  name: string;
  url: string;
}

interface IPhonetics {
  text: string;
  audio?: string;
  sourceUrl?: string;
  license?: ILicense;
}

interface IDefinition {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example?: string;
}

export interface IMeanings {
  partOfSpeech: string;
  definitions: IDefinition[];
  synonyms: string[];
  antonyms: string[];
}

export interface IDictionary {
  word: string;
  phonetic: string;
  phonetics: IPhonetics[];
  meanings: IMeanings[];
  license: ILicense;
  sourceUrls: string[];
}

export interface IDictionaryContext {
  data: IDictionary;
  error: Error | undefined;
  isLoading: boolean;
  fetchDictionary: (keyword: string) => Promise<void>;
}
