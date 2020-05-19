// //Business logic

  function Order(pizzaSize, pizzaCrust){
      this.pizzaSize = pizzaSize;
      this.pizzaCrust = pizzaCrust;
  }
  Order.prototype.totallCost = function(){
      if (this.pizzaSize === ""){}
  }



//User interface logic
$(document).ready(function(){
    $("form#checkout").submit(function(event){
        event.preventDefault();
        var pizzaSize = $("#size").val();
        alert(pizzaSize)
        var pizzaCrust = $("#crust").val();
        alert(pizzaCrust)
        var topping = $("#topping").val();
        alert(topping)
        
    });
   

});

