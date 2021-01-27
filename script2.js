
window.setTimeout(function () {
  const loader = document.getElementById("apploader");
  const loaded = () => {
    loader.classList.add('hidden');
  };
  setTimeout(loaded, 200);
  // let name = 'AzezAeksandrChernilevskiy';
  let body = document.body;
  let string = window.location.search;
  const url = (string) => {
    let urlUser = string.split('=');
    let name = urlUser[1];
    if( name == undefined ) {
      name = 'AzezAeksandrChernilevskiy';
    }
    return name;
  }
  const date = new Date();
  const getDate = new Promise((resolve, reject) => {
    setTimeout(() => date ? resolve(date.innerHTML) : reject("Ошибка"), 100)
  })
  const getUrl = new Promise((resolve, reject) => {
    setTimeout(() => url ? resolve(url) : reject("Ошибка URL!"), 100)
  })

  Promise.all([getUrl, getDate])
    .then(([url, date]) => fetch(`https://api.github.com/users/${url(string)}`))
    .then(res => res.json())
    .then(json => {
      let avatar = new Image();
      avatar.src = json.avatar_url;
      body.append(avatar);
      let name = document.createElement('p');
      if(json.name != null) {
        name.innerHTML = json.name;
      } else {
        name.innerHTML = 'Имя пользователя куда то пропало=(';
      }
      body.append(name);
      name.addEventListener ("click", () => window.location = json.html_url);
      let bio = document.createElement('p');
      if(json.bio != null) {
        bio.innerHTML = json.bio;
      } else {
        bio.innerHTML = 'Информация куда то пропала=(';
      }
      body.append(bio);
      body.append(date);
    })
  .catch(error => console.log('Информация о пользователе куда то пропала=('))
}, 3000);
  