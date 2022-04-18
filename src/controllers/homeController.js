let dashboardIndex = (req, res) => {
    res.render('pages/dashboard');
}
let tableIndex = (req, res) => {
    res.render('pages/table');
}
let billingIndex = (req, res) => {
    res.render('pages/billing');
}
let profileIndex = (req, res) => {
    res.render('pages/profile');
}
let loginIndex = (req, res) => {
    res.render('acounts/login');
}
let registerIndex = (req, res) => {
    res.render('acounts/register');
}

module.exports = {
    dashboardIndex: dashboardIndex,
    tableIndex:tableIndex,
    billingIndex:billingIndex,
    profileIndex:profileIndex,
    loginIndex:loginIndex,
    registerIndex:registerIndex,
};