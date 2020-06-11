
document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

function handleErrors(res){
  if (!res.ok)
    throw new Error(res.error);
    return res;
}

// Get local text file
function getText(){
  fetch('test.txt').then(function(res){
    return res.text();
  }).then(handleErrors)
  .then(function(data){
    console.log(data);
    document.getElementById('output').innerHTML = data;
  }).catch(function(err){
    console.log(err);
  })
}

// Get local JSON data
function getJson(){
  fetch('posts.json').then(function(res){
    return res.json();
  }).then(function(data){
    console.log(data);

    let output = '';

    data.forEach(function(post){
      output += `
      <li>${post.title}</li>
      <li>${post.body}</li>
      `
    })

    document.getElementById('output').innerHTML = output;
  }).catch(function(err){
    console.log(err);
  })
}

// Get from external API
function getExternal(){
  fetch('https://api.github.com/users').then(function(res){
    return res.json();
  }).then(function(data){
    console.log(data);

    let output = '';

    data.forEach(function(user){
      output += `
      <li>${user.login}</li>
      <li>${user.id}</li>
      `
    })

    document.getElementById('output').innerHTML = output;
  }).catch(function(err){
    console.log(err);
  })
}
