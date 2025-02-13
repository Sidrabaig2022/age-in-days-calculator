document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    // Get the date of birth from the input field
    const dobInput = document.getElementById('dob').value;
    
    // Check if the date of birth is entered
    if (!dobInput) {
        alert('Please enter your date of birth.');
        return;
    }

    // Calculate age in days
    const birthDate = new Date(dobInput);
    const currentDate = new Date();
    
    // Difference in time between current date and birth date
    const diffInTime = currentDate - birthDate;
    
    // Convert time difference from milliseconds to days
    const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));
    
    // Display the result
    document.getElementById('result').textContent = `Your age in days is: ${diffInDays}`;
});
