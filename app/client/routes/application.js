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

    this.wait(Meteor.subscribe('words'));

    if(this.ready()) {
        this.render('home');
    } else {
        this.render('loading');
    }
});