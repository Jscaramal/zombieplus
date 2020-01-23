


module.exports = {
    'não cadastrado': (browser) => {
        let login = browser.page.login()
        login
            .with('zum404@yahoo.com', 'pwd123')
            .expectAlertDanger('Usuário e/ou senha inválidos')
    }
}