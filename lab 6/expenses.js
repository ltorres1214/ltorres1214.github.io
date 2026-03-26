document.getElementById("expenseForm").addEventListener("submit", function(e){
    e.preventDefault();

    const expensePlace = document.getElementById("expensePlace").value;
    const expenseDate = document.getElementById("expenseDate").value;
    const expenseAmount = document.getElementById("expenseAmount").value;
    const paymentMode = document.getElementById("paymentMode").value;
    const rationale = document.getElementById("rationale").value;

    const today = new Date();
    const selectedDate = new Date(expenseDate);
    if (selectedDate >= today) {
        alert("Expense date must be before today.");
        return;
    }

    const checkboxes = document.querySelectorAll('input[name="category"]:checked');
    if (checkboxes.length === 0) {
        alert("please select at least one expense category.");
        return;
    }

    console.log("Expense submitted successfully!");
     console.log("Place:", expensePlace);
      console.log("Date:", expenseDate);
       console.log("Amount:", expenseAmount);
        console.log("Payment Mode:", paymentMode);
         console.log("Rationale:", rationale);


})