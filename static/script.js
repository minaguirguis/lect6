window.onload = () => { // onload makes sure the content is loaded on page first
    document.getElementById('myCoolButton').addEventListener('click', () => {
        // Everything you want to do when button is clicked below
        console.log('Button was clicked!'); // console.log is like printing in JS!
    });
};

var input= "";

function searchArticle() {
    var input = document.getElementById("search").value;
    
    const url = '/search/' + input; // This should remind you of APIs in Python!
window.fetch(url).then(response => response.json()) // So should JSON conversion!
    .then(data => { // .then will only run the function *once* the data is fetched from the internet
        // console.log(data);
        // console.log(data["headlines"]);
        
        for(var i = 0; i < 10; i++){
            var node = document.createElement("div");
            var textNode = document.createTextNode(data["headlines"][i]);
            node.appendChild(textNode);
            document.getElementById("headlines").appendChild(node)
        }
    });
}



