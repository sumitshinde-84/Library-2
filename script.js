let myLibrary=[];
let addBtn = document.querySelector('.addbtn')
let form = document.querySelector('form')
let content = document.querySelector('.content')
let title = document.querySelector('#bookTitle')
let author = document.querySelector('#bookAuthor')
let pages = document.querySelector('#bookPages')
let checkboxText = document.querySelector("#Status");

let checkbox = document.querySelector('.checkbox-main');   




checkbox.addEventListener('click',(event)=>{
    if(checkbox.value=='Read'){
        checkbox.value='Not Read';

    }else{
        checkbox.value='Read';
    }   
})
checkbox.addEventListener('click',()=>{
    checkboxText.textContent=`${checkbox.value}`
})

let div;
let newBook ;
i=0;




function book(title,author,pages,status){
    this.title = title;
    this.author = author
    this.pages= pages;
    this.status= status;

    
}


addBtn.addEventListener('click',(e)=>{
    
    form.style='scale:1;transform: rotate(360deg);'
    

})

            
let add = document.querySelector('.form-add');
add.addEventListener('click',()=>{
    
    form.style='scale:0;transform: rotate(-360deg);'

    newBook = new book(title.value,author.value,pages.value,checkbox.value)
    let bookTitle = document.createElement('p')
    let bookAuthor = document.createElement('p')
    let bookPages = document.createElement('p')
    let bookStatus = document.createElement('p')
    bookStatus.className='status'
    let container = document.createElement('div')
    let removeBtn = document.createElement('img')
    
    container.className='container';
    const switchForBook = document.createElement('label')
    switchForBook.className='switch'
    const inputCheckbox = document.createElement('input')
    
    inputCheckbox.setAttribute('type','checkbox')
    inputCheckbox.className='checkbox'
    inputCheckbox.classList.add(`checkbox${i}`)
    
 
    if(newBook.status=='Read'){
        inputCheckbox.setAttribute('checked','')
    }else{
        inputCheckbox.removeAttribute('checked')
    }
    
        
  
    console.log(checkbox.value)
    circle = document.createElement('div')
   
    inputCheckbox.setAttribute('onclick',`checkStatus(${i})`)
    container.appendChild(switchForBook)
    switchForBook.appendChild(inputCheckbox)
    switchForBook.appendChild(circle)


    
   console.log(newBook.status)
    
    bookTitle.textContent=`Title : ${newBook.title}`;
    bookAuthor.textContent=`Author : ${newBook.author}`;
    bookPages.textContent=`Pages : ${newBook.pages}`
    bookStatus.textContent=`Status : ${newBook.status}`

    div=document.createElement('div')
    div.setAttribute('class',`book book${i}`)
    div.dataset.index = `${i}`
    removeBtn.setAttribute('onClick',`remove(${i})`)
    removeBtn.setAttribute('src','images/remove.png')
    content.appendChild(div)
    
    div = document.querySelector(`.book${i}`)
    div.appendChild(removeBtn)
    div.appendChild(bookTitle)
    div.appendChild(bookAuthor)
    div.appendChild(bookPages)
    div.appendChild(bookStatus)
    div.appendChild(switchForBook)
    
    
    
    myLibrary.push(newBook)
    i++;
    checkbox.value='Not Read'
})






function remove(i){

  delete myLibrary[i]
  
    content = document.querySelector('.content')
    div = content.querySelector(`.book${i}`)
;
    content.removeChild(div)
    console.log(myLibrary)

}


function checkStatus(i){
    content = document.querySelector('.content')
    div = content.querySelector(`.book${i}`)
    para = div.querySelector('.status')
   input =  div.querySelector(`.checkbox${i}`);

    if(myLibrary[i].status=='Read'){
        myLibrary[i].status = 'Not Read'
        input.value='Not Read'
        para.textContent=`Status :${myLibrary[i].status}`
    }else{
        myLibrary[i].status = 'Read'
        input.value='Read'
        para.textContent=`Status :${myLibrary[i].status}`
    }


    
console.log(myLibrary)

}
console.log(myLibrary)
