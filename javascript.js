const btn = document.getElementById('btn');

async function randomApi() {
    const response = await fetch ('https://randomuser.me/api/?results=5')
    const data =await  response.json();

   data.results.forEach((user, index) => {

    document.getElementById('photo').src = user.picture.large;
    document.getElementById('name').innerHTML=`${user.name.first} ${user.name.last}`
    document.getElementById('gender').innerHTML=`${user.gender}`
    document.getElementById('mail').innerHTML=`${user.email}`   
});
}
randomApi();

btn.addEventListener('click', ()=> {
    randomApi()
})

