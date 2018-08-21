console.log("hai");
var app = {
  title: "Hello",
  subtitle: "React"
};
var template = (
  <div>
    <h1>Title:{app.title}</h1>
    <p>subtitle:{app.subtitle}!!</p>
    <ol>
      <li>Redux</li>
      <li>Native</li>
    </ol>
  </div>
);

var template2 = (
  <div>
    <h1>Chandana</h1>
    <p>Age:23</p>
    <h2>Location:Nanjangud</h2>
  </div>
);
var root = document.getElementById("app");
ReactDOM.render(template, root);
