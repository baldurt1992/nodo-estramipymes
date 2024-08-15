import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root',
})
export class QuestionnaireService {
  private questions: Question[] = [
    {
      section: 'Datos y características del negocio',
      label: '¿Cuándo se creó el negocio?',
      controlName: 'businessCreationDate',
    },
    {
      section: 'Datos y características del negocio',
      label: '¿Quiénes lo fundaron?',
      controlName: 'founders',
    },
    {
      section: 'Datos y características del negocio',
      label: '¿Por qué crearon el negocio?',
      controlName: 'businessPurpose',
    },
    {
      section: 'Datos y características del negocio',
      label: '¿Para qué crearon el negocio?',
      controlName: 'businessGoal',
    },
    {
      section: 'Datos y características del negocio',
      label: '¿Qué productos y/o servicios ofrece?',
      controlName: 'productsServices',
    },
    {
      section: 'Datos y características del negocio',
      label: '¿En qué sector o industria que compite su negocio?',
      controlName: 'businessIndustry',
    },
    {
      section: 'Datos y características del negocio',
      label:
        '¿Qué proporción de sus ventas corresponde a los costos de operación del negocio?',
      controlName: 'salesCostsProportion',
    },
    {
      section: 'Datos y características del negocio',
      label: '¿Tienen página web o redes sociales?',
      controlName: 'webSocialMedia',
    },
    {
      section: 'Datos y características del negocio',
      label: '¿Cuál es el perfil del negocio?',
      controlName: 'businessProfile',
    },

    {
      section: 'Clientes',
      label:
        '¿Cuáles son los reclamos o quejas de los clientes más frecuentes? (frustraciones)',
      controlName: 'clientComplaints',
    },
    {
      section: 'Clientes',
      label:
        '¿Cuáles son las razones por las que reciben más manifestaciones de gratitud y felicitación? (alegrías)',
      controlName: 'clientPraise',
    },
    {
      section: 'Clientes',
      label:
        '¿Con quién tienen más contacto los clientes? (es clave conversar también con esta persona)',
      controlName: 'clientContact',
    },
    {
      section: 'Clientes',
      label:
        '¿Cómo atienden a sus clientes? (¿De manera personal? ¿Autoservicio? ¿Automatizada? Este es el tipo de relación en el modelo de negocio)',
      controlName: 'clientServiceMethod',
    },
    {
      section: 'Clientes',
      label:
        '¿A través de qué canales se comunica con sus clientes? (local, WhatsApp, Celular, teléfono fijo, página web, vendedor, otros…)',
      controlName: 'clientCommunicationChannels',
    },
    {
      section: 'Clientes',
      label:
        '¿Del total de clientes que tiene, ¿cómo describiría a los más frecuentes? (ayuda a la segmentación)',
      controlName: 'frequentClientsDescription',
    },
    {
      section: 'Clientes',
      label:
        '¿Cuáles son los principales trabajos o tareas que tiene que hacer su cliente y que él podría "contratar" con su negocio? (tareas o trabajos del cliente el LPV)',
      controlName: 'clientTasks',
    },
    {
      section: 'Clientes',
      label:
        '¿Usted cree que al negocio le llegan los clientes a comprar, o ustedes hacen un esfuerzo por salir a vender?',
      controlName: 'clientAcquisitionMethod',
    },
    {
      section: 'Clientes',
      label:
        '¿Hay algún cliente del que dependan en gran medida los ingresos de la empresa?',
      controlName: 'keyClientDependency',
    },

    {
      section: 'Competidores',
      label: '¿Cuáles son sus tres competidores que más le preocupan?',
      controlName: 'topCompetitors',
    },
    {
      section: 'Competidores',
      label: '¿Qué ofrecen ellos que puede ser atractivo para sus clientes?',
      controlName: 'competitorOffers',
    },

    {
      section: 'Propuesta de valor',
      label:
        '¿Cuáles son los dos atributos o características de la propuesta de valor actual que los hacen diferentes de sus competidores más cercanos?',
      controlName: 'valuePropositionAttributes',
    },
    {
      section: 'Propuesta de valor',
      label:
        '¿Sus clientes lo prefieren porque tiene un precio menor al de sus competidores? ¿O cuál es la razón de su preferencia?',
      controlName: 'clientPreferenceReason',
    },

    {
      section: 'Fuentes de ingresos',
      label:
        '¿Cómo le pagan sus clientes por su producto o servicio? (producto unitario, producto a granel, arrendamiento, licenciamiento, licitación, otro, esto va en fuentes de ingresos)',
      controlName: 'incomeSources',
    },
    {
      section: 'Fuentes de ingresos',
      label:
        'Además de los ingresos por ventas de producto, ¿tiene otras fuentes de ingresos? (por ejemplo: servicio técnico, instalación, etc.)',
      controlName: 'additionalIncomeSources',
    },

    {
      section: 'Estructura de costos',
      label: '¿Cuáles son los costos más altos de su negocio?',
      controlName: 'highestCosts',
    },
    {
      section: 'Estructura de costos',
      label:
        '¿Cuáles son los costos más altos que necesita para cumplir lo que les prometió a sus clientes?',
      controlName: 'costsToMeetPromises',
    },

    {
      section: 'Recursos y Capacidades',
      label:
        '¿Cuáles son los recursos más importantes con los que cuenta su negocio?',
      controlName: 'keyResources',
    },
    {
      section: 'Recursos y Capacidades',
      label: '¿Qué es lo que ustedes saben hacer mejor que sus competidores?',
      controlName: 'coreCompetencies',
    },
    {
      section: 'Recursos y Capacidades',
      label: '¿Tiene algún proceso subcontratado?',
      controlName: 'outsourcedProcesses',
    },
    {
      section: 'Recursos y Capacidades',
      label: '¿Sabe cuál es el talento más crítico para el negocio?',
      controlName: 'criticalTalent',
    },

    {
      section: 'Liderazgo y cultura',
      label: '¿Quién toma las decisiones clave del negocio?',
      controlName: 'keyDecisionMaker',
    },
    {
      section: 'Liderazgo y cultura',
      label:
        '¿Existe alguna reunión donde se hable del negocio con los empleados?',
      controlName: 'employeeMeetings',
    },
    {
      section: 'Liderazgo y cultura',
      label:
        '¿Cómo describiría su negocio? ¿qué lo hace diferente de otros negocios parecidos?',
      controlName: 'businessDescription',
    },
    {
      section: 'Liderazgo y cultura',
      label:
        '¿Qué pasa cuando un empleado no está cumpliendo las expectativas de la administración del negocio?',
      controlName: 'employeePerformanceHandling',
    },

    {
      section: 'Industria o sector',
      label:
        '¿Hay algún proveedor del que dependa en gran medida la operación de la empresa?',
      controlName: 'keySupplierDependency',
    },
    {
      section: 'Industria o sector',
      label:
        '¿Qué tan fácil o difícil es entrar en esta industria? ¿Debido a qué?',
      controlName: 'industryEntryDifficulty',
    },
    {
      section: 'Industria o sector',
      label:
        '¿Qué tan intensa es la competencia en esta industria? (desleal, ilegal, etc.)',
      controlName: 'industryCompetitionIntensity',
    },
    {
      section: 'Industria o sector',
      label:
        '¿Cuál cree usted que sea la mayor preocupación de los administradores de negocios similares al suyo?',
      controlName: 'businessConcerns',
    },

    {
      section: 'Salud financiera',
      label:
        'En los pasados 12 meses, ¿ha incumplido en la fecha de pago de su nómina?',
      controlName: 'payrollCompliance',
    },
    {
      section: 'Salud financiera',
      label:
        'En los pasados 12 meses, ¿ha incumplido en el pago a sus proveedores?',
      controlName: 'supplierPaymentCompliance',
    },
    {
      section: 'Salud financiera',
      label:
        'En los pasados 12 meses, ¿ha incumplido en los pagos de sus créditos?',
      controlName: 'creditPaymentCompliance',
    },
    {
      section: 'Salud financiera',
      label:
        'En los últimos tres años, ¿ha podido hacer mejoras en su negocio? ¿o contratar más personal?',
      controlName: 'businessImprovements',
    },

    {
      section: 'Aspiración',
      label: '¿Cuál es su mayor sueño con el negocio?',
      controlName: 'businessDream',
    },
    {
      section: 'Aspiración',
      label: '¿Qué no hemos conversado que sea importante para el negocio?',
      controlName: 'importantUnspokenTopics',
    },
  ];

  getQuestions(): Question[] {
    return this.questions;
  }

  getSections(): string[] {
    return [
      'Datos y características del negocio',
      'Clientes',
      'Competidores',
      'Propuesta de valor',
      'Fuentes de ingresos',
      'Estructura de costos',
      'Recursos y Capacidades',
      'Liderazgo y cultura',
      'Industria o sector',
      'Salud financiera',
      'Aspiración',
    ];
  }
}
