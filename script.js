const title = document.getElementById("title");

const firstParagraph = document.querySelector(".text");

const allParagraphs = document.querySelectorAll(".text");



title.textContent = "Updated DOM Assignment";



document.getElementById("content").innerHTML =
"<h3>Hello JavaScript DOM</h3>";



title.style.color = "red";
title.style.fontSize = "40px";



const newItem = document.createElement("li");

newItem.textContent = "New Item Added";

document.getElementById("list").appendChild(newItem);



document.getElementById("removeMe").remove();




document.getElementById("btn")
.addEventListener("click", () => {
    alert("Button Clicked!");
});



document.getElementById("nameInput")
.addEventListener("input", (e) => {
    console.log("Input:", e.target.value);
});



document.getElementById("myForm")
.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
});



setTimeout(() => {
    console.log("Hello World");
}, 3000);




setInterval(() => {
    const now = new Date();

    document.getElementById("clock").innerText =
    now.toLocaleTimeString();
}, 1000);




function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Amit", sayBye);




const myPromise = new Promise((resolve, reject) => {

    let success = true;

    setTimeout(() => {

        if(success){
            resolve("Promise Resolved Successfully");
        } else {
            reject("Promise Rejected");
        }

    }, 2000);

});

myPromise
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
});




async function getData() {

    try {
        const data = await myPromise;
        console.log(data);
    }
    catch(error){
        console.log(error);
    }

}

getData();