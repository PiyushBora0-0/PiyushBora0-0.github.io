/**
 * Test suite for Learning.html card layout and responsiveness.
 * 
 * Instructions:
 * 1. Open `Learning.html` in a web browser.
 * 2. Open the browser's developer console (usually by pressing F12).
 * 3. Copy and paste the functions below into the console.
 * 4. Call the main test function, e.g., `runLearningPageTests()`.
 * 5. Check the console output for results.
 * 
 * Note: These tests check for the presence and structure of elements 
 * and classes that are indicative of Bootstrap's responsive card layout.
 * They do not visually verify the layout at different viewport sizes.
 */

function checkLearningNavbar() {
    const navbar = document.querySelector('.navbar.fixed-top');
    if (navbar) {
        console.log('PASS: Navbar is present on Learning.html.');
        const navbarBrand = navbar.querySelector('.navbar-brand');
        if (navbarBrand && navbarBrand.getAttribute('href') === '/index.html') {
            console.log('PASS: Navbar brand links to /index.html.');
            return true;
        } else {
            console.error('FAIL: Navbar brand is missing or does not link to /index.html.');
            return false;
        }
    } else {
        console.error('FAIL: Navbar is NOT present on Learning.html.');
        return false;
    }
}

function checkLearningSectionTitle() {
    const sectionTitle = document.querySelector('.section-title');
    if (sectionTitle && sectionTitle.textContent.includes('My Learning Projects')) {
        console.log('PASS: Section title "My Learning Projects" is present.');
        return true;
    } else {
        console.error('FAIL: Section title "My Learning Projects" is NOT present or has incorrect text.');
        return false;
    }
}

function checkCardContainerAndResponsiveClasses() {
    const cardContainer = document.querySelector('.container .row.row-cols-1.row-cols-md-2.row-cols-lg-3.g-4');
    if (cardContainer) {
        console.log('PASS: Card container with Bootstrap responsive classes (row-cols-*, g-4) is present.');
        return true;
    } else {
        console.error('FAIL: Card container with Bootstrap responsive classes is NOT present. Searched for ".container .row.row-cols-1.row-cols-md-2.row-cols-lg-3.g-4".');
        return false;
    }
}

function checkProjectCards() {
    const expectedCardCount = 7;
    const projectCards = document.querySelectorAll('.project-card');
    
    if (projectCards.length === expectedCardCount) {
        console.log(`PASS: Found expected number of project cards (${expectedCardCount}).`);
    } else {
        console.error(`FAIL: Expected ${expectedCardCount} project cards, but found ${projectCards.length}.`);
        return false;
    }

    let allCardsValid = true;
    projectCards.forEach((card, index) => {
        if (!card.classList.contains('card')) {
            console.error(`FAIL: Project card ${index + 1} is missing the 'card' class.`);
            allCardsValid = false;
        }
        const title = card.querySelector('.card-title');
        if (!title || !title.textContent.trim()) {
            console.error(`FAIL: Project card ${index + 1} is missing a title or title is empty.`);
            allCardsValid = false;
        }
        const button = card.querySelector('.btn.btn-primary');
        if (!button || !button.getAttribute('href')) {
            console.error(`FAIL: Project card ${index + 1} is missing a "View Project" button or href attribute.`);
            allCardsValid = false;
        }
        // Check for icon
        const icon = card.querySelector('.card-title .fas');
        if (!icon) {
            console.warn(`WARN: Project card ${index + 1} is missing an icon (fas).`);
            // Not failing the test for a missing icon, but logging a warning.
        }
    });

    if (allCardsValid) {
        console.log('PASS: All project cards have the expected basic structure (card class, title, button).');
    } else {
        console.error('FAIL: Some project cards have structural issues.');
    }
    return allCardsValid;
}

function checkLearningFooter() {
    const footer = document.querySelector('.footer');
    if (footer) {
        console.log('PASS: Footer section is present on Learning.html.');
        const text = footer.querySelector('p');
        if (text && text.textContent.includes('Piyush Bora. All Rights Reserved.')) {
            console.log('PASS: Footer contains expected copyright text.');
            return true;
        } else {
            console.error('FAIL: Footer is missing or does not contain expected copyright text.');
            return false;
        }
    } else {
        console.error('FAIL: Footer section is NOT present on Learning.html.');
        return false;
    }
}

function runLearningPageTests() {
    console.log("--- Running Learning.html Card Layout and Responsiveness Tests ---");
    let allTestsPassed = true;

    if (!checkLearningNavbar()) allTestsPassed = false;
    if (!checkLearningSectionTitle()) allTestsPassed = false;
    if (!checkCardContainerAndResponsiveClasses()) allTestsPassed = false;
    if (!checkProjectCards()) allTestsPassed = false;
    if (!checkLearningFooter()) allTestsPassed = false;

    if (allTestsPassed) {
        console.log("--- All Learning.html checks passed (based on DOM structure) ---");
    } else {
        console.error("--- Some Learning.html checks FAILED (based on DOM structure) ---");
    }
    return allTestsPassed;
}

// To run tests:
// 1. Open Learning.html in a browser.
// 2. Open the developer console.
// 3. Paste all the code from this file into the console.
// 4. Execute: runLearningPageTests();
// Note: These tests primarily check for the existence of Bootstrap classes and structure 
// that enable a responsive card layout. True responsiveness testing requires visual inspection 
// or more advanced tools.
