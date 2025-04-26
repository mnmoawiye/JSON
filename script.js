document.addEventListener('DOMContentLoaded', function() {
    const fName = document.getElementById('firstName');
    const lName = document.getElementById('lastName');
    const courseInput = document.getElementById('course');
    const secNum = document.getElementById('section');
    const userRole = document.getElementById('role');
    const showBtn = document.getElementById('showJsonButton');

    showBtn.addEventListener('click', function() {
        const userInfo = {
            firstName: fName.value,
            lastName: lName.value,
            course: courseInput.value,
            section: secNum.value,
            role: userRole.value
        };

        console.log('Person object:');
        console.log(userInfo);
        console.log('JSON format:');
        console.log(JSON.stringify(userInfo, null, 2));
    });
});
