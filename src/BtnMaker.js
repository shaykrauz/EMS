function BtnMaker(title){
  //check in button
  var chekBtn = document.createElement("button");
  chekBtn.innerHTML = "Check-In";
  // say yo button
  var yoBtn = document.createElement("button");
  yoBtn.innerHTML = "Say YO";

  var buttons = document.createElement("div");

  //Developer
  if (title == "Developer"){
    this.html = chekBtn;
    chekBtn.addEventListener('click',  checkin);

  }
  //Manager
  if (title == "Manager"){
    buttons.appendChild(yoBtn);
    buttons.appendChild(chekBtn);
    this.html = buttons;

    yoBtn.addEventListener('click',  yo);
    chekBtn.addEventListener('click',  checkin);
  }

  //Teacher
  if (title == "Teacher"){
    this.html = chekBtn;
    chekBtn.addEventListener('click',  checkin);
  }

  //Designer
  if (title == "Designer"){
    this.html = chekBtn;
    chekBtn.addEventListener('click',  checkin);
  }

  //CEO
  if (title == "CEO"){
    var fireBtn = document.createElement("button");
    fireBtn.innerHTML = "Fire All!!";
    buttons.appendChild(yoBtn);
    buttons.appendChild(fireBtn);
    this.html = buttons;
    yoBtn.addEventListener('click',  yo);
    fireBtn.addEventListener('click',  fire);
  }
 }

 function checkin(event){


   var emp = event.path[2];
   var time = empTime();
   $(emp).children('p').last().html("<b>Last Check-in: <b>" + time);
   console.log(emp);
 }

function empTime(){
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var arr = [hours, minutes, seconds].map(function(num) {
    return num < 10 ? '0' + num : String(num);
  });
  hours = arr[0];
  minutes = arr[1];
  seconds = arr[2];

  return hours +":"+ minutes +":"+ seconds;
}

function yo(){
  alert("YO YO!");
}

function fire(){
  alert("Fireddd!");
}
