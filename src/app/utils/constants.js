export const SITE_CONFIG = {
    name: 'Sonríe Dental Studio',
    slogan: 'Cuidamos tu sonrisa con tecnología de vanguardia y un trato lleno de empatía.',
    description: 'Atención odontológica personalizada, moderna y de alta calidad para garantizar sonrisas saludables y duraderas.',
    contact: {
      phone: '+123456789',
      email: 'contacto@sonriedental.com',
      whatsapp: '+123456789',
      address: 'Tu dirección aquí',
      schedule: 'Lun - Vie: 9:00 - 19:00, Sáb: 9:00 - 14:00'
    }
  };
  
  export const SERVICES = [
    {
      id: 'cleaning',
      title: 'Limpieza Dental',
      description: 'Mantén tu sonrisa brillante y saludable con nuestros tratamientos de limpieza profesional.',
      features: ['Eliminación de sarro', 'Pulido dental', 'Revisión general'],
      duration: '60 minutos'
    },
    {
      id: 'orthodontics',
      title: 'Ortodoncia',
      description: 'Corrige la posición de tus dientes con tratamientos personalizados usando tecnología de punta.',
      features: ['Brackets modernos', 'Alineadores invisibles', 'Plan personalizado'],
      duration: 'Consultar'
    },
    {
      id: 'whitening',
      title: 'Blanqueamiento',
      description: 'Recupera el brillo natural de tu sonrisa con tratamientos seguros y efectivos.',
      features: ['Tecnología LED', 'Resultados inmediatos', 'Sin sensibilidad'],
      duration: '90 minutos'
    },
    {
      id: 'treatments',
      title: 'Tratamientos',
      description: 'Soluciones integrales para cualquier problema dental con técnicas modernas.',
      features: ['Endodoncias', 'Implantes', 'Restauraciones'],
      duration: 'Según tratamiento'
    }
  ];
  
  export const TESTIMONIALS = [
    {
      id: 1,
      name: 'Ana García',
      text: 'El mejor servicio dental que he recibido. El personal es muy profesional y amable.',
      rating: 5,
      service: 'Limpieza Dental'
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      text: 'Excelente atención y resultados increíbles con mi tratamiento de ortodoncia.',
      rating: 5,
      service: 'Ortodoncia'
    },
    {
      id: 3,
      name: 'María Sánchez',
      text: 'Muy satisfecha con mi blanqueamiento dental. Resultados naturales y sin sensibilidad.',
      rating: 5,
      service: 'Blanqueamiento'
    }
  ];
  
  export const BOOKING_SERVICES = SERVICES.map(service => ({
    value: service.id,
    label: service.title
  }));