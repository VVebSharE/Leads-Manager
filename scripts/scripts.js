function CallApi(endpoint, method = "GET", body = null,tokken=null) {
  if (body) {
    body = JSON.stringify(body);
  }
  
  return new Promise((resolve) => {
    let headres = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("tokken"),
    };
    const url1 = "http://localhost:3001/api/";
    const url2 = "https://593d-117-220-51-203.ngrok.io/api/";
    fetch(url1 + endpoint, {
      method: method,
      headers: headres,
      body: body,
    })
      .then((r) => r.json())
      .then((response) => {
        resolve(response);
      })
      .catch((e) => {
        console.log(e);
        resolve({
          status: 500,
          message: e.message,
        });
      });
  });
}

function alert_error(message) {
  div = document.getElementById("alert");
  div.innerHTML = message;
  div.style.display = "flex";
  div.style["text-align"] = "center";
  div.style.color = "red";
  div.style["border-radius"] = "5px";
  subcont = document.querySelector(".subcontainer");
  subcont.style.filter = "blur(3px)";
  setTimeout(() => {
    div.style.display = "none";
    subcont.style.filter = "blur(0px)";
  }, 2000);
}