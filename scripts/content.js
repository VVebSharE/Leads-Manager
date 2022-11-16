let country_arr = new Array(
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Angola",
  "Anguilla",
  "Antartica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Ashmore and Cartier Island",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burma",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Clipperton Island",
  "Cocos (Keeling) Islands",
  "Colombia",
  "Comoros",
  "Congo, Democratic Republic of the",
  "Congo, Republic of the",
  "Cook Islands",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czeck Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Europa Island",
  "Falkland Islands (Islas Malvinas)",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern and Antarctic Lands",
  "Gabon",
  "Gambia, The",
  "Gaza Strip",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Glorioso Islands",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard Island and McDonald Islands",
  "Holy See (Vatican City)",
  "Honduras",
  "Hong Kong",
  "Howland Island",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Ireland, Northern",
  "Israel",
  "Italy",
  "Jamaica",
  "Jan Mayen",
  "Japan",
  "Jarvis Island",
  "Jersey",
  "Johnston Atoll",
  "Jordan",
  "Juan de Nova Island",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia, Former Yugoslav Republic of",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Man, Isle of",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia, Federated States of",
  "Midway Islands",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcaim Islands",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romainia",
  "Russia",
  "Rwanda",
  "Saint Helena",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Scotland",
  "Senegal",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and South Sandwich Islands",
  "Spain",
  "Spratly Islands",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Svalbard",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Tobago",
  "Toga",
  "Tokelau",
  "Tonga",
  "Trinidad",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "United States",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Virgin Islands",
  "Wales",
  "Wallis and Futuna",
  "West Bank",
  "Western Sahara",
  "Yemen",
  "Yugoslavia",
  "Zambia",
  "Zimbabwe"
);
var tokken;
var body;
async function CallApi(endpoint, method = "GET", body = null) {
  if (body) {
    body = JSON.stringify(body);
  }
  return new Promise((resolve) => {
    let headres = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + tokken,
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
window.onload = async function () {


  chrome.runtime.sendMessage({ from: "content" }); //first, tell the background page that this is the tab that wants to receive the messages.
  console.log("woriking in content");
  chrome.runtime.onMessage.addListener(function (msg) {
    if (msg.from == "background") {
      tokken = msg.message;
      console.log(tokken + "from background to content");
      setTimeout(() => {
        addbtn();
      }, 5000);

    }
  });




}



// some constants may vary time to time


async function addbtn() {
  body = document.querySelector("body");
  let response;
  response = await CallApi("leads");

  // console.log(response)
  if (!response) {
    alert_error(response.message);
  }
  function addcon() {
    con = document.createElement("div");
    con.className = "modal_outer";
    con.innerHTML = `<div class='edit_container for_modal'>
  <div class="back" >
            <div class="modal_back_button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24">
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M6.535 3H21a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6.535a1 1 0 0 1-.832-.445l-5.333-8a1 1 0 0 1 0-1.11l5.333-8A1 1 0 0 1 6.535 3zM13 10.586l-2.828-2.829-1.415 1.415L11.586 12l-2.829 2.828 1.415 1.415L13 13.414l2.828 2.829 1.415-1.415L14.414 12l2.829-2.828-1.415-1.415L13 10.586z"
                    fill="#cc0000"></path>
                </g>
              </svg>
            </div>
          </div>
          <div class="container1">
            <div class="sub1">
              <div class="login__field">
                <label for="lead_url" class="label_text">Lead URL: </label> <br>
                <input type="text" class="login__input" id="url" placeholder="Lead URL" />
              </div>
              <div class="login__field">
                <label for="job-title" class="label_text">Job Title: </label><br>
                <input type="textarea" name="job-title" id="job-title" class="login__input" placeholder="Job Title" />
              </div>
        
              <div class="login__field">
                <label for="price" class="label_text">Price: </label> <br>
                <input type="text" class="login__input" id="price" placeholder="Price" />
              </div>
            </div>
            <div class="sub2">
              <div class="login__field">
                <label for="account" class="label_text">Upwork Id:</label> <br>
                <select name="Account_id" id="account_id">
                  <option value="0">Select Upwork Id</option>
                </select>
              </div>
              <div class="login__field">
                <label for="country" class="label_text">Country: </label> <br>
                <select id="country" name="country">
                  <option value="0">Select Country</option>
                </select>
              </div>
              <div class="login__field">
                <label for="status" class="label_text">Status: </label> <br>
                <select name="status" id="status">
                  <option value="0">Select status</option>
                  <option value="Hot">Hot</option>
                  <option value="Follow up">Warm</option>
                  <option value="Dead">Dead</option>
                  <option value="Active">Active</option>
                </select>
              </div>
            </div>
            <div class="sub3">
              <div class="login__field">
                <label for="tech_stack" class="label_text">techstack: </label> <br>
                <input list="tech_stack" id="tech_stack_input" name="tech_stack" placeholder="select or enter techstack"/>
                
                <datalist id="tech_stack">
                </datalist>
        
        
              </div>
        
              <div class="login__field">
                <label for="tags" class="label_text">Tags: </label> <br>
                <input type="textarea" name="tags" id="tags" class="login__input" placeholder="Tags" />
              </div>
            </div>
          </div>
        
          <div class="log">
            <label for="note" class="label_text" id="not">Notes: </label> <br>
            <textarea name="note" id="note" class="login__input"></textarea>
          </div>
        
        
          <div class="log">
            <label for="desc" class="label_text" id="des">Description: </label> <br>
            <textarea name="desc" id="desc" class="login__input"></textarea>
          </div>
          <div class="btn">
            <button type="button" class="button login__submit" id="btn">Add</button>
          </div>
          </div>`;
    body.appendChild(con);

    let btn = con.querySelector("#btn");
    if (btn) {
      btn.addEventListener("click", addlead);
    }

    async function getAccountlist() {
      let accounts = await CallApi("account");
      acc_select = con.querySelector("#account_id");
      accounts.forEach((account) => {
        const option = document.createElement("option");
        option.value = account.account_id;
        option.innerHTML = account.display_name;
        acc_select.appendChild(option);
      });
    }

    async function getTechStack() {
      let tech_stack = await CallApi("leads/techStacks");
      tech_stack_select = con.querySelector("#tech_stack");
      tech_stack.data.forEach((tech_stack) => {
        const option = document.createElement("option");
        option.innerHTML = tech_stack.tech_stack;
        option.value = tech_stack.tech_stack;
        tech_stack_select.appendChild(option);
      });
    }
    getAccountlist();
    getTechStack();
    async function addlead() {
      let url = con.querySelector("#url").value;
      let price = con.querySelector("#price").value;
      let status = con.querySelector("#status").value;
      let tech_stack = con.querySelector("#tech_stack").value;
      let desc = con.querySelector("#desc").value;
      let account_id = con.querySelector("#account_id").value;
      let job = con.querySelector("#job-title").value;
      let country = con.querySelector("#country").value;
      let notes = con.querySelector("#note").value;
      let tags = con.querySelector("#tags").value;
      let tech_stack_input = con.querySelector("#tech_stack_input").value;

      console.log(tech_stack);
      console.log(tech_stack_input);

      let addnew = tech_stack_input != "" ? true : false;
      // let created_by = con.querySelecotr("#created_by").value;
      if (addnew) {
        tech_stack = tech_stack_input;
      }

      const body_req = {
        url: url,
        price: price,
        status: status,
        tech_stack: tech_stack,
        desc: desc,
        account_id: account_id,
        user_id: 4,
        country: country,
        job_title: job,
        note: notes,
        tags: tags,
        // created_by: created_by
      };
      const addedLead = await CallApi("leads/add", "POST", body_req);
      if (addedLead.status == 200) {
        alert("Lead Added");
      } else {
        alert("some error has occured");
      }

      con.style["display"] = "none";
      body.style["overflow"] = "auto";
    }



    let countryElement = con.querySelector("#country");
    for (var i = 0; i < country_arr.length; i++) {
      let option = document.createElement("OPTION");
      option.value = country_arr[i];
      option.text = country_arr[i];
      countryElement.appendChild(option);
    }
  }
  addcon();

  element = document.querySelector(".cfe-ui-job-details-viewer");
  console.log(element);
  var job_det_con = element.querySelector(".cfe-ui-job-details-content");
  job_det_con.style["position"] = "relative";
  btn = document.createElement("button");
  btn.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 24 24" width="40"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1zm17-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 9h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3V6c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>';
  btn.className = "btn-add-lead";
  job_det_con.appendChild(btn);

  btn = document.querySelector(".btn-add-lead");
  btn.addEventListener("click", (event) => {
    event.stopPropagation();
    con.style["display"] = "block";
    con.style["width"] = "100%";
    con.style["overflow-y"] = "scroll";
    body.style["overflow"] = "hidden";
    console.log("hello");

    let status = con.querySelector("#status");
    let tech_stack = con.querySelector("#tech_stack_input");
    let account = con.querySelector("#account_id");
    let url = con.querySelector("#url");
    let price = con.querySelector("#price");
    let desc = con.querySelector("#desc");
    let job = con.querySelector("#job-title");
    let note = con.querySelector("#note");
    let tag = con.querySelector("#tags");
    let country = con.querySelector("#country");


    job.value = document.querySelectorAll(".up-card-header")[0].innerText;
    url.value = element.querySelector(".up-input").value;

    country.value = element
      .querySelector("[data-qa='client-location']")
      .querySelector("strong").innerHTML;

    element.querySelectorAll(".up-skill-badge").forEach((element) => {
      tag.value += element.innerText + ", ";
    });

    desc.value = element.querySelector(
      ".job-description"
    ).innerText;
  });

  modal_back_button = document.querySelectorAll(".modal_back_button");
  modal_back_button.forEach((element) => {
    element.addEventListener("click", () => {
      con.style["display"] = "none";
      body.style["overflow"] = "auto";
    });
  });
}
