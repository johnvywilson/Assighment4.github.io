var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function getRandomFromArray(array){
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

var storyText = 'It was 94 degrees Fahrenheit outside, so :insertx: went for a walk. When they arrived at :inserty:, they stared in horror for a few moments, then :insertz:. Bob witnessed the entire event but remained unsurprised — :insertx: weighs 300 pounds, and it was a hot day.';

var insertXOptions = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
var insertYOptions = ['the soup kitchen', 'Disneyland', 'the White House'];
var insertZOptions = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', generateResult);

function generateResult() {
    var newStory = storyText;

    var xItem = getRandomFromArray(insertXOptions);
    var yItem = getRandomFromArray(insertYOptions);
    var zItem = getRandomFromArray(insertZOptions);

    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

    if (customName.value !== '') {
        var name = customName.value;
        newStory = newStory.replace('Bob', name);
    }

    if (document.getElementById("uk").checked) {
        var weight = Math.round(21) + ' stone';
        var temperature = Math.round(34) + ' degrees Celsius';
        newStory = newStory.replace('300 pounds', weight);
        newStory = newStory.replace('94 degrees Fahrenheit', temperature);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}
