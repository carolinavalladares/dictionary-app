export interface WordDataType {
  word: string;
  sourceUrls: string[];
  license: LicenseType;
  meanings: MeaningType[];
  phonetic: string;
  phonetics: PhoneticType[];
}

interface MeaningType {
  definitions: {
    definition: string;
    example: string;
    synonyms: string[];
    antonyms: string[];
  }[];
  partOfSpeech: string;
  synonyms: string[];
  antonyms: string[];
}

interface LicenseType {
  name: string;
  url: string;
}

interface PhoneticType {
  audio: string;
  sourceUrl: string;
  text: string;
  license: LicenseType;
}
