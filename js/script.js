// //Business logic

  function Order(pizzaSize, pizzaCrust){
      this.pizzaSize = pizzaSize;
      this.pizzaCrust = pizzaCrust;
  }
  Order.prototype.totalCost = function(){
      if (this.pizzaSize === "small" && this.pizzaCrust === "crispy"){
            cost = 1500
      }
      else if (this.pizzaSize === "medium" && this.pizzaCrust === "crispy"){
            cost = 2000
      }
      else if (this.pizzaSize === "large" && this.pizzaCrust === "crispy"){
            cost = 3500
      }
      else if (this.pizzaSize === "small" && this.pizzaCrust === "stufed"){
           cost = 2000
      }
      else if (this.pizzaSize === "medium" && this.pizzaCrust === "stufed"){
           cost = 3500
      }
      else if (this.pizzaSize === "large" && this.pizzaCrust === "stufed"){
            cost = 4000
      }
      else if (this.pizzaSize === "small" && this.pizzaCrust === "gluten"){
            cost = 2500
      }
      else if (this.pizzaSize === "medium" && this.pizzaCrust === "gluten"){
            cost = 3500
      }
      else if (this.pizzaSize === "large" && this.pizzaCrust === "gluten"){
            cost = 5000
      }
      else {
        return "No selection"
      }
      return cost
  }




//User interface logic
$(document).ready(function(){
    $("form#checkout").submit(function(event){
        event.preventDefault();
        var pizzaSize = $("#size").val();
      
        var pizzaCrust = $("#crust").val();
        
        var topping = $("#topping").val();
      
        var quantity = $("#quantity").val();
      
        var delivery = $("#delivery").val();
      

        var newOrder = new Order(pizzaSize, pizzaCrust);
        var totalCost = newOrder.totalCost() * quantity;
        var totalDeliveryCost = newOrder.totalCost() * quantity + 500;
       
        
        if (delivery === "self"){
          alert("You have ordered " + pizzaSize + ", " + pizzaCrust + " pizza with " + topping + " topping. Your total cost will be " + totalCost)
        }
        else {
          
          alert("You have ordered " + pizzaSize + ", " + pizzaCrust + " pizza with " + topping + " topping. Your total cost will be " + totalDeliveryCost)

        }

    });

});

