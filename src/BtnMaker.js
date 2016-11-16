function btnMaker(title){
  console.log(title);
  if (title == "CEO"){


    var btn = document.createElement("BUTTON");
    btn.appendChild(document.createTextNode("Fire All"));

    document.body.appendChild(btn);
  }
}
