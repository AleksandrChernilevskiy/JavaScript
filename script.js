let body = document.body;
let urlUser = window.location.toString();

const getNameFromUrl = (urlUser) => {
  let getUrl = urlUser.split('=');
  let name = getUrl[1];
  if(name == undefined) {
	  name = 'AzezAeksandrChernilevskiy';
  }
  return name;
}

fetch(`https://api.github.com/users/${getNameFromUrl(urlUser)}`)
  .then(res => res.json())
  .then(json => {
    console.log(json.avatar_url);
    console.log(json.name);
    console.log(json.bio);
    console.log(json.html_url);
    let avatar = new Image();
    avatar.src = json.avatar_url;
    body.append(avatar);
    let name = document.createElement('p');
    if(json.name != null) {
      name.innerHtml = json.name;
    } else {
      name.innerHtml = 'Информация о пользователе куда то пропала=(';
    }
    body.append(name);
    name.addEventListener ("click", () => window.location = 'https://github.com/AzezAeksandrChernilevskiy');
    let bio = document.createElement('p');
    if(json.bio != null) {
      bio.innerHtml = json.bio;
    } else {
      bio.innerHtml = 'Информация о пользователе куда то пропала=(';
    }
    body.append(bio);
  })
  .catch(error => alert('Информация о пользователе куда то пропала=('));