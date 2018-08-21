let text = "Show";
let text1 = " ";
const Show = () => {
  if (text == "Show") {
    text = "Hide";

    text1 = "Hai";
  } else {
    text = "Show";
    text1 = " ";
  }
  rerender();
};
const rerender = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>

      <button onClick={Show}>{text}</button>
      <p>{text1}</p>
    </div>
  );
  const root = document.getElementById("app");
  ReactDOM.render(template, root);
};
rerender();
