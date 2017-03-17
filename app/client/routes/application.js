/**
 General Route definitions
 **/

Router.configure({

    layoutTemplate: 'blank',
    notFoundTemplate: '404',
    loadingTemplate: 'loading',
    trackPageView: true
});

Router.route('/', function() {

    this.render('home');
});