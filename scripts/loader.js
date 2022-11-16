async function check() {
    if (localStorage.getItem("tokken")) {

        const response = await CallApi("user/refreshtokken");
        if (response.status == 200) {
            window.location.href = "/pages/dashboard.html";
        }
        else {
            console.log("not login")
            window.location.href = "/login.html";
        }
    }
    else {
        console.log("not login")
        window.location.href = "/login.html";
    }

}

check();