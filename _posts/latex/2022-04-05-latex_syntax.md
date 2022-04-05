---
title: Latex 문법 정리

toc: true
toc_sticky: true
category: latex
tags: [latex, 레이텍, syntax, 문법, 정리]
---

간간히 Overleaf로 CV나 논문 쓰면서 문법 정리하는 글 <br/>
자주 사용하지는 않아 까먹을 때마다 메모중! <br/>

## 마크다운 문법

기본적으로 `$$ $$`으로 시작함 <br/>
타이포라에서는 `Ctrl+Shift+M` <br/>

<br/>

## 카테고리 없이 정리함

볼드체 : `\textbf{}` as $$\textbf{R}$$ <br/>
햇 : `\hat{}` as $$\hat{y},\hat {\textbf{X}}$$<br/>
분수 : `\frac{A}{B}` as $$\frac{A}{B}$$ <br/>
줄바꿈 : `\\`  <br/>
한 칸 여백 : `\,` <br/>
두 칸 여백 : `\;` <br/>
행렬 : 
~~~latex
$$A=\begin{bmatrix}
0 & 1 & 2\\
3 & 4 & 5\\
6 & 7 & 8
\end{bmatrix}
$$
~~~

$$A=\begin{bmatrix}
0 & 1 & 2\\
3 & 4 & 5\\
6 & 7 & 8
\end{bmatrix}
$$
수식 넘버링:
~~~latex
$$

\begin{align}
V_f=V=V_{fx}=V-fcos(\delta) \\
V_{fy}=rl=V_fsin(\delta) \\

\end{align}

$$
~~~

$$

\begin{align}
V_f=V=V_{fx}=V-fcos(\delta) \\
V_{fy}=rl=V_fsin(\delta) \\

\end{align}

$$

점3개 : `\therefore` $$\therefore$$ <br/>
점3개뒤로 : `\because` $$\because$$ <br/>