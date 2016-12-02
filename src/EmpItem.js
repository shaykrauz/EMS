function EmpItem(labelId, labelName, labelSkill, labelTitle, labelCheck){
	this.labelId = labelId;
	this.labelName = labelName;
	this.labelSkill = labelSkill;
	this.labelTitle = labelTitle;
	this.labelCheck = labelCheck;
}

function EmpItemView(empItem){
	var template,
		self = this;

	function init(){
		var source = document.getElementById("empItem").innerHTML;
		template = Handlebars.compile(source);
		self.html = document.createElement("li");
	}

	function render(){
		self.html.innerHTML = template(empItem);
		//button add
		var buttons = new BtnMaker(empItem.labelTitle);
		self.html.querySelector(".empButtons").appendChild(buttons.html);
	}

	init();
	render();
}
