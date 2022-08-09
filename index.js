


const refs = {
    getBtn: document.querySelector(".get"),
    form: document.querySelector(".form"),
    formUpd: document.querySelector(".formUpd"),
    inputTitle: document.querySelector(".title"),
    inputText: document.querySelector(".text"),
    btnSubmit: document.querySelector(".submit"),
     inputTitleUpd: document.querySelector(".titleUpd"),
    inputTextUpd: document.querySelector(".textUpd"),
    btnSubmitUpd: document.querySelector(".submitUpd"),
    btnDelete: document.querySelector(".delete")
};

refs.form.addEventListener("submit", createPost);
refs.formUpd.addEventListener("submit", updPost);
refs.btnDelete.addEventListener("click", deletePost)
 refs.getBtn.addEventListener("click", getPosts)

// function getPosts() {
//    return fetch('https://jsonplaceholder.typicode.com/posts')
     
// };

// getPosts().then(response => response.json())
//         .then(data => console.log(data))
//     .catch (error => console.log(error));

// refs.getBtn.addEventListener("click", getPosts)

// function createPost(e) {
//     e.preventDefault();
//     const title = refs.inputTitle.value;
//     const text = refs.inputText.value;

//     return fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: "POST",
//         body: JSON.stringify({ title: title, body:text }),
//          headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
//     })
// };

// createPost().then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// function updPost(e) {
//      e.preventDefault();
//     const title = refs.inputTitleUpd.value;
//     const text = refs.inputTextUpd.value;

//    return fetch('https://jsonplaceholder.typicode.com/posts/10', {
//         method: "PATCH",
//         body: JSON.stringify({ title: title, body:text }),
//          headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
//     })
// };

// delPost().then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// function deletePost() {
//    return fetch(`https://jsonplaceholder.typicode.com/posts/10`, {
//         method: "DELETE"
//     })
// };

// delPost().then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

    //////////////////////////////with async///////////////////////////////////
// function getPosts() {
//    return fetch('https://jsonplaceholder.typicode.com/posts')
     
// };

// getPosts().then(response => response.json())
//         .then(data => console.log(data))
//     .catch (error => console.log(error));
////////////////////////////////////////////////=//////////////////
// async function getPosts() {
//     try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//     console.log(data)
//     return data;   
//     } catch (error) {
//         console.log(error)
//     }               
// }          // за пределами ф-ии исп getPosts().then()

///////////////////////////////////////////////////////=/////////////////////////////
// function createPost(e) {
//     e.preventDefault();
//     const title = refs.inputTitle.value;
//     const text = refs.inputText.value;

//     return fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: "POST",
//         body: JSON.stringify({ title: title, body:text }),
//          headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
//     })
// };

// createPost().then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
////////////////////////////////////////////////////////=///////////////////////////////////////////
// async function createPost(e) {
//       e.preventDefault();
//     const title = refs.inputTitle.value;
//     const text = refs.inputText.value;
    
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts', {method: "POST",
//         body: JSON.stringify({ title: title, body:text }),
//          headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },

//     })
//     const data = await response.json();
//     console.log(data);
//     return data
//     } catch (error) {
//         console.log(error)
//     }
// }
////////////////////////////////////////////////////////=////////////////////////////////
// function updPost(e) {
//      e.preventDefault();
//     const title = refs.inputTitleUpd.value;
//     const text = refs.inputTextUpd.value;

//    return fetch('https://jsonplaceholder.typicode.com/posts/10', {
//         method: "PATCH",
//         body: JSON.stringify({ title: title, body:text }),
//          headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
//     })
// };

// delPost().then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
////////////////////////////////////////////////////////=///////////////////////////
// async function updPost(e) {
//          e.preventDefault();
//     const title = refs.inputTitleUpd.value;
//     const text = refs.inputTextUpd.value;

//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/10', {
//         method: "PATCH",
//         body: JSON.stringify({ title: title, body:text }),
//          headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
//     })
//         const data = await response.json();
//         console.log(data);
//         return data
//     } catch (error) {
//         console.log(error)
//     }

// }
//////////////////////////////////////////////////=/////////////////////////////////
// function deletePost() {
//    return fetch(`https://jsonplaceholder.typicode.com/posts/10`, {
//         method: "DELETE"
//     })
// };

// delPost().then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
/////////////////////////////////////////////=////////////////
async function deletePost() {
    
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/10`, {
        method: "DELETE"
    })
    const data = await response.json()
    console.log(data)
    return data
    } catch (error) {
        console.log(error)
    }
};


////////////////////////////////with axios//////////////////////////


// async function getPosts() {
//     try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//     console.log(data)
//     return data;
//     } catch (error) {
//         console.log(error)
//     }
// }

////////////////////////////////////////////////////=//////////////////////////


async function getPosts() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(response)
        return response
    } catch (error) {
        console.log(error)
    }

}
/////////////////////=//////////////////////
// async function createPost(e) {
//       e.preventDefault();
//     const title = refs.inputTitle.value;
//     const text = refs.inputText.value;
    
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts', {method: "POST",
//         body: JSON.stringify({ title: title, body:text }),
//          headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },

//     })
//     const data = await response.json();
//     console.log(data);
//     return data
//     } catch (error) {
//         console.log(error)
//     }
// }


async function createPost(e) {
       e.preventDefault();
    const title = refs.inputTitle.value;
    const text = refs.inputText.value;
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts',
            { title: title, body: text }, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
        },)
        console.log(response)
        return response
    } catch (error) {
        
    }
};

async function updPost(e) {
    e.preventDefault();
    const title = refs.inputTitleUpd.value;
    const text = refs.inputTextUpd.value;
try {
    const response = await axios.patch('https://jsonplaceholder.typicode.com/posts/20', { title, body:text })
    console.log(response.data)
    return response
} catch (error) {
    console.log(error)
}
}
