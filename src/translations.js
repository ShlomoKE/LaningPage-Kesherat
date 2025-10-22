export const translations = {
  en: {
    // Navbar
    nav: {
      home: 'Home',
      problems: 'Problems',
      solution: 'Solution',
      agromonitor: 'AgroMonitor',
      kesheratLink: 'Kesherat Link',
      otherProjects: 'Other Projects',
      pricing: 'Pricing',
      aboutUs: 'About Us',
      requestDemo: 'Request Demo'
    },

    // Navbar Industry
    navIndustry: {
      home: 'Home',
      k1Monitor: 'K1 Monitor',
      customProjects: 'Custom Projects',
      requestDemo: 'Request Demo'
    },
    
    // Hero
    hero: {
      title: 'Agentic Agriculture',
      subtitle: 'We transform Hardware & Data in agents for the use of farmers',
      tags: {
        agriculture: 'Agriculture',
        connection: 'Connection',
        technology: 'Technology'
      },
      buttons: {
        getStarted: 'Get Started',
        learnMore: 'Learn More'
      },
      agentMessages: [
        {
          agent: 'Tractor 1',
          message: 'Your task is to tell me how much fuel you use when passing through sector D'
        },
        {
          agent: 'Soil Sensors',
          message: 'Your job is to understand when the trees need more water'
        },
        {
          agent: 'Picker Robot',
          message: 'Analyze the fruit sizes for me'
        },
        {
          agent: 'Weather Station',
          message: 'Predict rainfall patterns for the next 48 hours'
        },
        {
          agent: 'Drone Fleet',
          message: 'Monitor crop health in the northern fields'
        }
      ]
    },

    // Hero Industry
    heroIndustry: {
      title: {
        main: 'AGENTIC',
        sub: 'INDUSTRY'
      },
      rotatingMessages: [
        'Temperature Sensor 3: Tell me the temperature variations in production line 3 during the last shift',
        'Pressure System B: Report any pressure anomalies detected in sector B',
        'Vibration Monitor 7: Predict when motor 7 will need maintenance',
        'Flow Sensor 2: Report how much flow passes during the night from 2 to 5 am',
        'Quality System: Identify defects in products from batch #4521'
      ],
      description: 'We transform your industrial sensors and equipment into intelligent agents that monitor, predict and optimize your operation 24/7',
      cta: 'Request Industrial Demo'
    },

    // Project Types
    projectTypes: {
      title: 'Types of Projects',
      automation: {
        title: 'Manufacturing Line Automation',
        description: 'We design and implement intelligent automation systems for production lines, integrating sensors and actuators for complete control and optimization.'
      },
      circuits: {
        title: 'Advanced Circuits',
        description: 'Custom development of electronic circuits and control systems for specific industrial applications, from prototyping to mass production.'
      },
      monitoring: {
        title: 'Large-Scale Monitoring Systems',
        description: 'Implementation of comprehensive monitoring systems with IoT sensors, real-time data analysis, and predictive alerts for industrial facilities.'
      },
      quoteButton: 'Request Quote'
    },

    // Demo Form Industry
    demoIndustry: {
      title: 'Request a Quote',
      subtitle: 'Tell us about your industrial project and we\'ll get back to you with a customized solution',
      form: {
        name: 'Full Name',
        namePlaceholder: 'Juan Pérez',
        email: 'Email',
        emailPlaceholder: 'juan@company.com',
        company: 'Company',
        companyPlaceholder: 'Your Company Name',
        phone: 'Phone',
        phonePlaceholder: '+52 123 456 7890',
        projectType: 'Project Type',
        projectTypeOptions: {
          select: 'Select project type',
          automation: 'Manufacturing Line Automation',
          circuits: 'Advanced Circuits',
          monitoring: 'Large-Scale Monitoring Systems',
          k1monitor: 'K1 Monitor',
          custom: 'Custom Project'
        },
        industryType: 'Industry Type',
        industryTypeOptions: {
          select: 'Select industry type',
          manufacturing: 'Manufacturing',
          food: 'Food & Beverage',
          automotive: 'Automotive',
          pharmaceutical: 'Pharmaceutical',
          energy: 'Energy',
          other: 'Other'
        },
        message: 'Project Details',
        messagePlaceholder: 'Tell us about your project, specific needs, timeline, etc.',
        submit: 'Request Quote',
        privacy: 'By submitting this form, you agree to our Privacy Policy. We\'ll only use your information to contact you about your project.',
        required: '*'
      },
      success: {
        title: 'Thank You!',
        message: 'We\'ve received your request. Our team will contact you within 24 hours to discuss your industrial project.'
      }
    },

    // Problems
    problems: {
      title: 'The Problem',
      subtitle: 'Modern farms have technology, but it doesn\'t work together',
      problem1: {
        title: 'Fragmented Systems',
        description: 'Multiple platforms that don\'t communicate with each other'
      },
      problem2: {
        title: 'Data Overload',
        description: 'Too much information, no actionable insights'
      },
      problem3: {
        title: 'Manual Management',
        description: 'Farmers spend hours managing different tools instead of farming'
      }
    },
    
    // Solution
    solution: {
      title: 'The Solution: Kesherat-Link',
      subtitle: 'A neurological center for agriculture',
      howItWorks: 'How It Works',
      description: 'Kesherat-Link acts as the central nervous system of your farm, connecting all your hardware and data sources into a unified intelligent platform.',
      features: [
        'Universal hardware compatibility - works with any sensor, drone, or machinery',
        'Real-time data aggregation from all sources',
        'AI-powered autonomous agents that make decisions',
        'Single dashboard for complete farm oversight',
        'Automated task execution based on conditions'
      ],
      funnel: {
        row1Title: 'Hardware Layer',
        row2Title: 'Data Processing',
        row3Title: 'Intelligent Agents',
        kesheratLink: 'Kesherat-Link',
        kesheratSubtitle: 'Central Intelligence Hub'
      }
    },
    
    // AgroMonitor
    agromonitor: {
      title: 'AgroMonitor',
      subtitle: 'Your command center for intelligent farm agents',
      description: 'AgroMonitor is where you interact with and manage all your farm agents. Any connected hardware - sensors, machinery, drones, weather stations, cameras - becomes an intelligent agent you can communicate with, assign tasks to, and coordinate through one unified platform.',
      agents: {
        sensors: {
          title: 'IoT Sensors',
          description: 'Monitor and control soil, climate, and water sensors as agents'
        },
        machinery: {
          title: 'Farm Equipment',
          description: 'Command tractors, harvesters, and irrigation systems'
        },
        drones: {
          title: 'Drones & Cameras',
          description: 'Deploy aerial monitoring and computer vision agents'
        },
        external: {
          title: 'External Data',
          description: 'Integrate weather, satellite, and market data agents'
        }
      },
      platform: {
        aiCopilot: 'AI Copilot',
        taskManagement: 'Task Management'
      }
    },
    
    // Demo Form
    demo: {
      title: 'Request a Demo',
      subtitle: 'See how Kesherat can transform your agricultural operations into an intelligent, autonomous system',
      form: {
        name: 'Full Name',
        email: 'Email',
        company: 'Company/Farm Name',
        phone: 'Phone Number',
        sector: 'Sector',
        projectType: 'Project Type',
        package: 'Interested Package',
        farmSize: 'Farm Size (hectares)',
        message: 'Tell us about your needs',
        placeholders: {
          name: 'John Doe',
          email: 'john@example.com',
          company: 'Your Farm Name',
          phone: '+1 (555) 000-0000',
          message: 'What challenges are you facing? What technologies do you currently use?'
        },
        sectorOptions: {
          select: 'Select sector',
          agriculture: '🌾 Agriculture',
          industry: '🏭 Industry'
        },
        projectTypeOptions: {
          select: 'Select project type',
          agricultural: '🌾 Agricultural',
          industrial: '🏭 Industrial'
        },
        packageOptions: {
          select: 'Select package',
          tractor: 'Tractor Package (All-in-One)',
          light: 'Light',
          pro: 'Pro',
          deluxe: 'Deluxe',
          enterprise: 'Enterprise'
        },
        farmSizeOptions: {
          select: 'Select farm size',
          small: '0-50 hectares',
          medium: '50-200 hectares',
          large: '200-500 hectares',
          xlarge: '500+ hectares'
        },
        submit: 'Request Demo',
        privacy: 'By submitting this form, you agree to our Privacy Policy. We\'ll only use your information to schedule your demo.',
        required: '*'
      },
      success: {
        title: 'Thank You!',
        message: 'We\'ve received your request. Our team will contact you within 24 hours to schedule your personalized demo.'
      },
      why: {
        title: 'Why Kesherat',
        features: {
          agnostic: {
            title: 'Agnostic Platform',
            description: 'Works with any hardware'
          },
          unified: {
            title: 'Unified Control',
            description: 'Manage all tech in one place'
          },
          ai: {
            title: 'AI Agents',
            description: 'Autonomous smart decisions'
          },
          realtime: {
            title: 'Real-time Data',
            description: 'Live farm monitoring'
          }
        }
      }
    },

    // Pricing
    pricing: {
      title: 'Pricing',
      subtitle: 'Choose the package that best fits your needs',
      getStarted: 'Get Started',
      freeTrialButton: '7 Days Free',
      note: 'All prices are in MXN. Custom packages available for large operations.',
      contractNote: 'Minimum 1 year contract',
      expand: 'Expand features',
      collapse: 'Collapse features',
      mostPopular: 'Most Popular',
      contactUs: 'Contact Us',
      allInOne: {
        selectorTitle: 'All-in-One Packages',
        title: 'Tractor Package',
        price: '1,352 MXN',
        period: '/ monthly',
        discount: 'Second year: 733 MXN monthly / tractor',
        includes: 'Includes AgroMonitor Light',
        features: {
          sensor: 'Fuel level sensor and GPS',
          installation: 'Installation included',
          data: '4G data included',
          platform: 'AgroMonitor Platform - Basic',
          secondYear: 'Second year: 733 MXN monthly / tractor'
        },
        platformFeatures: [
          'Interactive Real-Time Dashboard',
          'Vehicle and GPS Route Management',
          'Geofencing and Smart Field Zones',
          'Automated Alert and Notification System',
          'Agricultural Task Management (Kanban and Calendar)',
          'Digital Agricultural Notebook',
          'Activity Reports and Analysis',
          'Integrated Weather and Environmental Monitoring (Open-Meteo)',
          'AI Agricultural Copilot Chat',
          'Dynamic Agents with LLM Code Generation',
          'Telegram Integration for Alerts and Communication'
        ]
      },
      softwareOnly: {
        selectorTitle: 'Software Only'
      },
      softwareLight: {
        title: 'Light',
        price: '399 MXN',
        period: '/ monthly',
        description: 'Software only - No connected equipment',
        features: {
          platform: 'AgroMonitor Platform - Light',
          support: 'Email technical support',
          updates: 'Free updates'
        },
        platformFeatures: [
          'Digital Agricultural Notebook via Telegram',
          'GPS Tracking with Mobile App',
          'AI Agricultural Copilot Chat',
          'Geofencing and Smart Field Zones',
          'Agricultural Task Management (Kanban and Calendar)',
          'Basic Activity Reports',
          'Field Notes and Records'
        ]
      },
      softwarePro: {
        title: 'Pro',
        price: '3,000 MXN',
        period: '/ monthly',
        limits: {
          equipment: 'Up to 15 Connected Equipment'
        },
        features: {
          platform: 'AgroMonitor Platform - Pro',
          support: 'Priority technical support',
          updates: 'Free updates and new features'
        },
        platformFeatures: [
          'Interactive Real-Time Dashboard',
          'Vehicle and GPS Route Management',
          'Geofencing and Smart Field Zones',
          'Automated Alert and Notification System',
          'Agricultural Task Management (Kanban and Calendar)',
          'Digital Agricultural Notebook',
          'Activity Reports and Analysis',
          'Integrated Weather and Environmental Monitoring (Open-Meteo)',
          'AI Agricultural Copilot Chat',
          'Dynamic Agents with LLM Code Generation',
          'Telegram Integration for Alerts and Communication'
        ]
      },
      softwareDeluxe: {
        title: 'Deluxe',
        price: '6,999 MXN',
        period: '/ monthly',
        limits: {
          equipment: 'Up to 35 Connected Equipment'
        },
        features: {
          platform: 'AgroMonitor Platform - Deluxe',
          support: 'Dedicated technical support 24/7',
          updates: 'Free updates and early access to new features',
          training: 'Personalized training and onboarding'
        },
        platformFeatures: [
          'Interactive Real-Time Dashboard',
          'Vehicle and GPS Route Management',
          'Geofencing and Smart Field Zones',
          'Automated Alert and Notification System',
          'Agricultural Task Management (Kanban and Calendar)',
          'Digital Agricultural Notebook',
          'Activity Reports and Analysis',
          'Integrated Weather and Environmental Monitoring (Open-Meteo)',
          'AI Agricultural Copilot Chat',
          'Dynamic Agents with LLM Code Generation',
          'Telegram Integration for Alerts and Communication'
        ]
      },
      softwareEnterprise: {
        title: 'Enterprise',
        price: 'Custom Pricing',
        description: 'Tailored solutions for large-scale operations with specific needs',
        limits: {
          unlimited: '∞ Unlimited Connected Equipment'
        },
        features: {
          allFeatures: 'All Deluxe features included',
          aiCopilot: 'AI Agricultural Copilot Chat',
          geofencing: 'Geofencing and Smart Field Zones',
          taskManagement: 'Agricultural Task Management (Kanban and Calendar)',
          custom: 'Custom development and integrations',
          dedicated: 'Dedicated account manager',
          sla: 'Custom SLA and guaranteed uptime',
          onboarding: 'Complete onboarding and migration',
          integration: 'Integration with existing systems (ERP, etc.)'
        }
      }
    },

    // Footer
    footer: {
      tagline: 'Paving the way into agentic agriculture',
      product: {
        title: 'Product',
        features: 'Features',
        pricing: 'Pricing',
        docs: 'Documentation'
      },
      company: {
        title: 'Company',
        about: 'About',
        blog: 'Blog',
        contact: 'Contact'
      },
      legal: {
        title: 'Legal',
        privacy: 'Privacy',
        terms: 'Terms',
        cookies: 'Cookies'
      },
      copyright: '© 2024 Kesherat. All rights reserved.'
    },

    // Kesherat Link
    kesheratLink: {
      title: 'Kesherat-Link',
      subtitle: 'The neurological center of your farm',
      description: 'Kesherat-Link is our flagship platform that acts as the central nervous system connecting all your agricultural hardware and data sources into one unified intelligent system.',
      features: {
        title: 'Key Features',
        items: [
          'Universal hardware compatibility',
          'Real-time data synchronization',
          'AI-powered decision making',
          'Automated task management',
          'Predictive analytics',
          'Cloud-based infrastructure'
        ]
      },
      benefits: {
        title: 'Benefits',
        items: [
          'Reduce operational costs by up to 30%',
          'Increase crop yields through data-driven insights',
          'Save time with automated workflows',
          'Make informed decisions with real-time data',
          'Scale your operations effortlessly'
        ]
      }
    },

    // About Us
    aboutUs: {
      title: 'About Kesherat',
      subtitle: 'Pioneering the future of agriculture',
      mission: {
        title: 'Our Mission',
        description: 'To empower farmers worldwide by transforming fragmented agricultural technology into intelligent, unified systems that drive sustainable and profitable farming.'
      },
      vision: {
        title: 'Our Vision',
        description: 'A world where every farm, regardless of size, has access to cutting-edge AI-powered agricultural intelligence that maximizes productivity while preserving our planet.'
      },
      values: {
        title: 'Our Values',
        items: [
          {
            title: 'Innovation',
            description: 'Constantly pushing the boundaries of agricultural technology'
          },
          {
            title: 'Sustainability',
            description: 'Building solutions that benefit both farmers and the environment'
          },
          {
            title: 'Accessibility',
            description: 'Making advanced technology available to all farmers'
          },
          {
            title: 'Collaboration',
            description: 'Working together with farmers to create real solutions'
          }
        ]
      },
      team: {
        title: 'Our Team',
        description: 'A diverse group of agricultural experts, AI engineers, and sustainability advocates dedicated to revolutionizing farming.'
      }
    }
  },
  
  es: {
    // Navbar
    nav: {
      home: 'Inicio',
      problems: 'Problemas',
      solution: 'Solución',
      agromonitor: 'AgroMonitor',
      kesheratLink: 'Kesherat Link',
      otherProjects: 'Otros Proyectos',
      pricing: 'Precios',
      aboutUs: 'Sobre Nosotros',
      requestDemo: 'Solicitar Demo'
    },

    // Navbar Industry
    navIndustry: {
      home: 'Inicio',
      k1Monitor: 'K1 Monitor',
      customProjects: 'Proyectos a Medida',
      requestDemo: 'Solicitar Demo'
    },
    
    // Hero
    hero: {
      title: 'Agricultura Agéntica',
      subtitle: 'Transformamos Hardware y Datos en agentes para el uso de agricultores',
      tags: {
        agriculture: 'Agricultura',
        connection: 'Conexión',
        technology: 'Tecnología'
      },
      buttons: {
        getStarted: 'Comenzar',
        learnMore: 'Saber Más'
      },
      agentMessages: [
        {
          agent: 'Tractor 1',
          message: 'Tu tarea es decirme cuánta gasolina gastas cuando pasas por el sector D'
        },
        {
          agent: 'Sensores de Suelo',
          message: 'Su trabajo es entender cuándo los árboles necesitan más agua'
        },
        {
          agent: 'Robot Recolector',
          message: 'Analízame los tamaños de las frutas'
        },
        {
          agent: 'Estación Meteorológica',
          message: 'Predice los patrones de lluvia para las próximas 48 horas'
        },
        {
          agent: 'Flota de Drones',
          message: 'Monitorea la salud de los cultivos en los campos del norte'
        }
      ]
    },

    // Hero Industry
    heroIndustry: {
      title: {
        main: 'INDUSTRIA',
        sub: 'AGÉNTICA'
      },
      rotatingMessages: [
        'Sensor de Temperatura 3: Dime las variaciones de temperatura en la línea de producción 3 durante el último turno',
        'Sistema de Presión B: Reporta cualquier anomalía de presión detectada en el sector B',
        'Monitor de Vibración 7: Predice cuándo el motor 7 necesitará mantenimiento',
        'Sensor de Flujo 2: Reporta cuánto flujo pasa durante la noche de 2 a 5 am',
        'Sistema de Calidad: Identifica defectos en productos del lote #4521'
      ],
      description: 'Transformamos tus sensores industriales y equipos en agentes inteligentes que monitorean, predicen y optimizan tu operación 24/7',
      cta: 'Solicitar Demo Industrial'
    },

    // Project Types
    projectTypes: {
      title: 'Tipos de Proyectos',
      automation: {
        title: 'Automatización de Líneas de Manufactura',
        description: 'Diseñamos e implementamos sistemas de automatización inteligente para líneas de producción, integrando sensores y actuadores para control y optimización completa.'
      },
      circuits: {
        title: 'Circuitos Avanzados',
        description: 'Desarrollo personalizado de circuitos electrónicos y sistemas de control para aplicaciones industriales específicas, desde prototipado hasta producción en masa.'
      },
      monitoring: {
        title: 'Sistemas de Monitoreo a Gran Escala',
        description: 'Implementación de sistemas de monitoreo integral con sensores IoT, análisis de datos en tiempo real y alertas predictivas para instalaciones industriales.'
      },
      quoteButton: 'Cotizar Proyecto'
    },

    // Demo Form Industry
    demoIndustry: {
      title: 'Solicitar Cotización',
      subtitle: 'Cuéntanos sobre tu proyecto industrial y te responderemos con una solución personalizada',
      form: {
        name: 'Nombre Completo',
        namePlaceholder: 'Juan Pérez',
        email: 'Correo Electrónico',
        emailPlaceholder: 'juan@empresa.com',
        company: 'Empresa',
        companyPlaceholder: 'Nombre de tu Empresa',
        phone: 'Teléfono',
        phonePlaceholder: '+52 123 456 7890',
        projectType: 'Tipo de Proyecto',
        projectTypeOptions: {
          select: 'Selecciona tipo de proyecto',
          automation: 'Automatización de Líneas de Manufactura',
          circuits: 'Circuitos Avanzados',
          monitoring: 'Sistemas de Monitoreo a Gran Escala',
          k1monitor: 'K1 Monitor',
          custom: 'Proyecto Personalizado'
        },
        industryType: 'Tipo de Industria',
        industryTypeOptions: {
          select: 'Selecciona tipo de industria',
          manufacturing: 'Manufactura',
          food: 'Alimentos y Bebidas',
          automotive: 'Automotriz',
          pharmaceutical: 'Farmacéutica',
          energy: 'Energía',
          other: 'Otro'
        },
        message: 'Detalles del Proyecto',
        messagePlaceholder: 'Cuéntanos sobre tu proyecto, necesidades específicas, tiempos, etc.',
        submit: 'Solicitar Cotización',
        privacy: 'Al enviar este formulario, aceptas nuestra Política de Privacidad. Solo usaremos tu información para contactarte sobre tu proyecto.',
        required: '*'
      },
      success: {
        title: '¡Gracias!',
        message: 'Hemos recibido tu solicitud. Nuestro equipo te contactará en las próximas 24 horas para discutir tu proyecto industrial.'
      }
    },

    // Problems
    problems: {
      title: 'El Problema',
      subtitle: 'Las granjas modernas tienen tecnología, pero no funciona en conjunto',
      problem1: {
        title: 'Sistemas Fragmentados',
        description: 'Múltiples plataformas que no se comunican entre sí'
      },
      problem2: {
        title: 'Sobrecarga de Datos',
        description: 'Demasiada información, sin insights accionables'
      },
      problem3: {
        title: 'Gestión Manual',
        description: 'Los agricultores pasan horas gestionando diferentes herramientas en lugar de cultivar'
      }
    },
    
    // Solution
    solution: {
      title: 'La Solución: Kesherat-Link',
      subtitle: 'Un centro neurológico para la agricultura',
      howItWorks: 'Cómo Funciona',
      description: 'Kesherat-Link actúa como el sistema nervioso central de tu granja, conectando todo tu hardware y fuentes de datos en una plataforma inteligente unificada.',
      features: [
        'Compatibilidad universal de hardware - funciona con cualquier sensor, dron o maquinaria',
        'Agregación de datos en tiempo real de todas las fuentes',
        'Agentes autónomos impulsados por IA que toman decisiones',
        'Panel único para supervisión completa de la granja',
        'Ejecución automatizada de tareas basada en condiciones'
      ],
      funnel: {
        row1Title: 'Capa de Hardware',
        row2Title: 'Procesamiento de Datos',
        row3Title: 'Agentes Inteligentes',
        kesheratLink: 'Kesherat-Link',
        kesheratSubtitle: 'Centro de Inteligencia Central'
      }
    },
    
    // AgroMonitor
    agromonitor: {
      title: 'AgroMonitor',
      subtitle: 'Tu centro de comando para agentes agrícolas inteligentes',
      description: 'AgroMonitor es donde interactúas y gestionas todos tus agentes agrícolas. Cualquier hardware conectado - sensores, maquinaria, drones, estaciones meteorológicas, cámaras - se convierte en un agente inteligente con el que puedes comunicarte, asignar tareas y coordinar a través de una plataforma unificada.',
      agents: {
        sensors: {
          title: 'Sensores IoT',
          description: 'Monitorea y controla sensores de suelo, clima y agua como agentes'
        },
        machinery: {
          title: 'Equipos Agrícolas',
          description: 'Comanda tractores, cosechadoras y sistemas de riego'
        },
        drones: {
          title: 'Drones y Cámaras',
          description: 'Despliega agentes de monitoreo aéreo y visión computacional'
        },
        external: {
          title: 'Datos Externos',
          description: 'Integra agentes de datos meteorológicos, satelitales y de mercado'
        }
      },
      platform: {
        aiCopilot: 'Copiloto IA',
        taskManagement: 'Gestión de Tareas'
      }
    },
    
    // Demo Form
    demo: {
      title: 'Solicitar una Demo',
      subtitle: 'Descubre cómo Kesherat puede transformar tus operaciones agrícolas en un sistema inteligente y autónomo',
      form: {
        name: 'Nombre Completo',
        email: 'Correo Electrónico',
        company: 'Empresa/Nombre de Granja',
        phone: 'Número de Teléfono',
        sector: 'Sector',
        projectType: 'Tipo de Proyecto',
        package: 'Paquete de Interés',
        farmSize: 'Tamaño de Granja (hectáreas)',
        message: 'Cuéntanos sobre tus necesidades',
        placeholders: {
          name: 'Juan Pérez',
          email: 'juan@ejemplo.com',
          company: 'Nombre de tu Granja',
          phone: '+52 (555) 000-0000',
          message: '¿Qué desafíos enfrentas? ¿Qué tecnologías usas actualmente?'
        },
        sectorOptions: {
          select: 'Selecciona sector',
          agriculture: '🌾 Agricultura',
          industry: '🏭 Industrial'
        },
        projectTypeOptions: {
          select: 'Selecciona tipo de proyecto',
          agricultural: '🌾 Agrícola',
          industrial: '🏭 Industrial'
        },
        packageOptions: {
          select: 'Selecciona paquete',
          tractor: 'Paquete Tractor (Todo Incluido)',
          light: 'Light',
          pro: 'Pro',
          deluxe: 'Deluxe',
          enterprise: 'Enterprise'
        },
        farmSizeOptions: {
          select: 'Selecciona tamaño de granja',
          small: '0-50 hectáreas',
          medium: '50-200 hectáreas',
          large: '200-500 hectáreas',
          xlarge: '500+ hectáreas'
        },
        submit: 'Solicitar Demo',
        privacy: 'Al enviar este formulario, aceptas nuestra Política de Privacidad. Solo usaremos tu información para programar tu demo.',
        required: '*'
      },
      success: {
        title: '¡Gracias!',
        message: 'Hemos recibido tu solicitud. Nuestro equipo te contactará en 24 horas para programar tu demo personalizada.'
      },
      why: {
        title: 'Por Qué Kesherat',
        features: {
          agnostic: {
            title: 'Plataforma Agnóstica',
            description: 'Funciona con cualquier hardware'
          },
          unified: {
            title: 'Control Unificado',
            description: 'Gestiona toda la tecnología en un lugar'
          },
          ai: {
            title: 'Agentes IA',
            description: 'Decisiones inteligentes autónomas'
          },
          realtime: {
            title: 'Datos en Tiempo Real',
            description: 'Monitoreo en vivo de la granja'
          }
        }
      }
    },

    // Pricing
    pricing: {
      title: 'Precios',
      subtitle: 'Elige el paquete que mejor se adapte a tus necesidades',
      getStarted: 'Comenzar',
      freeTrialButton: '7 Días Gratis',
      note: 'Todos los precios están en MXN. Paquetes personalizados disponibles para operaciones grandes.',
      contractNote: 'Mínimo 1 año de contrato',
      expand: 'Ver funciones',
      collapse: 'Ocultar funciones',
      mostPopular: 'Más Popular',
      contactUs: 'Contáctanos',
      allInOne: {
        selectorTitle: 'Paquetes All-in-One',
        title: 'Paquete Tractor',
        price: '1,352 MXN',
        period: '/ mensual',
        discount: 'Segundo año: 733 MXN mensual / tractor',
        includes: 'Incluye AgroMonitor Light',
        features: {
          sensor: 'Sensor de nivel de combustible y GPS',
          installation: 'Instalación incluida',
          data: 'Datos 4G incluidos',
          platform: 'Plataforma AgroMonitor - Basic',
          secondYear: 'Segundo año: 733 MXN mensual / tractor'
        },
        platformFeatures: [
          'Dashboard Interactivo en Tiempo Real',
          'Gestión de Vehículos y Rutas GPS',
          'Geofencing y Zonas de Campo Inteligentes',
          'Sistema de Alertas y Notificaciones Automáticas',
          'Gestión de Tareas Agrícolas (Kanban y Calendario)',
          'Cuaderno Agrícola Digital',
          'Reportes y Análisis de Actividad',
          'Clima y Monitoreo Ambiental Integrado (Open-Meteo)',
          'Chat IA Copiloto Agrícola',
          'Agentes Dinámicos con Generación de Código LLM',
          'Integración con Telegram para Alertas y Comunicación'
        ]
      },
      softwareOnly: {
        selectorTitle: 'Solo Software'
      },
      softwareLight: {
        title: 'Light',
        price: '399 MXN',
        period: '/ mensual',
        description: 'Solo software - Sin equipos conectados',
        features: {
          platform: 'Plataforma AgroMonitor - Light',
          support: 'Soporte técnico por email',
          updates: 'Actualizaciones gratuitas'
        },
        platformFeatures: [
          'Cuaderno de Campo Digital por Telegram',
          'Rastreo GPS con App Móvil',
          'Chat IA Copiloto Agrícola',
          'Geofencing y Zonas de Campo Inteligentes',
          'Gestión de Tareas Agrícolas (Kanban y Calendario)',
          'Reportes Básicos de Actividad',
          'Notas y Registros de Campo'
        ]
      },
      softwarePro: {
        title: 'Pro',
        price: '3,000 MXN',
        period: '/ mensual',
        limits: {
          equipment: 'Hasta 15 Equipos Conectados'
        },
        features: {
          platform: 'Plataforma AgroMonitor - Pro',
          support: 'Soporte técnico prioritario',
          updates: 'Actualizaciones gratuitas y nuevas funciones'
        },
        platformFeatures: [
          'Dashboard Interactivo en Tiempo Real',
          'Gestión de Vehículos y Rutas GPS',
          'Geofencing y Zonas de Campo Inteligentes',
          'Sistema de Alertas y Notificaciones Automáticas',
          'Gestión de Tareas Agrícolas (Kanban y Calendario)',
          'Cuaderno Agrícola Digital',
          'Reportes y Análisis de Actividad',
          'Clima y Monitoreo Ambiental Integrado (Open-Meteo)',
          'Chat IA Copiloto Agrícola',
          'Agentes Dinámicos con Generación de Código LLM',
          'Integración con Telegram para Alertas y Comunicación'
        ]
      },
      softwareDeluxe: {
        title: 'Deluxe',
        price: '6,999 MXN',
        period: '/ mensual',
        limits: {
          equipment: 'Hasta 35 Equipos Conectados'
        },
        features: {
          platform: 'Plataforma AgroMonitor - Deluxe',
          support: 'Soporte técnico dedicado 24/7',
          updates: 'Actualizaciones gratuitas y acceso anticipado a nuevas funciones',
          training: 'Capacitación personalizada y onboarding'
        },
        platformFeatures: [
          'Dashboard Interactivo en Tiempo Real',
          'Gestión de Vehículos y Rutas GPS',
          'Geofencing y Zonas de Campo Inteligentes',
          'Sistema de Alertas y Notificaciones Automáticas',
          'Gestión de Tareas Agrícolas (Kanban y Calendario)',
          'Cuaderno Agrícola Digital',
          'Reportes y Análisis de Actividad',
          'Clima y Monitoreo Ambiental Integrado (Open-Meteo)',
          'Chat IA Copiloto Agrícola',
          'Agentes Dinámicos con Generación de Código LLM',
          'Integración con Telegram para Alertas y Comunicación'
        ]
      },
      softwareEnterprise: {
        title: 'Enterprise',
        price: 'Precio Personalizado',
        description: 'Soluciones a medida para operaciones de gran escala con necesidades específicas',
        limits: {
          unlimited: '∞ Equipos Conectados Ilimitados'
        },
        features: {
          allFeatures: 'Todas las funciones de Deluxe incluidas',
          aiCopilot: 'Chat IA Copiloto Agrícola',
          geofencing: 'Geofencing y Zonas de Campo Inteligentes',
          taskManagement: 'Gestión de Tareas Agrícolas (Kanban y Calendario)',
          custom: 'Desarrollo personalizado e integraciones',
          dedicated: 'Gerente de cuenta dedicado',
          sla: 'SLA personalizado y tiempo de actividad garantizado',
          onboarding: 'Onboarding completo y migración',
          integration: 'Integración con sistemas existentes (ERP, etc.)'
        }
      }
    },

    // Footer
    footer: {
      tagline: 'Abriendo camino hacia la agricultura agéntica',
      product: {
        title: 'Producto',
        features: 'Características',
        pricing: 'Precios',
        docs: 'Documentación'
      },
      company: {
        title: 'Empresa',
        about: 'Acerca de',
        blog: 'Blog',
        contact: 'Contacto'
      },
      legal: {
        title: 'Legal',
        privacy: 'Privacidad',
        terms: 'Términos',
        cookies: 'Cookies'
      },
      copyright: '© 2024 Kesherat. Todos los derechos reservados.'
    },

    // Kesherat Link
    kesheratLink: {
      title: 'Kesherat-Link',
      subtitle: 'El centro neurológico de tu granja',
      description: 'Kesherat-Link es nuestra plataforma insignia que actúa como el sistema nervioso central conectando todo tu hardware agrícola y fuentes de datos en un sistema inteligente unificado.',
      features: {
        title: 'Características Clave',
        items: [
          'Compatibilidad universal con hardware',
          'Sincronización de datos en tiempo real',
          'Toma de decisiones impulsada por IA',
          'Gestión automatizada de tareas',
          'Análisis predictivo',
          'Infraestructura basada en la nube'
        ]
      },
      benefits: {
        title: 'Beneficios',
        items: [
          'Reduce costos operativos hasta un 30%',
          'Aumenta rendimientos de cultivos con insights basados en datos',
          'Ahorra tiempo con flujos de trabajo automatizados',
          'Toma decisiones informadas con datos en tiempo real',
          'Escala tus operaciones sin esfuerzo'
        ]
      }
    },

    // About Us
    aboutUs: {
      title: 'Sobre Kesherat',
      subtitle: 'Pioneros del futuro de la agricultura',
      mission: {
        title: 'Nuestra Misión',
        description: 'Empoderar a agricultores en todo el mundo transformando la tecnología agrícola fragmentada en sistemas inteligentes y unificados que impulsan una agricultura sostenible y rentable.'
      },
      vision: {
        title: 'Nuestra Visión',
        description: 'Un mundo donde cada granja, sin importar su tamaño, tenga acceso a inteligencia agrícola de vanguardia impulsada por IA que maximice la productividad mientras preserva nuestro planeta.'
      },
      values: {
        title: 'Nuestros Valores',
        items: [
          {
            title: 'Innovación',
            description: 'Constantemente empujando los límites de la tecnología agrícola'
          },
          {
            title: 'Sostenibilidad',
            description: 'Construyendo soluciones que benefician tanto a agricultores como al medio ambiente'
          },
          {
            title: 'Accesibilidad',
            description: 'Haciendo la tecnología avanzada disponible para todos los agricultores'
          },
          {
            title: 'Colaboración',
            description: 'Trabajando junto a agricultores para crear soluciones reales'
          }
        ]
      },
      team: {
        title: 'Nuestro Equipo',
        description: 'Un grupo diverso de expertos agrícolas, ingenieros de IA y defensores de la sostenibilidad dedicados a revolucionar la agricultura.'
      }
    }
  }
}

