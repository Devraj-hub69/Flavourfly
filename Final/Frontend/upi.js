// document.addEventListener("DOMContentLoaded", () => {

//     document.querySelector('form').addEventListener('submit', (event) => {
//         event.preventDefault(); // Prevent default form submission

//         let upiId = document.querySelector('#upiId').value.trim();
//         let accountHolder = document.querySelector('#upiName').value.trim();
//         let phoneNum = document.querySelector('#phoneNum').value.trim();
//         let amount = document.querySelector('#amount').value.trim();

//         // Validate UPI ID (basic format: text@upi)
//         let upiPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+$/;
//         if (!upiPattern.test(upiId)) {
//             alert("Invalid UPI ID. It should be in format: example@upi");
//             return;
//         }

//         // Validate Account Holder Name (at least 3 characters)
//         if (accountHolder.length < 3) {
//             alert("Invalid Account Holder Name. Must be at least 3 characters.");
//             return;
//         }

//         // Validate Phone Number (must be 10 digits)
//         let phonePattern = /^\d{10}$/;
//         if (!phonePattern.test(phoneNum)) {
//             alert("Invalid Phone Number. It must be exactly 10 digits.");
//             return;
//         }

//         // Validate Amount (must be a positive number)
//         if (isNaN(amount) || parseFloat(amount) <= 0) {
//             alert("Invalid Amount. Enter a valid positive number.");
//             return;
//         }

//         // Confirmation before processing
//         if (confirm(`Confirm payment of ₹${amount}?`)) {
//             alert(`₹${amount} Payment Successfully Processed via UPI!`);
//             document.querySelector('form').submit(); 
//         }
//     });

// });

// document.addEventListener("DOMContentLoaded", () => {
//     let form = document.querySelector('form');
//     let submitBtn = form.querySelector('button[type="submit"]');

//     form.addEventListener('submit', (event) => {
//         event.preventDefault(); // Prevent default form submission

//         let upiId = document.querySelector('#upiId').value.trim();
//         let accountHolder = document.querySelector('#upiName').value.trim();
//         let phoneNum = document.querySelector('#phoneNum').value.trim();
//         let amount = document.querySelector('#amount').value.trim();

//         // Validate UPI ID (basic format: text@upi)
//         let upiPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+$/;
//         if (!upiPattern.test(upiId)) {
//             showToast("❌ Invalid UPI ID. Format: example@upi", "linear-gradient(to right, #ff5f6d, #ffc371)");
//             return;
//         }

//         // Validate Account Holder Name (at least 3 characters)
//         if (accountHolder.length < 3) {
//             showToast("❌ Invalid Account Holder Name. Must be at least 3 characters.", "linear-gradient(to right, #ff5f6d, #ffc371)");
//             return;
//         }

//         // Validate Phone Number (must be 10 digits)
//         let phonePattern = /^\d{10}$/;
//         if (!phonePattern.test(phoneNum)) {
//             showToast("❌ Invalid Phone Number. It must be exactly 10 digits.", "linear-gradient(to right, #ff5f6d, #ffc371)");
//             return;
//         }

//         // Validate Amount (must be a positive number)
//         if (isNaN(amount) || parseFloat(amount) <= 0) {
//             showToast("❌ Invalid Amount. Enter a valid positive number.", "linear-gradient(to right, #ff5f6d, #ffc371)");
//             return;
//         }

//         // Disable submit button & show processing message
//         submitBtn.disabled = true;
//         submitBtn.textContent = "Processing...";

//         // Confirmation before processing
//         if (confirm(`Confirm payment of ₹${amount}?`)) {
//             showToast(`✅ ₹${amount} Payment Successfully Processed via UPI!`, "linear-gradient(to right, #00b09b, #96c93d)");

//             setTimeout(() => {
//                 form.submit(); // Proceed with submission
//             }, 2000);
//         } else {
//             // Re-enable button if cancelled
//             submitBtn.disabled = false;
//             submitBtn.textContent = "Pay Now";
//         }
//     });

//     function showToast(message, bgColor) {
//         Toastify({
//             text: message,
//             duration: 3000,
//             close: true,
//             gravity: "top",
//             position: "center",
//             stopOnFocus: true,
//             style: {
//                 background: bgColor,
//                 color: "#fff",
//                 fontSize: "14px",
//                 borderRadius: "6px",
//                 padding: "8px 12px"
//             }
//         }).showToast();
//     }
// });

document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('form');
    let submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        let upiId = document.querySelector('#upiId')?.value.trim();
        let accountHolder = document.querySelector('#upiName')?.value.trim();
        let phoneNum = document.querySelector('#phoneNum')?.value.trim();
        let amount = document.querySelector('#amount')?.value.trim();

        // Validate UPI ID (basic format: text@upi)
        let upiPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+$/;
        if (!upiPattern.test(upiId)) {
            showToast("❌ Invalid UPI ID. Format: example@upi", "linear-gradient(to right, #ff5f6d, #ffc371)");
            return;
        }

        // Validate Account Holder Name (at least 3 characters)
        if (accountHolder.length < 3) {
            showToast("❌ Invalid Account Holder Name. Must be at least 3 characters.", "linear-gradient(to right, #ff5f6d, #ffc371)");
            return;
        }

        // Validate Phone Number (must be 10 digits)
        let phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phoneNum)) {
            showToast("❌ Invalid Phone Number. It must be exactly 10 digits.", "linear-gradient(to right, #ff5f6d, #ffc371)");
            return;
        }

        // Validate Amount (must be a positive number)
        if (isNaN(amount) || parseFloat(amount) <= 0) {
            showToast("❌ Invalid Amount. Enter a valid positive number.", "linear-gradient(to right, #ff5f6d, #ffc371)");
            return;
        }

        // Check if submit button exists before disabling
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = "Processing...";
        }

        // Confirmation before processing
        if (confirm(`Confirm payment of ₹${amount}?`)) {
            showToast(`✅ ₹${amount} Payment Successfully Processed via UPI!`, "linear-gradient(to right, #00b09b, #96c93d)");

            setTimeout(() => {
                form.submit(); // Proceed with submission
            }, 2000);
        } else {
            // Re-enable button if cancelled
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = "Pay Now";
            }
        }
    });

    function showToast(message, bgColor) {
        Toastify({
            text: message,
            duration: 3000,
            close: true,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
                background: bgColor,
                color: "#fff",
                fontSize: "14px",
                borderRadius: "6px",
                padding: "8px 12px"
            }
        }).showToast();
    }
});
