import type { SectionContent } from '@/content/homeV1';
import { CtaGroup } from './CtaGroup';
import { ImagePlaceholder } from './ImagePlaceholder';

type HomeSectionProps = {
  section: SectionContent;
};

export function HomeSection({ section }: HomeSectionProps) {
  return (
    <section
      id={section.id}
      aria-label={section.ariaLabel}
      className="border-t border-token-border py-16 md:py-24"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-12 gap-y-8 px-6 md:gap-x-8">
        <header className="col-span-12 md:col-span-4">
          {section.eyebrow && (
            <p className="mb-4 text-xs uppercase tracking-[0.18em] text-token-muted">
              {section.eyebrow}
            </p>
          )}
          <h2 className="text-balance text-2xl leading-tight text-token-ink md:text-3xl">
            {section.h2}
          </h2>
        </header>

        <div className="col-span-12 space-y-6 md:col-span-8">
          {section.intro && (
            <p className="text-lg leading-relaxed text-token-ink">{section.intro}</p>
          )}

          {section.body?.map((paragraph) => (
            <p key={paragraph} className="max-w-prose leading-relaxed text-token-ink-soft">
              {paragraph}
            </p>
          ))}

          {section.h3Blocks?.length ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {section.h3Blocks.map((block) => (
                <article key={block.title} className="space-y-3 rounded-sm border border-token-border p-6">
                  <h3 className="text-lg font-medium leading-snug text-token-ink">{block.title}</h3>
                  <p className="leading-relaxed text-token-ink-soft">{block.text}</p>
                </article>
              ))}
            </div>
          ) : null}

          {section.image && <ImagePlaceholder alt={section.image.alt} caption={section.image.caption} />}
          {section.ctas?.length ? <CtaGroup ctas={section.ctas} /> : null}
        </div>
      </div>
    </section>
  );
}
