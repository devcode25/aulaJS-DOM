const turnOn = document.getElementById( 'turnOn' );
const turnOff = document.getElementById( 'turnOff' );
const lamp = document.getElementById( 'lamp' );

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
    if (!isLampBroken ()) {
        lamp.src='./img/ligada.jpg';
    }
}

function lampOff() {
    if (!isLampBroken ()) {
        lamp.src='./img/desligada.jpg';
    }
}

turnOn.addEventListener('click', lampOn);

lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
