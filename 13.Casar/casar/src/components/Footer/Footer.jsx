import './Footer.css';
import { FiPhone } from 'react-icons/fi';
import { IoMailOutline } from 'react-icons/io5';
import { IoStorefrontOutline } from 'react-icons/io5';
import { LuMapPin } from 'react-icons/lu';

export const Footer = () => {
  return (
    <footer className="Footer">
      <div className="grid">
        <div className="footerGridItem">
          <h3 className="footerTitle">Televentas</h3>
          <p className="footerText">
            <FiPhone className="phone" /> (01) 612-6862
          </p>
          <p className="footerText">
            <IoMailOutline className="phone" /> televentas@integraretail.pe
          </p>
          <p className="footerText">
            <IoStorefrontOutline className="phone" />
            <span className="text">
              Horario de atención de Lunes a Viernes de 9 AM a 6 PM y los
              Sábados de 9 AM a 1 PM
            </span>
          </p>

          <h3 className="footerTitle">Atención al cliente</h3>
          <p className="footerText">
            <FiPhone className="phone" />
            <span className="text">946-689-902</span>
          </p>
          <p className="footerText">
            <FiPhone className="phone" />
            <span className="text">
              (01) 612-6868 anexo #6 / directo (01) 612-6863 / En tiendas el
              anexo: 8282
            </span>
          </p>
          <p className="footerText">
            <IoMailOutline className="phone" />
            <span className="text">atencionalusuario@integraretail.pe</span>
          </p>
          <p className="footerText">
            <IoStorefrontOutline className="phone" />
            <span className="text">
              Horario de atención Lunes a Sábado 9:00 AM a 6:00 PM
            </span>
          </p>
          <p className="footerText">
            <LuMapPin className="phone" />
            <span className="text">
              Av. Primavera N°1796 - Oficina #501 Urb. Centro Comercial de
              Monterrico - Santiago de Surco - Lima - Perú
            </span>
          </p>
        </div>
        <div className="footerGridItem">
          <h3 className="footerTitle">Servicio al cliente</h3>
          <p className="footerText link">Términos y Condiciones de la Web</p>
          <p className="footerText link">Políticas de Cambios</p>
          <p className="footerText link">Legales y Promociones </p>
          <p className="footerText link">Protección de datos personales</p>
          <p className="footerText link">Cómo pagar mi Credialtoque</p>
          <p className="footerText link">Preguntas frecuentes</p>
        </div>
        <div className="footerGridItem">
          <h3 className="footerTitle">Sobre nosotros</h3>
          <p className="footerText link">Nosotros</p>
          <p className="footerText link">Catálogo del mes</p>
          <p className="footerText link">Credialtoque</p>
          <p className="footerText link">Guía de compra</p>
          <p className="footerText link">Seguros</p>
          <p className="footerText link">Garantía extendida</p>
          <p className="footerText link">Asistencia</p>
          <p className="footerText link">Ubicación de tiendas</p>
          <p className="footerText link">Contáctanos</p>
        </div>
        <div className="footerGridItem">
          <h3 className="footerTitle">Promociones y novedades</h3>
          <p className="footerText footerText2">
            Entérate primero de lo último en CARSA que tenemos para ti
          </p>
          <input type="text" className="inputFooter" placeholder="Tu correo" />
          <div className="inputCheckbox">
            <div className="footerCheckbox">
              <input type="checkbox" name="checkbox" id="1" />
              <label for="1" style={{ display: 'none' }}></label>
            </div>

            <p className="footerText footerText2">
              Deseo que INTEGRA RETAIL S.A.C. (Razón Social de Carsa) y sus
              empresas vinculadas me mantengan informado(a) de nuevas ofertas y
              promociones. He leído y acepto la{' '}
              <span>Política de Privacidad</span> y
              <span>Términos y condiciones</span>
            </p>
          </div>

          <button className="footerBtn">Suscribirme</button>
          <img
            src="https://carsaperupoc.vtexassets.com/assets/vtex/assets-builder/carsaperupoc.carsaperupoc-theme/4.0.3/images/footer/libro_reclamaciones___20e791f8d15bd4673d0a34aea640212e.png"
            alt="Libro de Reclamaciones"
          />
        </div>
      </div>
      <div className="socialMedia">
        <div className="follow">
          <p>Siguenos</p>
          <img
            src="https://carsaperupoc.vtexassets.com/assets/vtex/assets-builder/carsaperupoc.carsaperupoc-theme/4.0.3/icons/facebook_logo___2905aa55252982e7450461e840ab75ee.svg"
            alt="facebook"
          />
          <img
            src="https://carsaperupoc.vtexassets.com/assets/vtex/assets-builder/carsaperupoc.carsaperupoc-theme/4.0.3/icons/instagram_logo___62d985f0715c998a37996ec6a30f683d.svg"
            alt="instagram"
          />
          <img
            src="https://carsaperupoc.vtexassets.com/assets/vtex/assets-builder/carsaperupoc.carsaperupoc-theme/4.0.3/icons/youtube_logo___6fd2d87423a3416b9113d2067b15357f.svg"
            alt="youtube"
          />
        </div>
        <div className="pay">
          <p>Métodos de pago</p>
          <img
            src="https://carsaperupoc.vtexassets.com/assets/vtex/assets-builder/carsaperupoc.carsaperupoc-theme/6.1.7/icons/visa_logo___cdae79d2e9b7f80551fa5e2f8cec6846.svg"
            alt="VISA"
          />
          <img
            src="https://carsaperupoc.vtexassets.com/assets/vtex/assets-builder/carsaperupoc.carsaperupoc-theme/6.1.7/icons/mastercard_logo___dffb366b14c2cd5a86f4a16bf610b407.svg"
            alt="MASTERCARD"
          />
          <img
            src="https://carsaperupoc.vtexassets.com/assets/vtex/assets-builder/carsaperupoc.carsaperupoc-theme/6.1.7/icons/dinners_logo___9728b1692fe86b60b7cc4e377d2a86bf.svg"
            alt="DINERS"
          />
          <img
            src="https://carsaperupoc.vtexassets.com/assets/vtex/assets-builder/carsaperupoc.carsaperupoc-theme/6.1.7/icons/america_express_logo___a190eae763d8f2bd4a55da57036be81f.svg"
            alt="AMEX"
          />
          <img
            src="https://carsaperupoc.vtexassets.com/assets/vtex/assets-builder/carsaperupoc.carsaperupoc-theme/6.1.7/icons/pagoEfectivo_logo___b553901896100a3c39ac6b014a3ee7f3.svg"
            alt="PAGOEFECTIVO"
          />
        </div>
      </div>

      <div className="attribution">
        <div className="width1368">
          <p className="align">
            <span>
              Copyright © 2024 Carsa. All Right Reserved. RUC: 20605475273
            </span>
          </p>
          <p className="align">
            <span>Tecnología : </span>
            <img
              src="https://carsaperupoc.vtexassets.com/assets/vtex/assets-builder/carsaperupoc.carsaperupoc-theme/6.1.7/icons/vtexIcon___c30dc3e79da07054f98045b15254030a.svg"
              alt="VTEX"
            />
          </p>
          <p className="align">
            <span>Powered by : </span>
            <img
              src="https://carsaperupoc.vtexassets.com/assets/vtex/assets-builder/carsaperupoc.carsaperupoc-theme/6.1.7/icons/prodequaIcon___5cf063e1f69a0fbb49a307f043e0adda.svg"
              alt="Prodequa"
            />
          </p>
        </div>
      </div>
    </footer>
  );
};
