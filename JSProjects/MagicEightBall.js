let userName = '';
switch (userName) {
  case userName :
    console.log(`Hello ${userName}!`);
  break;
  default:
    console.log(`Hello!`);
  break;
  }

  let userQuestion = '';
  console.log(`Estas seguro ${userName} de que quieres saber la respuesta a esta pregunta.. ${userQuestion}. `)

  let randomNumber = Math.floor(Math.random() * 10);

  let eightBall = '';

  switch (randomNumber) {
    case 0 : 
     eightBall = ('It is certain');
    break;
    case 1 : 
     eightBall = ('It is decidedly so');
    break;
    case 2 : 
     eightBall = ('Reply hazy try again');
    break;
    case 3 : 
     eightBall = ('Cannot predict now');
    break;
    case 4 : 
     eightBall = ('Do not count on it');
    break;
    case 5 : 
     eightBall = ('My sources say no');
    break;
    case 6 : 
     eightBall = ('Outlook not so good');
    break;
    case 7 : 
     eightBall = ('Signs point to yes');
    break;
    default:
     eightBall = ('Todo va a estar bien')
  }

  console.log(eightBall);
