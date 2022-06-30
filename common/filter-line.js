const string = 'Привет, Никита! И будь здоров.';
const vowels = ["а", "е", "ё", "и", "о", "у", "э", "ы", "ю", "я"];

const getVowels = stringFilter => {

  let allVowels = '';

  for (let i = 0; i < stringFilter.length; i++) {
    const currentLetter = stringFilter[i].toLowerCase();

    if (vowels.includes(currentLetter)){
      allVowels += currentLetter;
    }
  }

  return allVowels;
};

console.log(getVowels(string));