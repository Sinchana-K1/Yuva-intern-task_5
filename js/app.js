
document.addEventListener('DOMContentLoaded', () => {
    const applicationViews = {
        home: `<div class="spa-fade-in"><h2>Welcome to the Capstone SPA Shell</h2></div>`,
        profile: `<div class="spa-fade-in"><h2>Candidate Profile: Sinchana K</h2></div>`,
        performance: `<div class="spa-fade-in"><h2>System Router Diagnostic Ledger</h2></div>`
    };

    const viewRootNode = document.getElementById('view-router-root');
    const navigationLinks = document.querySelectorAll('#spa-nav-menu a');

    function coreAppRouter(targetRoute) {
        viewRootNode.classList.remove('spa-fade-in');
        void viewRootNode.offsetWidth;
        viewRootNode.innerHTML = applicationViews[targetRoute] || `<h2>404 - Missing</h2>`;
        viewRootNode.classList.add('spa-fade-in');
    }

    navigationLinks.forEach(l =>
        l.addEventListener('click', () =>
            coreAppRouter(l.getAttribute('data-link'))
        )
    );
});
                          
