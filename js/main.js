let primary-bg-color = "white";
let secondary-bg-color = "black";
let primary-text-color = "black";
let secondary-text-color = "white";
function switchOn(getElementById('day')){
    document.getElementsByTagName('body').style.backgroundColor = primary-bg-color;
    document.getElementsByTagName('body').style.color = primary-text-color;
}
function switchOff(getElementById('night')){
    document.getElementsByTagName('body').style.backgroundColor = secondary-bg-color;
    document.getElementsByTagName('body').style.color = secondary-text-color;
}
