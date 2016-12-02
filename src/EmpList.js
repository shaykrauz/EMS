function EmpList(list){
	this.empItemsList = list || [];
}

EmpList.prototype.addItem = function(empItem){
	this.empItemsList.push(empItem);
};

function EmpListView(empList){
	var template,
		self = this;

	function init(){
		var source = document.getElementById("empList").innerHTML;
		template = Handlebars.compile(source);
		self.html = document.createElement("div");
	}

	function render(){
		self.html.innerHTML = template(empList);

		var ul = self.html.querySelector("ul");
		renderItems(ul);
	}

	function renderItems(ul){
		for(var i=0; i<empList.empItemsList.length; i++){
			var item = empList.empItemsList[i];
			var itemView = new EmpItemView(item);
			ul.appendChild(itemView.html);
		}
	}

	init();
	render();
}
