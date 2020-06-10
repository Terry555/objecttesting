

function easyHTTP(){
  this.http = new XMLHttpRequest();
}

// GET - Make an HTTP GET request
easyHTTP.prototype.get = function(url, callback){
  this.http.open('GET', url, true);

  let self = this;

  this.http.onload = function() {
    if(self.http.status === 200){
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}

// POST - Make an HTTP POST request

// PUT - Make an HTTP PUT request

// DELETE - Make an HTTP DELETE request
