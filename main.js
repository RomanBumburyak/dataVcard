let data = {
  "login": "octocat",
  "id": 1,
  "avatar_url": "https://github.com/images/error/octocat_happy.gif",
  "gravatar_id": "",
  "url": "https://api.github.com/users/octocat",
  "html_url": "https://github.com/octocat",
  "followers_url": "https://api.github.com/users/octocat/followers",
  "following_url": "https://api.github.com/users/octocat/following{/other_user}",
  "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
  "organizations_url": "https://api.github.com/users/octocat/orgs",
  "repos_url": "https://api.github.com/users/octocat/repos",
  "events_url": "https://api.github.com/users/octocat/events{/privacy}",
  "received_events_url": "https://api.github.com/users/octocat/received_events",
  "type": "User",
  "site_admin": false,
  "name": "monalisa octocat",
  "company": "GitHub",
  "blog": "https://github.com/blog",
  "location": "San Francisco",
  "email": "octocat@github.com",
  "hireable": false,
  "bio": "There once was...",
  "public_repos": 2,
  "public_gists": 1,
  "followers": 20,
  "following": 0,
  "created_at": "2008-01-14T04:33:35Z",
  "updated_at": "2008-01-14T04:33:35Z"
}








let request = new XMLHttpRequest();
request.addEventListener("load", updateCard);
request.open('GET', 'https://api.github.com/users/romanbumburyak');
request.send();

// Our display function
function updateCard () {
  // Parse our response text
  let data = JSON.parse(this.responseText);
  console.log("this is running");
  let name = data.name;
  let gitHubUrl = data.url;
  let email = data.email;
  let company = data.company;
  let website = data.html_url;
}




document.querySelector(".something").innerHTML= `${data.name}`;





// // COPIED FROM HW
// function reqListener () {
//   let data = JSON.parse(this.responseText);
//   console.log(octocat);
//
// }
//
// let req = new XMLHttpRequest();
// req.open("GET", "https://api.github.com/users/tj");
// req.addEventListener("load", reqListener);
// req.send();
// // COPIED FROM HW
