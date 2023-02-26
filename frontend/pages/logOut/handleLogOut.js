export const handleLogOut = (lgnButton) => {
    lgnButton.addEventListener("click", ()=>{
        localStorage.clear()
})
}