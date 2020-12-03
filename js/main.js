const app = new Vue ({
    el: "#app",
    data: {
        header: [
            {
                name: 'home',
                link: 'https://maxcoach.thememove.com/'
            },
            {
                name: 'pages',
                link: 'https://document.thememove.com/maxcoach/'
            },
            {
                name: 'courses',
                link: 'https://document.thememove.com/maxcoach/page/create-new-page.html',
            },
            {
                name: 'features',
                link: 'https://document.thememove.com/maxcoach/build-your-site/wordpress-configuration.html',
            },
            {
                name: 'blog',
                link: 'https://document.thememove.com/maxcoach/page/page-options.html',
            },
            {
                name: 'shop',
                link: 'https://document.thememove.com/maxcoach/widget/create-sidebar.html',
            },
        ],
        footer: [
            {
                icon: 'fab fa-facebook-square',
                link: 'www.facebook.com',
            },
            {
                icon: 'fab fa-twitter-square',
                link: 'www.twitter.com',
            },
            {
                icon: 'fab fa-instagram-square',
                link: 'www.instagram.com',
            },
            {
                icon: 'fab fa-linkedin',
                link: 'www.linkedin.com',
            },
        ]
    }
});