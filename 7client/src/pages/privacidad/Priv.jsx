import React, { useEffect } from 'react';
import styles from './Priv.module.css';
import Navbar from '../../components/navbar/navbar';
import title from "../../assets/titulo_adp.png";
import ProductosImg from "../../assets/productos.png";
import Footer from '../../components/footer/footer';
import ballonder2 from "../../assets/balloon_der2.png";
import ballonder from "../../assets/balloon_der.png";
import ballon1zq from "../../assets/balloon_izq.png";
import usePageTracking from "../../hooks/useGa";

const Priv = () => {
    usePageTracking()

        useEffect(() => {
            window.scrollTo(0, 0);
            document.title = 'Aviso de Privacidad / 7UP® & SCHWEPPES: ESTA PROMO ESTA DE MADRES';
          }, []);

  return (
    <div className={styles.tycBackground}>
    <div className={styles.container}>
        <div className={styles.navbarStyles}>
              <Navbar></Navbar>
              <div style={{height:"160px" , backgroundColor:"#32ab56"}} className='divSpac'></div>
        </div> 
        <div className={styles.container2}>
            <h1 className={styles.title}>
                <img src={title} alt="title" className={styles.titleImg} />
            </h1>




            <h1 style={{textAlign:"center", color:"white"}}>
            POLÍTICA DE PRIVACIDAD DE KDP
            </h1>


            <p className={styles.text}>
            La Política de privacidad de KDP explica cómo Keurig Dr Pepper Inc y sus subsidiarias (colectivamente, "KDP" o "nosotros", "nos" o "nuestro") utilizan y divulgan información personal en relación con su uso de nuestros sitios web para nuestros productos Sunkist, Schweppes, 7Up, Bai, Snapple, Mystic, y Mott’s  (cada uno de ellos un "Sitio"), aplicaciones móviles (cada uno una "Aplicación") y dispositivos conectados a Internet, como nuestras cafeteras inteligentes (colectivamente, los "Servicios"), y sus correspondientes derechos de privacidad.
            </p>

            <p className={styles.text}>
            Agradecemos que nos confíe su información y tenemos la intención de honrar esa confianza.
            </p>


            <p className={styles.text}>
            SU PRIVACIDAD ES IMPORTANTE PARA NOSOTROS. POR FAVOR, LEA ATENTAMENTE ESTA POLÍTICA DE PRIVACIDAD. SI NO ESTÁ DE ACUERDO CON ALGUNA PARTE DE ESTA POLÍTICA DE PRIVACIDAD, NO UTILICE LOS SERVICIOS
            </p>

            <p className={styles.text}>
            INFORMACIÓN GENERAL <br />
            Esta Política de Privacidad se aplica a los Servicios a los que está vinculada. Si un Servicio en particular tiene su propia política de privacidad, entonces se aplica esa política, no esta Política de Privacidad. Esta Política de Privacidad no se aplica a la información recopilada por sitios web o servicios de terceros a los que pueda acceder a través de nuestros Servicios.
            </p>

            <p className={styles.text}>
                            
            INFORMACIÓN QUE RECOPILAMOS <br />
             Hay varias formas en que podemos obtener información sobre usted, incluso a través de (A) la información que nos proporciona directamente; (B) información que recopilamos automáticamente; y (C) información que recibimos de terceros. Parte de la información lo identifica directa o indirectamente como individuo. Cuando la información se identifica o es razonablemente capaz de asociarse con, o podría vincularse razonablemente, directa o indirectamente, con usted o su hogar, nos referimos a ella como "Información personal"." Esta información personal incluye las siguientes categorías: 

            </p>


            <p className={styles.text}>
            • Identificadores/información de contacto: 
            Estos incluyen su nombre, dirección postal y de correo electrónico, número de teléfono e identificadores únicos que pueden identificar su dispositivo o navegador, pero no a usted por su nombre.

            </p>


            <p className={styles.text}>
             • Datos de geolocalización: Datos sobre la ubicación del dispositivo que utiliza para acceder a los Servicios, tal y como se describe con más detalle a continuación.
             </p>


            <p className={styles.text}>
              • Información comercial: Su historial de compras y uso (como la variedad de bebidas, el tamaño del productos y la preferencia de intensidad para sus cafés o bebidas), preferencias de bienes y servicios, e información de pago.

            </p>


            <p className={styles.text}>
            • Actividad electrónica/en Internet: dirección IP, historial de búsqueda y navegación web/aplicaciones relacionadas con nuestros Servicios, e información sobre su(s) interacción(es) con los Servicios o con la publicidad de KDP.
            </p>


            <p className={styles.text}>
            • Información visual: Esto incluye las fotos que compartes desde tus dispositivos. 
           </p>


            <p className={styles.text}> 
            • Inferencias de perfil: Las inferencias que extraemos de su información personal y actividad en línea para crear un perfil personalizado para que podamos identificar mejor los bienes y servicios que pueden ser de su interés.
           </p>

            <p className={styles.text}>
            También trabajamos con varios tipos de datos que son anónimos o agregados, y que no son razonablemente capaces de asociarse con, o de estar razonablemente vinculados, directa o indirectamente, con usted o su hogar. Estos datos no son información personal.
             </p>


            <p className={styles.text}>
             Como se indica con más detalle a continuación, recopilamos información personal de una variedad de fuentes, incluidas las siguientes:
             • Nuestros proveedores de servicios• Proveedores de análisis de datos• Sistemas operativos y plataformas• Redes sociales• Redes publicitarias• Proveedores de datos• Dispositivos conectados, y• De usted directamente.

            </p>


            <p className={styles.text}>
            Información personal que usted proporciona
            Recopilamos información personal de usted para una variedad de fines comerciales y promocionales, de la siguiente manera:
     
            </p>


            <p className={styles.text}>
            Información personal que proporciona cuando crea o utiliza su cuenta u otros Servicios, o se pone en contacto con nosotros. Debe crear una cuenta de KDP ("Cuenta de KDP") para utilizar determinados Servicios, incluida la Aplicación Keurig®. Una cuenta de KDP, así como ciertos servicios que podemos ofrecer, como la suscripción a nuestros servicios de entrega automática, requieren que proporcione información personal para que podamos identificarlo y procesar sus compras, permitirle personalizar los servicios a su gusto (por ejemplo, identificar sus preferencias de elaboración de café y/o bebidas) y para que podamos vincular sus preferencias de productos a su cuenta de KDP. Además, cuando se ponga en contacto con nosotros, es posible que supervisemos y grabemos su conversación con el representante de KDP (siempre y cuando la ley lo permita).
            </p>


           <p className={styles.text}>
            Información personal que proporciona cuando realiza una compra. Recopilamos información personal para procesar sus compras con nosotros y para proporcionarle los bienes o servicios que solicitó.
           
            </p>



           <p className={styles.text}>
           Información personal que proporciona para el servicio de atención al cliente. Recopilamos los comentarios y las preguntas que nos proporciona para el servicio de atención al cliente, incluidas las grabaciones de voz de sus llamadas con nuestro equipo de atención al cliente. Al responder a sus preguntas, es posible que le pidamos datos de respaldo de su dispositivo, como el número de serie de la cafetera. Si utiliza nuestro chat de video en línea o la función de compartir pantalla del dispositivo, recopilamos y mantenemos un registro de nuestras interacciones con usted, incluidas las pantallas compartidas de la pantalla de su aplicación Keurig si la habilita. Cuando lo hace, nuestro acceso a la pantalla compartida se limita a durante la sesión activa que permite.

          </p>



           <p className={styles.text}>
           Información personal recopilada con su consentimiento. También podemos pedirle su consentimiento para recopilar información personal en una interacción particular con usted, tal como se le describe en esas circunstancias.

           </p>


           <p className={styles.text}>
            
Información personal recopilada automáticamente. Siempre que visite o interactúe con los Servicios, KDP, así como los anunciantes externos y/o los proveedores de servicios, pueden utilizar una variedad de tecnologías para recopilar información personal, como:

            </p>

            <p className={styles.text}>
            Información sobre el uso del servicio. Recopilamos información personal sobre su actividad en los Servicios, como la fecha y hora de inicio de sesión, las funciones que utiliza y la interactividad del sitio web, la aplicación móvil y el producto.

            </p>


            <p className={styles.text}>
            Dispositivo e información de uso del dispositivo. Recopilamos información personal de y sobre los dispositivos electrónicos que utiliza para acceder a los Servicios, incluida la dirección IP, el ID y el tipo de dispositivo, la configuración y las características del dispositivo y la aplicación, los bloqueos de la aplicación, los ID de publicidad, el tipo y el idioma del navegador, el sistema operativo, las zonas horarias, la versión del software, el nombre de dominio, los identificadores asociados con las cookies u otras tecnologías que pueden identificar de manera única su dispositivo o navegador.  e información sobre su conexión de red inalámbrica y móvil, como su proveedor de servicios y la intensidad de la señal.

            A través de nuestros dispositivos conectados a Internet, como nuestras cafeteras inteligentes para uso doméstico, recopilamos el historial de uso (como la variedad de bebidas, el tamaño de la preparación y la preferencia de intensidad para sus café). Estas cafeteras también incluyen una cámara diseñada para recopilar una imagen del área donde se coloca una cápsula dentro de la cafetera. Esto es necesario para habilitar algunos Servicios conectados y también se puede utilizar con fines de diagnóstico para ayudar a garantizar que la cafetera funcione correctamente.

            </p>

            <p className={styles.text}>
            Información de ubicación. Podemos recopilar datos sobre la ubicación del dispositivo que utiliza para acceder a los Servicios, incluido un fabricante de máquinas de café inteligente, si corresponde ("Datos de ubicación") utilizando la dirección IP, el GPS, las torres de telefonía móvil y la información de su proveedor de servicios móviles, los sensores que proporcionan a KDP información sobre dispositivos cercanos, la dirección Bluetooth, los puntos de acceso Wi-Fi y la información que usted u otras personas ponen a disposición y que indica la ubicación actual o anterior de su dispositivo. La forma en que recopilamos los Datos de ubicación depende de cómo utilice los Servicios.
            </p>

            <p className={styles.text}>
            Tecnologías analíticas y publicitarias de terceros. KDP también puede utilizar las herramientas de análisis y seguimiento de terceros, como Google Analytics y otras, para ayudarnos a rastrear, segmentar y analizar el uso de los Servicios de KDP, y para ayudarnos a nosotros o a esos terceros a ofrecerle publicidad más específica en los Servicios y en Internet. Estas herramientas pueden utilizar tecnología como cookies, “web beacons”, etiquetas de píxeles, archivos de registro, cookies Flash u otras tecnologías para recopilar y almacenar información y también pueden combinar dicha información con información que recopilan de otras fuentes. KDP también puede utilizar el software de repetición de sesiones, que recopila información sobre su interacción con los Servicios, incluidas las pulsaciones de teclas, los movimientos del ratón y las entradas de campos de formulario, y puede supervisar sus interacciones con los Servicios, incluso con fines de verificación de cumplimiento. Para obtener más información sobre sus opciones relacionadas con el seguimiento de publicidad, consulte la sección "Sus opciones y exclusión" a continuación.
             </p>


            <p className={styles.text}>
            Información personal recibida de terceros. KDP recopila información personal suya proveniente de terceros, como plataformas de redes sociales, bases de datos públicas, asistentes virtuales inteligentes de terceros o proveedores de datos. Esto puede incluir:
              </p>


            <p className={styles.text}>
            Información personal recopilada cuando se conecta con terceros a través de los Servicios. Ciertos Servicios pueden vincularse con plataformas y complementos de terceros, como plataformas de redes sociales, complementos y asistentes inteligentes virtuales (como Alexa o Google Home). Al acceder a los Servicios a través de una cuenta de un tercero, es posible que recibamos automáticamente cierta información sobre usted en función de su registro y configuración de privacidad en esos servicios de terceros, y que utilicemos dicha Información personal como se describe en esta Política de privacidad.

             </p>


            <p className={styles.text}>
            Información personal recopilada de los proveedores de datos. KDP puede complementar su información personal con información que obtengamos de terceros, como bases de datos públicas o agregadores de datos.
           </p>


            <p className={styles.text}>
            Información personal recopilada a través de proveedores de servicios. Nuestros proveedores de servicios también pueden recopilar y utilizar información personal para ayudarnos con nuestras operaciones comerciales. Por ejemplo, nuestros proveedores de servicios pueden necesitar información personal para ayudarnos a analizar el rendimiento de los Servicios, detectar y prevenir fraudes o mejorar las experiencias de los usuarios.

            </p>


            <p className={styles.text}>
Combinación de información. Podemos combinar la información personal que recibimos de usted y sobre usted. Como se ha señalado, también podemos eliminar o agregar información para que ya no sea información personal.
           </p>


            <p className={styles.text}> 
            CÓMO UTILIZAMOS SU INFORMACIÓN PERSONAL  <br />
KDP utiliza la información personal, incluidos los identificadores, los datos de geolocalización, la información comercial o relacionada con la compra, la actividad en Internet u otras redes electrónicas, y las inferencias extraídas de su información personal de acuerdo con las leyes de protección de datos aplicables y esta Política de privacidad para una variedad de fines empresariales y comerciales, entre ellos:

           </p>

            <p className={styles.text}>
            Para administrar su cuenta y prestarle los Servicios, como por ejemplo:
-Cree y gestione su cuenta de KDP, su aplicación Keurig y su afiliación al programa de lealtad, ya sea en Keurig.com, Keurig.ca o en nuestros programas Pepper Perks o Pepper Packs 
-Proporcionarle atención al cliente y responder a sus solicitudes.
-Completar tus transacciones
-Comunicarnos con usted acerca de los Servicios, incluida la gestión de pedidos y la facturación
 

             </p>


            <p className={styles.text}>
            Para garantizar una experiencia consistente en todos los dispositivos, por ejemplo:
-Sincronizar su uso en los distintos dispositivos que utiliza para interactuar con nosotros
-Personalizar su experiencia con nuestros Servicios
     </p>


            <p className={styles.text}>
            Para ofrecer promociones y anuncios, tales como:
-Administrar sorteos, concursos, descuentos u otras promociones
-Desarrollar, mostrar y rastrear contenido y publicidad adaptados a usted en los Servicios y en otros sitios web
-Proporcionarle o ponernos en contacto con usted con Servicios, contenido y ofertas personalizados de KDP o en nombre de nuestros socios y afiliados.
  </p>


            <p className={styles.text}>
            Mejorar los servicios y desarrollar otros nuevos, tales como:
-Administrar grupos focales y encuestas
-Llevar a cabo una investigación de los consumidores
-Utilizar datos demográficos, de perfil y de otro tipo con fines analíticos y demográficos (este tratamiento puede implicar la elaboración de perfiles, por ejemplo, para crear audiencias basadas en información demográfica o basada en la ubicación con fines de marketing y personalización)
-Desarrollar nuevas funciones y servicios

            </p>


           <p className={styles.text}>
           Para prevenir, detectar y combatir el fraude u otras actividades ilegales o no autorizadas, tales como:
-Hacer cumplir nuestros Términos
-Abordar el fraude o la presunta actividad ilegal
-Ayudar a las fuerzas del orden
-Realizar análisis de datos para comprender mejor y diseñar contramedidas contra el fraude
-Proteger la seguridad e integridad de los Servicios y de nuestro negocio
           
            </p>



           <p className={styles.text}>
           Para garantizar el cumplimiento legal, como por ejemplo:
-Cumplir con los requisitos legales
-Hacer valer o ejercer nuestros derechos o los de terceros
-Debida diligencia y divulgaciones requeridas para adquisiciones y ventas corporativas
-Abordar problemas con los Servicios o nuestro negocio

          </p>



           <p className={styles.text}>
           CÓMO COMPARTIMOS SU INFORMACIÓN PERSONAL  <br />
A excepción de lo dispuesto en esta Política de privacidad, no divulgaremos su información a terceros sin su consentimiento. Es posible que compartamos su información personal como se describe a continuación.
 
Intercambio de información por su parte.
Los Servicios ofrecen muchas formas de encontrar, disfrutar y compartir contenido. Cualquier información personal que divulgue en áreas públicas de los Servicios u otros servicios de terceros puede volverse visible para otras personas sin restricciones. Tenga cuidado al divulgar información personal en áreas públicas. Si proporciona información personal a un tercero mientras utiliza nuestros Servicios, la política de privacidad del tercero se aplicará a su información personal divulgada a dicho tercero.
            
           </p>


           <p className={styles.text}>
           Intercambio de información personal por nuestra parte
 
Con nuestros proveedores de servicios. Podemos divulgar cada categoría de su Información personal que recopilamos a nuestros proveedores de servicios para ayudarnos a operar y mejorar los Servicios, como el archivo y mantenimiento de datos, análisis, atención al cliente, marketing, procesamiento de pagos, cumplimiento de pedidos y operaciones de seguridad.
También podemos divulgar un conjunto más limitado de información personal en un formato hash o seudónimo, incluidos identificadores/información de contacto, cierta información comercial, geolocalización (no precisa), actividad electrónica/en Internet e inferencias de perfil, a los siguientes destinatarios:

            </p>

            <p className={styles.text}>
            Con nuestros socios de analítica. Divulgamos esta forma limitada de su información personal a nuestros socios que nos ayudan a realizar analíticas y nos ayudan a medir la eficacia del contenido de nuestros Servicios y nuestros esfuerzos de marketing y publicidad.
            </p>


            <p className={styles.text}>
            Con nuestros socios de marketing y publicidad. Divulgamos esta forma limitada de su información personal a terceros con fines de marketing y publicidad, incluidas plataformas de redes sociales, proveedores de tecnología publicitaria, redes publicitarias de terceros y otras partes que nos ayudan a publicar y optimizar nuestros anuncios.
            </p>

            <p className={styles.text}>
            En determinadas circunstancias, podemos divulgar cada categoría de su información personal:

</p>

            <p className={styles.text}>
                            
            con otros negocios de KDP. Divulgamos su información personal con nuestras subsidiarias y socios de empresas conjuntas (colectivamente, "Afiliados") que se adhieren a las protecciones de privacidad establecidas en esta Política de privacidad.
            </p>


            <p className={styles.text}>
            Promociones. Si decide participar en una de nuestras promociones (por ejemplo, un sorteo o concurso), podemos divulgar su información personal a proveedores de servicios o al público en relación con la administración de dicha promoción, según lo exija la ley, según lo permitan las reglas oficiales de la promoción y esta Política de privacidad.
              </p>


            <p className={styles.text}>
            Para Operaciones Corporativas. Podemos transferir su información personal si estamos involucrados, ya sea en su totalidad o en parte, en una fusión, venta, adquisición, desinversión, reestructuración, reorganización, disolución, quiebra u otro cambio de propiedad o control. Si otra entidad nos adquiere a nosotros o a cualquiera de nuestros activos, la información que hemos recopilado sobre usted puede ser transferida a dicha entidad. Además, si se inicia un procedimiento de quiebra o reorganización por o contra nosotros, dicha información puede considerarse un activo nuestro y puede venderse o transferirse a terceros. En caso de que se produzca dicha venta o transferencia, haremos todos los esfuerzos razonables para tratar de exigir que el cesionario utilice la Información personal proporcionada a través de los Servicios de una manera que sea coherente con esta Política de privacidad.
            </p>


            <p className={styles.text}>
            Obligaciones legales; Seguridad. Podemos acceder y divulgar su información personal para responder a citaciones, procesos judiciales o solicitudes e investigaciones gubernamentales, en relación con una investigación sobre asuntos relacionados con la seguridad pública, o según lo permita o exija la ley. Podemos divulgar su información personal para proteger la seguridad de nuestros Servicios, servidores, sistemas de red y bases de datos.

            </p>


            <p className={styles.text}>
Para hacer valer los derechos legales. También podemos compartir información personal (i) si la divulgación mitigaría nuestra responsabilidad en una demanda real o amenazada; (ii) según sea necesario para proteger nuestros derechos legales y los de nuestros usuarios, socios comerciales u otras partes interesadas; (iii) para hacer cumplir nuestros acuerdos con usted; y (iv) para investigar, prevenir o tomar otras medidas con respecto a sospechas de actividades ilegales, fraudes u otras irregularidades.
 </p>


            <p className={styles.text}>
            Con su consentimiento o a petición suya. También podemos compartir su información tal como se le informó en el momento de la recopilación.
             </p>


            <p className={styles.text}> 
            COOKIES Y OTRAS TECNOLOGÍAS DE SEGUIMIENTO <br />
Podemos utilizar diversas prácticas y tecnologías de seguimiento para permitirnos a nosotros y a terceros desarrollar y ofrecer publicidad dirigida en los Servicios y en los sitios web o aplicaciones de terceros, y para analizar e informar sobre dicha publicidad que vea.

             </p>

            <p className={styles.text}>
            • Cookies estrictamente necesarias, que son necesarias para el funcionamiento de los Servicios. Sin ellas, por ejemplo, no podría registrarse ni iniciar sesión en los Servicios que ofrece KDP.• Cookies analíticas/de rendimiento, que permiten a KDP reconocer y contar el número de visitantes, aprender cómo los visitantes navegan por los Servicios y mejorar los Servicios.• Cookies de funcionalidad, que KDP utiliza para reconocerle cuando vuelve a los Servicios.• Cookies de orientación,  que registran sus visitas a los Servicios, las páginas que visitó y los enlaces que siguió. Las cookies de segmentación ayudan a KDP a ofrecer anuncios digitales orientados a sus intereses (según se infiere de su actividad en línea). KDP también comparte la información recopilada a través de las cookies de segmentación con terceros que le envían anuncios dirigidos• Cookies de interacción, que le permiten recomendar KDP en las redes sociales.
                         </p>


            <p className={styles.text}>
            Web Beacons. KDP también utiliza web beacons (también llamadas etiquetas de píxel o GIF transparentes). Parte del contenido y los correos electrónicos de KDP pueden contener beacons web integradas que permiten a un servidor leer determinados tipos de información de su dispositivo, así como contarnos el número de personas que han visto el contenido y saber cuándo ha abierto un mensaje de correo electrónico y la dirección IP de su dispositivo. Los web beacons ayudan a KDP a desarrollar información estadística para proporcionar contenido mejor y más personalizado. Para obtener más información sobre las web beacons, visite www.allaboutcookies.org.
            </p>


            <p className={styles.text}>
            Tecnología de repetición de sesiones. KDP (o nuestros proveedores externos) también puede utilizar herramientas y software para supervisar y registrar información (incluidas capturas de pantalla y vídeos) sobre sus interacciones con nuestros Servicios, incluidas las pulsaciones de teclas, los movimientos del ratón, las entradas de campos de formulario y la interacción general con nuestros Servicios. 
            </p>


            <p className={styles.text}>
            SUS OPCIONES Y EXCLUSIÓN VOLUNTARIA <br />
Acceso y actualizaciones a su información personal. Para Keurig.com y Keurig.ca titulares de cuentas, si desea corregir la información de su cuenta o eliminar la información de su perfil de la página de su cuenta, visite la pestaña "Perfil" en la sección "Cuenta" en un Sitio o en la Aplicación, visite la pantalla Configuración, Mi cuenta y luego elija la opción Perfil. También puede enviar su solicitud a través del enlace "Contáctenos para los EE. UU.", o a través del siguiente enlace "Contáctenos" f KDP se reserva el derecho de solicitarle que proporcione información que permita a KDP confirmar que tiene la autoridad para corregir o eliminar la información de perfil que desea corregir o eliminar. Es posible que KDP no pueda corregir o eliminar la información compartida con terceros. De conformidad con la ley aplicable, podemos tener derecho a negarnos a actuar sobre la solicitud.
     </p>


           <p className={styles.text}>
            Puede consultar el sitio web de su navegador o sistema operativo o la sección "Ayuda" para obtener más información sobre cómo eliminar y/o deshabilitar su navegador o sistema operativo para que no reciba cookies o controlar sus preferencias de seguimiento. En su dispositivo móvil, también puede ajustar su configuración de privacidad y publicidad para controlar si desea recibir publicidad más relevante. Para obtener más información sobre las cookies, visite www.allaboutcookies.org o los sitios web de Digital Advertising Alliance o Network Advertising Initiative. Para optar por no recibir publicidad dirigida a través de aplicaciones móviles, visite el sitio web de AppChoices. Cuando opta por no participar a través de uno de estos sitios web, se almacena una cookie de "exclusión" en su navegador web que indica que no desea recibir anuncios dirigidos. Si elimina las cookies en general, deberá volver a excluirlas. Su dispositivo móvil también puede ofrecer opciones para rechazar la publicidad dirigida sin el uso de cookies.
        
                  </p>



           <p className={styles.text}>
           Como se ha descrito anteriormente, podemos utilizar cookies u otras tecnologías para ofrecer publicidad más relevante y para vincular los datos recopilados en otros ordenadores o dispositivos que pueda utilizar.

Si usted es residente de los EE. UU., consulte a continuación las opciones adicionales para optar por no participar en las ventas, las acciones y la publicidad dirigida.
     </p>



           <p className={styles.text}>
           SUS DERECHOS DE PRIVACIDAD <br />
 
Explicación de los derechos de privacidad aplicables
Puede aprovechar los siguientes derechos de privacidad:
• Derecho a saber: Tiene derecho a saber qué información personal hemos recopilado sobre usted, incluidas las categorías de información personal, las categorías de fuentes de las que se recopila la información personal, el propósito empresarial o comercial para recopilar, vender o compartir información personal, las categorías de terceros a los que divulgamos información personal (y para los residentes de ciertos países) indica, también los nombres de dichos terceros a los que vendemos o compartimos información personal), las categorías de información personal divulgada a terceros y las piezas específicas de información personal que hemos recopilado sobre usted. Tenga en cuenta que es posible que no estemos obligados a responder a sus solicitudes de "conocimiento" o acceso a partes específicas de Información personal más de dos veces en un período de 12 meses.
• Derecho a la portabilidad de los datos: Tiene derecho a solicitar el acceso a su información en un formato portátil. 
• Derecho a eliminar: Tiene derecho a solicitar que eliminemos la información personal que hemos recopilado de usted o sobre usted.•
 Derecho a corregir: Tiene derecho a solicitar que corrijamos la información personal inexacta que podamos mantener sobre usted,  sujeto a la verificación adecuada.
• Derecho a excluirse de ciertos tipos de usos y divulgaciones de información personal: Es posible que tenga derecho a optar por no participar en la "venta" o el "intercambio" de su información personal, o el uso y la divulgación de su información personal para "publicidad dirigida" (según se definen estos términos en la ley aplicable). 
• Derecho a apelar: Es posible que tenga derecho a apelar una decisión que hayamos tomado en relación con su solicitud de derechos de privacidad. 

           </p>


           <p className={styles.text}>
            
           Cómo enviar solicitudes de acceso/eliminación/corrección
Para aprovechar sus derechos de privacidad a conocer/portabilidad, eliminar o corregir la información personal, visite haga clic aquí. También puede ponerse en contacto con nuestros centros de atención al cliente en los números de teléfono y las páginas de contacto que se indican a continuación (incluso para presentar una apelación de una denegación de sus derechos de privacidad):

            </p>

            <p className={styles.text}>
            En los EE. UU. 

Keurig (bebidas calientes, cafeteras y marcas de café) al 866-901-BREW (2739) o haga clic aquí
 Marcas Dr Pepper (bebidas frías y alimentos) al 800-696-5891 o haga clic aquí y desplácese hacia abajo hasta Contáctenos
Sunkist, Schweppes, 7Up, Bai, Snapple, Mystic, y Mott’s  DONDE??

 En Canadá

Keurig (marcas de bebidas calientes, cafeteras y cafés) al 1-800-361-5628 o haga clic aquí 
Canadá Dry Mott's Inc. marcas (bebidas frías y alimentos) al 1-877-350-6590 o haga clic aquí
Sunkist, Schweppes, 7Up, Bai, Snapple, Mystic, y Mott’s  DONDE?

            </p>


            <p className={styles.text}>
            KDP puede tomar medidas para verificar su identidad en función de la información que tenemos archivada sobre usted antes de responder a su solicitud de acceso/portabilidad, eliminación o corrección. Es posible que deba proporcionar su dirección de correo electrónico para que se utilice para este propósito. Responderemos a su solicitud en un plazo de 45 días naturales si es residente de EE. UU., 30 días naturales si es residente de Canadá, a menos que necesitemos tiempo adicional, en cuyo caso se lo haremos saber.        
            </p>


            <p className={styles.text}>
            Si usted es residente canadiense, puede retirar cualquier consentimiento que nos haya dado previamente para el procesamiento de su información personal, y aplicaremos sus preferencias en el futuro.
            </p>

            <p className={styles.text}>
            Cómo enviar solicitudes de exclusión 
 
Si usted es residente de los EE. UU., para aprovechar su derecho a optar por no participar en la venta o el intercambio de información personal o para optar por no recibir publicidad dirigida, haga clic aquí. También puede enviar una solicitud poniéndose en contacto con nuestros centros de atención al cliente de EE. UU. como se describe anteriormente. Cumpliremos con su solicitud de exclusión voluntaria en un plazo de 15 días hábiles. Si desea recibir información sobre sus opciones de divulgación o detener las comunicaciones de terceros, deberá ponerse en contacto directamente con terceros no afiliados.
             </p>


            <p className={styles.text}>
            Como alternativa, si es residente de EE. UU., puede utilizar determinadas señales de preferencia para ejercer automáticamente su derecho de exclusión de ventas y acciones con todas las empresas con las que interactúa en línea, incluida KDP. Si habilita una señal de preferencia de exclusión voluntaria basada en el navegador, como el Control de privacidad global (GPC), al recibirla o detectarla, trataremos la señal como una solicitud válida para optar por no participar en la venta o el intercambio de información personal vinculada a ese navegador y cualquier perfil de consumidor que tengamos asociado con ese navegador. Tenga en cuenta que si utiliza diferentes navegadores o perfiles de navegador, es posible que deba habilitar la señal en cada navegador o perfil.
            </p>


            <p className={styles.text}>
            Valoramos su privacidad y no discriminaremos en respuesta al ejercicio de sus derechos de privacidad.

             </p>


            <p className={styles.text}>
Solicitud de agente
Puede autorizar a alguien a realizar una solicitud de derechos de privacidad en su nombre (un agente autorizado). Los agentes autorizados deberán demostrar que usted los ha autorizado a actuar en su nombre o deben demostrar que tienen un poder notarial de conformidad con la ley testamentaria aplicable. KDP se reserva el derecho de solicitarle directamente a usted la confirmación de que el agente está autorizado para realizar dicha solicitud, o de solicitar información adicional para confirmar la identidad del agente. Un agente autorizado no utilizará la información personal de un consumidor, ni ninguna información recopilada de o sobre el consumidor, para ningún otro propósito que no sea cumplir con las solicitudes del consumidor, para la verificación o para la prevención del fraude.
           </p>


            <p className={styles.text}>
            Divulgaciones adicionales de protección de datos
Categorías de información personal vendida o compartida
En los últimos 12 meses, KDP ha "vendido" o "compartido" las siguientes categorías de Información personal (tal y como se definen estos términos en la legislación aplicable), es decir, con fines analíticos y de publicidad personalizada:• Identificadores/Información de contacto: vendidos o compartidos con anunciantes externos, proveedores de análisis de datos e internamente con las filiales de KDP;• Datos de geolocalización (no precisos): vendidos o compartidos con anunciantes externos,  proveedores de análisis de datos, e internamente con las filiales de KDP;
• • Actividad electrónica/por Internet: se vende o se comparte con anunciantes externos, proveedores de análisis de datos e internamente con las Filiales de KDP; y• Inferencias de perfil: se venden o comparten con anunciantes externos, proveedores de análisis de datos e internamente con las Filiales de KDP.

            </p>


            <p className={styles.text}>
            No "vendemos" ni "compartimos" a sabiendas información personal sobre personas menores de 16 años.
                       </p>


            <p className={styles.text}> 
            Categorías de información personal divulgada con fines comerciales
En los últimos 12 meses, KDP ha divulgado las siguientes categorías de Información personal con fines comerciales (por ejemplo, con nuestros proveedores de servicios que tienen restringido el uso de su Información personal fuera del alcance de sus servicios para KDP):• Identificadores/Información de contacto: divulgados internamente dentro de KDP y con las Filiales de KDP, así como a los proveedores de servicios;• Datos de geolocalización (no precisos):  información comercial: divulgada internamente dentro de KDP y con las filiales de KDP, así como a los proveedores de servicios;• Información comercial: divulgada internamente dentro de KDP y con las filiales de KDP, así como a los proveedores de servicios.• Actividad electrónica/en Internet; divulgada internamente dentro de KDP y con las Filiales de KDP, así como a los proveedores de servicios; 
• Información sonora y visual; divulgada internamente dentro de KDP y con las Filiales de KDP, así como a los proveedores de servicios; y• Inferencias de perfil: se divulgan internamente dentro de KDP y con las Filiales de KDP, así como a los proveedores de servicios.
 
Uso y divulgación de información personal confidencial: En la medida en que recopilemos, usemos o compartamos "información personal confidencial", tal como se define ese término en la ley aplicable de California, limitamos nuestro uso o divulgación de la información personal confidencial para fines comerciales permitidos.

En el caso de los antiguos empleados y los candidatos a empleados, envíe un correo electrónico a HR_Compliance@kdrp.com para enviar una solicitud de privacidad.  
        </p>

            <p className={styles.text}>
            AVISO DE INCENTIVOS FINANCIEROS <br />
KDP ofrece varios programas de fidelización ("Programas") que brindan la oportunidad de ganar puntos canjeables u otras recompensas. La participación en estos Programas es gratuita para los clientes elegibles.
 
Actualmente, los programas que ofrecemos son: En los EE. UU., Pepper Perks, Pepper Pack y Keurig Perks y en Canadá, Keurig Loyalty Program para Canadá. KDP también puede ofrecer descuentos o promociones cuando se registra para recibir mensajes de marketing o solicitar una oferta específica cuando interactúa con nuestros Servicios ("Ofertas"). Los términos de cada Oferta se le proporcionarán cuando la oferta esté disponible. Puede optar por no recibir mensajes de marketing en cualquier momento, como se describe en los mensajes que le enviamos, y puede ejercer sus otras opciones como se describe anteriormente en "Sus opciones y exclusión".
 
Recopilamos información personal para respaldar y cumplir con los Programas y Ofertas y con fines de publicidad dirigida, que incluye identificadores/información de contacto, información comercial, información sobre la actividad en Internet u otras redes electrónicas, identificadores de redes sociales e inferencias de perfil. Es posible que compartamos su información personal con terceros como se describe en la sección "Cómo compartimos su información personal" anterior, incluidos los proveedores de análisis de datos y los proveedores de tecnología publicitaria. 

Debido a que recopilamos información personal, los Programas y Ofertas pueden considerarse "incentivos financieros" o "diferencias de precio o servicio" según la ley de California o "programas de lealtad de buena fe" según la ley de Colorado. El valor de la Información personal que recopilamos variará en función del Programa y/o la Oferta, y calculamos este valor en función de los gastos relacionados con la oferta del Programa o la Oferta (como los costos de proporcionar descuentos o promociones, los costos de propiedad intelectual o marketing y otros gastos relacionados).
 
Usted tiene derecho a excluirse de cualquier Programa u Oferta en cualquier momento de acuerdo con los términos de cada Programa y Oferta. Si tiene alguna pregunta o necesita ayuda, póngase en contacto con nosotros como se describe a continuación.

             </p>


            <p className={styles.text}>
            En los EE. UU.:

Keurig (bebidas calientes, cafeteras y marcas de café) al 866-901-BREW (2739) o haga clic aquí
 Marcas Dr Pepper (bebidas frías y alimentos) al 800-696-5891 o haga clic aquí y desplácese hacia abajo hasta Contáctenos
Sunkist, Schweppes, 7Up, Bai, Snapple, Mystic, y Mott’s  

     </p>


            <p className={styles.text}>
            En Canadá:
Keurig (marcas de bebidas calientes, cafeteras y cafés) al 1-800-361-5628 o haga clic aquí 
Canadá Dry Mott's Inc. marcas (bebidas frías y alimentos) al 1-877-350-6590 o haga clic aquí
Sunkist, Schweppes, 7Up, Bai, Snapple, Mystic, y Mott’s  
 </p>


            <p className={styles.text}>

            CUÁNTO TIEMPO SE CONSERVA SU INFORMACIÓN PERSONAL <br />
Conservaremos su información personal de conformidad con la ley aplicable y nuestras políticas de retención. Lo que esto significa en la práctica variará entre los diferentes tipos de información, y cuando consideramos nuestro enfoque, tenemos en cuenta el cumplimiento de cualquier requisito legal, contable o de presentación de informes. También podemos agregar o anonimizar la información para que ya no lo identifique, en cuyo caso podemos usar esta información indefinidamente sin previo aviso.
   </p>


           <p className={styles.text}>
           SEGURIDAD DE SU INFORMACIÓN PERSONAL <br />
KDP toma precauciones destinadas a ayudar a proteger la información personal que recopilamos y almacenamos. Desafortunadamente, ningún sistema o transmisión electrónica de datos es completamente seguro. Cualquier transmisión es bajo su propio riesgo y esperamos que utilice las medidas de seguridad adecuadas para proteger su información.

Usted es responsable de mantener la seguridad de su cuenta de KDP. KDP tratará el acceso a los Servicios a través de su Cuenta de KDP como autorizado por usted.

ALMACENAMIENTO Y PROCESAMIENTO DE SU INFORMACIÓN: SOLO PARA RESIDENTES DE CANADÁ <br />
Su información puede ser recopilada, accedida, procesada y almacenada en Canadá, así como en cualquier otro país en el que nosotros, nuestras filiales o nuestros socios externos mantengamos instalaciones. Los organismos encargados de hacer cumplir la ley en estos países pueden acceder a la información, y la privacidad. Es posible que las leyes de estos países no ofrezcan el mismo nivel de protección que las del país en el que Residas.

PRIVACIDAD DE LOS NIÑOS <br />
KDP se compromete a proteger la privacidad de los niños. No dirigimos los Servicios a, ni recopilamos a sabiendas ninguna información personal de niños menores de 18 años, excepto como se indica. En Canadá, podemos recopilar información personal de niños mayores de 13 años para administrar sorteos, concursos, descuentos u otras promociones. Cuando así lo exija la ley aplicable, no recopilaremos información personal de un niño sin obtener el consentimiento del padre o tutor del niño para dicha recopilación. Si un menor nos ha proporcionado información personal, sus padres o tutores pueden ponerse en contacto con nosotros utilizando la información de contacto que se indica a continuación para solicitar la eliminación de dicha información.
     </p>



           <p className={styles.text}>
           SERVICIOS DE MARCA COMPARTIDA <br />
De vez en cuando, también podemos ofrecer servicios que son de marca compartida (es decir, operados en asociación con una empresa no afiliada). Nosotros y nuestro socio de marca compartida podemos recopilar información personal en sitios web o servicios de marca compartida. Nuestro procesamiento de su información personal está sujeto a esta Política de privacidad, pero el procesamiento de su información personal por parte de un socio de marca compartida está sujeto a su política y prácticas de privacidad, no a las nuestras.
    </p>



           <p className={styles.text}>
           CAMBIOS Y OTRAS POLÍTICAS DE PRIVACIDAD DE KDP <br />
La fecha de la última actualización de esta Política de Privacidad se indica en la parte superior de esta Política. A medida que añadimos nuevas funciones, podemos revisar o complementar esta Política de privacidad. Si cambiamos la Política de Privacidad de manera sustancial, proporcionaremos el aviso correspondiente. Dicho aviso puede proporcionarse a través de un banner temporal en nuestro Sitio, un correo electrónico enviado a los usuarios para los que tenemos una dirección de correo electrónico, o anotando temporalmente "ACTUALIZADO" junto al enlace de la Política de privacidad en el pie de página de nuestro Sitio.   Su uso continuado de los Servicios después de dicho cambio constituye su aceptación de la Política de Privacidad, en su versión modificada. A partir de la fecha de la última actualización, la Política de Privacidad modificada sustituye a todas las versiones anteriores o acuerdos, avisos o declaraciones sobre la Política de Privacidad.
       </p>




       <p className={styles.text}>

       CONTÁCTENOS <br />
Si tiene alguna pregunta, comentario o inquietud con respecto a esta Política de privacidad o los Servicios, comuníquese con nuestro Oficial de privacidad en privacy@kdrp.com.

Para Canadá, también puede comunicarse con nuestra Oficina de Privacidad por correo a:

Keurig Dr Pepper Canadá
30 Eglinton Av. West, suite 600, Mississauga ON L5R 3E7
A la atención de: Oficina de Privacidad
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

export default Priv;