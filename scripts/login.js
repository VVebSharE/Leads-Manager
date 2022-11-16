function getcss(Element, property) {
  let b = document.querySelector(Element);
  return window.getComputedStyle(b, null).getPropertyValue(property);
}
async function login() {
  document.getElementById("button").style.color = getcss("#button", "background-color");
  document.getElementById("loading").style.display = "block";
  let requestData = {
    email: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };
  const response = await CallApi("user/login", "POST", requestData)
  if (response.status != 200) {
    document.getElementById("button").style.color = "#fff";
    document.getElementById("loading").style.display = "none";
    alert_error(response.message);
    return;
  }
  else {
    localStorage.setItem("tokken", response.data.tokken);
    window.location.href = "pages/dashboard.html";
  }

}

btn = document.getElementById("button");
btn.addEventListener("click", login);

eye = document.getElementById("eye");
eye.addEventListener("click", function () {
  if (document.getElementById("password").type == "password") {
    document.getElementById("password").type = "text";
    document.getElementById("open_eye").style.display = "none";
    document.getElementById("close_eye").style.display = "inline";
  }
  else {
    document.getElementById("password").type = "password";
    document.getElementById("open_eye").style.display = "inline";
    document.getElementById("close_eye").style.display = "none";
  }
}
);