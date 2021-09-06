const quotes = [    
{ quote: "수없이 잃었던 춥고 모진날 사이로 조용히 잊혀진 네 이름을 알아", title: "이름에게"},
{ quote: "누구나 조금씩은 틀려 완벽한 사람은 없어", title: "비밀의화원"},
{ quote: "이상하게도 요즘엔 그냥 쉬운게 좋아", title: "팔레트"},
{ quote: "자고 있던 나를 깨워 놓은 건 잊어버렸니 바로 너였을 텐데", title: "잠자는 숨속의 왕자"},
{ quote: "뭐해 라는 두 글자에 니가 보고싶어 나의 속마음을 담아", title: "블루밍"},
{ quote: "과거를 밟지 않고 선다면 숨이 차게 춤을 추겠어", title: "시간의 바깥"},
{ quote: "무릎을 베고 누우면 나 아주 어릴 적 그랬던 것처럼 머리칼을 넘겨줘요", title: "무릎"},
{ quote: "다만 꺼지지 않는 작은 불빛이 여기 반짝 살아있어요 ", title: "마음"},
{ quote: "이 하루 이 지금 우리 눈부셔 아름다워", title: "이지금"},
{ quote: "이 불꽃놀이는 끝나지 않을거야", title: "이지금"},
{ quote: " 흘러가는 하루 끝에서 하는 말 내가 널 사랑해", title: "하루끝"},
]

const quote = document.querySelector("#quote span:first-child");
const title = document.querySelector("#quote span:last-child");

const length = quotes.length
const todaysQuote = quotes[Math.round(Math.random()*length)];

quote.innerText = todaysQuote.quote;
title.innerText = todaysQuote.title;