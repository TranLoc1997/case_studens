var produrt = [];

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (produrt == "")
            baibietmoi(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["baiviet"] = document.getElementById("baiviet").value;

    
    return formData;
}

function baibietmoi(data) {
    var table = document.getElementById("showList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell = newRow.insertCell(0);
    cell.innerHTML = data.baiviet;
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("baiviet").value = "";
    
    produrt = [];
}

function onEdit(td) {
    produrt = td.parentElement.parentElement;
    document.getElementById("baiviet").value = produrt.cells[0].innerHTML;
   
}
function updateRecord(formData) {
    produrt.cells[0].innerHTML = formData.baiviet;
    
}

function onDelete(td) {
    if (confirm('Bạn Có Chắc Chắn Xóa Bài Viết Không ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("showList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("baiviet").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}
function logout() {
        window.location = "C:/Users/Admin/Desktop/demo/Login/index.html";
    return false;

    
}
     
    localStorage.setItem('baiviet', JSON.stringify(produrt)); 


