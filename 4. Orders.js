function orders(product, quantity) {
    let finalSum = 0;
    switch (product) {
        case "coffee": finalSum = quantity * 1.50; break;
        case "coke": finalSum = quantity * 1.40; break;
        case "water": finalSum = quantity * 1.00; break;
        case "snacks": finalSum = quantity * 2.00; break;
    }
    console.log(finalSum.toFixed(2));
    // function pricePerPeace (product){
    //     switch (product) {
    //             case "coffee": price=1.50;break;
    //             case "coke": price=1.40;break;
    //             case "water": price=1.00;break;
    //             case "snacks": price=2.00;break;
    //         }
    
    // let totalSum = pricePerPeace(product)*orders(quantity)

  //  console.log(totalSum);
}
orders("water", 5);
orders("coffee", 2);
