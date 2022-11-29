# redux-practice-TS
리덕스 연습

## 리덕스란
````
자바스크립트 애플리케이션을 위한 상태관리 라이브러리
````

### redux flow
````
Action -> reducer -> redux Store -> react component

Action: 간단한 JavaScript 객체
작업의 유형을 지정하는 type 속성이 있으며 redux저장소에 일부 데이터를 보내는데 사용되는 payload 속성을 가질수도 있다.
ex) 
{ type: 'ADD_TODO', text: 'Redux redux'}

Reducer: 애플리케이션 상태의 변경 사항을 결정하고 업데이트 된 상태를 변환하는 함수, 인수로 조치를 취하고 store 내부의 상태를 업데이트 
ex)
(previousState, action) => nextState
이전 스테이트와 액션을 받은 후에 next state을 return

Redux Store: 하나로 모으는 객체 저장소는 애플리케이션의 전체 상태 트리를 보유, 내부 상태를 변경하는 유일한 방법은 해당 상태에 대한 actionㅇㄹ 전하는하는 것 뿐이다.
!Redux Store는 클래스가 아님 몇가지 Methods가 있는 객체일뿐
````

