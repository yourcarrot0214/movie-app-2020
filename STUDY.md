## 1.1 Creating a Github Repository

- git remote origin (git 저장소 주소)

  현재 작업 영역을 github repository에 연결

- git add .

  현재 작업 영역에 생성된 모든 파일을 선택

- git commit -m "커밋 메시지"

  작업 내용을 정리하여 커밋

- git push origin master

  add된 파일들을 저장소로 push

## 1.2 How does React work?

<!-- 아래의 내용은 추가적으로 공부하고 수정하고 난 뒤 push -->

리액트의 동작 원리에 대해 설명한다.
vitual DOM을 HTML에 추가/제거한다.

## 2.0 Creating your first React Component

- Component(`<App />`)는 HTML을 반환하는 함수이다.
- React는 Component를 가져와서 Broswer가 이해할 수 있는 HTML로 만들어 준다.
- React application은 한 번에 하나의 component만 rendering 할 수 있다.
  ```
  ReactDOM.render(<App />, document.getElementById("root));
  ```
