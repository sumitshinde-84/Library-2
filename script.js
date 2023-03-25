let myLibrary = [];
let div;
let newBook;
i = 0;
let addBtn = document.querySelector(".addbtn");
let form = document.querySelector("form");
let content = document.querySelector(".content");
let title = document.querySelector("#bookTitle");
let author = document.querySelector("#bookAuthor");
let pages = document.querySelector("#bookPages");
let checkboxText = document.querySelector("#Status");
let checkbox = document.querySelector(".checkbox-main");
const AllInputs = document.querySelectorAll("input");
const Status = document.querySelector("#Status");
const titleError = document.querySelector('#title-error')
const authorError = document.querySelector('#author-error')
const pagesError = document.querySelector('#pages-error')

let bookTitle, bookAuthor, bookPages, bookStatus, container, removeBtn;

form.addEventListener("submit", (event) => {
    if (!title.validity.valid || !author.validity.valid || !pages.validity.valid) {
        event.preventDefault();
        showError()
    } else {
        event.preventDefault();
        addBook(true);
    }
});

function showError() {

    if (title.validity.valueMissing) {
        titleError.textContent = 'Please provide a value for this field'
    } else if (author.validity.valueMissing) {
        authorError.textContent = 'Please provide a value for this field'
    } else if (pages.validity.valueMissing) {
        pagesError.textContent = 'Please provide a value for this field'
    } else if (pages.validity.patternMismatch) {
        pagesError.textContent = 'please enter digits only'
    }
}

title.addEventListener('input', () => {
    titleError.textContent = ''

})

author.addEventListener('input', () => {
    authorError.textContent = ''

})

pages.addEventListener('input', () => {
    pagesError.textContent = ''

})


addBtn.addEventListener("click", (e) => {
    form.style = "scale:1;transform: rotate(360deg);";
});

checkbox.addEventListener("click", (event) => {
    if (checkbox.value == "Read") {
        checkbox.value = "Not Read";
    } else {
        checkbox.value = "Read";
    }
});

checkbox.addEventListener("click", () => {
    checkboxText.textContent = `${checkbox.value}`;
});

class book {
    constructor(title, author, pages, status) {
        this.title = title;
        (this.author = author), (this.pages = pages), (this.status = status);
    }
}


function addBook(formValid) {
    if (formValid == true) {
        form.style = "scale:0;transform: rotate(-360deg);";
        newBook = new book(title.value, author.value, pages.value, checkbox.value);
        formReset();
        bookTitle = document.createElement("p");
        bookAuthor = document.createElement("p");
        bookPages = document.createElement("p");
        bookStatus = document.createElement("p");
        bookStatus.className = "status";
        container = document.createElement("div");
        removeBtn = document.createElement("img");

        container.className = "container";
        const switchForBook = document.createElement("label");
        switchForBook.className = "switch";
        const inputCheckbox = document.createElement("input");

        inputCheckbox.setAttribute("type", "checkbox");
        inputCheckbox.className = "checkbox";
        inputCheckbox.classList.add(`checkbox${i}`);
        inputCheckbox.checked = newBook.status == "Read" ? true : false;
        circle = document.createElement("div");
        inputCheckbox.setAttribute("onclick", `checkStatus(${i})`);
        container.appendChild(switchForBook);
        switchForBook.appendChild(inputCheckbox);
        switchForBook.appendChild(circle);

        bookTitle.textContent = `Title : ${newBook.title}`;
        bookAuthor.textContent = `Author : ${newBook.author}`;
        bookPages.textContent = `Pages : ${newBook.pages}`;
        bookStatus.textContent = `Status : ${newBook.status}`;

        div = document.createElement("div");
        div.setAttribute("class", `book book${i}`);
        div.dataset.index = `${i}`;
        removeBtn.setAttribute("onClick", `remove(${i})`);
        removeBtn.setAttribute("src", "images/remove.png");
        content.appendChild(div);

        div = document.querySelector(`.book${i}`);
        div.appendChild(removeBtn);
        div.appendChild(bookTitle);
        div.appendChild(bookAuthor);
        div.appendChild(bookPages);
        div.appendChild(bookStatus);
        div.appendChild(switchForBook);

        myLibrary.push(newBook);
        i++;
    }
}

function formReset() {
    console.log(myLibrary)
    AllInputs.forEach((item) => {
        item.value = "";
        checkbox.checked = false;
        checkbox.value = "Not Read";
        Status.textContent = "Not Read";
    });
}

function remove(i) {
    delete myLibrary[i];
    content = document.querySelector(".content");
    div = content.querySelector(`.book${i}`);
    content.removeChild(div);
    console.log(myLibrary);
}

function checkStatus(i) {
    console.log(myLibrary)
    content = document.querySelector(".content");
    div = content.querySelector(`.book${i}`);
    para = div.querySelector(".status");
    input = div.querySelector(`.checkbox${i}`);

    if (myLibrary[i].status == "Read") {
        myLibrary[i].status = "Not Read";
        input.value = "Not Read";
        para.textContent = `Status :${myLibrary[i].status}`;
    } else {
        myLibrary[i].status = "Read";
        input.value = "Read";
        para.textContent = `Status :${myLibrary[i].status}`;
    }

}

