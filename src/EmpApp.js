function EmpApp(){
	this.list = new EmpList();
	this.count = 1;
	this.newItemName;
	this.newItemSkill;
	this.newItemTitle;
	this.checkIn = "--";

}

EmpApp.prototype.empTime = function(){
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

	this.checkIn = hours +":"+ minutes +":"+ seconds;
};

EmpApp.prototype.addItem = function(){
	if (this.newItemName && this.newItemSkill && this.newItemTitle){
		var newItem = new EmpItem(this.count, this.newItemName, this.newItemSkill,
															this.newItemTitle, this.checkIn);
		this.list.addItem(newItem);
	  this.newItemName = null;
	  this.newItemSkill = null;
	  this.newItemTitle = null;
		this.count++;
		this.checkIn = null;
	}
};

function EmpAppView(empApp){
	var self = this,
		template;

	function init(){
		var source = document.getElementById("empApp").innerHTML;
		template = Handlebars.compile(source);
		self.html = document.createElement("div");
	}

	function render(){
		self.html.innerHTML = template(empApp);

		var list = self.html.querySelector(".list");
		var empListView = new EmpListView(empApp.list);
		list.appendChild(empListView.html);

		var empName = self.html.querySelector("#empName");
		empName.addEventListener("change", onInputName);

    var empSkill = self.html.querySelector("#empSkill");
		empSkill.addEventListener("change", onInputSkill);

    var empTitle = self.html.querySelector("#empTitle");
		empApp.newItemTitle = empTitle.options[empTitle.selectedIndex].value;
    empTitle.addEventListener("change", onInputTitle);

		var addButton = self.html.querySelector('#add');
		addButton.addEventListener("click", onAddClick);
	}

	function onInputName(){
		empApp.newItemName = this.value;
	}

	function onInputSkill(){
		empApp.newItemSkill = this.value;
	}

	function onInputTitle(){
		empApp.newItemTitle = this.value;
	}

	function onAddClick(){
		empApp.empTime();
		btnMaker(empApp.newItemTitle);
		empApp.addItem();
		render();

	}

	init();
	render();
}
