async function deleteLead(id) {
  const deleteResult = await CallApi(`leads/${id}`, "DELETE");
  if (deleteResult.status == 200) {
    return true;
  }
  alert_error(deleteResult.message);
  return false;
}

let lead_status = {
  Hot: '<div class="hot tag" >HOT</div>',
  Follow: '<div class="follow-up tag" >WARM</div>',
  Dead: ' <div class="dead tag" >DEAD</div>',
  Active: '<div class="active tag"  >ACTIVE</div>',
};

async function getLeads() {
  tbody = document.getElementById("tbody");

  const response = await CallApi("leads");

  // console.log(response)
  if (!response) {
    alert_error(response.message);
    return;
  }
  response.map((lead) => {
    let rowHtml = `
    <tr id="${lead.id}tr">

    <td>${lead.id}</td>
    <td>${lead.created_at.substring(0, 10)}</td>
    <td> <div class="desc">${lead.job_title}</div></td>
    <td>
  
    <select id="${lead.id}select" class="select_status tag ${
      lead.status.toLowerCase().split(" ")[0]
    }" >
      <option  value="active" class="active tag" >ACTIVE</option>
      <option value="hot" class="hot tag">HOT</option>
      <option value="follow up" class="follow tag">WARM</option>
      <option value="dead" class="dead tag">DEAD</option>
    </select>
    
    </td>
    <td>${lead.price}</td>
    <td>${lead.created_by}</td>
    


    <td>${lead.account.display_name}</td>
    <td class="dropdown">
        
        <div class="action_icons">



        <a class ="action_last_icon" href="${lead.url}" target="_blank">
          <svg width="20" height="20" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.7498 17.6241L19.6877 15.5621L21.7498 13.5C22.2915 12.9583 22.7212 12.3152 23.0143 11.6075C23.3075 10.8997 23.4584 10.1412 23.4584 9.37509C23.4584 8.60902 23.3075 7.85046 23.0143 7.14271C22.7212 6.43496 22.2915 5.79188 21.7498 5.25019C21.2081 4.7085 20.565 4.27881 19.8573 3.98565C19.1495 3.69249 18.391 3.54161 17.6249 3.54161C16.8588 3.54161 16.1003 3.69249 15.3925 3.98565C14.6848 4.27881 14.0417 4.7085 13.5 5.25019L11.4379 7.31228L9.37582 5.25019L11.4379 3.18811C13.0834 1.56924 15.3018 0.66615 17.6101 0.675549C19.9184 0.684948 22.1295 1.60608 23.7617 3.23829C25.3939 4.87051 26.315 7.08156 26.3244 9.38984C26.3338 11.6981 25.4307 13.9166 23.8119 15.5621L21.7498 17.6241ZM17.6242 21.7498L15.5621 23.8119C14.752 24.6352 13.7869 25.2901 12.7225 25.7386C11.6581 26.1871 10.5154 26.4205 9.36034 26.4252C8.20529 26.4299 7.06073 26.2059 5.99269 25.766C4.92466 25.3262 3.95428 24.6792 3.13752 23.8624C2.32077 23.0457 1.67381 22.0753 1.23396 21.0073C0.794111 19.9392 0.570076 18.7947 0.57478 17.6396C0.579483 16.4846 0.812831 15.3419 1.26136 14.2775C1.7099 13.2131 2.36474 12.248 3.18811 11.4379L5.2502 9.37582L7.31228 11.4379L5.2502 13.5C4.70851 14.0417 4.27882 14.6847 3.98566 15.3925C3.6925 16.1003 3.54161 16.8588 3.54161 17.6249C3.54161 18.3909 3.6925 19.1495 3.98566 19.8573C4.27882 20.565 4.70851 21.2081 5.2502 21.7498C5.79189 22.2915 6.43497 22.7212 7.14272 23.0143C7.85047 23.3075 8.60903 23.4584 9.3751 23.4584C10.1412 23.4584 10.8997 23.3075 11.6075 23.0143C12.3152 22.7212 12.9583 22.2915 13.5 21.7498L15.5621 19.6877L17.6242 21.7498ZM17.6242 7.31228L19.6877 9.37582L9.37582 19.6862L7.31228 17.6241L17.6242 7.31373V7.31228Z" fill="#6FBBFF"/>
            </svg>
            
        </a>

        <a class= "action_mid_icon"
        href="/pages/EditLead.html?id=${lead.id}"
      >
      <svg width="25" height="25" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.916748 0.75V3.66667H18.4167V0.75H0.916748ZM0.916748 6.58333V9.5H18.4167V6.58333H0.916748ZM27.2251 6.77292C27.0209 6.77292 26.8167 6.86042 26.6563 7.02083L25.198 8.47917L28.1876 11.4688L29.6459 10.0104C29.9667 9.70417 29.9667 9.19375 29.6459 8.8875L27.7792 7.02083C27.6188 6.86042 27.4293 6.77292 27.2251 6.77292ZM24.3522 9.325L15.5001 18.1625V21.1667H18.5042L27.3417 12.3146L24.3522 9.325ZM0.916748 12.4167V15.3333H12.5834V12.4167H0.916748Z" fill="black"/>
        </svg>
        </a>

        <svg class="del_btn" data-id="${
          lead.id
        }"  width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.25 5.5H25.5V8H23V24.25C23 24.5815 22.8683 24.8995 22.6339 25.1339C22.3995 25.3683 22.0815 25.5 21.75 25.5H4.25C3.91848 25.5 3.60054 25.3683 3.36612 25.1339C3.1317 24.8995 3 24.5815 3 24.25V8H0.5V5.5H6.75V1.75C6.75 1.41848 6.8817 1.10054 7.11612 0.866117C7.35054 0.631696 7.66848 0.5 8 0.5H18C18.3315 0.5 18.6495 0.631696 18.8839 0.866117C19.1183 1.10054 19.25 1.41848 19.25 1.75V5.5ZM9.25 11.75V19.25H11.75V11.75H9.25ZM14.25 11.75V19.25H16.75V11.75H14.25ZM9.25 3V5.5H16.75V3H9.25Z" fill="#FF5959"/>
            </svg>
      </div>
    </td>
    <td> <div class="desc">${lead.tags}</div></td>
    <td > ${lead.tech_stack}</td>
    <td>${lead.country}</td>
    <td> <div class="desc">${lead.desc}</div> </td>
    <td class="pad_right"> <div class="desc">${lead.note}</div ></td>
   
    
   
    
</tr> 
        `;
    tr = tbody.insertRow();
    tr.innerHTML = rowHtml;

    document.getElementById(lead.id + "select").value =
      lead.status.toLowerCase();
  });

  btn = document.querySelectorAll(".del_btn");
  btn.forEach((element) => {
    element.addEventListener("click", (event) => {
      let ele = event.target.parentElement;
      // console.log(ele);

      if (deleteLead(ele.dataset.id)) {
        // console.log(ele)
        tr = ele.parentElement.parentElement.parentElement;
        // console.log(tr)
        tr.remove();
      }
    });
  });

  let selectbox = document.querySelectorAll(".select_status");
  selectbox.forEach((element) => {
    element.addEventListener("change", editstatus);
  });

  function editstatus(event) {
    console.log("working");
    event.target.className =
      "select_status tag " + event.target.value.split(" ")[0];
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const body = {
      status: capitalizeFirstLetter(event.target.value.toLowerCase()),
    };
    id = event.target.parentElement.parentElement.children[0].innerHTML;
    // const editLead = await
    CallApi("leads/" + id, "PATCH", body);

    // if (editLead.status == 200) {
    //   window.location.href = "/pages/dashboard.html";
    // } else {
    //   console.log("response from server after edit", editLead);
    //   alert("Some error has occured, status code not returned 200");
    // }
  }

  function fit(event) {
    event.target.style.maxHeight = "58px";
    event.target.removeEventListener("click", fit);
    event.target.addEventListener("click", unfit);
  }
  function unfit(event) {
    event.target.style.maxHeight = "fit-content";
    event.target.removeEventListener("click", unfit);
    event.target.addEventListener("click", fit);
  }

  document.querySelectorAll(".desc").forEach((element) => {
    element.addEventListener("click", unfit);
  });
}

// chrome.windows.update(windowId, { state: "fullscreen" })

getLeads();
async function getAccountlist() {
  let accounts = await CallApi("account");
  acc_select = document.getElementById("account_id");
  accounts.forEach((account) => {
    const option = document.createElement("option");
    option.value = account.display_name;
    option.innerHTML = account.display_name;
    acc_select.appendChild(option);
  });
}
getAccountlist();

let filter_icon = document.querySelector("#filter_icon");
filter_icon.addEventListener("click", showfilters);
var visible = 1;
function showfilters() {

  document.getElementById("filter_by").style.display = visible ?"flex":"none";
  visible = visible ? 0 : 1;


  // let filterEl=document.getElementById("filter_by")
  // if (visible) {
  //   visible = 0;
  //   filterEl.style.display = "flex";
  // } else {
  //   visible = 1;
  //   filterEl.style.display = "none";
  // }

}

window.onload = function () {
  chrome.runtime.sendMessage(
    {
      message: localStorage.getItem("tokken"),
      from: "popup",
    },
    function (response) {
      console.log("message send from popup to background", response);
    }
  );
};
