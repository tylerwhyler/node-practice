const User = require('../models/user'); 

exports.getAddUser = (req, res, next) => {
    return res.render('add-user', { 
        title: 'Add user',
        usersCSS: true,
        activeAddUser: true,
        path: '/admin/add-user'
    })
}

exports.postAddUser = (req, res, next) => {
    const user = new User(req.body.user);
    user.save();
    return res.redirect('/');
}

exports.getUsers = (req, res, next) => {
    const users = User.fetchAll();
    console.log(users)
    return res.render('splash', { 
        userList: users, 
        title: "Splash page",
        path: '/',
        hasUsers: users.length > 0 ? true : false,
        activeSplash: true,
        usersCSS: true,
        //layout: false -> special keyword to not use the layout
    });
}
