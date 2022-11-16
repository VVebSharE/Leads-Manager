let btn = document.querySelector("#btn");
if(btn){
  btn.addEventListener("click", addlead);
}

async function getAccountlist() {
  let accounts = await CallApi("account");
  acc_select = document.getElementById("account_id");
  accounts.forEach((account) => {
    const option = document.createElement("option");
    option.value = account.account_id;
    option.innerHTML = account.display_name;
    acc_select.appendChild(option);
  });
}

async function getTechStack() {
  let tech_stack = await CallApi("leads/techStacks");
  tech_stack_select = document.getElementById("tech_stack");
  tech_stack.data.forEach((tech_stack) => {
    const option = document.createElement("option");
    option.innerHTML = tech_stack.tech_stack;
    option.value=tech_stack.tech_stack;
    tech_stack_select.appendChild(option);
  });
}

async function addlead() {
  let url = document.querySelector("#url").value;
  let price = document.querySelector("#price").value;
  let status = document.querySelector("#status").value;
  let tech_stack = document.querySelector("#tech_stack").value;
  let desc = document.querySelector("#desc").value;
  let account_id = document.querySelector("#account_id").value;
  let job = document.querySelector("#job-title").value;
  let country = document.querySelector("#country").value;
  let notes = document.querySelector("#note").value;
  let tags = document.querySelector("#tags").value;
  let tech_stack_input = document.querySelector("#tech_stack_input").value;

  console.log(tech_stack)
  console.log(tech_stack_input)

  let addnew = (tech_stack_input!='') ? true : false;
  // let created_by = document.querySelecotr("#created_by").value;
  if (addnew) {
    tech_stack = tech_stack_input;
  }
  
  const body = {
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
  console.log(body)
  const addedLead = await CallApi("leads/add", "POST", body);
  if (addedLead.status == 200) {
    window.location.href = "dashboard.html";
  } else {
    alert("some error has occured");
  }
}

getAccountlist();
getTechStack();


