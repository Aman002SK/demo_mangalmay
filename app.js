let form = document.getElementById('form')
let msg = document.getElementById('msg')
let input = document.getElementById('input')
let posts = document.getElementById('posts')

// console.log(input)
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    
    if(input.value===""){
       msg.innerHTML ="Post cannot be empty"
    }
    else{
        msg.innerHTML=""
        acceptData()
    }
    
})



let data ={}

let acceptData = ()=>{
    data["text"] = input.value
    createPost()
}


let createPost = ()=>{
    posts.innerHTML += `
    <div>${data.text} <span class="options">
                <i class="fas fa-edit"></i>
                <i class="fas fa-trash-alt" onclick="deletePost(this)"></i>
              </span>
              </div> <br>`
    input.value=""
}

let deletePost = (e)=>{
e.parentElement.parentElement.remove()
}