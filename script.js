menu.onclick = function MenuToggle() {
    let x= document.getElementById('NAV');
    if (x.className==="NAV") {
        x.className += " open";
    }
    else {
        x.className = "NAV";
    }
}

checkbox_ph.onclick = function CheckBox(){
    let x= document.getElementById('checkbox_ph');
    if (x.className==="checkbox_phone closed") {
        x.className = "checkbox_phone open";
        let y= document.getElementById('buttonCall');
        y.className="button_call open";
    }
    else {
        x.className = "checkbox_phone closed";
        let y= document.getElementById('buttonCall');
        y.className="button_call closed";
    }
}
