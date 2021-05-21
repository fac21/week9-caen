import Layout from "../components/layout";

export default function Basket() {
  let currentCookies = document.cookie;
  return (
    <Layout>
      <div>
        <h1>Basket Items</h1>
        {/* <p>{createCheeses(currentCookies)}</p> */}
        <p> {currentCookies} </p>
      </div>
    </Layout>
  );
}

// function createCheese(item) {
//   return (
//     <div>
//       {item[0]}
//       Quantity: {item[1]}
//     </div>
//   );
// }

// function createCheeses(object) {
//   let cheeseArray = Object.entries(object);
//   return cheeseArray.forEach((cheese) => {
//     return createCheese(cheese);
//   });
// }
