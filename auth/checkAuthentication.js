
function checkAuthentication(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.json('Logged Out')
    }
}

module.exports = checkAuthentication;


