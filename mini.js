let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
/*
let testLine = ' This story is very interesting. It also looks really fictional.'
story = story + testLine;
console.log(story);
console.log('----------------------------');
*/
let overusedWords = ['really', 'very', 'basically', 'really,', 'very,', 'basically,'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const storyWords = story.split(' ');
console.log('No. of words: ' + storyWords.length);


let betterWords = storyWords.filter((word) => {
  return !unnecessaryWords.includes(word);
})

let reallyCount = 0;
let veryCount = 0;
let basicallyCount =0;

for (let i = 0; i < 183; i++) {
  if (storyWords[i] === 'really') {
    reallyCount++;
  } else if (storyWords[i] === 'very') {
    veryCount++;
  } else if (storyWords[i] === 'basically') {
    basicallyCount++;
  }
}

console.log('really count = ' + reallyCount);
console.log('very count = ' + veryCount);
console.log('basically count = ' + basicallyCount);

//No. of sentences method 1:
let sentences = story.split('! ').join('. ').split('. ');

console.log('No. of sentences ' + sentences.length);

//No. of sentences method 2:
let storySentences = 0;
storyWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    storySentences++;
  }
})

console.log('No. of sentences ' + storySentences);

console.log(betterWords.length);
console.log('----------------------------');

//Exercise 8 
//Part 1 & 3:
//To test uncomment lines from 2 to 7.
let replacers = ['truly', 'honestly', 'hugely', 'exceptionally']

for (let i = 182; i < betterWords.length ; i++) {
  for (let y=0; y < overusedWords.length; y++)
  if (betterWords[i] === overusedWords[y]) {
    betterWords.splice(i, 1, replacers[Math.floor(Math.random() * 4)])
  }
}


console.log(betterWords.join(' '));

//Part 2:

let mostFrequent = 0;
let counter = 0;
let wordName;

for (let i=0; i < betterWords.length; i++) {
  for (let y=i; y < betterWords.length; y++) {
    if (betterWords[i] === betterWords[y]) {
      counter++;
      if (mostFrequent < counter) {
        mostFrequent = counter;
        wordName = betterWords[i];
      }
    }
  } counter = 0;
}
console.log('----------------------------');
console.log(`The most used word is: "${wordName}" --> (${mostFrequent} times) `) ;




















