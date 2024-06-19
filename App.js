const parent = React.createElement("div",
{id: "parent"},
    [React.createElement("div",{id: "child"},
    [React.createElement("h1",{},"IAm an h1 tag"),
    React.createElement("h2",{},"IAm an h2 tag")]
    )
],
    [React.createElement("div",{id: "child"},
    [React.createElement("h1",{},"IAm an h1 tag"),
    React.createElement("h2",{},"IAm an h2 tag")]
    )
    ]

);


         
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

console.log(parent);