const inpFile = document.getElementById("inpFile");
const previewContainer = document.getElementById("imagePreview");
const previewImage = previewContainer.querySelector(".image-preview__image");

inpFile.addEventListener("change", function() {
    const file = this.files[0];
    if(file) {
        const reader = new FileReader();
        
        reader.addEventListener("load", function(){
            previewImage.setAttribute("src", this.result);
        });

        inpFile.style.display = "none";
        previewImage.style.display = "block";

        reader.readAsDataURL(file);
    } else {
        inpFile.style.display = null;
        previewImage.style.display = null;
        previewImage.setAttribute("src", "");
    }

});

const realFileBtn = document.getElementById("inpFile");
const customBtn = document.getElementById("custom-button");

    customBtn.addEventListener("click", function(){
        realFileBtn.click()
    });

