document.getElementsByClassName('par1')[0].onclick = function () {
    if (document.getElementsByClassName('leftCol')[0].style.display === "flex") {
        document.getElementsByClassName('leftCol')[0].style.display = 'none'
        darken(document.getElementsByClassName('par1')[0])
    }
    else {
        document.getElementsByClassName('leftCol')[0].style.display = "flex"
        brighten(document.getElementsByClassName('par1')[0])
    }
}
document.getElementsByClassName('par2')[0].onclick = function () {
    if (document.getElementsByClassName('leftCol')[0].style.display === "flex") {
        document.getElementsByClassName('leftCol')[0].style.display = 'none'
        darken(document.getElementsByClassName('par2')[0])
    }
    else {
        document.getElementsByClassName('leftCol')[0].style.display = "flex"
        brighten(document.getElementsByClassName('par2')[0])
    }
}
document.getElementsByClassName('par3')[0].onclick = function () {
    if (document.getElementsByClassName('leftCol')[0].style.display === "flex") {
        document.getElementsByClassName('leftCol')[0].style.display = 'none'
        darken(document.getElementsByClassName('par3')[0])
    }
    else {
        document.getElementsByClassName('leftCol')[0].style.display = "flex"
        brighten(document.getElementsByClassName('par3')[0])
    }
}
document.getElementsByClassName('par4')[0].onclick = function () {
    if (document.getElementsByClassName('leftCol')[0].style.display === "flex") {
        document.getElementsByClassName('leftCol')[0].style.display = 'none'
        darken(document.getElementsByClassName('par4')[0])
    }
    else {
        document.getElementsByClassName('leftCol')[0].style.display = "flex"
        brighten(document.getElementsByClassName('par4')[0])
    }
}
document.getElementsByClassName('par5')[0].onclick = function () {
    if (document.getElementsByClassName('leftCol')[0].style.display === "flex") {
        document.getElementsByClassName('leftCol')[0].style.display = 'none'
        darken(document.getElementsByClassName('par5')[0])
    }
    else {
        document.getElementsByClassName('leftCol')[0].style.display = "flex"
        brighten(document.getElementsByClassName('par5')[0])
    }
}

function darken(shower, base) {
    document.getElementsByClassName("par1")[0].style.display = "none"
    document.getElementsByClassName("par2")[0].style.display = "none"
    document.getElementsByClassName("par3")[0].style.display = "none"
    document.getElementsByClassName("par4")[0].style.display = "none"
    document.getElementsByClassName("par5")[0].style.display = "none"
    shower.style.display = "block"
    shower.style.width = "150%"
    shower.style.height = "150%"
}

function brighten(shower) {
    document.getElementsByClassName("par1")[0].style.display = "block"
    document.getElementsByClassName("par2")[0].style.display = "block"
    document.getElementsByClassName("par3")[0].style.display = "block"
    document.getElementsByClassName("par4")[0].style.display = "block"
    document.getElementsByClassName("par5")[0].style.display = "block"
    shower.style.width = ""
    shower.style.height = ""

}