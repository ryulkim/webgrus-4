//리액트가 빠른 이유: virtual DOM, virtual이라서 존재하지가 않음. 소스코드에서는 빈 index.html을 가져오고 그 다음에 html을 root있는 곳에 넣는다.
//component: html을 반환하는 함수
//react는 component를 사용해서 html처럼 작성하려는 경우에 필요하다. javascript와 html사이의 이러한 조합을 jsx라고 부른다.
//jsc: html+javascript
/*function Food(props) {
  console.log(props);
  console.log(props.fav);
  return <h3>I like potato</h3>;
}*/
function Food({ fav, picture }) {
  //object 내부의 property를 받는 방법
  return (
    <div>
      <h3>I like {fav}</h3>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
  },
  {
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
  },
  {
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
  },
  {
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
  },
  {
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
  },
];

function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      {/*<Food
        fav="kimchi"
        something={true}
        papapapa={["hello", 1, 3, 1.22, true]}
      />*/}
      {/*prop(property)를 fav를 만들고 kimchi라고 넣어줬다 */}

      {foodILike.map((dish) => (
        <Food fav={dish.name} picture={dish.image} />
      ))}
      {/*{foodILike.map(function (dish) {
        return <Food fav={dish.name} />;
      })}과 같다*/}

      {/*<Food fav="ramen" />
      <Food fav="kimbab" />
    <Food fav="ansim" />*/}
    </div>
  );
}

export default App;
