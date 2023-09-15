
//Abdul khan//
let randomJoke = document.getElementById("joke");
let btn = document.getElementById("btn");

let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
    randomJoke.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        randomJoke.textContent = `${item.joke}`;
        randomJoke.classList.add("fade");
    //     .catch(e)()=>{
    //         console.log("not a joke");
    //     }
     });
}
btn.addEventListener("click",()=>{
    
getJoke();

});