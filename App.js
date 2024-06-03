const heading=React.createElement("h1",{id:"heading"},"Hello World! using React");
const parent=React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},[React.createElement("h1",{},"I'm a h1 tag"),React.createElement("h2",{},"I'm a h2 tag")]),React.createElement("div",{id:"child"},[React.createElement("h1",{},"I'm a h1 tag"),React.createElement("h2",{},"I'm a h2 tag")])]);
const abc=ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
abc.render(parent);