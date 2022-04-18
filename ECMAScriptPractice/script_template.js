function print(firstName){
    console.log("Hello", firstName)

    // 1. ` .. `, Back ticks are template string.
    // 2. Template literals are enclosed by backtick (`) characters instead of double 
    //    or single quotes.
    // 3. Template literals provide an easy way to interpolate variables and 
    //    expressions into strings.
    // 4. Automatic replacing of variables with real values is called string interpolation ${..}.
    // 5. String Interpolation ${..}
    console.log(`Hello ${firstName}`);
}

print("Jacky Chan");

function createEmail(firstName, price){
    let shipping = 5.95;
    console.log(`
    Hi  ${firstName}! Thanks! 
    Total: $${price} 
    Shipping $${shipping}
    Grand Total: $${price + shipping}
    `)
}

createEmail("Guy", 100);

