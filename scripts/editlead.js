console.log("on edit lead page");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
let button = document.querySelector("#btn1");
button.addEventListener("click", update_lead);
async function EditLeads() {
  //   getAccountlist();
  let leads = await CallApi(`leads/${id}`);
  let status = document.querySelector("#status");
  let tech_stack = document.querySelector("#tech_stack_input");
  let account = document.querySelector("#account_id");
  let url = document.querySelector("#url");
  let price = document.querySelector("#price");
  let desc = document.querySelector("#desc");
  let job = document.querySelector("#job-title");
  let note = document.querySelector("#note");
  let tag = document.querySelector("#tags");
  let country = document.querySelector("#country");
  url.value = leads.data.url;
  price.value = leads.data.price;
  default_account = parseInt(leads.data.account_id);
  default_status = leads.data.status;
  default_techstack = leads.data.tech_stack;
  console.log(default_techstack);
  status.value = default_status;
  account.value = default_account;
  tech_stack.value = default_techstack;
  desc.value = leads.data.desc;
  default_job = leads.data.job_title;
  job.value = leads.data.job_title;
  default_note = leads.data.note;
  note.value = default_note;
  default_tag = leads.data.tags;
  tag.value = default_tag;
  default_country = leads.data.country;
  country.value = default_country;
}

async function update_lead() {
  let url = document.querySelector("#url").value;
  let job = document.querySelector("#job-title").value;
  let price = document.querySelector("#price").value;
  let status = document.querySelector("#status").value;
  let tech_stack = document.querySelector("#tech_stack").value;
  let desc = document.querySelector("#desc").value;
  let account_id = Number(document.querySelector("#account_id").value);
  let country = document.querySelector("#country").value;
  let note = document.querySelector("#note").value;
  let tech_stack_input = document.querySelector("#tech_stack_input").value;

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
    user_id: 4,
    job_title: job,
    country: country,
    note: note,
    account_id: account_id,
  };
  const editLead = await CallApi("leads/" + id, "PATCH", body);

  if (editLead.status == 200) {
    window.location.href = "/pages/dashboard.html";
  } else {
    console.log("response from server after edit", editLead);
    alert("Some error has occured, status code not returned 200");
  }
}

EditLeads();
