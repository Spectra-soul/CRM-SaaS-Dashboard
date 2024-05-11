window.onload = function() {
    var viewportMetaTag = document.querySelector('meta[name="viewport"]');
    if(viewportMetaTag) {
        viewportMetaTag.body='width=device-width, initial-scale=1.0, maximum-scale=1.2';
    } 
}

function highlightRow(checkbox) {
    // Get the parent row of the checkbox
    var row = checkbox.parentNode.parentNode;

    // Toggle the highlighted class based on checkbox state
    if (checkbox.checked) {
        row.classList.add('highlighted');
    } else {
        row.classList.remove('highlighted');
    }
}

//Hamburger
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".left-section").style.left = "0"
    document.querySelector(".left-section").style.backgroundColor = "white";
    document.querySelector(".sidebar").style.width = "85%";
    document.querySelector(".close").style.display = "block";
})

//close button 
document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".left-section").style.left = "-350px"
    document.querySelector(".close").style.display = "none";

})


// Get the table body
const tableBody = document.querySelector('tbody');

//Get the brand name
const brandCategory = document.getElementById("selectBrand") ;

//Dropdown- Add event listener to the brand categories 
brandCategory.addEventListener("change", function() {
    const selectedCategory = brandCategory.value.toLowerCase();
    const rows = tableBody.querySelectorAll('tr');
    
    rows.forEach(row => {
        const brandName = row.querySelector('.brand-Name').textContent.toLowerCase(); 
        if (selectedCategory === "all brands" || brandName.includes(selectedCategory)) {
            row.style.display = ''; 
        } else {
            row.style.display = 'none'; 
        }
    }); 
  });
  

// Get the input field
const searchInput = document.getElementById('searchInput');

//Search Bar- Add event listener to the search input field
searchInput.addEventListener('input', function() {
    const searchText = searchInput.value.toLowerCase(); 
    const rows = tableBody.querySelectorAll('tr'); 

    rows.forEach(row => {
        const brandName = row.querySelector('.brand-Name').textContent.toLowerCase(); 
        if (brandName.includes(searchText)) {
            row.style.display = ''; 
        } else {
            row.style.display = 'none'; 
        }
    });
});



//Folders Dropdown Section
document.addEventListener("DOMContentLoaded", function() {
    const folderinfo = document.querySelectorAll(".folder-infos");

    folderinfo.forEach(folderContains => {
        const folder = folderContains.querySelector(".folder-type");
        const subFolders = folderContains.querySelector(".subfolder");
        const expandIcon = folderContains.querySelector("#expand-icon");

        folder.addEventListener("click", function() {
            if (subFolders.style.display === "block") {
                subFolders.style.display = "none";
                folderContains.style.marginBottom = "0";
                expandIcon.classList.remove("fa-sort-up");
                expandIcon.classList.add("fa-sort-down");
            } else {
                document.querySelectorAll(".subfolder").forEach(subFolder => {
                    subFolder.style.display = "none";
                });
                document.querySelectorAll(".folder-infos").forEach(fc => {
                    fc.style.marginBottom = "0";
                });
                document.querySelectorAll("#expand-icon").forEach(icon => {
                    icon.classList.remove("fa-sort-up");
                    icon.classList.add("fa-sort-down");
                });
                subFolders.style.display = "block";
                subFolders.style.backgroundColor = "white";
                subFolders.style.left = "20px";
                subFolders.style.overflow = "auto";
                folder.style.overflow = "auto";
                folderContains.style.marginBottom = "50px";
                expandIcon.classList.remove("fa-sort-down");
                expandIcon.classList.add("fa-sort-up");
            }
        });
    });
});

