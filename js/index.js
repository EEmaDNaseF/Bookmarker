var productArray = []

var mainIndex = 0

checkLocalStorage()




function addProduct() {
    var Products = {
        name : document.getElementById("siteName").value,
        Url : document.getElementById("siteUrl").value
    }

    if (validateName(Products.name , /^[a-zA-Z]{3,}$/)) {

        if (document.getElementById("addProduuct").innerHTML == "Submit") {
            productArray.push(Products)
        }
        else {
            productArray.splice(mainIndex , 1 , Products)
            document.getElementById("addProduuct").innerHTML = "Submit"
        }
    
        localStorage.setItem("products" , JSON.stringify(productArray))
    
        loopProducts()
        resetProducts()
    }
    else {
        alert("error")
    }

    


}

function loopProducts() {
    var cartona = ``
    for (var i = 0 ; i < productArray.length ; i++) {
        cartona += `
        <tr>
            <td>${i}</td>
            <td>${productArray[i].name}</td>
            <td>
                <button class="btn btn-success">Visit</button>
            </td>
            <td>
                <button class="btn btn-danger" onclick = "deleteProducts(${i})">Delete</button>
            </td>
            <td>
            <button class="btn btn-primary" onclick = "patchValues(${i})">Update</button>
        </td>
        </tr>
        ` 
    }
    document.getElementById("demo").innerHTML = cartona
}

function resetProducts() {
    document.getElementById("siteName").value = ""
    document.getElementById("siteUrl").value = ""
}

function checkLocalStorage() {
    if (localStorage.getItem("products") != null) {
        productArray = JSON.parse(localStorage.getItem("products"))
        loopProducts()
    }
}

function deleteProducts(index) {
    productArray.splice(index , 1)
    localStorage.setItem("products" , JSON.stringify(productArray))
    loopProducts()
}

function patchValues(index) {
    mainIndex = index
    document.getElementById("siteName").value = productArray[index].name
    document.getElementById("siteUrl").value = productArray[index].Url

    document.getElementById("addProduuct").innerHTML = "Update Product"

}


function validateName(text , pattern){
    return pattern.test(text)

}