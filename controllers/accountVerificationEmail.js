const { createTransport } = require('nodemailer')
const { google } = require('googleapis')

const OAuth2 = google.auth.OAuth2
// SE DEBE CREAR UN USUARIO DE GMAIL PARA SU APP
// Defino las varialbes de enterno con los datos de las credenciales de google
// Las credenciales van a manejar el envio de correos de verificacion

const { GOOGLE_ID, GOOGLE_REFRESH, GOOGLE_SECRET, GOOGLE_URL, GOOGLE_USER, BACK_URL } = process.env
// SE DEBE CREAR UN USUARIO DE GMAIL PARA SU APP

// Defino una funcion para construir la credencial
function createClient() {
    return new OAuth2( //requiere los datos que alojamos en las variables
        GOOGLE_ID,
        GOOGLE_SECRET,
        GOOGLE_URL
    )
}

// Defino el transportador 
function getTransport(client) {
    // la funcion requiere que le pase la credencial que retorno en la funcion anterior
    // accessToken tiene vencimiento
    // necesito utilizar metodos de google para poder "calcular" ese codigo
    // lo mas importante es entender que debo crear una variable con el token que se vence
    const accessToken = client.getAccessToken()
    // Importante: definir el transportador definiendo el servicio de mensajeria y
    // los datos de las credenciales
    return createTransport({
        service: 'gmail',
        auth:{
            user: GOOGLE_USER,
            type: 'OAuth2',
            clientId: GOOGLE_ID,
            clientSecret: GOOGLE_SECRET,
            refreshToken: GOOGLE_REFRESH,
            accessToken: accessToken
        },
        tls: {rejectUnauthorized: false} //Propiedad de seguridad
        // Para que el antivirus no rechace el mail (o lo mande a spam)
    })
}


//defino una funcion para definir el cuerpo del mail
//va a ser un template string
//debe tener un link hacia una ruta del controlador de usuario
//que cambie la propiedad verificado de false a true
//este metodo es otro metodo que hay que codear, no es parte del de signups
function getEmailBody({email, host, code}) {
    return `
        <div>
            <h1>Hola, ${email} </h1>
            <a href="${host}/auth/verify/${code}">
                Verify my account
            </a>
        </div>
    `
}

// defino una ultima funcion que junta todos los subpasos anteriores
// esta funcion es la que se necesita exportar y utilizar en el metodo SignUp para 
// efectivamente enviar el correo de verificacion 

const accountVerificationEmail = async (mailDelNuevoUsuario, codigoCalculadoConCrypto) => {
    // defino una credencial usando la funcion anterior
    const client = createClient()
    // Es necesario setearlo manualmente, por que el constructor NO admite
    // la propiedad REFRESH TOKEN para la creaction de una credencial
    client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH})
    const transport = getTransport(client)
    const mailOptions = {
        from: GOOGLE_USER, // Desde donde envio el correo
        to: mailDelNuevoUsuario, // hacia quien
        subject: 'Verify your new account in MyTinerary',
        html: getEmailBody({email : mailDelNuevoUsuario, code : codigoCalculadoConCrypto, host: BACK_URL })
    }
    console.log(mailDelNuevoUsuario);
    // Utilizo el metodo sendmail dle transportador para enviar el correo
    // 
    await transport.sendMail(
        // el metodo requireque les pase 
        mailOptions, // las opciones del correo
         (error, response) => { //  y una funcion callback para manejar el error
        if (error) {
            console.log(error)
            return
        }
        console.log("Email sent")
    })
}

module.exports =  accountVerificationEmail
