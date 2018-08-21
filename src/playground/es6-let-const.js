console.log("hai react");
const user = {
  subtitle: "Redux",
  options: []
};
//if
function options1(options2) {
  if (options2.length > 0) {
    return <p> Here are the options:</p>;
  } else {
    return <p>s</p>;
  }
}
//ternary and &&
const template = (
  <div>
    <p>Subtitle:{user.subtitle ? user.subtitle : "unknown"}</p>
    {user.subtitle&&<p>{user.subtitle}</p>}
    {options1(user.options)}
  </div>
);
const root = document.getElementById("app");
ReactDOM.render(template, app);
