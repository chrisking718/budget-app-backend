module.exports = [
    {
        itemName: "the name of the transaction",
        amount: 11.11,
        date:"2023/1/1",
        from:"bank",
        category:"income"
        // item_name- string - the name of the transaction (ie: income, savings, cat food, etc.)
        // amount -number - 
        // the amount of the transaction
        // date- string - 
        // the date should be a simple string. As a bonus activity, use the date object and date input field and format it to be human-readable
        // from - string - who this transacton was with (ie. employer, bank, pet store, grocery store, etc)
        // category - string - what category does this fall into (income, savings, pets, food, etc) - bonus, make this an options list on the new/edit forms.

    },
    {
        itemName: "netflix",
        amount: 15.45,
        date:"2023/01/23",
        from:"netflix",
        category:"charge"
    },
    {
        itemName: "uber",
        amount: 25.96,
        date:"2023/10/25",
        from:"uber",
        category:"charge"
    },
]