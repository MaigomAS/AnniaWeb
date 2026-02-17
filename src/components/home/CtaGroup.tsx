import type { Cta } from '@/content/homeV1';

type CtaGroupProps = {
  ctas: Cta[];
};

export function CtaGroup({ ctas }: CtaGroupProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 pt-2">
      {ctas.map((cta) => (
        <a
          key={`${cta.label}-${cta.href}`}
          href={cta.href}
          className="inline-flex items-center rounded-sm border border-token-ink px-4 py-2 text-sm text-token-ink transition-colors hover:bg-token-accent"
        >
          {cta.label}
        </a>
      ))}
    </div>
  );
}
