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

### combineReducers
```
여러개의 리듀서를 사용하기를 원할때 사용하는것
root 리듀서를 만들어서 그아래 서브 리듀서를 넣어주면 된다
ex)
const rootReducer  = combineReducers({
    todos,
    counter,
    post
})
```

### Provider란
```
Redux Store 저장소에 액세스 해야 하는 모든 중첩 구성 요소에서 redux Store 저장소를 사용할수 있도록 하는것
React Redux 앱의 모든 React 구성요소는 저장소에 연결 할수 있으므로 대부분의 응용 프로그램은 구성 요소 트리가 내부에 있는 최상위 수준에서 Provider를 렌더링함
Hooks 및 연결 API는 React의 컨텍스트 메커니즘을 통해 제공된 저장소 인스턴스에 액세스가 가능

useSelector
useSelector Hooks를 이용해서 스토어의 값을 가져올수 있음

useDispatch
store에 있는 dispatch 함수에 접근 하는 hooks
```

### 리덕스 미들웨어란
```
Redux 미들웨어는 액션을 dispatch 전달하고 리듀서에 도달하는 순간 사이에 사전에 지정된 작업을 실행할수 있게 해주는 중간자
로깅, 충돌보고, 비동기 API, 통신, 라우팅등을 위해 사용

리덕스 로깅 미들웨어 생성
const loggerMiddleWare = (store) => (next) => (action) => {
    // code
}

const loggerMiddleWare = function (store) {
    return function (next) {
        return function (action) {
            // code 
            // 위 함수를 풀어서 표현한것
            // 같은 함수
        } 
    }
}
```

### 리덕스 Thunk란
```
리덕스를 사용하는 앱에서 비동기 작업을 할때 많이 사용하는 방법

Thunk용어
일부 지연된 작업을 수행하는 코드조각을 의미 하는 프로그래밍 용어

```

### 리덕스 toolkit
```
리덕스 툴킷은 리덕스 로직을 작성하기 위한 공식 권장 접근 방식
리덕스 코어를 둘러싸고 있으며 리덕스 앱을 빌드하는데 필수적이라고 생각하는 패키지와 기능을 포함
리덕스 툴킷은 제안된 모범 사례를 기반으로 하여 대부분의 리덕스 작업을 단순화 하고 일반적인 실수를 방지하고 리덕스 애플리케이션을 더 쉽게 작성할수 있도록 해줌
```


