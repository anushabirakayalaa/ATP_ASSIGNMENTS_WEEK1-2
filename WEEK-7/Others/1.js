//User interaction
 
//handling elemnts
    //read elements
    let element=console.log(document.querySelector('h1'))
    //console.log(element)
    let btn=document.querySelector("button")
        // querySelector--->to get specific object
    //attach  thke event handler
    btn.addEventListener('click',()=>{
        element.textContent="HELLO!!"
        element.style=red
        element.style.fontSize='5rem'
    })

    //read all elemets of the form
let form = document.querySelector("form")
let usernameInput=document.querySelector("#username")
let passwordInput=document.querySelector("#password")
let submitButton=document.querySelector(".sb")

//add 
submitButton.addEventListener('click',(e)=>
{
    //stop auto page reloading
    e.preventDefault();
    //read vals of i/p elements
    let username = usernameInput.value;
    let password = passwordInput.value;
    console.log(username,password)

})

//read btn create-child
let createchild=document.querySelector(".createChild")
let parent=document.querySelector("parent")

// createChildBtn =