---
layout: post
menu: /tech
path: /tech/parallelograms
title: Parallelograms - 평행사변형 구현
category: css
date: 2017-12-11T11:32:37.617Z
---

**이 글은 CSS SECRET (by Lea Verou)에서 해당 부분을 정리한 것이다.*

<br />
CSS SECRETS에서 CSS로 Pararellogram(평행사변형)을 만드는 방법을 배웠다. 

만드는 방법은 크게 2가지이다. 

1. Nested element를 사용하는 방법

2. Pseudo-element solution를 사용하는 방법

   ​

## 0. Demo code

<p data-height="339" data-theme-id="dark" data-slug-hash="rYgqGo" data-default-tab="css,result" data-user="syahn" data-embed-version="2" data-pen-title="Parallelograms" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/syahn/pen/rYgqGo/">Parallelograms</a> by Frank Ahn (<a href="https://codepen.io/syahn">@syahn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>


<br />

## 1. Nested Element를 사용하는 방법

#### <기본 아이디어>

1. `transform`을 이용해 parent에 기울기를 준다.
2. child의 `content`는 parent의 반대되는 기울기를 준다.



먼저 shape은 직사각형 모양의 element에 `transform`의 `skewX` 속성을 통해 기울기를 주어 만든다.

```css
.button {
  transform: skewX(-45deg);
  /* text color, padding*/
}
```

하지만, 이 방법은 자식 content까지 기울어지기에 child content에 parent의 기울기 반대 방향으로 같은 크기의 기울기를 주어야 한다.

```css
.button {
  transform: skewX(-45deg);
}

.button > div {
  transform: skewX(45deg);
}
```

따라서 `div`와 같이 별도의 element를 추가해야 하는 단점이 있다.



<br />

## 2. Pseudo-element를 사용하는 방법

#### < 기본 아이디어 >

1. pseudo-element를 통해 빈 box를 만든다.
   - 여기서는 `::before`에 `content: '';`를 준다.
2. 이를 parent의 크기나 위치에 따라 위치시킨다.
   - parent에 `position: relative;`를, child에 `postion: absolute;`를 준다.
3. parent의 `background`를 투명으로 주고, 박스를 포함한 child는 `z-index`를 통해 부모 아래에 위치시킨다.
4. child의 box에 원하는 transformation를 적용한다.

이 방법은 평행사변형뿐만 아니라, 다양한 케이스에 사용될 수 있다. 

앞으로 하나씩 알아가볼 것이다.


<br />

## Reference

- CSS Secret - Lea Verou
