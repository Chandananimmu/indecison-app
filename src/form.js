console.log("hai react");
var user = {
  subtitle: "Redux",
  options: []
};
//if
const FormOnSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    user.options.push(option);
    e.target.elements.option.value = "";
  }
  rerender();
};
const Remove = () => {
  // e.preventDefault();
  if (user.options.length > 0) {
    //user.options.map(option => {
    user.options = [];
  }
  rerender();
};
const Show = () => {
  const number = Math.floor(Math.random() * user.options.length);
  alert(user.options[number]);
};
function options1(options2) {
  if (options2.length > 0) {
    return <p> Here are the options:</p>;
  } else {
    return <p>No options</p>;
  }
}
//ternary and &&
const rerender = () => {
  var template = (
    <div>
      <p>Subtitle:{user.subtitle ? user.subtitle : "unknown"}</p>
      {user.subtitle && <p>{user.subtitle}</p>}
      {options1(user.options)}
      <p>{user.options.length}</p>
      <button onClick={Remove}>Remove</button>
      <button disabled={user.options.length == 0} onClick={Show}>
        random option
      </button>
      <form onSubmit={FormOnSubmit}>
        <input type="text" name="option" />
        <button> Add</button>
      </form>
      <ol>
        {user.options.map(option => {
          return <li key={option}>{option}</li>;
        })}
      </ol>
    </div>
  );
  var root = document.getElementById("app");
  ReactDOM.render(template, app);
};
rerender();
