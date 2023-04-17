let input = document.querySelector(".input")
let submit = document.querySelector("button")
let result = document.querySelector(".result")
let img = document.querySelector("img")




submit.onclick = function(){
  let subject = input.value 
  console.log(subject)
img.style.display = "block"

if (subject == "Math"||subject == "math"){
  result.innerHTML = "You are one psychotic fellow"
}

else if (subject == "English"||subject == "english" ){
  result.innerHTML = "Hope you become a author"
}
else if (subject == "Science"||subject == "science"){
  result.innerHTML = "make me some minecraft potioms"
}
else{
  result.innerHTML = "please type a subject out of the following 3"
}
}
