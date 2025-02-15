export  function showToast(operation,id) {
    const toast = document.createElement("div");
    toast.classList.add("toast");

    if (operation==="add") {
        toast.textContent = `Product With ID ${id} has been Added.`;
    }else{
        toast.textContent = `Product With ID ${id} has been Deleted.`;
    }
    document.body.append(toast);

    setTimeout(() => {
        toast.remove(); 
    }, 2000);
}