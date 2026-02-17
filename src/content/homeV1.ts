/**
 * Fuente única de contenido para Home.
 * Pegar aquí, SIN modificar, el documento aprobado:
 * “ANNIA — Home V1: Arquitectura editorial completa + copy base + dirección visual”.
 */

export type Cta = {
  label: string; // Debe coincidir 1:1 con CTA aprobado
  href: string;
};

export type SectionContent = {
  id: string;
  ariaLabel: string;
  eyebrow?: string;
  h2: string;
  intro?: string;
  body?: string[];
  h3Blocks?: { title: string; text: string }[];
  ctas?: Cta[];
  image?: {
    alt: string;
    caption?: string;
  };
};

export type HomeContent = {
  metaTitle: string;
  hero: {
    h1: string;
    dek?: string;
    ctas?: Cta[];
    image?: { alt: string; caption?: string };
  };
  sections: SectionContent[];
};

/**
 * IMPORTANTE:
 * - No cambiar tono
 * - No reescribir copy
 * - No añadir secciones
 * - No cambiar CTAs
 */
export const HOME_V1_CONTENT: HomeContent = {
  metaTitle: 'ANNIA — Home V1',
  hero: {
    h1: '[PEGAR H1 APROBADO]',
    dek: '[PEGAR BAJADA APROBADA]',
    ctas: [
      { label: '[CTA 01 APROBADO]', href: '#' },
      { label: '[CTA 02 APROBADO]', href: '#' }
    ],
    image: {
      alt: '[ALT APROBADO]',
      caption: '[EPÍGRAFE APROBADO]'
    }
  },
  sections: [
    {
      id: 'section-01',
      ariaLabel: 'Sección 01',
      eyebrow: '[EYEBROW APROBADO]',
      h2: '[H2 APROBADO]',
      intro: '[INTRO APROBADA]',
      body: ['[PÁRRAFO APROBADO 01]', '[PÁRRAFO APROBADO 02]'],
      ctas: [{ label: '[CTA APROBADO]', href: '#' }],
      image: { alt: '[ALT APROBADO]' }
    },
    {
      id: 'section-02',
      ariaLabel: 'Sección 02',
      eyebrow: '[EYEBROW APROBADO]',
      h2: '[H2 APROBADO]',
      h3Blocks: [
        { title: '[H3 APROBADO 01]', text: '[TEXTO APROBADO 01]' },
        { title: '[H3 APROBADO 02]', text: '[TEXTO APROBADO 02]' }
      ]
    },
    {
      id: 'section-03',
      ariaLabel: 'Sección 03',
      h2: '[H2 APROBADO]',
      body: ['[PÁRRAFO APROBADO]']
    }
  ]
};
