document.getElementById("expenses form").addEventListener("submit", function(e){
    e.preventDefault();

    const expensePlace = document.getElementById("expensePlace").value;
    const expenseDate = document.getElementById("expenseDate").value;
    const expenseAmount = document.getElementById("expenseAmount").value;
    const paymentMode = document.getElementById("paymentMode").value;
    const rationale = document.getElementById("rationale").value;

    const today = new Date();
    
})