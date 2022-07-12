// Adding time
let d = new Date();

let date = d.getDate();


let timeDiv = document.getElementById("time");
timeDiv.style.textAlign = "center";
timeDiv.style.marginTop = "10px";
timeDiv.innerHTML = `${d.toLocaleTimeString()} - ${d.toLocaleDateString()}`
let hour = d.getHours();
const greeting = (namee) => {
  if (hour < 12) {
    fill.innerText = `Morning, ${namee}`;
  } else if (hour >= 12 && hour < 16) {
    fill.innerText = `Afternoon, ${namee}`;
  } else if (hour >= 16 && hour < 20) {
    fill.innerText = `Evening, ${namee}`;
  } else {
    fill.innerText = `Night, ${namee}`;
  }
};

let change_username = document.querySelector(".change_username");
let link_add = document.querySelector(".link_add");
let links_div = document.querySelector(".links");

fill = document.getElementById("fill");
let namee = "";

if (localStorage.getItem("name") === null) {
  localStorage.setItem("name", namee);
}



namee = localStorage.getItem("name");

namee = namee ? namee : "User";

greeting(namee);

let form = document.getElementById("form");
let link_name = document.getElementById("name");
let link = document.getElementById("link");
let img_link = document.getElementById("img_link");

let data = [];

if (!localStorage.getItem("links")) {
  localStorage.setItem("links", data);
}

else{
  data = localStorage.getItem("links");
  if (data.length>1) {
    data = JSON.parse(localStorage.getItem("links"));
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let link_name = document.getElementById("name").value;
  let link = document.getElementById("link").value;
  let img_link = document.getElementById("img_link").value;
  let dataObj = { link_name, link, img_link };
  data.push(dataObj);
  localStorage.setItem("links", JSON.stringify(data));
  form.reset();
});

change_username.addEventListener("click", () => {
  username = prompt("Enter your name : ");
  username = username ? username : "User";
  localStorage.setItem("name", username);
  greeting(username);
});

form.style.display = "none";
link_add.addEventListener("click", () => {
  form.classList.toggle("visible");
  if (form.style.display === "none") {
    form.style.display = "flex"
  }
  else{
    form.style.display = "none"
  }
});


let info = localStorage.getItem("links");
if (info.length>1) {
  info = JSON.parse(localStorage.getItem("links"));
}


if (info.length>0) {
  info.forEach((item) => {
    links_div.innerHTML += `
    <a href="${item.link}" rel="noopener noreferrer">
      <div class="box ${item.link_name}">
        <img src="${item.img_link}" alt=${item.link_name} title=${item.link_name} height="40" />
      </div>
    </a>`;
  });
  
}


let yt_search = document.querySelector("#yt-search");
yt_search.addEventListener("keydown",(e)=>{
  if(e.key === "Enter"){
    location.href = `https://www.youtube.com/results?search_query=${yt_search.value}`;
    yt_search.value = "";
  }
})




const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let day = weekday[d.getDay()];

if(day === "Tuesday" || day === "Thursday"){
  timeDiv.innerHTML = `${d.toLocaleTimeString()} - ${d.toLocaleDateString()} | ${day} 🍗❌`;
}


setInterval(() => {
  let dt = new Date();
  let timeDiv = document.getElementById("time");
  timeDiv.style.textAlign = "center";
  timeDiv.style.marginTop = "10px";
  if(day === "Tuesday" || day === "Thursday"){
    timeDiv.innerHTML = `${dt.toLocaleTimeString()} - ${dt.toLocaleDateString()} | ${day} 🍗❌`;
  }else{
    timeDiv.innerHTML = `${dt.toLocaleTimeString()} - ${dt.toLocaleDateString()}`;
  }
}, 1000);








