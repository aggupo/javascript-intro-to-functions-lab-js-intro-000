function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  switch (string) {
    case string == "I love you, Grandma.":
      return "I love you, too.";
      break;
    case string == string.toLowerCase():
      return "I can\'t hear you!";
      break;
    case string == string.toUpperCase():
      return "YES INDEED!";
      break;
  }
}
