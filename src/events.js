let count = 0;
const addOne = () => {
  console.log("addOne");
  count++;
  RerenderApp();
};
const minusOne = () => {
  console.log("minusOne");
  count--;
  RerenderApp();
};
// const reset=()=>{
//   console.log("reset");
// }
const RerenderApp = () => {
  const template = (
    <div>
      <h1>count:{count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button
        onClick={() => {
          console.log("reset");
          count = 0;
          RerenderApp();
        }}
      >
        reset
      </button>
    </div>
  );
  const root = document.getElementById("app");
  ReactDOM.render(template, root);
};
RerenderApp();
