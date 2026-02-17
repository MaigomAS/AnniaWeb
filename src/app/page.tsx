import { HOME_V1_CONTENT } from '@/content/homeV1';
import { CtaGroup } from '@/components/home/CtaGroup';
import { HomeSection } from '@/components/home/HomeSection';
import { ImagePlaceholder } from '@/components/home/ImagePlaceholder';

export default function HomePage() {
  return (
    <main className="bg-token-surface text-token-ink">
      <section aria-label="Hero" className="border-b border-token-border py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-12 gap-y-8 px-6 md:gap-x-8">
          <header className="col-span-12 space-y-6 md:col-span-7">
            <h1 className="text-balance text-4xl leading-tight md:text-6xl">
              {HOME_V1_CONTENT.hero.h1}
            </h1>
            {HOME_V1_CONTENT.hero.dek && (
              <p className="max-w-2xl text-lg leading-relaxed text-token-ink-soft">
                {HOME_V1_CONTENT.hero.dek}
              </p>
            )}
            {HOME_V1_CONTENT.hero.ctas?.length ? (
              <CtaGroup ctas={HOME_V1_CONTENT.hero.ctas} />
            ) : null}
          </header>

          <aside className="col-span-12 md:col-span-5">
            {HOME_V1_CONTENT.hero.image && (
              <ImagePlaceholder
                alt={HOME_V1_CONTENT.hero.image.alt}
                caption={HOME_V1_CONTENT.hero.image.caption}
              />
            )}
          </aside>
        </div>
      </section>

      {HOME_V1_CONTENT.sections.map((section) => (
        <HomeSection key={section.id} section={section} />
      ))}
    </main>
  );
}
