import type { Media } from "@/content/types";

/**
 * Autoplaying loop for motion-friendly visitors. The <source> has a media
 * query, so with reduced motion set no source matches: the browser shows
 * only the poster and never requests the video. No JavaScript needed.
 */
export function WorkMedia({ media }: { media: Media }) {
  if (media.kind === "placeholder") {
    return (
      <div className="flex aspect-video items-center justify-center rounded-lg border border-dashed border-line font-mono text-xs text-faint">
        {media.label}
      </div>
    );
  }

  return (
    <video
      className="aspect-video w-full rounded-lg border border-line object-cover"
      width={media.width}
      height={media.height}
      poster={media.poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={media.alt}
    >
      <source
        src={media.src}
        type="video/mp4"
        media="(prefers-reduced-motion: no-preference)"
      />
    </video>
  );
}
