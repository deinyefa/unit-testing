//- only expose expect here, not the eintire chai library
var expect = require("chai").expect;

function titleCase(title) {
	var newTitle = title.split(" ").map(function(el) {
		return el[0].toUpperCase() + el.substring(1);
  });
  return newTitle.join(" ");
}

expect(titleCase("the great mouse detective")).to.be.a("string");
expect(titleCase("a")).to.equal("A");
expect(titleCase("vertigo")).to.equal("Vertigo");
expect(titleCase("the great mouse detective")).to.equal(
	"The Great Mouse Detective"
);
