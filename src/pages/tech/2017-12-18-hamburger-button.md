---
layout: post
menu: /tech
path: tech/hamburger-button
title: Hamburger button
category: CSS
date: 2017-12-18T12:56:33.655Z
---
처음으로 햄버거 버튼을 만들어 보았다.

클릭을 통해 class name을 toggle하는 방식이다. 일단 transition에 0.3초의 딜레이와 timing function으로 ease-out을 준다. 그리고는 transform 속성의 rotate 함수로 첫번째, 세번째 div를 각각 45도 방향으로 엇갈리게 회전시키는데, rotate은 기본적으로 중앙을 기준으로 회전하는데, 이를 transform-origin에 left 값을 줌으로써 각각 왼쪽 끝을 기준으로 회전할 수 있게 된다. 그리고 중앙에 있는 div같은 경우, opacity를 0으로 줌으로써 사라지게 하는데 이 때 width를 0%으로 줌으로써 좀 더 자연스러운 애니메이션을 이끌어낼 수 있다. 

transition timing function에 어떤 값을 주느냐에 따라 애니메이션에 미묘한 맛이 달라지는 것을 느꼈는데, 어떤게 더 나은 것인지 감이 오지 않는다. 전체적으로 아직 부족한 부분이 있는 것같은데 그게 무엇인지 콕 찝어서 말을 못하겠다. 아직 경험이 많이 부족한 것같다. 부지런히 만들어봐야겠다.

<iframe height='188' scrolling='no' title='Animated Hamburger' src='//codepen.io/syahn/embed/MrKENg/?height=178&theme-id=dark&default-tab=result,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen Animated Hamburger by Frank Ahn (@syahn) on CodePen.

</iframe>



Reference

- Menu "Hamburger" Icon Animations by Jesse Couch
  - https://codepen.io/designcouch/pen/Atyop
- Create an Animated Hamburger using HTML5 and CSS3 by Akash Gutha
  - https://egghead.io/lessons/css-create-an-animated-hamburger-using-html5-and-css3
