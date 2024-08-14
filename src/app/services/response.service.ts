import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserFormResponses } from '../models/response.model';

@Injectable({
  providedIn: 'root',
})
export class ResponseService {
  private userFormResponses: UserFormResponses[] = [
    {
      email: 'client2@example.com',
      name: 'Ramiro Wayne Roonie',
      formCompleted: true,
      responses: [
        {
          question: '¿Cuándo se creó el negocio?',
          answer:
            'El negocio se creó en el año 2019, con la intención de aplicar una metodología ágil y efectiva para la planificación estratégica de pequeñas y medianas empresas.',
        },
        {
          question: '¿Quiénes lo fundaron?',
          answer:
            'El negocio fue fundado por Susana Álvarez Delgado y Santiago Zapata Correa, bajo la supervisión de la profesora Luz María Rivas-Montoya.',
        },
        {
          question: '¿Por qué crearon el negocio?',
          answer:
            'El negocio se creó para brindar apoyo estratégico a micronegocios y pymes, especialmente aquellos que no podían acceder a consultorías de alto costo.',
        },
        {
          question: '¿Para qué crearon el negocio?',
          answer:
            'El objetivo principal era desarrollar una metodología que ayudara a estas empresas a mejorar su estrategia competitiva y fortalecer su posición en el mercado.',
        },
        {
          question: '¿Qué productos y/o servicios ofrece?',
          answer:
            'Ofrece servicios de consultoría estratégica basada en la metodología Estramipyme, además de talleres de cocreación y diagnóstico empresarial.',
        },
        {
          question: '¿En qué sector o industria que compite su negocio?',
          answer:
            'El negocio compite en el sector de consultoría estratégica, enfocado en micronegocios y pymes.',
        },
        {
          question:
            '¿Qué proporción de sus ventas corresponde a los costos de operación del negocio?',
          answer:
            'Aproximadamente el 60% de las ventas corresponden a los costos de operación, debido al enfoque en procesos ágiles y simplificados.',
        },
        {
          question: '¿Tienen página web o redes sociales?',
          answer:
            'Sí, el negocio tiene presencia en línea a través de su página web y redes sociales, donde comparte información sobre sus servicios y recursos estratégicos.',
        },
        {
          question: '¿Cuál es el perfil del negocio?',
          answer:
            'El perfil del negocio se centra en ser una consultoría estratégica ágil y accesible, dirigida a microempresas y pymes que buscan fortalecer su estrategia competitiva con recursos limitados.',
        },
        {
          question:
            '¿Cuáles son los reclamos o quejas de los clientes más frecuentes?',
          answer:
            'Los clientes suelen quejarse de la falta de tiempo para implementar las estrategias sugeridas, así como de la complejidad de algunas herramientas propuestas.',
        },
        {
          question:
            '¿Cuáles son las razones por las que reciben más manifestaciones de gratitud y felicitación?',
          answer:
            'Reciben felicitaciones por la facilidad y agilidad de la metodología Estramipyme, que permite a las pequeñas empresas competir en su sector de manera más efectiva.',
        },
        {
          question: '¿Con quién tienen más contacto los clientes?',
          answer:
            'Los clientes tienen más contacto con los consultores estratégicos asignados a cada proyecto, quienes guían el proceso de principio a fin.',
        },
        {
          question: '¿Cómo atienden a sus clientes?',
          answer:
            'La atención a los clientes se realiza de manera personalizada, con sesiones de consultoría tanto presenciales como virtuales, adaptadas a las necesidades del negocio.',
        },
        {
          question: '¿A través de qué canales se comunica con sus clientes?',
          answer:
            'La comunicación con los clientes se realiza principalmente a través de WhatsApp, correo electrónico y reuniones virtuales.',
        },
        {
          question:
            '¿Del total de clientes que tiene, cómo describiría a los más frecuentes?',
          answer:
            'Los clientes más frecuentes son microempresas y pymes que buscan mejorar su competitividad en el mercado local, con un enfoque en la sostenibilidad y crecimiento a largo plazo.',
        },
        {
          question:
            "¿Cuáles son los principales trabajos o tareas que tiene que hacer su cliente y que él podría 'contratar' con su negocio?",
          answer:
            'Los principales trabajos incluyen la formulación de estrategias competitivas, análisis de mercado, y la implementación de modelos de negocio más eficientes.',
        },
        {
          question:
            '¿Usted cree que al negocio le llegan los clientes a comprar, o ustedes hacen un esfuerzo por salir a vender?',
          answer:
            'El negocio realiza un esfuerzo proactivo por atraer clientes, participando en eventos de networking y ofreciendo demostraciones de la metodología Estramipyme.',
        },
        {
          question:
            '¿Hay algún cliente del que dependan en gran medida los ingresos de la empresa?',
          answer:
            'No, los ingresos están diversificados entre varios clientes, lo que reduce la dependencia de un solo cliente importante.',
        },
        {
          question: '¿Cuáles son sus tres competidores que más le preocupan?',
          answer:
            'Los tres competidores más preocupantes son consultoras estratégicas tradicionales, empresas que ofrecen software de planificación estratégica, y firmas de consultoría que también brindan servicios a pymes.',
        },
        {
          question:
            '¿Qué ofrecen ellos que puede ser atractivo para sus clientes?',
          answer:
            'Ofrecen una mayor experiencia en grandes proyectos, herramientas tecnológicas avanzadas y una red más amplia de contactos empresariales.',
        },
        {
          question:
            '¿Cuáles son los dos atributos o características de la propuesta de valor actual que los hacen diferentes de sus competidores más cercanos?',
          answer:
            'Los dos atributos que nos diferencian son la simplicidad y agilidad de la metodología Estramipyme, así como el enfoque personalizado en cada cliente.',
        },
        {
          question:
            '¿Sus clientes lo prefieren porque tiene un precio menor al de sus competidores? ¿O cuál es la razón de su preferencia?',
          answer:
            'Los clientes prefieren nuestros servicios no solo por el precio competitivo, sino por la metodología accesible y efectiva que realmente impulsa resultados.',
        },
        {
          question: '¿Cómo le pagan sus clientes por su producto o servicio?',
          answer:
            'Los clientes nos pagan principalmente por servicios unitarios de consultoría, así como por la participación en talleres y programas de capacitación.',
        },
        {
          question:
            'Además de los ingresos por ventas de producto, ¿tiene otras fuentes de ingresos?',
          answer:
            'Sí, también generamos ingresos adicionales a través de la venta de recursos educativos y la prestación de servicios técnicos especializados.',
        },
        {
          question: '¿Cuáles son los costos más altos de su negocio?',
          answer:
            'Los costos más altos corresponden a la contratación de consultores especializados y al desarrollo de materiales educativos y herramientas digitales.',
        },
        {
          question:
            '¿Cuáles son los costos más altos que necesita para cumplir lo que les prometió a sus clientes?',
          answer:
            'Los costos más altos para cumplir con las promesas a los clientes incluyen la investigación y actualización constante de la metodología, así como el soporte técnico durante la implementación.',
        },
        {
          question:
            '¿Cuáles son los recursos más importantes con los que cuenta su negocio?',
          answer:
            'Los recursos más importantes incluyen el conocimiento especializado en estrategia empresarial, herramientas metodológicas innovadoras y un equipo de consultores experimentados.',
        },
        {
          question:
            '¿Qué es lo que ustedes saben hacer mejor que sus competidores?',
          answer:
            'Sabemos simplificar procesos complejos de estrategia para que sean comprensibles y aplicables por microempresas y pymes, algo que nuestros competidores a menudo no logran.',
        },
        {
          question: '¿Tiene algún proceso subcontratado?',
          answer:
            'Sí, algunos procesos técnicos como el desarrollo de plataformas digitales son subcontratados a empresas especializadas.',
        },
        {
          question: '¿Sabe cuál es el talento más crítico para el negocio?',
          answer:
            'El talento más crítico es la capacidad para entender las necesidades estratégicas específicas de cada cliente y ofrecer soluciones personalizadas y efectivas.',
        },
        {
          question: '¿Quién toma las decisiones clave del negocio?',
          answer:
            'Las decisiones clave son tomadas por un comité de dirección compuesto por los fundadores y consultores senior.',
        },
        {
          question:
            '¿Existe alguna reunión donde se hable del negocio con los empleados?',
          answer:
            'Sí, se realizan reuniones mensuales donde se discuten los avances del negocio, se revisan casos de éxito y se ajustan las estrategias según sea necesario.',
        },
        {
          question: '¿Cómo describiría su negocio?',
          answer:
            'Nuestro negocio es una consultoría estratégica ágil, enfocada en proporcionar soluciones prácticas y efectivas para micronegocios y pymes.',
        },
        {
          question: '¿Qué lo hace diferente de otros negocios parecidos?',
          answer:
            'Nos diferenciamos por nuestra metodología Estramipyme, que es rápida de implementar, y por nuestro enfoque en hacer accesible la estrategia a empresas con recursos limitados.',
        },
        {
          question:
            '¿Qué pasa cuando un empleado no está cumpliendo las expectativas de la administración del negocio?',
          answer:
            'Cuando un empleado no cumple con las expectativas, se realiza una evaluación para identificar áreas de mejora y se proporciona capacitación adicional si es necesario.',
        },
        {
          question:
            '¿Hay algún proveedor del que dependa en gran medida la operación de la empresa?',
          answer:
            'No dependemos en gran medida de un solo proveedor; trabajamos con varios para garantizar la continuidad del negocio.',
        },
        {
          question:
            '¿Qué tan fácil o difícil es entrar en esta industria? ¿Debido a qué?',
          answer:
            'Entrar en esta industria es relativamente difícil debido a la necesidad de contar con un conocimiento profundo en estrategia empresarial y una red de contactos bien establecida.',
        },
        {
          question: '¿Qué tan intensa es la competencia en esta industria?',
          answer:
            'La competencia en esta industria es intensa, especialmente en el segmento de consultorías tradicionales que buscan atraer a las mismas pymes.',
        },
        {
          question:
            '¿Cuál cree usted que sea la mayor preocupación de los administradores de negocios similares al suyo?',
          answer:
            'La mayor preocupación suele ser la capacidad de adaptarse rápidamente a los cambios del mercado y mantenerse relevante en un entorno altamente competitivo.',
        },
        {
          question:
            'En los pasados 12 meses, ¿ha incumplido en la fecha de pago de su nómina?',
          answer:
            'No, hemos mantenido todos los pagos de nómina al día en los últimos 12 meses.',
        },
        {
          question:
            'En los pasados 12 meses, ¿ha incumplido en el pago a sus proveedores?',
          answer:
            'No, todos los pagos a proveedores se han realizado puntualmente.',
        },
        {
          question:
            'En los pasados 12 meses, ¿ha incumplido en los pagos de sus créditos?',
          answer:
            'No, hemos cumplido con todas nuestras obligaciones crediticias en tiempo y forma.',
        },
        {
          question:
            'En los últimos tres años, ¿ha podido hacer mejoras en su negocio? ¿O contratar más personal?',
          answer:
            'Sí, en los últimos tres años hemos realizado varias mejoras en nuestra metodología y hemos contratado a más consultores para expandir nuestros servicios.',
        },
        {
          question: '¿Cuál es su mayor sueño con el negocio?',
          answer:
            'Nuestro mayor sueño es convertirnos en la consultoría de referencia para micronegocios y pymes en toda América Latina.',
        },
        {
          question:
            '¿Qué no hemos conversado que sea importante para el negocio?',
          answer:
            'Es importante mencionar que estamos trabajando en un programa de mentoría para apoyar a empresarios emergentes y ayudarles a implementar estrategias de crecimiento sostenibles.',
        },
      ],
    },

    {
      email: 'client4@example.com',
      name: 'Jorge González',
      formCompleted: true,
      responses: [
        {
          question: '¿Cuándo se creó el negocio?',
          answer:
            'El negocio se creó en el año 2019, con la intención de aplicar una metodología ágil y efectiva para la planificación estratégica de pequeñas y medianas empresas.',
        },
        {
          question: '¿Quiénes lo fundaron?',
          answer:
            'El negocio fue fundado por Susana Álvarez Delgado y Santiago Zapata Correa, bajo la supervisión de la profesora Luz María Rivas-Montoya.',
        },
        {
          question: '¿Por qué crearon el negocio?',
          answer:
            'El negocio se creó para brindar apoyo estratégico a micronegocios y pymes, especialmente aquellos que no podían acceder a consultorías de alto costo.',
        },
        {
          question: '¿Para qué crearon el negocio?',
          answer:
            'El objetivo principal era desarrollar una metodología que ayudara a estas empresas a mejorar su estrategia competitiva y fortalecer su posición en el mercado.',
        },
        {
          question: '¿Qué productos y/o servicios ofrece?',
          answer:
            'Ofrece servicios de consultoría estratégica basada en la metodología Estramipyme, además de talleres de cocreación y diagnóstico empresarial.',
        },
        {
          question: '¿En qué sector o industria que compite su negocio?',
          answer:
            'El negocio compite en el sector de consultoría estratégica, enfocado en micronegocios y pymes.',
        },
        {
          question:
            '¿Qué proporción de sus ventas corresponde a los costos de operación del negocio?',
          answer:
            'Aproximadamente el 60% de las ventas corresponden a los costos de operación, debido al enfoque en procesos ágiles y simplificados.',
        },
        {
          question: '¿Tienen página web o redes sociales?',
          answer:
            'Sí, el negocio tiene presencia en línea a través de su página web y redes sociales, donde comparte información sobre sus servicios y recursos estratégicos.',
        },
        {
          question: '¿Cuál es el perfil del negocio?',
          answer:
            'El perfil del negocio se centra en ser una consultoría estratégica ágil y accesible, dirigida a microempresas y pymes que buscan fortalecer su estrategia competitiva con recursos limitados.',
        },
        {
          question:
            '¿Cuáles son los reclamos o quejas de los clientes más frecuentes?',
          answer:
            'Los clientes suelen quejarse de la falta de tiempo para implementar las estrategias sugeridas, así como de la complejidad de algunas herramientas propuestas.',
        },
        {
          question:
            '¿Cuáles son las razones por las que reciben más manifestaciones de gratitud y felicitación?',
          answer:
            'Reciben felicitaciones por la facilidad y agilidad de la metodología Estramipyme, que permite a las pequeñas empresas competir en su sector de manera más efectiva.',
        },
        {
          question: '¿Con quién tienen más contacto los clientes?',
          answer:
            'Los clientes tienen más contacto con los consultores estratégicos asignados a cada proyecto, quienes guían el proceso de principio a fin.',
        },
        {
          question: '¿Cómo atienden a sus clientes?',
          answer:
            'La atención a los clientes se realiza de manera personalizada, con sesiones de consultoría tanto presenciales como virtuales, adaptadas a las necesidades del negocio.',
        },
        {
          question: '¿A través de qué canales se comunica con sus clientes?',
          answer:
            'La comunicación con los clientes se realiza principalmente a través de WhatsApp, correo electrónico y reuniones virtuales.',
        },
        {
          question:
            '¿Del total de clientes que tiene, cómo describiría a los más frecuentes?',
          answer:
            'Los clientes más frecuentes son microempresas y pymes que buscan mejorar su competitividad en el mercado local, con un enfoque en la sostenibilidad y crecimiento a largo plazo.',
        },
        {
          question:
            "¿Cuáles son los principales trabajos o tareas que tiene que hacer su cliente y que él podría 'contratar' con su negocio?",
          answer:
            'Los principales trabajos incluyen la formulación de estrategias competitivas, análisis de mercado, y la implementación de modelos de negocio más eficientes.',
        },
        {
          question:
            '¿Usted cree que al negocio le llegan los clientes a comprar, o ustedes hacen un esfuerzo por salir a vender?',
          answer:
            'El negocio realiza un esfuerzo proactivo por atraer clientes, participando en eventos de networking y ofreciendo demostraciones de la metodología Estramipyme.',
        },
        {
          question:
            '¿Hay algún cliente del que dependan en gran medida los ingresos de la empresa?',
          answer:
            'No, los ingresos están diversificados entre varios clientes, lo que reduce la dependencia de un solo cliente importante.',
        },
        {
          question: '¿Cuáles son sus tres competidores que más le preocupan?',
          answer:
            'Los tres competidores más preocupantes son consultoras estratégicas tradicionales, empresas que ofrecen software de planificación estratégica, y firmas de consultoría que también brindan servicios a pymes.',
        },
        {
          question:
            '¿Qué ofrecen ellos que puede ser atractivo para sus clientes?',
          answer:
            'Ofrecen una mayor experiencia en grandes proyectos, herramientas tecnológicas avanzadas y una red más amplia de contactos empresariales.',
        },
        {
          question:
            '¿Cuáles son los dos atributos o características de la propuesta de valor actual que los hacen diferentes de sus competidores más cercanos?',
          answer:
            'Los dos atributos que nos diferencian son la simplicidad y agilidad de la metodología Estramipyme, así como el enfoque personalizado en cada cliente.',
        },
        {
          question:
            '¿Sus clientes lo prefieren porque tiene un precio menor al de sus competidores? ¿O cuál es la razón de su preferencia?',
          answer:
            'Los clientes prefieren nuestros servicios no solo por el precio competitivo, sino por la metodología accesible y efectiva que realmente impulsa resultados.',
        },
        {
          question: '¿Cómo le pagan sus clientes por su producto o servicio?',
          answer:
            'Los clientes nos pagan principalmente por servicios unitarios de consultoría, así como por la participación en talleres y programas de capacitación.',
        },
        {
          question:
            'Además de los ingresos por ventas de producto, ¿tiene otras fuentes de ingresos?',
          answer:
            'Sí, también generamos ingresos adicionales a través de la venta de recursos educativos y la prestación de servicios técnicos especializados.',
        },
        {
          question: '¿Cuáles son los costos más altos de su negocio?',
          answer:
            'Los costos más altos corresponden a la contratación de consultores especializados y al desarrollo de materiales educativos y herramientas digitales.',
        },
        {
          question:
            '¿Cuáles son los costos más altos que necesita para cumplir lo que les prometió a sus clientes?',
          answer:
            'Los costos más altos para cumplir con las promesas a los clientes incluyen la investigación y actualización constante de la metodología, así como el soporte técnico durante la implementación.',
        },
        {
          question:
            '¿Cuáles son los recursos más importantes con los que cuenta su negocio?',
          answer:
            'Los recursos más importantes incluyen el conocimiento especializado en estrategia empresarial, herramientas metodológicas innovadoras y un equipo de consultores experimentados.',
        },
        {
          question:
            '¿Qué es lo que ustedes saben hacer mejor que sus competidores?',
          answer:
            'Sabemos simplificar procesos complejos de estrategia para que sean comprensibles y aplicables por microempresas y pymes, algo que nuestros competidores a menudo no logran.',
        },
        {
          question: '¿Tiene algún proceso subcontratado?',
          answer:
            'Sí, algunos procesos técnicos como el desarrollo de plataformas digitales son subcontratados a empresas especializadas.',
        },
        {
          question: '¿Sabe cuál es el talento más crítico para el negocio?',
          answer:
            'El talento más crítico es la capacidad para entender las necesidades estratégicas específicas de cada cliente y ofrecer soluciones personalizadas y efectivas.',
        },
        {
          question: '¿Quién toma las decisiones clave del negocio?',
          answer:
            'Las decisiones clave son tomadas por un comité de dirección compuesto por los fundadores y consultores senior.',
        },
        {
          question:
            '¿Existe alguna reunión donde se hable del negocio con los empleados?',
          answer:
            'Sí, se realizan reuniones mensuales donde se discuten los avances del negocio, se revisan casos de éxito y se ajustan las estrategias según sea necesario.',
        },
        {
          question: '¿Cómo describiría su negocio?',
          answer:
            'Nuestro negocio es una consultoría estratégica ágil, enfocada en proporcionar soluciones prácticas y efectivas para micronegocios y pymes.',
        },
        {
          question: '¿Qué lo hace diferente de otros negocios parecidos?',
          answer:
            'Nos diferenciamos por nuestra metodología Estramipyme, que es rápida de implementar, y por nuestro enfoque en hacer accesible la estrategia a empresas con recursos limitados.',
        },
        {
          question:
            '¿Qué pasa cuando un empleado no está cumpliendo las expectativas de la administración del negocio?',
          answer:
            'Cuando un empleado no cumple con las expectativas, se realiza una evaluación para identificar áreas de mejora y se proporciona capacitación adicional si es necesario.',
        },
        {
          question:
            '¿Hay algún proveedor del que dependa en gran medida la operación de la empresa?',
          answer:
            'No dependemos en gran medida de un solo proveedor; trabajamos con varios para garantizar la continuidad del negocio.',
        },
        {
          question:
            '¿Qué tan fácil o difícil es entrar en esta industria? ¿Debido a qué?',
          answer:
            'Entrar en esta industria es relativamente difícil debido a la necesidad de contar con un conocimiento profundo en estrategia empresarial y una red de contactos bien establecida.',
        },
        {
          question: '¿Qué tan intensa es la competencia en esta industria?',
          answer:
            'La competencia en esta industria es intensa, especialmente en el segmento de consultorías tradicionales que buscan atraer a las mismas pymes.',
        },
        {
          question:
            '¿Cuál cree usted que sea la mayor preocupación de los administradores de negocios similares al suyo?',
          answer:
            'La mayor preocupación suele ser la capacidad de adaptarse rápidamente a los cambios del mercado y mantenerse relevante en un entorno altamente competitivo.',
        },
        {
          question:
            'En los pasados 12 meses, ¿ha incumplido en la fecha de pago de su nómina?',
          answer:
            'No, hemos mantenido todos los pagos de nómina al día en los últimos 12 meses.',
        },
        {
          question:
            'En los pasados 12 meses, ¿ha incumplido en el pago a sus proveedores?',
          answer:
            'No, todos los pagos a proveedores se han realizado puntualmente.',
        },
        {
          question:
            'En los pasados 12 meses, ¿ha incumplido en los pagos de sus créditos?',
          answer:
            'No, hemos cumplido con todas nuestras obligaciones crediticias en tiempo y forma.',
        },
        {
          question:
            'En los últimos tres años, ¿ha podido hacer mejoras en su negocio? ¿O contratar más personal?',
          answer:
            'Sí, en los últimos tres años hemos realizado varias mejoras en nuestra metodología y hemos contratado a más consultores para expandir nuestros servicios.',
        },
        {
          question: '¿Cuál es su mayor sueño con el negocio?',
          answer:
            'Nuestro mayor sueño es convertirnos en la consultoría de referencia para micronegocios y pymes en toda América Latina.',
        },
        {
          question:
            '¿Qué no hemos conversado que sea importante para el negocio?',
          answer:
            'Es importante mencionar que estamos trabajando en un programa de mentoría para apoyar a empresarios emergentes y ayudarles a implementar estrategias de crecimiento sostenibles.',
        },
      ],
    },
    {
      email: 'client6@example.com',
      name: 'Luis Rodríguez',
      formCompleted: true,
      responses: [
        {
          question: '¿Cuándo se creó el negocio?',
          answer:
            'El negocio se creó en el año 2019, con la intención de aplicar una metodología ágil y efectiva para la planificación estratégica de pequeñas y medianas empresas.',
        },
        {
          question: '¿Quiénes lo fundaron?',
          answer:
            'El negocio fue fundado por Susana Álvarez Delgado y Santiago Zapata Correa, bajo la supervisión de la profesora Luz María Rivas-Montoya.',
        },
        {
          question: '¿Por qué crearon el negocio?',
          answer:
            'El negocio se creó para brindar apoyo estratégico a micronegocios y pymes, especialmente aquellos que no podían acceder a consultorías de alto costo.',
        },
        {
          question: '¿Para qué crearon el negocio?',
          answer:
            'El objetivo principal era desarrollar una metodología que ayudara a estas empresas a mejorar su estrategia competitiva y fortalecer su posición en el mercado.',
        },
        {
          question: '¿Qué productos y/o servicios ofrece?',
          answer:
            'Ofrece servicios de consultoría estratégica basada en la metodología Estramipyme, además de talleres de cocreación y diagnóstico empresarial.',
        },
        {
          question: '¿En qué sector o industria que compite su negocio?',
          answer:
            'El negocio compite en el sector de consultoría estratégica, enfocado en micronegocios y pymes.',
        },
        {
          question:
            '¿Qué proporción de sus ventas corresponde a los costos de operación del negocio?',
          answer:
            'Aproximadamente el 60% de las ventas corresponden a los costos de operación, debido al enfoque en procesos ágiles y simplificados.',
        },
        {
          question: '¿Tienen página web o redes sociales?',
          answer:
            'Sí, el negocio tiene presencia en línea a través de su página web y redes sociales, donde comparte información sobre sus servicios y recursos estratégicos.',
        },
        {
          question: '¿Cuál es el perfil del negocio?',
          answer:
            'El perfil del negocio se centra en ser una consultoría estratégica ágil y accesible, dirigida a microempresas y pymes que buscan fortalecer su estrategia competitiva con recursos limitados.',
        },
        {
          question:
            '¿Cuáles son los reclamos o quejas de los clientes más frecuentes?',
          answer:
            'Los clientes suelen quejarse de la falta de tiempo para implementar las estrategias sugeridas, así como de la complejidad de algunas herramientas propuestas.',
        },
        {
          question:
            '¿Cuáles son las razones por las que reciben más manifestaciones de gratitud y felicitación?',
          answer:
            'Reciben felicitaciones por la facilidad y agilidad de la metodología Estramipyme, que permite a las pequeñas empresas competir en su sector de manera más efectiva.',
        },
        {
          question: '¿Con quién tienen más contacto los clientes?',
          answer:
            'Los clientes tienen más contacto con los consultores estratégicos asignados a cada proyecto, quienes guían el proceso de principio a fin.',
        },
        {
          question: '¿Cómo atienden a sus clientes?',
          answer:
            'La atención a los clientes se realiza de manera personalizada, con sesiones de consultoría tanto presenciales como virtuales, adaptadas a las necesidades del negocio.',
        },
        {
          question: '¿A través de qué canales se comunica con sus clientes?',
          answer:
            'La comunicación con los clientes se realiza principalmente a través de WhatsApp, correo electrónico y reuniones virtuales.',
        },
        {
          question:
            '¿Del total de clientes que tiene, cómo describiría a los más frecuentes?',
          answer:
            'Los clientes más frecuentes son microempresas y pymes que buscan mejorar su competitividad en el mercado local, con un enfoque en la sostenibilidad y crecimiento a largo plazo.',
        },
        {
          question:
            "¿Cuáles son los principales trabajos o tareas que tiene que hacer su cliente y que él podría 'contratar' con su negocio?",
          answer:
            'Los principales trabajos incluyen la formulación de estrategias competitivas, análisis de mercado, y la implementación de modelos de negocio más eficientes.',
        },
        {
          question:
            '¿Usted cree que al negocio le llegan los clientes a comprar, o ustedes hacen un esfuerzo por salir a vender?',
          answer:
            'El negocio realiza un esfuerzo proactivo por atraer clientes, participando en eventos de networking y ofreciendo demostraciones de la metodología Estramipyme.',
        },
        {
          question:
            '¿Hay algún cliente del que dependan en gran medida los ingresos de la empresa?',
          answer:
            'No, los ingresos están diversificados entre varios clientes, lo que reduce la dependencia de un solo cliente importante.',
        },
        {
          question: '¿Cuáles son sus tres competidores que más le preocupan?',
          answer:
            'Los tres competidores más preocupantes son consultoras estratégicas tradicionales, empresas que ofrecen software de planificación estratégica, y firmas de consultoría que también brindan servicios a pymes.',
        },
        {
          question:
            '¿Qué ofrecen ellos que puede ser atractivo para sus clientes?',
          answer:
            'Ofrecen una mayor experiencia en grandes proyectos, herramientas tecnológicas avanzadas y una red más amplia de contactos empresariales.',
        },
        {
          question:
            '¿Cuáles son los dos atributos o características de la propuesta de valor actual que los hacen diferentes de sus competidores más cercanos?',
          answer:
            'Los dos atributos que nos diferencian son la simplicidad y agilidad de la metodología Estramipyme, así como el enfoque personalizado en cada cliente.',
        },
        {
          question:
            '¿Sus clientes lo prefieren porque tiene un precio menor al de sus competidores? ¿O cuál es la razón de su preferencia?',
          answer:
            'Los clientes prefieren nuestros servicios no solo por el precio competitivo, sino por la metodología accesible y efectiva que realmente impulsa resultados.',
        },
        {
          question: '¿Cómo le pagan sus clientes por su producto o servicio?',
          answer:
            'Los clientes nos pagan principalmente por servicios unitarios de consultoría, así como por la participación en talleres y programas de capacitación.',
        },
        {
          question:
            'Además de los ingresos por ventas de producto, ¿tiene otras fuentes de ingresos?',
          answer:
            'Sí, también generamos ingresos adicionales a través de la venta de recursos educativos y la prestación de servicios técnicos especializados.',
        },
        {
          question: '¿Cuáles son los costos más altos de su negocio?',
          answer:
            'Los costos más altos corresponden a la contratación de consultores especializados y al desarrollo de materiales educativos y herramientas digitales.',
        },
        {
          question:
            '¿Cuáles son los costos más altos que necesita para cumplir lo que les prometió a sus clientes?',
          answer:
            'Los costos más altos para cumplir con las promesas a los clientes incluyen la investigación y actualización constante de la metodología, así como el soporte técnico durante la implementación.',
        },
        {
          question:
            '¿Cuáles son los recursos más importantes con los que cuenta su negocio?',
          answer:
            'Los recursos más importantes incluyen el conocimiento especializado en estrategia empresarial, herramientas metodológicas innovadoras y un equipo de consultores experimentados.',
        },
        {
          question:
            '¿Qué es lo que ustedes saben hacer mejor que sus competidores?',
          answer:
            'Sabemos simplificar procesos complejos de estrategia para que sean comprensibles y aplicables por microempresas y pymes, algo que nuestros competidores a menudo no logran.',
        },
        {
          question: '¿Tiene algún proceso subcontratado?',
          answer:
            'Sí, algunos procesos técnicos como el desarrollo de plataformas digitales son subcontratados a empresas especializadas.',
        },
        {
          question: '¿Sabe cuál es el talento más crítico para el negocio?',
          answer:
            'El talento más crítico es la capacidad para entender las necesidades estratégicas específicas de cada cliente y ofrecer soluciones personalizadas y efectivas.',
        },
        {
          question: '¿Quién toma las decisiones clave del negocio?',
          answer:
            'Las decisiones clave son tomadas por un comité de dirección compuesto por los fundadores y consultores senior.',
        },
        {
          question:
            '¿Existe alguna reunión donde se hable del negocio con los empleados?',
          answer:
            'Sí, se realizan reuniones mensuales donde se discuten los avances del negocio, se revisan casos de éxito y se ajustan las estrategias según sea necesario.',
        },
        {
          question: '¿Cómo describiría su negocio?',
          answer:
            'Nuestro negocio es una consultoría estratégica ágil, enfocada en proporcionar soluciones prácticas y efectivas para micronegocios y pymes.',
        },
        {
          question: '¿Qué lo hace diferente de otros negocios parecidos?',
          answer:
            'Nos diferenciamos por nuestra metodología Estramipyme, que es rápida de implementar, y por nuestro enfoque en hacer accesible la estrategia a empresas con recursos limitados.',
        },
        {
          question:
            '¿Qué pasa cuando un empleado no está cumpliendo las expectativas de la administración del negocio?',
          answer:
            'Cuando un empleado no cumple con las expectativas, se realiza una evaluación para identificar áreas de mejora y se proporciona capacitación adicional si es necesario.',
        },
        {
          question:
            '¿Hay algún proveedor del que dependa en gran medida la operación de la empresa?',
          answer:
            'No dependemos en gran medida de un solo proveedor; trabajamos con varios para garantizar la continuidad del negocio.',
        },
        {
          question:
            '¿Qué tan fácil o difícil es entrar en esta industria? ¿Debido a qué?',
          answer:
            'Entrar en esta industria es relativamente difícil debido a la necesidad de contar con un conocimiento profundo en estrategia empresarial y una red de contactos bien establecida.',
        },
        {
          question: '¿Qué tan intensa es la competencia en esta industria?',
          answer:
            'La competencia en esta industria es intensa, especialmente en el segmento de consultorías tradicionales que buscan atraer a las mismas pymes.',
        },
        {
          question:
            '¿Cuál cree usted que sea la mayor preocupación de los administradores de negocios similares al suyo?',
          answer:
            'La mayor preocupación suele ser la capacidad de adaptarse rápidamente a los cambios del mercado y mantenerse relevante en un entorno altamente competitivo.',
        },
        {
          question:
            'En los pasados 12 meses, ¿ha incumplido en la fecha de pago de su nómina?',
          answer:
            'No, hemos mantenido todos los pagos de nómina al día en los últimos 12 meses.',
        },
        {
          question:
            'En los pasados 12 meses, ¿ha incumplido en el pago a sus proveedores?',
          answer:
            'No, todos los pagos a proveedores se han realizado puntualmente.',
        },
        {
          question:
            'En los pasados 12 meses, ¿ha incumplido en los pagos de sus créditos?',
          answer:
            'No, hemos cumplido con todas nuestras obligaciones crediticias en tiempo y forma.',
        },
        {
          question:
            'En los últimos tres años, ¿ha podido hacer mejoras en su negocio? ¿O contratar más personal?',
          answer:
            'Sí, en los últimos tres años hemos realizado varias mejoras en nuestra metodología y hemos contratado a más consultores para expandir nuestros servicios.',
        },
        {
          question: '¿Cuál es su mayor sueño con el negocio?',
          answer:
            'Nuestro mayor sueño es convertirnos en la consultoría de referencia para micronegocios y pymes en toda América Latina.',
        },
        {
          question:
            '¿Qué no hemos conversado que sea importante para el negocio?',
          answer:
            'Es importante mencionar que estamos trabajando en un programa de mentoría para apoyar a empresarios emergentes y ayudarles a implementar estrategias de crecimiento sostenibles.',
        },
      ],
    },
    {
      email: 'client8@example.com',
      name: 'José Silva',
      formCompleted: true,
      responses: [
        {
          question: '¿Cuándo se creó el negocio?',
          answer:
            'El negocio se creó en el año 2019, con la intención de aplicar una metodología ágil y efectiva para la planificación estratégica de pequeñas y medianas empresas.',
        },
        {
          question: '¿Quiénes lo fundaron?',
          answer:
            'El negocio fue fundado por Susana Álvarez Delgado y Santiago Zapata Correa, bajo la supervisión de la profesora Luz María Rivas-Montoya.',
        },
        {
          question: '¿Por qué crearon el negocio?',
          answer:
            'El negocio se creó para brindar apoyo estratégico a micronegocios y pymes, especialmente aquellos que no podían acceder a consultorías de alto costo.',
        },
        {
          question: '¿Para qué crearon el negocio?',
          answer:
            'El objetivo principal era desarrollar una metodología que ayudara a estas empresas a mejorar su estrategia competitiva y fortalecer su posición en el mercado.',
        },
        {
          question: '¿Qué productos y/o servicios ofrece?',
          answer:
            'Ofrece servicios de consultoría estratégica basada en la metodología Estramipyme, además de talleres de cocreación y diagnóstico empresarial.',
        },
        {
          question: '¿En qué sector o industria que compite su negocio?',
          answer:
            'El negocio compite en el sector de consultoría estratégica, enfocado en micronegocios y pymes.',
        },
        {
          question:
            '¿Qué proporción de sus ventas corresponde a los costos de operación del negocio?',
          answer:
            'Aproximadamente el 60% de las ventas corresponden a los costos de operación, debido al enfoque en procesos ágiles y simplificados.',
        },
        {
          question: '¿Tienen página web o redes sociales?',
          answer:
            'Sí, el negocio tiene presencia en línea a través de su página web y redes sociales, donde comparte información sobre sus servicios y recursos estratégicos.',
        },
        {
          question: '¿Cuál es el perfil del negocio?',
          answer:
            'El perfil del negocio se centra en ser una consultoría estratégica ágil y accesible, dirigida a microempresas y pymes que buscan fortalecer su estrategia competitiva con recursos limitados.',
        },
        {
          question:
            '¿Cuáles son los reclamos o quejas de los clientes más frecuentes?',
          answer:
            'Los clientes suelen quejarse de la falta de tiempo para implementar las estrategias sugeridas, así como de la complejidad de algunas herramientas propuestas.',
        },
        {
          question:
            '¿Cuáles son las razones por las que reciben más manifestaciones de gratitud y felicitación?',
          answer:
            'Reciben felicitaciones por la facilidad y agilidad de la metodología Estramipyme, que permite a las pequeñas empresas competir en su sector de manera más efectiva.',
        },
        {
          question: '¿Con quién tienen más contacto los clientes?',
          answer:
            'Los clientes tienen más contacto con los consultores estratégicos asignados a cada proyecto, quienes guían el proceso de principio a fin.',
        },
        {
          question: '¿Cómo atienden a sus clientes?',
          answer:
            'La atención a los clientes se realiza de manera personalizada, con sesiones de consultoría tanto presenciales como virtuales, adaptadas a las necesidades del negocio.',
        },
        {
          question: '¿A través de qué canales se comunica con sus clientes?',
          answer:
            'La comunicación con los clientes se realiza principalmente a través de WhatsApp, correo electrónico y reuniones virtuales.',
        },
        {
          question:
            '¿Del total de clientes que tiene, cómo describiría a los más frecuentes?',
          answer:
            'Los clientes más frecuentes son microempresas y pymes que buscan mejorar su competitividad en el mercado local, con un enfoque en la sostenibilidad y crecimiento a largo plazo.',
        },
        {
          question:
            "¿Cuáles son los principales trabajos o tareas que tiene que hacer su cliente y que él podría 'contratar' con su negocio?",
          answer:
            'Los principales trabajos incluyen la formulación de estrategias competitivas, análisis de mercado, y la implementación de modelos de negocio más eficientes.',
        },
        {
          question:
            '¿Usted cree que al negocio le llegan los clientes a comprar, o ustedes hacen un esfuerzo por salir a vender?',
          answer:
            'El negocio realiza un esfuerzo proactivo por atraer clientes, participando en eventos de networking y ofreciendo demostraciones de la metodología Estramipyme.',
        },
        {
          question:
            '¿Hay algún cliente del que dependan en gran medida los ingresos de la empresa?',
          answer:
            'No, los ingresos están diversificados entre varios clientes, lo que reduce la dependencia de un solo cliente importante.',
        },
        {
          question: '¿Cuáles son sus tres competidores que más le preocupan?',
          answer:
            'Los tres competidores más preocupantes son consultoras estratégicas tradicionales, empresas que ofrecen software de planificación estratégica, y firmas de consultoría que también brindan servicios a pymes.',
        },
        {
          question:
            '¿Qué ofrecen ellos que puede ser atractivo para sus clientes?',
          answer:
            'Ofrecen una mayor experiencia en grandes proyectos, herramientas tecnológicas avanzadas y una red más amplia de contactos empresariales.',
        },
        {
          question:
            '¿Cuáles son los dos atributos o características de la propuesta de valor actual que los hacen diferentes de sus competidores más cercanos?',
          answer:
            'Los dos atributos que nos diferencian son la simplicidad y agilidad de la metodología Estramipyme, así como el enfoque personalizado en cada cliente.',
        },
        {
          question:
            '¿Sus clientes lo prefieren porque tiene un precio menor al de sus competidores? ¿O cuál es la razón de su preferencia?',
          answer:
            'Los clientes prefieren nuestros servicios no solo por el precio competitivo, sino por la metodología accesible y efectiva que realmente impulsa resultados.',
        },
        {
          question: '¿Cómo le pagan sus clientes por su producto o servicio?',
          answer:
            'Los clientes nos pagan principalmente por servicios unitarios de consultoría, así como por la participación en talleres y programas de capacitación.',
        },
        {
          question:
            'Además de los ingresos por ventas de producto, ¿tiene otras fuentes de ingresos?',
          answer:
            'Sí, también generamos ingresos adicionales a través de la venta de recursos educativos y la prestación de servicios técnicos especializados.',
        },
        {
          question: '¿Cuáles son los costos más altos de su negocio?',
          answer:
            'Los costos más altos corresponden a la contratación de consultores especializados y al desarrollo de materiales educativos y herramientas digitales.',
        },
        {
          question:
            '¿Cuáles son los costos más altos que necesita para cumplir lo que les prometió a sus clientes?',
          answer:
            'Los costos más altos para cumplir con las promesas a los clientes incluyen la investigación y actualización constante de la metodología, así como el soporte técnico durante la implementación.',
        },
        {
          question:
            '¿Cuáles son los recursos más importantes con los que cuenta su negocio?',
          answer:
            'Los recursos más importantes incluyen el conocimiento especializado en estrategia empresarial, herramientas metodológicas innovadoras y un equipo de consultores experimentados.',
        },
        {
          question:
            '¿Qué es lo que ustedes saben hacer mejor que sus competidores?',
          answer:
            'Sabemos simplificar procesos complejos de estrategia para que sean comprensibles y aplicables por microempresas y pymes, algo que nuestros competidores a menudo no logran.',
        },
        {
          question: '¿Tiene algún proceso subcontratado?',
          answer:
            'Sí, algunos procesos técnicos como el desarrollo de plataformas digitales son subcontratados a empresas especializadas.',
        },
        {
          question: '¿Sabe cuál es el talento más crítico para el negocio?',
          answer:
            'El talento más crítico es la capacidad para entender las necesidades estratégicas específicas de cada cliente y ofrecer soluciones personalizadas y efectivas.',
        },
        {
          question: '¿Quién toma las decisiones clave del negocio?',
          answer:
            'Las decisiones clave son tomadas por un comité de dirección compuesto por los fundadores y consultores senior.',
        },
        {
          question:
            '¿Existe alguna reunión donde se hable del negocio con los empleados?',
          answer:
            'Sí, se realizan reuniones mensuales donde se discuten los avances del negocio, se revisan casos de éxito y se ajustan las estrategias según sea necesario.',
        },
        {
          question: '¿Cómo describiría su negocio?',
          answer:
            'Nuestro negocio es una consultoría estratégica ágil, enfocada en proporcionar soluciones prácticas y efectivas para micronegocios y pymes.',
        },
        {
          question: '¿Qué lo hace diferente de otros negocios parecidos?',
          answer:
            'Nos diferenciamos por nuestra metodología Estramipyme, que es rápida de implementar, y por nuestro enfoque en hacer accesible la estrategia a empresas con recursos limitados.',
        },
        {
          question:
            '¿Qué pasa cuando un empleado no está cumpliendo las expectativas de la administración del negocio?',
          answer:
            'Cuando un empleado no cumple con las expectativas, se realiza una evaluación para identificar áreas de mejora y se proporciona capacitación adicional si es necesario.',
        },
        {
          question:
            '¿Hay algún proveedor del que dependa en gran medida la operación de la empresa?',
          answer:
            'No dependemos en gran medida de un solo proveedor; trabajamos con varios para garantizar la continuidad del negocio.',
        },
        {
          question:
            '¿Qué tan fácil o difícil es entrar en esta industria? ¿Debido a qué?',
          answer:
            'Entrar en esta industria es relativamente difícil debido a la necesidad de contar con un conocimiento profundo en estrategia empresarial y una red de contactos bien establecida.',
        },
        {
          question: '¿Qué tan intensa es la competencia en esta industria?',
          answer:
            'La competencia en esta industria es intensa, especialmente en el segmento de consultorías tradicionales que buscan atraer a las mismas pymes.',
        },
        {
          question:
            '¿Cuál cree usted que sea la mayor preocupación de los administradores de negocios similares al suyo?',
          answer:
            'La mayor preocupación suele ser la capacidad de adaptarse rápidamente a los cambios del mercado y mantenerse relevante en un entorno altamente competitivo.',
        },
        {
          question:
            'En los pasados 12 meses, ¿ha incumplido en la fecha de pago de su nómina?',
          answer:
            'No, hemos mantenido todos los pagos de nómina al día en los últimos 12 meses.',
        },
        {
          question:
            'En los pasados 12 meses, ¿ha incumplido en el pago a sus proveedores?',
          answer:
            'No, todos los pagos a proveedores se han realizado puntualmente.',
        },
        {
          question:
            'En los pasados 12 meses, ¿ha incumplido en los pagos de sus créditos?',
          answer:
            'No, hemos cumplido con todas nuestras obligaciones crediticias en tiempo y forma.',
        },
        {
          question:
            'En los últimos tres años, ¿ha podido hacer mejoras en su negocio? ¿O contratar más personal?',
          answer:
            'Sí, en los últimos tres años hemos realizado varias mejoras en nuestra metodología y hemos contratado a más consultores para expandir nuestros servicios.',
        },
        {
          question: '¿Cuál es su mayor sueño con el negocio?',
          answer:
            'Nuestro mayor sueño es convertirnos en la consultoría de referencia para micronegocios y pymes en toda América Latina.',
        },
        {
          question:
            '¿Qué no hemos conversado que sea importante para el negocio?',
          answer:
            'Es importante mencionar que estamos trabajando en un programa de mentoría para apoyar a empresarios emergentes y ayudarles a implementar estrategias de crecimiento sostenibles.',
        },
      ],
    },
    {
      email: 'client10@example.com',
      name: 'Ricardo Sánchez',
      formCompleted: true,
      responses: [
        {
          question: '¿Cuándo se creó el negocio?',
          answer:
            'El negocio se creó en el año 2019, con la intención de aplicar una metodología ágil y efectiva para la planificación estratégica de pequeñas y medianas empresas.',
        },
        {
          question: '¿Quiénes lo fundaron?',
          answer:
            'El negocio fue fundado por Susana Álvarez Delgado y Santiago Zapata Correa, bajo la supervisión de la profesora Luz María Rivas-Montoya.',
        },
        {
          question: '¿Por qué crearon el negocio?',
          answer:
            'El negocio se creó para brindar apoyo estratégico a micronegocios y pymes, especialmente aquellos que no podían acceder a consultorías de alto costo.',
        },
        {
          question: '¿Para qué crearon el negocio?',
          answer:
            'El objetivo principal era desarrollar una metodología que ayudara a estas empresas a mejorar su estrategia competitiva y fortalecer su posición en el mercado.',
        },
        {
          question: '¿Qué productos y/o servicios ofrece?',
          answer:
            'Ofrece servicios de consultoría estratégica basada en la metodología Estramipyme, además de talleres de cocreación y diagnóstico empresarial.',
        },
        {
          question: '¿En qué sector o industria que compite su negocio?',
          answer:
            'El negocio compite en el sector de consultoría estratégica, enfocado en micronegocios y pymes.',
        },
        {
          question:
            '¿Qué proporción de sus ventas corresponde a los costos de operación del negocio?',
          answer:
            'Aproximadamente el 60% de las ventas corresponden a los costos de operación, debido al enfoque en procesos ágiles y simplificados.',
        },
        {
          question: '¿Tienen página web o redes sociales?',
          answer:
            'Sí, el negocio tiene presencia en línea a través de su página web y redes sociales, donde comparte información sobre sus servicios y recursos estratégicos.',
        },
        {
          question: '¿Cuál es el perfil del negocio?',
          answer:
            'El perfil del negocio se centra en ser una consultoría estratégica ágil y accesible, dirigida a microempresas y pymes que buscan fortalecer su estrategia competitiva con recursos limitados.',
        },
        {
          question:
            '¿Cuáles son los reclamos o quejas de los clientes más frecuentes?',
          answer:
            'Los clientes suelen quejarse de la falta de tiempo para implementar las estrategias sugeridas, así como de la complejidad de algunas herramientas propuestas.',
        },
        {
          question:
            '¿Cuáles son las razones por las que reciben más manifestaciones de gratitud y felicitación?',
          answer:
            'Reciben felicitaciones por la facilidad y agilidad de la metodología Estramipyme, que permite a las pequeñas empresas competir en su sector de manera más efectiva.',
        },
        {
          question: '¿Con quién tienen más contacto los clientes?',
          answer:
            'Los clientes tienen más contacto con los consultores estratégicos asignados a cada proyecto, quienes guían el proceso de principio a fin.',
        },
        {
          question: '¿Cómo atienden a sus clientes?',
          answer:
            'La atención a los clientes se realiza de manera personalizada, con sesiones de consultoría tanto presenciales como virtuales, adaptadas a las necesidades del negocio.',
        },
        {
          question: '¿A través de qué canales se comunica con sus clientes?',
          answer:
            'La comunicación con los clientes se realiza principalmente a través de WhatsApp, correo electrónico y reuniones virtuales.',
        },
        {
          question:
            '¿Del total de clientes que tiene, cómo describiría a los más frecuentes?',
          answer:
            'Los clientes más frecuentes son microempresas y pymes que buscan mejorar su competitividad en el mercado local, con un enfoque en la sostenibilidad y crecimiento a largo plazo.',
        },
        {
          question:
            "¿Cuáles son los principales trabajos o tareas que tiene que hacer su cliente y que él podría 'contratar' con su negocio?",
          answer:
            'Los principales trabajos incluyen la formulación de estrategias competitivas, análisis de mercado, y la implementación de modelos de negocio más eficientes.',
        },
        {
          question:
            '¿Usted cree que al negocio le llegan los clientes a comprar, o ustedes hacen un esfuerzo por salir a vender?',
          answer:
            'El negocio realiza un esfuerzo proactivo por atraer clientes, participando en eventos de networking y ofreciendo demostraciones de la metodología Estramipyme.',
        },
        {
          question:
            '¿Hay algún cliente del que dependan en gran medida los ingresos de la empresa?',
          answer:
            'No, los ingresos están diversificados entre varios clientes, lo que reduce la dependencia de un solo cliente importante.',
        },
        {
          question: '¿Cuáles son sus tres competidores que más le preocupan?',
          answer:
            'Los tres competidores más preocupantes son consultoras estratégicas tradicionales, empresas que ofrecen software de planificación estratégica, y firmas de consultoría que también brindan servicios a pymes.',
        },
        {
          question:
            '¿Qué ofrecen ellos que puede ser atractivo para sus clientes?',
          answer:
            'Ofrecen una mayor experiencia en grandes proyectos, herramientas tecnológicas avanzadas y una red más amplia de contactos empresariales.',
        },
        {
          question:
            '¿Cuáles son los dos atributos o características de la propuesta de valor actual que los hacen diferentes de sus competidores más cercanos?',
          answer:
            'Los dos atributos que nos diferencian son la simplicidad y agilidad de la metodología Estramipyme, así como el enfoque personalizado en cada cliente.',
        },
        {
          question:
            '¿Sus clientes lo prefieren porque tiene un precio menor al de sus competidores? ¿O cuál es la razón de su preferencia?',
          answer:
            'Los clientes prefieren nuestros servicios no solo por el precio competitivo, sino por la metodología accesible y efectiva que realmente impulsa resultados.',
        },
        {
          question: '¿Cómo le pagan sus clientes por su producto o servicio?',
          answer:
            'Los clientes nos pagan principalmente por servicios unitarios de consultoría, así como por la participación en talleres y programas de capacitación.',
        },
        {
          question:
            'Además de los ingresos por ventas de producto, ¿tiene otras fuentes de ingresos?',
          answer:
            'Sí, también generamos ingresos adicionales a través de la venta de recursos educativos y la prestación de servicios técnicos especializados.',
        },
        {
          question: '¿Cuáles son los costos más altos de su negocio?',
          answer:
            'Los costos más altos corresponden a la contratación de consultores especializados y al desarrollo de materiales educativos y herramientas digitales.',
        },
        {
          question:
            '¿Cuáles son los costos más altos que necesita para cumplir lo que les prometió a sus clientes?',
          answer:
            'Los costos más altos para cumplir con las promesas a los clientes incluyen la investigación y actualización constante de la metodología, así como el soporte técnico durante la implementación.',
        },
        {
          question:
            '¿Cuáles son los recursos más importantes con los que cuenta su negocio?',
          answer:
            'Los recursos más importantes incluyen el conocimiento especializado en estrategia empresarial, herramientas metodológicas innovadoras y un equipo de consultores experimentados.',
        },
        {
          question:
            '¿Qué es lo que ustedes saben hacer mejor que sus competidores?',
          answer:
            'Sabemos simplificar procesos complejos de estrategia para que sean comprensibles y aplicables por microempresas y pymes, algo que nuestros competidores a menudo no logran.',
        },
        {
          question: '¿Tiene algún proceso subcontratado?',
          answer:
            'Sí, algunos procesos técnicos como el desarrollo de plataformas digitales son subcontratados a empresas especializadas.',
        },
        {
          question: '¿Sabe cuál es el talento más crítico para el negocio?',
          answer:
            'El talento más crítico es la capacidad para entender las necesidades estratégicas específicas de cada cliente y ofrecer soluciones personalizadas y efectivas.',
        },
        {
          question: '¿Quién toma las decisiones clave del negocio?',
          answer:
            'Las decisiones clave son tomadas por un comité de dirección compuesto por los fundadores y consultores senior.',
        },
        {
          question:
            '¿Existe alguna reunión donde se hable del negocio con los empleados?',
          answer:
            'Sí, se realizan reuniones mensuales donde se discuten los avances del negocio, se revisan casos de éxito y se ajustan las estrategias según sea necesario.',
        },
        {
          question: '¿Cómo describiría su negocio?',
          answer:
            'Nuestro negocio es una consultoría estratégica ágil, enfocada en proporcionar soluciones prácticas y efectivas para micronegocios y pymes.',
        },
        {
          question: '¿Qué lo hace diferente de otros negocios parecidos?',
          answer:
            'Nos diferenciamos por nuestra metodología Estramipyme, que es rápida de implementar, y por nuestro enfoque en hacer accesible la estrategia a empresas con recursos limitados.',
        },
        {
          question:
            '¿Qué pasa cuando un empleado no está cumpliendo las expectativas de la administración del negocio?',
          answer:
            'Cuando un empleado no cumple con las expectativas, se realiza una evaluación para identificar áreas de mejora y se proporciona capacitación adicional si es necesario.',
        },
        {
          question:
            '¿Hay algún proveedor del que dependa en gran medida la operación de la empresa?',
          answer:
            'No dependemos en gran medida de un solo proveedor; trabajamos con varios para garantizar la continuidad del negocio.',
        },
        {
          question:
            '¿Qué tan fácil o difícil es entrar en esta industria? ¿Debido a qué?',
          answer:
            'Entrar en esta industria es relativamente difícil debido a la necesidad de contar con un conocimiento profundo en estrategia empresarial y una red de contactos bien establecida.',
        },
        {
          question: '¿Qué tan intensa es la competencia en esta industria?',
          answer:
            'La competencia en esta industria es intensa, especialmente en el segmento de consultorías tradicionales que buscan atraer a las mismas pymes.',
        },
        {
          question:
            '¿Cuál cree usted que sea la mayor preocupación de los administradores de negocios similares al suyo?',
          answer:
            'La mayor preocupación suele ser la capacidad de adaptarse rápidamente a los cambios del mercado y mantenerse relevante en un entorno altamente competitivo.',
        },
        {
          question:
            'En los pasados 12 meses, ¿ha incumplido en la fecha de pago de su nómina?',
          answer:
            'No, hemos mantenido todos los pagos de nómina al día en los últimos 12 meses.',
        },
        {
          question:
            'En los pasados 12 meses, ¿ha incumplido en el pago a sus proveedores?',
          answer:
            'No, todos los pagos a proveedores se han realizado puntualmente.',
        },
        {
          question:
            'En los pasados 12 meses, ¿ha incumplido en los pagos de sus créditos?',
          answer:
            'No, hemos cumplido con todas nuestras obligaciones crediticias en tiempo y forma.',
        },
        {
          question:
            'En los últimos tres años, ¿ha podido hacer mejoras en su negocio? ¿O contratar más personal?',
          answer:
            'Sí, en los últimos tres años hemos realizado varias mejoras en nuestra metodología y hemos contratado a más consultores para expandir nuestros servicios.',
        },
        {
          question: '¿Cuál es su mayor sueño con el negocio?',
          answer:
            'Nuestro mayor sueño es convertirnos en la consultoría de referencia para micronegocios y pymes en toda América Latina.',
        },
        {
          question:
            '¿Qué no hemos conversado que sea importante para el negocio?',
          answer:
            'Es importante mencionar que estamos trabajando en un programa de mentoría para apoyar a empresarios emergentes y ayudarles a implementar estrategias de crecimiento sostenibles.',
        },
      ],
    },
    {
      email: 'client12@example.com',
      name: 'Tomás Vega',
      formCompleted: true,
      responses: [
        {
          question: '¿Cuándo se creó el negocio?',
          answer:
            'El negocio se creó en el año 2019, con la intención de aplicar una metodología ágil y efectiva para la planificación estratégica de pequeñas y medianas empresas.',
        },
        {
          question: '¿Quiénes lo fundaron?',
          answer:
            'El negocio fue fundado por Susana Álvarez Delgado y Santiago Zapata Correa, bajo la supervisión de la profesora Luz María Rivas-Montoya.',
        },
        {
          question: '¿Por qué crearon el negocio?',
          answer:
            'El negocio se creó para brindar apoyo estratégico a micronegocios y pymes, especialmente aquellos que no podían acceder a consultorías de alto costo.',
        },
        {
          question: '¿Para qué crearon el negocio?',
          answer:
            'El objetivo principal era desarrollar una metodología que ayudara a estas empresas a mejorar su estrategia competitiva y fortalecer su posición en el mercado.',
        },
        {
          question: '¿Qué productos y/o servicios ofrece?',
          answer:
            'Ofrece servicios de consultoría estratégica basada en la metodología Estramipyme, además de talleres de cocreación y diagnóstico empresarial.',
        },
        {
          question: '¿En qué sector o industria que compite su negocio?',
          answer:
            'El negocio compite en el sector de consultoría estratégica, enfocado en micronegocios y pymes.',
        },
        {
          question:
            '¿Qué proporción de sus ventas corresponde a los costos de operación del negocio?',
          answer:
            'Aproximadamente el 60% de las ventas corresponden a los costos de operación, debido al enfoque en procesos ágiles y simplificados.',
        },
        {
          question: '¿Tienen página web o redes sociales?',
          answer:
            'Sí, el negocio tiene presencia en línea a través de su página web y redes sociales, donde comparte información sobre sus servicios y recursos estratégicos.',
        },
        {
          question: '¿Cuál es el perfil del negocio?',
          answer:
            'El perfil del negocio se centra en ser una consultoría estratégica ágil y accesible, dirigida a microempresas y pymes que buscan fortalecer su estrategia competitiva con recursos limitados.',
        },
        {
          question:
            '¿Cuáles son los reclamos o quejas de los clientes más frecuentes?',
          answer:
            'Los clientes suelen quejarse de la falta de tiempo para implementar las estrategias sugeridas, así como de la complejidad de algunas herramientas propuestas.',
        },
        {
          question:
            '¿Cuáles son las razones por las que reciben más manifestaciones de gratitud y felicitación?',
          answer:
            'Reciben felicitaciones por la facilidad y agilidad de la metodología Estramipyme, que permite a las pequeñas empresas competir en su sector de manera más efectiva.',
        },
        {
          question: '¿Con quién tienen más contacto los clientes?',
          answer:
            'Los clientes tienen más contacto con los consultores estratégicos asignados a cada proyecto, quienes guían el proceso de principio a fin.',
        },
        {
          question: '¿Cómo atienden a sus clientes?',
          answer:
            'La atención a los clientes se realiza de manera personalizada, con sesiones de consultoría tanto presenciales como virtuales, adaptadas a las necesidades del negocio.',
        },
        {
          question: '¿A través de qué canales se comunica con sus clientes?',
          answer:
            'La comunicación con los clientes se realiza principalmente a través de WhatsApp, correo electrónico y reuniones virtuales.',
        },
        {
          question:
            '¿Del total de clientes que tiene, cómo describiría a los más frecuentes?',
          answer:
            'Los clientes más frecuentes son microempresas y pymes que buscan mejorar su competitividad en el mercado local, con un enfoque en la sostenibilidad y crecimiento a largo plazo.',
        },
        {
          question:
            "¿Cuáles son los principales trabajos o tareas que tiene que hacer su cliente y que él podría 'contratar' con su negocio?",
          answer:
            'Los principales trabajos incluyen la formulación de estrategias competitivas, análisis de mercado, y la implementación de modelos de negocio más eficientes.',
        },
        {
          question:
            '¿Usted cree que al negocio le llegan los clientes a comprar, o ustedes hacen un esfuerzo por salir a vender?',
          answer:
            'El negocio realiza un esfuerzo proactivo por atraer clientes, participando en eventos de networking y ofreciendo demostraciones de la metodología Estramipyme.',
        },
        {
          question:
            '¿Hay algún cliente del que dependan en gran medida los ingresos de la empresa?',
          answer:
            'No, los ingresos están diversificados entre varios clientes, lo que reduce la dependencia de un solo cliente importante.',
        },
        {
          question: '¿Cuáles son sus tres competidores que más le preocupan?',
          answer:
            'Los tres competidores más preocupantes son consultoras estratégicas tradicionales, empresas que ofrecen software de planificación estratégica, y firmas de consultoría que también brindan servicios a pymes.',
        },
        {
          question:
            '¿Qué ofrecen ellos que puede ser atractivo para sus clientes?',
          answer:
            'Ofrecen una mayor experiencia en grandes proyectos, herramientas tecnológicas avanzadas y una red más amplia de contactos empresariales.',
        },
        {
          question:
            '¿Cuáles son los dos atributos o características de la propuesta de valor actual que los hacen diferentes de sus competidores más cercanos?',
          answer:
            'Los dos atributos que nos diferencian son la simplicidad y agilidad de la metodología Estramipyme, así como el enfoque personalizado en cada cliente.',
        },
        {
          question:
            '¿Sus clientes lo prefieren porque tiene un precio menor al de sus competidores? ¿O cuál es la razón de su preferencia?',
          answer:
            'Los clientes prefieren nuestros servicios no solo por el precio competitivo, sino por la metodología accesible y efectiva que realmente impulsa resultados.',
        },
        {
          question: '¿Cómo le pagan sus clientes por su producto o servicio?',
          answer:
            'Los clientes nos pagan principalmente por servicios unitarios de consultoría, así como por la participación en talleres y programas de capacitación.',
        },
        {
          question:
            'Además de los ingresos por ventas de producto, ¿tiene otras fuentes de ingresos?',
          answer:
            'Sí, también generamos ingresos adicionales a través de la venta de recursos educativos y la prestación de servicios técnicos especializados.',
        },
        {
          question: '¿Cuáles son los costos más altos de su negocio?',
          answer:
            'Los costos más altos corresponden a la contratación de consultores especializados y al desarrollo de materiales educativos y herramientas digitales.',
        },
        {
          question:
            '¿Cuáles son los costos más altos que necesita para cumplir lo que les prometió a sus clientes?',
          answer:
            'Los costos más altos para cumplir con las promesas a los clientes incluyen la investigación y actualización constante de la metodología, así como el soporte técnico durante la implementación.',
        },
        {
          question:
            '¿Cuáles son los recursos más importantes con los que cuenta su negocio?',
          answer:
            'Los recursos más importantes incluyen el conocimiento especializado en estrategia empresarial, herramientas metodológicas innovadoras y un equipo de consultores experimentados.',
        },
        {
          question:
            '¿Qué es lo que ustedes saben hacer mejor que sus competidores?',
          answer:
            'Sabemos simplificar procesos complejos de estrategia para que sean comprensibles y aplicables por microempresas y pymes, algo que nuestros competidores a menudo no logran.',
        },
        {
          question: '¿Tiene algún proceso subcontratado?',
          answer:
            'Sí, algunos procesos técnicos como el desarrollo de plataformas digitales son subcontratados a empresas especializadas.',
        },
        {
          question: '¿Sabe cuál es el talento más crítico para el negocio?',
          answer:
            'El talento más crítico es la capacidad para entender las necesidades estratégicas específicas de cada cliente y ofrecer soluciones personalizadas y efectivas.',
        },
        {
          question: '¿Quién toma las decisiones clave del negocio?',
          answer:
            'Las decisiones clave son tomadas por un comité de dirección compuesto por los fundadores y consultores senior.',
        },
        {
          question:
            '¿Existe alguna reunión donde se hable del negocio con los empleados?',
          answer:
            'Sí, se realizan reuniones mensuales donde se discuten los avances del negocio, se revisan casos de éxito y se ajustan las estrategias según sea necesario.',
        },
        {
          question: '¿Cómo describiría su negocio?',
          answer:
            'Nuestro negocio es una consultoría estratégica ágil, enfocada en proporcionar soluciones prácticas y efectivas para micronegocios y pymes.',
        },
        {
          question: '¿Qué lo hace diferente de otros negocios parecidos?',
          answer:
            'Nos diferenciamos por nuestra metodología Estramipyme, que es rápida de implementar, y por nuestro enfoque en hacer accesible la estrategia a empresas con recursos limitados.',
        },
        {
          question:
            '¿Qué pasa cuando un empleado no está cumpliendo las expectativas de la administración del negocio?',
          answer:
            'Cuando un empleado no cumple con las expectativas, se realiza una evaluación para identificar áreas de mejora y se proporciona capacitación adicional si es necesario.',
        },
        {
          question:
            '¿Hay algún proveedor del que dependa en gran medida la operación de la empresa?',
          answer:
            'No dependemos en gran medida de un solo proveedor; trabajamos con varios para garantizar la continuidad del negocio.',
        },
        {
          question:
            '¿Qué tan fácil o difícil es entrar en esta industria? ¿Debido a qué?',
          answer:
            'Entrar en esta industria es relativamente difícil debido a la necesidad de contar con un conocimiento profundo en estrategia empresarial y una red de contactos bien establecida.',
        },
        {
          question: '¿Qué tan intensa es la competencia en esta industria?',
          answer:
            'La competencia en esta industria es intensa, especialmente en el segmento de consultorías tradicionales que buscan atraer a las mismas pymes.',
        },
        {
          question:
            '¿Cuál cree usted que sea la mayor preocupación de los administradores de negocios similares al suyo?',
          answer:
            'La mayor preocupación suele ser la capacidad de adaptarse rápidamente a los cambios del mercado y mantenerse relevante en un entorno altamente competitivo.',
        },
        {
          question:
            'En los pasados 12 meses, ¿ha incumplido en la fecha de pago de su nómina?',
          answer:
            'No, hemos mantenido todos los pagos de nómina al día en los últimos 12 meses.',
        },
        {
          question:
            'En los pasados 12 meses, ¿ha incumplido en el pago a sus proveedores?',
          answer:
            'No, todos los pagos a proveedores se han realizado puntualmente.',
        },
        {
          question:
            'En los pasados 12 meses, ¿ha incumplido en los pagos de sus créditos?',
          answer:
            'No, hemos cumplido con todas nuestras obligaciones crediticias en tiempo y forma.',
        },
        {
          question:
            'En los últimos tres años, ¿ha podido hacer mejoras en su negocio? ¿O contratar más personal?',
          answer:
            'Sí, en los últimos tres años hemos realizado varias mejoras en nuestra metodología y hemos contratado a más consultores para expandir nuestros servicios.',
        },
        {
          question: '¿Cuál es su mayor sueño con el negocio?',
          answer:
            'Nuestro mayor sueño es convertirnos en la consultoría de referencia para micronegocios y pymes en toda América Latina.',
        },
        {
          question:
            '¿Qué no hemos conversado que sea importante para el negocio?',
          answer:
            'Es importante mencionar que estamos trabajando en un programa de mentoría para apoyar a empresarios emergentes y ayudarles a implementar estrategias de crecimiento sostenibles.',
        },
      ],
    },
  ];

  constructor() {}

  getUserResponses(email: string): Observable<UserFormResponses | undefined> {
    const userResponses = this.userFormResponses.find(
      (user) => user.email === email
    );
    return of(userResponses);
  }

  getAllUsers(): Observable<UserFormResponses[]> {
    return of(this.userFormResponses);
  }
}
