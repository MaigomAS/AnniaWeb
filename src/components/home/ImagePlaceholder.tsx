type ImagePlaceholderProps = {
  alt: string;
  caption?: string;
};

export function ImagePlaceholder({ alt, caption }: ImagePlaceholderProps) {
  return (
    <figure className="space-y-3">
      <div
        role="img"
        aria-label={alt}
        className="aspect-[16/9] w-full rounded-sm border border-token-border bg-token-surface-subtle"
      />
      {caption ? <figcaption className="text-sm text-token-muted">{caption}</figcaption> : null}
    </figure>
  );
}
