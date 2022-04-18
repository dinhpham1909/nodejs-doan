let homeIndex = (req, res) => {
    res.render('index');
}
let getAboutPage = (req, res) =>{
    res.send('Định ơi Nam đi ăn cơm');
}

module.exports = {
    homeIndex: homeIndex,
    getAboutPage: getAboutPage,
};