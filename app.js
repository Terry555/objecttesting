document.getElementById('button').addEventListener('click',
loadData);

function loadData(){
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open('GET', 'data.txt', true);


  xhr.onload = function(){
    if(this.status === 200){
      console.log(this.resonseText);
    } else {
      console.log('it didnt work!');
    }
  }
  xhr.send();
}

function fakeFunction(x, y){
    return x + y;
}

console.log('already created new branch, now merging');
