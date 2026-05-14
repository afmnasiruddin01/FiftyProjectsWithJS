const form = document.getElementById("form")
const search = document.getElementById("search")
const main = document.getElementById("main")


const APIURL = 'https://api.github.com/users/'
async function getUser(username) {
    
    try {
        const {data} = await axios(APIURL+username)
        createUserCard(data)
        getRepos(data.login)
    } catch(err) {

        if(err.response.status ==404){
            createErrorCard('No Profile with this user name')
        }

    }

}
async function getRepos(username){
    try {
        const {data} = await axios(APIURL+username+'/repos?sort=created')
        console.log(data)
        addReposToCard(data)


    } catch(e){
            createErrorCard("Problem in fetching repos")
    }
}

function createUserCard(userData){
    const cardHTML = `
    <div class="card">
        <div>
          <img
            src=${userData.avatar_url}
            alt=""
            class="avatar"
          />
        </div>
        <div class="user-info">
          <h2>${userData.name}</h2>
          <p>
            ${userData.bio}
          </p>
          <ul>
            <li>${userData.followers} <strong>Followers</strong></li>
            <li>${userData.following} <strong>Following</strong></li>
            <li>${userData.public_repos} <strong>Repos</strong></li>
          </ul>
          <div id="repos">
            <a href="#" class="repos">Repo 1</a>
            <a href="#" class="repos">Repo 2</a>
            <a href="#" class="repos">Repo 3</a>
          </div>
        </div>
      </div>
    `
    main.innerHTML=cardHTML
}
function createErrorCard(msg){
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `
    main.innerHTML=cardHTML
}
function addReposToCard(reposData){
    const repos = document.getElementById("repos")
    const cardHTML = `
        <a href="${reposData[0].url}" class="repos">${reposData[0].name}</a>
        <a href="${reposData[1].url}" class="repos">${reposData[1].name}</a>
        <a href="${reposData[2].url}" class="repos">${reposData[2].name}</a>
        <a href="${reposData[3].url}" class="repos">${reposData[3].name}</a>
        <a href="${reposData[4].url}" class="repos">${reposData[4].name}</a>
        <a href="${reposData[5].url}" class="repos">${reposData[5].name}</a>
        <a href="${reposData[6].url}" class="repos">${reposData[6].name}</a>
        <a href="${reposData[7].url}" class="repos">${reposData[7].name}</a>
    `
    repos.innerHTML = cardHTML
}
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const user = search.value
    if(user){
        getUser(search.value)
        search.value=""
    }

})