let filters = {
    status: {
        id: "status", value: null, column: 3, split_join: true, match: function (td) {
           
            if (this.value == 0)
                return true;
            else if (td[3].getElementsByClassName("select_status")[0].value.toUpperCase().split("").join("") == this.value)
                return true;
            else if(td[3].getElementsByClassName("select_status")[0].value.toUpperCase().split("").join("")=="FOLLOW UP" && this.value=='WARM')
                return true;
            else
                return false;
        }
    },
    account: {
        id: "account_id", value: null, column: 6, split_join: true, match: function (td) {
            if (this.value == 0)
                return true;
            else if (td[6].innerHTML.toUpperCase().split("").join("") == this.value)
                return true;
            else
                return false;
        }
    },
    search: {
        id: "in_search", value: null, column: [0,1,2, 7,8, 11,12], split_join: false, match: function (td) {
            if (this.value == '')
                return true;
            else {
                for (i of this.column) {
                    if (td[i].innerText.toUpperCase().indexOf(this.value) > -1)
                        return true;
                }
                return false;
            }
        }

    }

}



function filter_func() {
    for (const pro in filters) {
        filters[pro].value = document.getElementById(filters[pro].id).value.toUpperCase();
        if (filters[pro].split_join)
            filters[pro].value = filters[pro].value.split("").join("");

    }
    // filter.account.value = document.getElementById("account_id").value.toUpperCase();
    // filter.account.value = filter.split("").join("");

    // filter.status.value = document.getElementById("status").value.toUpperCase();
    // filter.status.value = filter.split("").join("");

    // filter.search.value = document.getElementById("in_search").value.toUpperCase();

    table = document.getElementById("table");

    tr = table.getElementsByTagName("tr");
    for (let i = 1; i < tr.length; i++) {
        tds = tr[i].getElementsByTagName("td");
        let count = 0;
        for (const pro in filters) {
            if (filters[pro].match(tds))
                count++;
        }
        console.log(filters);
        if (count == 3)
            tr[i].style.display = '';
        else {
            tr[i].style.display = 'none';
            console.log("not matched");
        }
    }
}

const input = document.getElementById("in_search");
input.addEventListener("keyup", filter_func);

const filter_status = document.getElementById("status");
filter_status.addEventListener("change", filter_func);

const filter_account = document.getElementById("account_id");
filter_account.addEventListener("change", filter_func);