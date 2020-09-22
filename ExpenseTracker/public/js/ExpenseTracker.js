function showForm() {
    var showf = document.getElementById("ExpenseForm");
    if (showf.style.display === "none") {
      showf.style.display = "block";
    } else {
      showf.style.display = "none";
    }
}

function DeleteItem(elem) {
    elem.parentNode.parentNode.removeChild(elem.parentNode);

    var myStrorage = window.localStorage;
    var expenseArray = JSON.parse(myStrorage.getItem("expenses"));
    for (let i = 0; i < expenseArray.length; i++) {
        expenseArray.splice(i, 1);
    }
    myStrorage.setItem("expenses", JSON.stringify(expenseArray));
}

function AddList(){
    var table = document.getElementById("ExpenseTable");
    
    var inputs = document.getElementsByTagName("input");
    var name = inputs[1].value;
    var cost = inputs[2].value;
    var category = inputs[3].value;

    var expense = {
        name: name,
        cost: cost,
        category: category
    };

    var myStorage = window.localStorage;
    var expenseArray = JSON.parse(myStorage.getItem("expenses"));

    console.log(expense);

    expenseArray.push(expense);

    myStorage.setItem("expenses", JSON.stringify(expenseArray));

    var expenseRow = document.createElement("tr");
    expenseRow.setAttribute("class", "ExpenseRow");

    var expenseDataName = document.createElement("td");
    expenseDataName.setAttribute("class", "ExpenseDataName");

    var expenseDataCost = document.createElement("td");
    expenseDataCost.setAttribute("class", "ExpenseCost");
    
    var expenseDataCategory = document.createElement("td");
    expenseDataCategory.setAttribute("class", "ExpenseCategory");

    var expenseDataButton = document.createElement("td");
    expenseDataButton.setAttribute("class", "ExpenseButton");

    var expenseName = document.createTextNode(name);
    
    var expenseCost = document.createTextNode(cost);

    var expenseCategory = document.createTextNode(category);

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "DELETE";
    deleteButton.setAttribute("id", "DeleteFromList");
    deleteButton.setAttribute("onclick", "DeleteItem(this)");

    expenseRow.appendChild(expenseDataName);
    expenseRow.appendChild(expenseDataCost);
    expenseRow.appendChild(expenseDataCategory);
    expenseRow.appendChild(expenseDataButton);

    expenseDataName.appendChild(expenseName);
    expenseDataCost.appendChild(expenseCost);
    expenseDataCategory.appendChild(expenseCategory);
    expenseDataButton.appendChild(deleteButton);

    table.appendChild(expenseRow);

    var showf = document.getElementById("ExpenseForm");
    var nameInput = document.getElementById("name");
    nameInput.value = "";
    var costInput = document.getElementById("cost");
    costInput.value = "";
    var categoryInput = document.getElementById("category");
    categoryInput.value = "";
    showf.style.display = "none";

}

document.addEventListener("DOMContentLoaded", function(){
    var myStorage = window.localStorage;

    if(myStorage.getItem("expenses")){
      var table = document.getElementById("ExpenseTable");
      var objectArray = JSON.parse(myStorage.getItem("expenses"));

      for (let i = 0; i < objectArray.length; i++) {
        var expenseRow = document.createElement("tr");
        expenseRow.setAttribute("class", "ExpenseRow");

        var expenseDataName = document.createElement("td");
        expenseDataName.setAttribute("class", "ExpenseDataName");

        var expenseDataCost = document.createElement("td");
        expenseDataCost.setAttribute("class", "ExpenseCost");
        
        var expenseDataCategory = document.createElement("td");
        expenseDataCategory.setAttribute("class", "ExpenseCategory");

        var expenseDataButton = document.createElement("td");
        expenseDataButton.setAttribute("class", "ExpenseButton");

        var expenseName = document.createTextNode(objectArray[i].name);
        
        var expenseCost = document.createTextNode(objectArray[i].cost);

        var expenseCategory = document.createTextNode(objectArray[i].category);

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "DELETE";
        deleteButton.setAttribute("id", "DeleteFromList");
        deleteButton.setAttribute("onclick", "DeleteItem(this)");

        expenseRow.appendChild(expenseDataName);
        expenseRow.appendChild(expenseDataCost);
        expenseRow.appendChild(expenseDataCategory);
        expenseRow.appendChild(expenseDataButton);

        expenseDataName.appendChild(expenseName);
        expenseDataCost.appendChild(expenseCost);
        expenseDataCategory.appendChild(expenseCategory);
        expenseDataButton.appendChild(deleteButton);

        table.appendChild(expenseRow);
  
        var showf = document.getElementById("ExpenseForm");
        showf.style.display = "none";
        
      }
    } else {
      var expense = [];
      myStorage.setItem("expenses", JSON.stringify(expense));
    }
});

function search(){
    var searchedExpense = document.getElementById("Searched");
    var expenseTableData = document.getElementsByClassName("ExpenseDataName");

    for (let i = 0; i < expenseTableData.length; i++) {
        var expenseString = expenseTableData[i].innerHTML;

        if(!expenseString.includes(searchedExpense.value)){
            expenseTableData[i].parentElement.style.display = "none";
        }
        
        if(searchedExpense.value == ""){
            expenseTableData[i].parentElement.style.display = "table-row";
        }
    }
    
    searchedExpense.value = "";
}