const {models} = require("../libs/sequelize");
const crypto = require('crypto');

const nodemailer = require("nodemailer");
// 7uppromopr@gmail.com
//https://dim.mcusercontent.com/cs/2355be6a925123667641e4551/images/c3fe9771-322f-e344-2135-a6585f5db12c.png?w=561&dpr=2
//https://dim.mcusercontent.com/cs/2355be6a925123667641e4551/images/c0d528b5-ad70-af56-213c-ac5b70edfaae.png?w=561&dpr=2
//https://dim.mcusercontent.com/cs/2355be6a925123667641e4551/images/1360d8e0-bbbf-6aa5-8f05-b4dd91945f24.png?w=561&dpr=2


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "7uppromopr@gmail.com",
    pass: "ozgendmrftnqalps",
  },
});


const create = async (req, res) => {
  try {
    //faltaria enviar un email de confirmacion al usuario
    const newPerson = await models.Person.create(req.body);
    let envio = `
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #28a745; font-family: Arial, sans-serif;">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; margin: 20px auto; border-radius: 8px; overflow: hidden;">
        <tr>
          <td style="padding: 0;">
            <img src="https://dim.mcusercontent.com/cs/2355be6a925123667641e4551/images/c3fe9771-322f-e344-2135-a6585f5db12c.png?w=561&dpr=2" alt="7up Promo Header" width="600" style="display: block; width: 100%;">
          </td>
        </tr>

        <tr>
          <td style="padding: 30px; background-color: #28a745; text-align: center; color: #000;">
            <b style="font-size: 30px; margin: 0 0 10px; color: #ffdd00;">${newPerson.name.toUpperCase()}</b>
            <br><br>
            <p style="font-size: 18px; margin: 0 0 10px; color: white;">
              Para completar tu registro,<br>
              da clic en el enlace que aparece a continuación:
            </p>
                            <!-- Button as image -->
                            <a href="https://www.7uppr.com/validate"  target="_blank" style="display: inline-block; text-decoration: none;">
                              <img src="https://dim.mcusercontent.com/cs/2355be6a925123667641e4551/images/c0d528b5-ad70-af56-213c-ac5b70edfaae.png?w=561&dpr=2" alt="Confirma tu cuenta" width="250" style="margin: 20px 0;">
                            </a>
          
            <p style="font-size: 18px; margin: 0 0 10px; color: white;">
              Si no puedes dar clic en el botón,<br>
              copia y pega el siguiente vínculo en tu explorador:
            </p>
            <p style="font-size: 18px; margin: 0 0 10px; color: white; font-weight: bold;">
               https://www.7uppr.com/validate
            </p>
            <p style="font-size: 18px; margin: 0 0 10px; color: white;">
              ¡Ahora podrás empezar a subir tus recibos para participar!
            </p>
          </td>
        </tr>

        <tr>
          <td style="padding: 0;">
            <img src="https://dim.mcusercontent.com/cs/2355be6a925123667641e4551/images/1360d8e0-bbbf-6aa5-8f05-b4dd91945f24.png?w=561&dpr=2" alt="7up Promo Footer" width="600" style="display: block; width: 100%;">
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
    `;


    const mailOptions = {
      from: "7uppromopr@gmail.com",
      to: newPerson.email,
      subject: "Registro",
      html: envio,
    };

    // Enviar el correo
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error enviando el correo:", error);
      } else {
        console.log("Correo enviado: " + info.response);
      }
    });
  

    res.json({ success: true, data: newPerson });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};


const confirmEmail = async (req, res) => {
  try {

    const person = await models.Person.findByPk(req.body.id);

    person.confirmEmail = true;
    await person.save();

    res.json({ success: true, data: person });

  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};


const getByEmail = async (req, res) => {
  try {
    const person = await models.Person.findOne({
      where: {
        email: req.body.email,
        pass: req.body.pass
      }, 
    });

    if (!person) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, data: person });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};


const deleteUser = async (req, res) => {
  try {
    const { id } = req.body;

    const deleted = await models.Person.destroy({
      where: { id: id },
    });

    if (!deleted) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, message: "User deleted" });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};


const generateTokenByUser = async (req, res) => {
  try {
    const person = await models.Person.findOne({
      where: {
        email: req.body.email
      }, 
    });

    // Generar un token aleatorio
    const token = crypto.randomBytes(32).toString('hex');

    console.log("token", token);
    

    person.tokenResetPass = token

    await person.save();


    let envio = `
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #28a745; font-family: Arial, sans-serif;">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; margin: 20px auto; border-radius: 8px; overflow: hidden;">
        <tr>
          <td style="padding: 0;">
            <img src="https://dim.mcusercontent.com/cs/2355be6a925123667641e4551/images/c3fe9771-322f-e344-2135-a6585f5db12c.png?w=561&dpr=2" alt="7up Promo Header" width="600" style="display: block; width: 100%;">
          </td>
        </tr>

        <tr>
          <td style="padding: 30px; background-color: #28a745; text-align: center; color: #000;">
            <b style="font-size: 30px; margin: 0 0 10px; color: #ffdd00;">${person?.name?.toUpperCase()}</b>
            <br>
            <p style="font-size: 18px; margin: 0 0 10px; color:  #ffffff;">Para recuperar tu contraseña, <br>
              da clic en el enlace que aparece a continuación. <br>
              https://www.7uppr.com/pass/${token}
              </p>
           
            <p style="font-size: 18px; margin: 0 0 10px; color:  #ffffff;;">
              ¡GRACIAS!
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding: 0;">
            <img src="https://dim.mcusercontent.com/cs/2355be6a925123667641e4551/images/1360d8e0-bbbf-6aa5-8f05-b4dd91945f24.png?w=561&dpr=2" alt="7up Promo Footer" width="600" style="display: block; width: 100%;">
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
    `;

    const mailOptions = {
      from: "7uppromopr@gmail.com",
      to: person.email,
      subject: "RECUPERAR TU CONTRASEÑA",
      html: envio,
    };

    // Enviar el correo
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.error("Error enviando el correo:", error);
        } else {
         console.log("Correo enviado: " + info.response);
      }
    });


    res.json({ success: true, message: "User deleted" });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};



const resetPass = async (req, res) => {
  try {
    const { tokenResetPass , pass } = req.body;

    const person = await models.Person.findOne({
      where: {
        tokenResetPass: tokenResetPass,
      }, 
    });

    person.pass = pass
    await person.save();

    res.json({ success: true, message: person });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};




generateTokenByUser


module.exports = {
  create,
  confirmEmail,
  getByEmail,
  deleteUser,
  resetPass,
  generateTokenByUser
};