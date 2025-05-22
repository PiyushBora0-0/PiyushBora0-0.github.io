/**
 * Test suite for index.html responsiveness.
 * 
 * Instructions:
 * 1. Open `index.html` in a web browser.
 * 2. Open the browser's developer console (usually by pressing F12).
 * 3. Copy and paste the functions below into the console.
 * 4. Call the main test function, e.g., `runIndexResponsivenessTests()`.
 * 5. Check the console output for results.
 * 
 * Note: These tests check for the presence and structure of elements 
 * and classes that are indicative of Bootstrap's responsive design.
 * They do not visually verify the layout at different viewport sizes.
 */

function checkNavbarToggler() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler) {
        console.log('PASS: Navbar toggler button is present.');
        return true;
    } else {
        console.error('FAIL: Navbar toggler button is NOT present.');
        return false;
    }
}

function checkHeroSection() {
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        console.log('PASS: Hero section is present.');
        const container = heroSection.querySelector('.container');
        if (container) {
            console.log('PASS: Hero section has a .container element.');
            return true;
        } else {
            console.error('FAIL: Hero section is missing a .container element.');
            return false;
        }
    } else {
        console.error('FAIL: Hero section is NOT present.');
        return false;
    }
}

function checkPortfolioSection() {
    const portfolioSection = document.getElementById('portfolio');
    if (!portfolioSection) {
        console.error('FAIL: Portfolio section with ID "portfolio" is NOT present.');
        return false;
    }
    console.log('PASS: Portfolio section with ID "portfolio" is present.');

    const container = portfolioSection.querySelector('.container');
    if (!container) {
        console.error('FAIL: Portfolio section is missing a .container element.');
        return false;
    }
    console.log('PASS: Portfolio section has a .container element.');

    const row = portfolioSection.querySelector('.row');
    if (!row) {
        console.error('FAIL: Portfolio section is missing a .row element for project cards.');
        return false;
    }
    console.log('PASS: Portfolio section has a .row element for project cards.');

    const projectCards = portfolioSection.querySelectorAll('.col-lg-4.col-md-6.mb-4');
    if (projectCards.length >= 3) { // Expecting at least 3 project cards
        console.log(`PASS: Found ${projectCards.length} project card columns with responsive classes.`);
        return true;
    } else {
        console.error(`FAIL: Did not find enough project card columns with responsive classes. Found: ${projectCards.length}`);
        return false;
    }
}

function checkContactSection() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        console.log('PASS: Contact section with ID "contact" is present.');
        const container = contactSection.querySelector('.container');
        if (container) {
            console.log('PASS: Contact section has a .container element.');
            return true;
        } else {
            console.error('FAIL: Contact section is missing a .container element.');
            return false;
        }
    } else {
        console.error('FAIL: Contact section with ID "contact" is NOT present.');
        return false;
    }
}

function checkFooter() {
    const footer = document.querySelector('.footer');
    if (footer) {
        console.log('PASS: Footer section is present.');
        const container = footer.querySelector('.container');
        if (container) {
            console.log('PASS: Footer section has a .container element.');
            return true;
        } else {
            console.error('FAIL: Footer section is missing a .container element.');
            return false;
        }
    } else {
        console.error('FAIL: Footer section is NOT present.');
        return false;
    }
}


function runIndexResponsivenessTests() {
    console.log("--- Running index.html Responsiveness Tests ---");
    let allTestsPassed = true;

    if (!checkNavbarToggler()) allTestsPassed = false;
    if (!checkHeroSection()) allTestsPassed = false;
    if (!checkPortfolioSection()) allTestsPassed = false;
    if (!checkContactSection()) allTestsPassed = false;
    if (!checkFooter()) allTestsPassed = false;

    if (allTestsPassed) {
        console.log("--- All index.html responsiveness checks passed (based on DOM structure) ---");
    } else {
        console.error("--- Some index.html responsiveness checks FAILED (based on DOM structure) ---");
    }
    return allTestsPassed;
}

// To run tests:
// 1. Open index.html in a browser.
// 2. Open the developer console.
// 3. Paste all the code from this file into the console.
// 4. Execute: runIndexResponsivenessTests();
// Note: These tests primarily check for the existence of Bootstrap classes and structure 
// that enable responsiveness. True responsiveness testing requires visual inspection or 
// more advanced tools like Selenium or Puppeteer to control viewport sizes.
