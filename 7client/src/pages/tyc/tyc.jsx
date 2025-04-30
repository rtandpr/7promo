import React, { useEffect } from 'react';
import styles from './tyc.module.css';
import Navbar from '../../components/navbar/navbar';
import title from "../../assets/tituloc.png";
import ProductosImg from "../../assets/productos.png";
import Footer from '../../components/footer/footer';
import ballonder2 from "../../assets/balloon_der2.png";
import ballonder from "../../assets/balloon_der.png";
import ballon1zq from "../../assets/balloon_izq.png";
import usePageTracking from "../../hooks/useGa";

const TyC = () => {
  usePageTracking()
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Términos & Condiciones / 7UP® & SCHWEPPES: ESTA PROMO ESTA DE MADRES';
        
      }, []);


  return (
    <div className={styles.tycBackground} id='tyc'>
      <div style={{height:"160px" , backgroundColor:"#32ab56"}} className='divSpac'></div>
    <div className={styles.container}>
        <div className={styles.navbarStyles}>
              <Navbar></Navbar>
        </div> 
        <div className={styles.container2}>
            <h1 className={styles.title}>
                <img src={title} alt="title" className={styles.titleImg} />
            </h1>




            <h1 style={{textAlign:"center", color:"white"}}>
              REGLAS OFICIALES DEL SORTEO <br />
              ESTA PROMO ESTA DE MADRES 7UP® y Schweppes- 2025 <br />
              NADA QUE COMPRAR PARA PARTICIPAR O GANAR

            </h1>


            <p className={styles.text}>
            1. DURACIÓN: El sorteo “ESTA PROMO ESTÁ DE ​MADRES” (en adelante denominado como el “Sorteo”), comienza a las 12:01 a.m. del 7 de abril de 2025 y finaliza a las 11:59 p.m. del 19 de mayo de 2025, (denominado en adelante como el “Periodo del Sorteo”).
           </p>

            <p className={styles.text}>
            2. ELEGIBILIDAD: Son elegibles para participar en este Sorteo todas las personas con dieciocho (18) años de edad o más, residentes legales de Puerto Rico (en adelante “Persona Elegible”). Todo menor de veintiún (21) años de edad deberá comparecer junto con su padre/madre y/o tutor legal al momento de reclamar un premio en caso de resultar como Ganador, quien deberá firmar el Relevo de Responsabilidad correspondiente a nombre del Ganador/a. No podrán participar empleados, familiares hasta el cuarto grado de consanguinidad y segundo de afinidad, así́ como personas que convivan, o tengan relaciones de pareja aunque no convivan, con empleados de Dr Pepper/Schweppes/ Seven Up, Inc., (en adelante denominados en conjunto como el “Promotor”) su agencia de publicidad RosadoToledo&, LLC (en adelante el “Administrador), o de Establecimientos Participantes, sus respectivas subsidiarias, afiliadas y suplidores en Puerto Rico, sus agencias de publicidad o relaciones públicas, y entidades relacionadas con el desarrollo de este Sorteo, agencias de producción o distribución de los materiales y premios del Sorteo. Cualquier persona que omita información para pretender que cualifica para ser ganador/a será descalificado del Sorteo y será sometido a las autoridades gubernamentales para los procedimientos civiles y/o penales correspondientes. Este Sorteo está limitado al área geográfica de Puerto Rico y está sujeto a todas las leyes y reglamentos aplicables.
           </p>


            <p className={styles.text}>3. ESTABLECIMIENTOS PARTICIPANTES: Los Establecimientos Participantes son cadenas de Supermercados Ralph’s.  </p>

            <p className={styles.text}>4. PRODUCTOS 7UP® PARTICIPANTES: Los “Productos Participantes” serán: cualquiera de dos (2), al menos uno (1) de 7UP® y uno (1) de Schweppes®, de 7UP® (regular), botella 1.25L.,  botella1.75L, lata 24pack, lata 18pack, lata 12pack, lata 8pack, lata 6pack, lata 4pack 7UP® Cero Azúcar  botella 1.25L.,  botella1.75L, lata 24pack, lata 18pack, lata 12pack, lata 8pack, lata 6pack, lata 4pack 7UP® Cherry  botella 1.25L.,  botella1.75L, lata 24pack, lata 18pack, lata 12pack, lata 8pack, lata 6pack, lata 4pack, Schweppes® (regular) botella 1.25L., Schweppes® botella1.75L, Schweppes Cero Azúcar  botella 1.25L.,  botella1.75L.

            </p>

            <p className={styles.text}>
                            
              5. CÓMO PARTICIPAR: El método seleccionado para participar no afecta sus probabilidades de ganar. Los participantes que de cualquier manera no estén en pleno cumplimiento con estas Reglas, serán descalificados. El Administrador del Sorteo y Promotor, se reservan el derecho de determinar si un participante se encuentra en incumplimiento de estas Reglas. Hay dos (2) formas de participar durante el Periodo del Sorteo.
              a. Mediante Compra: Toda Persona Elegible que visite cualquiera de los Establecimientos Participantes durante el Período del Sorteo y allí realice la compra de dos (2) o más de los Productos Schweppes y 7UP® Participantes detallados en la Sección 4 de estas Reglas, en una misma transacción de compra (mismo recibo de compra), deberá acceder a la página de Internet: www.7uppr.com, puede ser mediante QR Code, para suministrar la información personal requerida para inscribirse: “Nombre” (nombre y apellidos), “Dirección” (dirección física/postal), “Teléfono” (números de teléfonos) y “Email” (dirección de correo electrónico), y la foto del recibo de compra. Es requisito esencial que en el recibo de compra se pueda leer clara y específicamente identificados los productos participantes. Antes de someter su recibo de compra, marque con un círculo alrededor de los dos (2) o más productos Schweppes o 7UP®  que adquirió para participar. Pueden ser solo dos (2) productos Schweppes, solo dos (2) productos 7UP® o 1 (uno) de cada marca. Al leer y aceptar las Reglas Oficiales y demás términos y condiciones, automáticamente  queda  formalmente registrado. Participante deberá guardar y posteriormente presentar su recibo original de compra de Productos Participantes en caso de resultar como Ganador.
              Cada recibo de compra constituye una (1) sola participación, aunque el mismo contenga más de dos (2) Productos Participantes. Cada recibo de compra se podrá utilizar una (1) sola vez por un (1) solo participante. Recuerde fotocopiar y guardar el recibo con el que participó ya que es requisito esencial entregarlo al momento de reclamar cualquiera de los premios. NO SE ENTREGARÁN PREMIOS SIN RECIBO DE COMPRA ORIGINAL.
              b.  Participación Gratuita: Método Alterno de Participación-Nada que Comprar para Participar: Para participar sin Recibo de Compra, toda Persona Elegible deberá enviar dentro de un sobre (franqueo pago) (el “Sobre”) una tarjeta y/o ficha acompañada de dos (2) dibujos, en original, hechos a mano, de su propia creación, en blanco y negro, o a color (o facsímil/caracterización razonable) de cualquiera dos (2) diferentes etiquetas de los Productos Participantes (colectivamente, los “Dibujos”), junto con la siguiente información: (i) su nombre; (ii) apellidos; (iii) dirección de correo electrónico; (iv) dirección postal; y (v) números de teléfonos (la “Participación Gratuita”). Deberá enviar el Sobre con los Dibujos y la información antes indicada al siguiente nombre y dirección: “ESTA PROMO ESTÁ DE ​MADRES”,  RosadoToledo&, LLC,  207 Calle del Parque Ste 10 San Juan, PR 00912
              Previo al envío de los Dibujos la persona deberá fotocopiar los mismos y guardar dichas copias. En caso de resultar como ganador, la persona deberá presentar las copias de los Dibujos sometidos para participar al momento de reclamar su Premio.
              Parámetros para los Dibujos de la Participación Gratuita: 

              Los Dibujos deben ser creados por la Persona Elegible y no violar derechos de terceros, incluyendo, pero no limitándose a derechos de propiedad intelectual (ser de su autoría).
              Los Dibujos no pueden contener artes, ni marcas, ni logos de productos o servicios o nombres comerciales de terceros que no sean los Productos Participantes (incluyendo sin implicar limitación, envases, etiquetas o nombres de productos o servicios de terceros o piezas de ropa que tengan logos de diseñadores, insignias, etc. de terceros que no sean nombres, etiquetas o envases de los Productos Participantes). El Promotor se reserva el derecho de ofuscar, tapar o eliminar cualquier contenido identificable de terceros en la participación para permitir la participación o descalificar la participación directamente, a su entera discreción. 
              Los Dibujos no pueden contener el nombre, imagen o semejanza de cualquier figura pública o celebridad, esté vivo o muerto.
              Los Dibujos deben ser aptos para todo público y no pueden incluir contenido inapropiado, ofensivo o cuestionable, cuya determinación se reservan el Promotor y/o el Administrador a su entera y exclusiva discreción. Contenido que incluya, pero no limitándose a, el uso de violencia, odio, sexo, drogas, armas de fuego, discriminación de género o raza está prohibido, no es elegible para participar en este Sorteo y podrá resultar en la eliminación de la participación. 
              Los Dibujos no pueden presentar o representar al Promotor y/o al Administrador del Sorteo (incluyendo sus productos y/o servicios) o las marcas de los Productos Participantes –de una manera derogatoria o despreciativa o menoscabar la imagen de estos.
              Al someter los Dibujos o cualquier contenido como una participación a este Sorteo, representa y garantiza que dichos Dibujos le pertenecen de forma exclusiva, que tiene el derecho a utilizar su contenido como participación para este Sorteo, que no la ha utilizado antes para otro Sorteo o concurso y que con ella no viola ningún derecho personal ni de propiedad intelectual de terceros, incluyendo pero no limitado a, derechos de autor, derechos morales, derecho sobre marcas, nombres comerciales, patentes, y/o derechos publicitarios y/o de privacidad de ningún tercero. No obstante lo anterior, los participantes representan y garantizan que los Dibujos son creados exclusivamente para propósitos de participar en este Sorteo y que el Promotor no les autoriza a utilizar las marcas, etiquetas o diseños de los Productos Participantes para cualquier otro propósito que no sea para participar en este Sorteo. 
              Al someter los Dibujos como participación, el participante le concede expresamente al Promotor (y todos los agentes que este designe, incluyendo pero sin limitarse al Administrador) una licencia no exclusiva para utilizar todo material incluido en los Dibujos, copiar, publicar, poner, cargar, descargar, distribuir y editar dicho material, preparar duplicados y materiales derivativos, traducir, mezclar, agrupar o hacer cualquier tipo de composición con dicho material, según lo determine el Promotor para los propósitos de este Sorteo, u otros propósitos del Promotor incluyendo cualquier propósito de publicidad, promoción y comercial, sin más aprobación o derecho de revisión, con o sin atribución específica y sin compensación, mundialmente y sin limitación de tiempo y geografía en cualquier medio conocido o que sea descubierto posteriormente, incluyendo la red mundial de internet y cualquier plataforma de medios sociales y/o de comunicación; disponiéndose además que también consienten a su eliminación y/o destrucción conforme lo entienda apropiado el Promotor o sus agentes, una vez hayan decidido concluir su uso.
              Sólo dos (2) Dibujos permitidos por Sobre con matasellos de correo. Límite de una (1) Participación Gratuita por persona por cada día durante el Periodo del Sorteo.
              Participaciones Gratuitas deben tener matasellos con fecha dentro del Período del Sorteo. Participaciones Gratuitas deben ser recibidas en o antes del 12 de mayo de 2025 para ser válidas. Participaciones gratuitas que sean recibidas posterior a esa fecha no serán válidas para participar aun cuando tengan matasellos con fecha dentro del Período del Sorteo.
              Condiciones de Participación: Toda Participación debe incluir toda la información requerida para participar de lo contrario será descalificada. Se puede participar en más de una ocasión siempre y cuando se haga mediante un recibo de compra de Productos Participantes diferente. Mediante Método Alterno de Participación solo se aceptará una Participación por Persona Elegible por día según se describe en la Sección 5b de estas Reglas. Tanto la compra de Productos Participantes, como el someter la Participación deben realizarse durante el Período del Sorteo. No se aceptarán participaciones sometidas luego de terminado el Período del Sorteo, aun cuando la compra se haya realizado durante el Período del Sorteo.
              Toda participación con información incompleta, ilegible, incorrecta, falsa o que de cualquier otra manera impida o dificulte que el Promotor pueda identificar al participante, sea o no ganador, será descalificado y eliminado del Sorteo. El Promotor no se hace responsable por nombres, números de teléfono, direcciones de correo electrónico u otra información de contacto incompletos o incorrectos.
              Participaciones que sean falsas, fraudulentas o engañosas harán que sus participantes sean inelegibles para participar del Sorteo. Toda participación falsificada o que aparente haber sido falsificada, creada mediante programas computarizados o muestre cualquier otro indicio de no ser una solicitud de participación auténtica o aquel individuo que intente dañar o minar la operación legítima del Sorteo será descalificado de participar y removido del Sorteo, y el participante será sometido a las autoridades gubernamentales pertinentes para los procedimientos civiles y/o penales correspondientes. Dicha determinación estará a discreción del Promotor del Sorteo o sus agentes autorizados. Todas las participaciones deben contener toda la información requerida para ser válidas, pasan a ser propiedad del Promotor, y no serán devueltas.
              Este Sorteo no está de ninguna manera auspiciado, patrocinado, avalado, administrado o asociado con Facebook® (https://www.facebook.com/privacy/explanation). Al participar usted releva a Facebook® de toda responsabilidad relacionada a este Sorteo. Preguntas, comentarios o quejas con respecto a este Sorteo deben ser dirigidas al Promotor y/o Administrador de este Sorteo y no a Facebook®. Al participar usted entiende y acepta nuestras Políticas de Privacidad: (https://www.keurig.com/content/privacy-policy?showContentOnly=1) y que va a proporcionar su información al Promotor y Administrador de este Sorteo y no a Facebook®. La información que proporcione solo se utilizará para seleccionar ganadores de este Sorteo y enviarle futuros correos electrónicos promocionales del Promotor. Puede excluirse de recibir (“Opt Out”), de los mensajes de correo electrónico en cualquier momento siguiendo las instrucciones proporcionadas en el mismo correo electrónico promocional.

 </p>


            <p className={styles.text}>
            6. PROBABILIDADES: Las probabilidades de ser seleccionado como ganador de uno de los “Premios” dependerán del número total de participaciones elegibles recibidas durante el Período del Sorteo.
             </p>


            <p className={styles.text}>7. CONDICIONES GENERALES: Todos los participantes deberán cumplir fielmente con los términos y condiciones de este Sorteo para ser elegibles y reclamar un premio de resultar como Ganadores. El Promotor y/o el Administrador del Sorteo se reservan el derecho de determinar la validez de las participaciones presentadas, y rechazarlas si no cumplen con los requisitos del Sorteo o si se ha utilizado un método no permitido o fraudulento para participar.
Al participar en este Sorteo, los participantes acuerdan y aceptan que las decisiones del Promotor y Administrador del Sorteo en torno al cumplimiento de estas Reglas Oficiales son finales y vinculantes en todos los aspectos.
Tanto el Promotor, como el Administrador, sus agencias de publicidad y Administradores de sus páginas de Internet, se reservan el derecho, a su único juicio y criterio, a descalificar y eliminar del Sorteo a todo participante que se sospeche participe mediante métodos de forma mecánica, fraudulenta, desleal o no honrada (Ej. Intercambios, someter participaciones a nombre de otras personas, etc.). De igual forma se reservan el derecho de descalificar del Sorteo a todas aquellas personas que utilicen las páginas del Promotor y/o Administrador haciendo comentarios indeseables, inapropiados, palabras soeces, provocación, insultos o riña. Dicha determinación será final y no será controvertida. Se permitirá sólo un (1) premio por ganador/hogar. Ningún Ganador podrá resultar como Ganador Alterno. Ningún Ganador Alterno podrá resultar como Ganador Alterno en más de una ocasión.
El Promotor, Administrador y demás y entidades relacionadas con este Sorteo no son responsables de solicitudes o participaciones inválidas o no recibidas como resultado de una falla o error en el funcionamiento del Internet o del sistema de comunicación inalámbrica, ya sea electrónico, humano o mecánico. 
 </p>


            <p className={styles.text}>
            8. PREMIOS: Se sortearán un total de nueve (9) premios. Entre todas las participaciones válidas, se sortearán los siguientes premios:
a. Primer Premio (1): Se sorteará un (1) premio de dos mil dólares ($2,000.00) en efectivo​ (“Primer Premio”).
b. Segundos Premios (2): Se sorteará  (1) premio de quinientos dólares ($500.00) en efectivo cada uno (colectivamente, los “Segundos Premios”).
c. Terceros Premios (3): Se sortearan dos (2) premio, cada uno consiste en lo siguiente: un (1) Certificado One Day Spa en Zen Spa valorado en doscientos dólates ($200.00) (colectivamente, los “Terceros Premios”).
d. Cuartos Premios (4): Se sortearán cinco (5) tarjetas de regalos redimibles en cualquier Supermercado Ralph´s, cada una valorada en cincuenta dólares ($50.00) (colectivamente, las “Gift Cards”).
La selección de los premios anteriormente descritos no implica que sus fabricantes y/o proveedores de servicios participen como auspiciadores de la presente Promoción/Sorteo. Esta Promoción/Sorteo no es promovida, auspiciada, administrada o asociada con Zen Spa o Supermercado Ralph’s, las cuales son marcas registradas por sus respectivos dueños en Puerto Rico, Estados Unidos y otros países. No obstante, cualquier reclamación con relación a un premio, deberá tramitarse a través de la entidad que suple el servicio o producto, sujeto a los términos y condiciones de ésta.
Todos los premios están sujetos a las siguientes Limitaciones y Restricciones: Solo el número total de premios anunciados en estas Reglas oficiales será otorgado. Cada premio se compone exclusivamente de los elementos indicados de forma específica en la descripción de cada premio en estas reglas. Cada premio está sujeto a verificación; es intransferible y no podrá ser sustituido ni canjeado por otro premio ni canjeable por dinero en efectivo salvo a la exclusiva discreción del Promotor y/o Administrador. Si un premio se tornase no disponible, el Promotor y/o Administrador se reservan el derecho de sustituir el mismo o porción del mismo, por uno de igual o mayor valor, a su exclusiva discreción. El Promotor y/o Administrador se reservan el derecho de determinar todo detalle de cada premio que no haya sido establecido de forma específica en estas Reglas Oficiales, a su sola discreción. Cada Potencial Ganador(a), es responsable de forma exclusiva del pago de todos los impuestos y contribuciones aplicables al recibo y/o uso del premio, que no haya sido expresamente incluido como parte en la descripción del mismo, incluyendo sin implicar limitación: contribución sobre ingresos, impuestos a la venta, consumo, uso, valor añadido o contribuciones similares.
El Promotor y/o Administrador no son responsables por la pérdida, extravío y/o no uso o uso indebido de los premios. Todo premio y/o porción del mismo que no sea utilizado, aprovechado o sea utilizado de forma incorrecta o incompleta por un Potencial Ganador(a), se tendrá por perdido y renunciado, sin obligación de sustitución, compensación, reembolso ni crédito de tipo alguno por parte del Promotor y/o Administrador. Los premios no acumulan intereses, no pueden ser sustituidos, transferidos, o reemplazados, a menos que el Promotor y/o Administrador así lo decidan y ello conforme a las leyes y reglamentos aplicables.
Cualquier impuesto o contribución que conlleve la aceptación o recibo del premio será responsabilidad exclusiva de la persona ganadora una vez entregado el mismo. Los Potenciales Ganadores deberán permitir cualquier demora razonable en el proceso de entrega de premios, cual no excederá de noventa (90) días conforme permitido por ley, de la fecha de verificación de cada Potencial Ganador(a).
 </p>


            <p className={styles.text}>
            9. SELECCIÓN DE POTENCIALES GANADORES: Los Potenciales Ganadores serán seleccionados mediante sorteo al azar entre todas las participaciones elegibles recibidas. El sorteo al azar para seleccionar los ganadores de los nueve (9) premios antes mencionados, se realizará mediante “tómbola electrónica” ante Notario Público el día 2 de junio de 2025, en las oficinas centrales del Administrador del Sorteo, cuya información se provee en la Sección 16 de estas Reglas. En la misma fecha, mediante igual mecanismo, se seleccionarán nueve (9) ganadores alternos en caso de que un potencial ganador (sujeto a verificación) no sea elegible, no pueda o no quiera aceptar el premio conforme a estas Reglas Oficiales. De ser necesario el uso de ganadores alternos, se hará en el estricto orden en que fueron seleccionados. Todos los potenciales ganadores y el otorgamiento de premios están sujetos a verificación. Los premios son intransferibles y no se cambiarán por dinero en efectivo.
Los premios estarán disponibles desde el día 9 de junio de 2025 hasta el 9 de agosto de 2025 (en días y horas laborables), a través del Administrador del Sorteo: RosadoToledo&, LLC, localizado en 207 Calle del Parque Ste 10 San Juan, PR 00912
Cualesquiera impuestos o contribuciones que conlleve la aceptación o recibo y/o redención de premios será responsabilidad exclusiva de la persona ganadora una vez entregado los premios.
Se permitirá sólo un (1) premio por ganador. Si un ganador vuelve a ser seleccionado como ganador alterno, esa segunda selección será descalificada y se seleccionará a otro ganador alterno. Del mismo modo, si se selecciona como ganador alterno a una persona que reside en la misma residencia del ganador, esa selección será descalificada y se seleccionará a otro ganador.

            </p>


            <p className={styles.text}>
            10. NOTIFICACIÓN DE POTENCIALES GANADORES, RECLAMO Y ENTREGA/ENVIO DE LOS PREMIOS: Se notificará a los potenciales ganadores mediante llamada telefónica y/o correo electrónico (en adelante “Notificación Oficial”). Se hará una sola llamada o se enviará un solo correo electrónico. Cada ganador tendrá treinta (30) días calendario, desde realizada la Notificación Oficial, para reclamar su premio. Si un ganador no reclama su premio dentro del término de los treinta (30) días calendario o incumple con los requisitos de participación, inclusive firma de relevos, su premio pasará a un ganador alterno. Los ganadores alternos serán convocados a reclamar los premios en el orden estricto en que fueron seleccionados. Los ganadores alternos, de convertirse en ganadores, serán notificados mediante mismo método de Notificación Oficial y se les proveerá el mismo término y condiciones para reclamar su premio.
Antes de poder ser declarado como un ganador, es requisito que cada ganador firme los correspondientes y necesarios relevos según requerido por el Promotor y/o Administrador del Sorteo.
Cada ganador deberá completar y firmar los acuerdos de relevo y aceptación de premio previo a serle entregado/enviado su correspondiente premio. Dichos acuerdos de relevo y aceptación de premios serán suministrados por el Administrador y devueltos mediante correo electrónico, firmados y acompañados de copia de identificaciones y cualquier otro documento requerido por este.  El Administrador se reserva el derecho de solicitar a vuelta de correo regular, el recibo de compra original o copias de los facsímiles originales que utilizó para participar. Se tomará foto a los ganadores para uso promocional durante la entrega de los premios.
Los “Primeros y Segundos Premios Premio” a opción de la persona ganadora y previa coordinación con el Administrador, mediante correo certificado o servicio privado de entregas o entrega presencial en las oficinas del Administrador.
Los “Terceros y Cuartos Premios”, será entregado previa coordinación con las oficinas del Administrador.  El día de su cita, el ganador tiene que traer consigo a las oficinas del Administrador o lugar designado por este, la notificación recibida por correo electrónico e identificación con documento de identidad oficial con retrato y firma, expedido por las autoridades públicas competentes de Estado Libre Asociado de Puerto Rico, vigente al momento de reclamar un premio. 
"Conforme a los dispuesto en la Sección 1063.01(a) del Código de Rentas Internas de Puerto Rico de Puerto Rico de 2011, según enmendado, toda persona o entidad dedicada a la industria o negocio en Puerto Rico que otorgue premios, regalos, o “giveaways”, deberá completar y radicar el formulario 480.6A - Declaración Informativa - Otros Ingresos No Sujetos a Retención(“Formulario 480.6A”) cuando el valor del regalo, premio o “giveaway” sea igual o mayor de quinientos dólares ($500) durante el año natural."
A esos efectos los potenciales ganadores de dichos premios deberán proveer su número de Seguro Social al Administrador para este poder emitir el correspondiente formulario.
Si un participante no puede ser contactado o no cumple con estas reglas, rechaza el premio ganado, no contesta los correos electrónicos o llamadas del Promotor y/o Administrador del Sorteo o el premio enviado mediante correo certificado es devuelto por el Servicio de Correos por no ser posible su entrega o incumple en completar y devolver los relevos, el correspondiente premio será considerado como renunciado por dicho participante y el Promotor y Administrador se reservan el derecho de otorgar el premio a un participante alterno.
El Promotor y/o Administrador del Sorteo, sus afiliadas y demás entidades relacionadas, sus respectivas agencias de publicidad, promociones, relaciones públicas, o abogados, no serán responsables por daños, accidentes, pérdidas directas o indirectas que puedan sufrir un ganador, sus familiares o cualquier otra persona por motivo del disfrute de premios. Todas las obligaciones del Promotor y/o Administrador del Sorteo relacionadas con los premios y ganadores cesarán con la entrega de los mismos.
Si un ganador es menor de veintiún (21) años de edad, este deberá reclamar su premio acompañado de sus padres con custodia y/o patria potestad o tutor legal, quienes deberán autorizar por escrito la aceptación de premio y firmar los correspondientes relevos de responsabilidad a nombre del Ganador.
El Promotor y/o Administrador del Sorteo se reservan el derecho, sujeto a las regulaciones aplicables, a sustituir cambiar o intercambiar premios (o cualquier parte de estos) por uno de igual o mayor valor.
    </p>


            <p className={styles.text}>
11. RELEVO: Al participar en este Sorteo, los participantes aceptan acogerse a la estricta aplicación de estas Reglas en todos sus términos y aceptan que toda decisión tomada por el Promotor y sus agentes es final y vinculante. Al participar de este Sorteo, el Participante voluntariamente asume toda responsabilidad y riesgo por su participación y con su participación acepta:  defender, relevar, indemnizar y eximir  de responsabilidad, colectivamente (“Exonera”) a Facebook®, Dr Pepper/Schweppes/Seven Up, Inc., RosadoToledo&, LLC, Zen Spa y Supermercados Ralph’s, y a sus respectivas matrices, subsidiarias, filiales, afiliadas, agentes, agencias de publicidad y promociones y a sus respectivos oficiales, directores, accionistas, empleados, representantes, agentes y cualquiera otra entidad relacionada directamente con el desarrollo, implementación y/o conducción de este Sorteo (en adelante, colectivamente las “Entidades Relevadas”) de toda y cualquier responsabilidad, demanda, acción, reclamo, querella, accidentes, pérdidas, daños y perjuicios, incluyendo sin implicar limitación por lesión personal (inclusive incapacidad, lucro cesante y muerte) y daños a la propiedad, costo y gastos (inclusive honorarios de abogado) que surjan como resultado de o en conexión con su participación en este Sorteo y/o de las etapas de reclamación, verificación redención, entrega, posesión y uso /o uso de un premio, uso de su computadora/equipos para participar o mientras participa de alguna actividad relacionada al Sorteo o al premio; (ii) Exonera a las Entidades Relevadas por cualquier error tipográfico, técnico o humano, incluyendo pero no limitándose a errores de publicidad, imprenta, errores en estas Reglas, en los materiales del Sorteo o por información imprecisa, incompleta, ilegible o incorrecta en la participación que redunde en problemas, errores o demoras de notificación, verificación, publicación del ganador/premio o en la entrega del premio; (iii) Exonera a las Entidades Relevadas por cualquier error no intencionado bien sea humano o técnico en la implementación del Sorteo; (iv) Exonera a las Entidades Relevadas por cualquier error humano o técnico, desperfectos, demoras, fallos, congestión, fraude, intervención no autorizada (incluyendo “hacking”) u otros fallos en las conexiones de red, en las líneas, servidores, líneas, en la Internet, antenas, satélites, teléfonos, en computadora(s), en equipos fijos e inalámbricos, hardware, software, errores de programación, problemas de virus y ‘bugs’ de computadora, u otros defectos o fallos técnicos que resulten en transmisiones/ participaciones/ comunicaciones/ notificaciones/ entrega de premios tardíos, demorados, incompletos, destruidos, omitidos, indescifrables,  multiplicados, o que de cualquier otra forma  limiten la habilidad del usuario a acceder al Sorteo, a participar en el proceso de registro al Sorteo dentro de las fechas/horarios prescritos; o la entrega oportuna de un premio o porción del mismo, o que impidan o menoscaben la capacidad de operar toda o alguna porción de este Sorteo, conforme planificado; (v) Exonera a las Entidades Relevadas por razón de cualquier causa atribuible directa o indirectamente al participante(s), al ganador, o causa de fuerza mayor o fortuita, incluyendo sin implicar limitación, cualquier acción, reglamento, orden o petición por parte de cualquier entidad gubernamental o cuasi-gubernamental (no importa que la acción, reglamento, orden o petición resulte luego ser inválida), fallo de equipo técnico, actos de terrorismo, terremotos, guerra, fuegos, inundaciones, explosiones, pandemias, condiciones meteorológicas severas, huracanes, embargos, disputas laborales o huelgas (sean legales o ilegales), falta inesperada de personal o de materiales, interrupción de transportación de cualquier clase, interrupción de energía eléctrica,  baja intencional de labores, disturbios civiles, insurrección, motín, o cualquier otra causa más allá del control razonable de las Entidades Relevadas; (v) Exonera a las Entidades Relevadas por cualquier demora razonable en la entrega de un premio, sujeto a la reglamentación del DACO aplicable; (iv) Acepta que El Promotor se reserva el derecho a descalificar a cualquier participante que no cumpla con estas Reglas; (v) Acepta que si por alguna razón, cualquier elemento del Sorteo no está funcionando como se planificó, debido a fallos técnicos o cualquier otra razón fuera del control del Promotor, que puedan afectar la seguridad, administración o integridad del Sorteo, el Promotor se reserva el derecho a modificar y/o terminar la misma y a otorgar cualquier premio vacante entre las participaciones recibidas hasta ese momento.

           </p>

            <p className={styles.text}>
            12. AUTORIZACIÓN: Al aceptar el premio, los potenciales ganadores autorizarán por escrito al Promotor y Administrador y aquellos actuando bajo su autoridad para utilizar su nombre, fotografía, imagen, video, voz, semejanza y actuación, si aplica, y cualquier información biográfica para propósitos de publicidad y promoción del Sorteo, en cualquier y todo medio, conocido actualmente, inclusive internet y redes sociales, o posteriormente inventado sin limitación territorial o de tiempo y sin compensación, notificación o permiso adicional. Al aceptar un Premio, cada Ganador acepta ser entrevistado(a), fotografiado(a) y grabado(a) durante la entrega y en relación al Premio y acepta proveer toda la cooperación relacionada a cualquier actividad promocional y publicidad razonable que surja de dicho premio. La entrega de premios está sujeta a la firma de este relevo.
                         </p>


            <p className={styles.text}>
            13. LEYES, SUSPENSIÓN Y/O CANCELACIÓN DEL SORTEO: Al participar en este Sorteo, los Participantes reconocen y aceptan todos los términos y condiciones de estas Reglas Oficiales y también reconocen y aceptan ser sometidos única y exclusivamente a las leyes y reglamentos aplicables del Estado Libre Asociado de Puerto Rico. Sujeto a reglamentación aplicable, el Promotor y/o Administrador se reservan el derecho a cancelar, cambiar las fechas de comienzo y finalización del Sorteo, modificar estas reglas, las condiciones de la misma y los premios ofrecidos en caso de: circunstancias imprevisibles, fuerza mayor, orden de la autoridad pública, “Actos de Dios”, pandemias tales como la "Pandemia COVID-19", o cualquier otra fuera de su control o ajenas a su voluntad así lo hagan necesario.
      
   </p>


            <p className={styles.text}>
            14. ADVERTENCIA.  Cualquier intento de un participante de causar daño al Sorteo o intentar dañar la operación legítima de este Sorteo, es una violación a las leyes civiles y criminales, y en el caso de que tal intento se haga, el Promotor y el Administrador se reservan el derecho de solicitar la imposición de daños o cualquier otro remedio (incluyendo el pago de honorarios de abogado) en la extensión máxima que permita la ley. Schweppes y 7UP® son una marcas registradas de Dr Pepper/Scheweppes/Seven Up Inc./Zen Spa/Ralph’s. ©2025
            Cualquier desviación o violación de las reglas conllevará la descalificación inmediata. Además, el Promotor y el Administrador del Sorteo se reservan el derecho de excluir o recuperar el premio a cualquier ganador si posterior a la entrega del premio se descubre que el mismo fue obtenido mediante fraude, engaño, falsa representación o comisión de delito.

            </p>


            <p className={styles.text}>
15. SEPARABILIDAD: En el evento de que cualquier cláusula de estas Reglas Oficiales se declare inválida, o de cualquier manera resulte ineficiente o ilegal, el resto de estas reglas se mantendrán vigentes y continuarán en vigor con sus términos y condiciones como si las cláusulas declaradas inválidas o nulas no fueran incorporadas en las mismas.
             </p>


           <p className={styles.text}>
           16. ADMINISTRADOR, PREGUNTAS Y RECLAMACIONES: Para preguntas sobre el presente Sorteo o reclamo de premios, favor dirigirse al Administrador del Sorteo: RosadoToledo&, LLC, 207 Calle del Parque Ste 10 San Juan, PR 00912, (787)-314-5350,  Persona Contacto: Lilliana Correa
                      </p>



           <p className={styles.text}>
           17. PROMOTOR: Los Promotores de este Sorteo son: Dr Pepper/Schweppes/Seven Up, Inc.: 4895 Park Ridge Blvd, Boynton Beach, FL 33426.
           </p>



           <p className={styles.text}>
 
           18. DISPONIBILIDAD: Las reglas oficiales de este Sorteo serán publicadas en www.7uppr.com y www.facebook.com/7UPPR.    La reglas abreviadas serán parte del contenido que promociona el sorteo a través de Facebook e Instagram de 7up Puerto Rico. 
           </p>


        </div>



    </div>


    
    <h1 className={styles.containImg} style={{marginTop:"-350px", backgroundColor:"#32ab56"}}  >
        <img src={ProductosImg} alt="ProductosImg" className={styles.porductosImg} />
     </h1>


     <h1 className={styles.containImg2}>
        <img src={ballonder2} alt="ballonder2" className={styles.ballonder2} />
     </h1>

     <h1 className={styles.containImg3}>
        <img src={ballonder} alt="ballonder3" className={styles.ballonder} />
     </h1>


     <h1 className={styles.containImg4}>
        <img src={ballon1zq} alt="ballon1zq" className={styles.ballon1zq} />
     </h1>

    <div className={styles.containerFooter} style={{marginTop:"-150px", backgroundColor:"white"}} >
      <div className={styles.margenFoter}></div>
      <Footer></Footer>     
    </div> 

    </div>

  );
};

export default TyC;