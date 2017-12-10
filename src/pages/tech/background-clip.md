---
title: background-clip에 대하여 
layout: post
menu: /tech
path: "/tech/background-clip에-대하여"
category: "CSS"
date: "2017-12-30"
---
background-clip은 element의 background의 색 혹은 이미지가 element 내에서 border를 기준으로 어디까지 확장될지를 지정한다. 

기본값은 border-box이며, 이는 border 영역 밑에까지 확장된다는 뜻이다. 그 밖에 줄 수 있는 값은 padding-box, content-box, 그리고 text가 있다. 다음 codepen을 통해 각각의 값에 따른 효과를 확인할 수 있다.

<iframe height='400' scrolling='no' title='[basic] background-clip' src='//codepen.io/syahn/embed/NwoBMN/?height=265&theme-id=dark&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/syahn/pen/NwoBMN/'>[basic] background-clip</a> by Frank Ahn (<a href='https://codepen.io/syahn'>@syahn</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

