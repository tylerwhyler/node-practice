exports.errorPage = (req, res, next) => {
    return res.status(404).render('404', {
        title: 'Error Page', 
        path: `${req.url}` 
    })
}