var shareButton = document.getElementById("share-button-wrapper");

function toggleProperty(id, p_old, p_new){
    var div = document.getElementById(id);
    if(p_old == null){
        div.classList.add(p_new);
    }
    else if(p_new == null){
        div.classList.remove(p_old);
    }
    else{
        div.classList.remove(p_old);
        div.classList.add(p_new);
    }
}

shareButton.addEventListener("click", function(){
    if(window.innerWidth < 640){
        if(shareButton.classList.contains("bg-ECF2F8")){
            toggleProperty("share-button-wrapper", "bg-ECF2F8", "bg-6E8098");
            toggleProperty("share-button-wrapper", "fill-6E8098" ,"fill-white");
            toggleProperty("bottom-wrapper", null, "bg-48556A");
            toggleProperty("author", "flex", "hidden");
            toggleProperty("social-media", "hidden", "flex");
        }
        else{
            toggleProperty("share-button-wrapper", "bg-6E8098", "bg-ECF2F8");
            toggleProperty("share-button-wrapper", "fill-white", "fill-6E8098");
            toggleProperty("bottom-wrapper", "bg-48556A", null);
            toggleProperty("author", "hidden", "flex");
            toggleProperty("social-media", "flex", "hidden");
        }
    }
});

window.addEventListener("load", function(){
    if(this.window.innerWidth < 640){
        toggleProperty("popover-social-media", "inline-block", "hidden");
    }
});

window.addEventListener("resize", function(){
    if(this.window.innerWidth >= 640){
        toggleProperty("share-button-wrapper", "bg-6E8098", "bg-ECF2F8");
        toggleProperty("share-button-wrapper", "fill-white", "fill-6E8098");
        toggleProperty("bottom-wrapper", "bg-48556A", null);
        toggleProperty("author", "hidden", "flex");
        toggleProperty("social-media", "flex", "hidden");
        toggleProperty("popover-social-media", "hidden", "inline-block");
    }
    else{
        toggleProperty("popover-social-media", "inline-block", "hidden");
    }
});

shareButton.addEventListener("mouseover", function(){
    if (window.innerWidth >= 640){
        toggleProperty("share-button-wrapper", "bg-ECF2F8", "bg-6E8098");
        toggleProperty("share-button-wrapper", "fill-6E8098" ,"fill-white");
    }
});

shareButton.addEventListener("mouseout", function(){
    if (window.innerWidth >= 640){
        toggleProperty("share-button-wrapper", "bg-6E8098", "bg-ECF2F8");
        toggleProperty("share-button-wrapper", "fill-white", "fill-6E8098");
    }
});