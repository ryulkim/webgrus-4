//리액트가 빠른 이유: virtual DOM, virtual이라서 존재하지가 않음. 소스코드에서는 빈 index.html을 가져오고 그 다음에 html을 root있는 곳에 넣는다.
//component: html을 반환하는 함수
//react는 component를 사용해서 html처럼 작성하려는 경우에 필요하다. javascript와 html사이의 이러한 조합을 jsx라고 부른다.
import Potato from "./potato";
function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      <Potato />
    </div>
  );
}

export default App;
