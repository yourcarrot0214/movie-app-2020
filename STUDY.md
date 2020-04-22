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

# 2. JSX & Props

## 2.0 Creating your first React Component

- Component(`<App />`)는 HTML을 반환하는 함수이다.
- React는 Component를 가져와서 Broswer가 이해할 수 있는 HTML로 만들어 준다.
- React application은 한 번에 하나의 component만 rendering 할 수 있다.
  ```
  ReactDOM.render(<App />, document.getElementById("root));
  ```

## 2.1 Reusable Components with JSX + Props

- component에 정보를 보낼 수 있다.
- 재사용 가능한 component를 만들 수 있다.

## 2.2 Dynamic Component Generation

# 3. State

## 3.0 Class Components & State

- 동적 데이터와 함께 작업할 때 생성.
- react는 자동적으로 모든 class component의 render method를 실행한다.
- class에 있는 state는 객체이고 데이터를 저장하며 그 값을 동적으로 변경할 수 있다.

## 3.1 All you need to know about State

- Do not mutate state directily.
- 직접 state를 변경하지 마시오. => setState를 통한 변경.
- setState를 호출할 때 마다 react는 새로운 state와 함께 render function을 호출

## 3.2 Component Life Cycle

- react component에서 사용하는 유일한 function은 render function
- Life Cycle Method : Mounting / Updating / UnMounting

## 3.3 Planning the Movie Component

# 4. Making the Movie App

## 4.0 Fetching Movies from API

- npm i axios 설치
- import axios from "axios";
- API 데이터 통신을 비동기 처리
  ```
  getMovies = async () => {
      const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
  }
  ```

## 4.1 Rendering the Movies

- axios로 가져온 api 데이터를 state에 저장.
- Movie.js에서 PropTypes를 통해 사용할 데이터 인자들의 default값을 세팅.
  ```
  Movies.propTypes = {
      id: PropTypes.number,isRequired,
      year: PropTypes.number,isRequired,
      title: PropTypes.string,isRequired,
      summary: PropTypes.string,isRequired,
      poster: PropTypes.string,isRequired,
  }
  ```
- proptypes에 저장된 정보들은 render시 정확한 데이터 타입의 정보가 인수로 활용되었는지를 확인한 후 error 메시지를 console창에 별도로 표시해준다.
- App.js에서 Movie.js를 import하고, Array.map() 메서드를 활용하여 api 정보들을 매칭시킨 후 render한다.
