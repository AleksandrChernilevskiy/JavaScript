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
    let avatar = new Image();
    avatar.src = json.avatar_url;
    body.append(avatar);
    let name = document.createElement('p');
    if(json.name != null) {
      name.innerHTML = json.name;
    } else {
      name.innerHTML = 'Информация о пользователе куда то пропала=(';
    }
    body.append(name);
    name.addEventListener ("click", () => window.location = 'https://github.com/AzezAeksandrChernilevskiy');
    let bio = document.createElement('p');
    if(json.bio != null) {
      bio.innerHTML = json.bio;
    } else {
      bio.innerHTML = 'Информация о пользователе куда то пропала=(';
    }
    body.append(bio);
  })
  .catch(error => alert('Информация о пользователе куда то пропала=('));
 