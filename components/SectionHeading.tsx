type Props = {
  id: string;
  label: string;
  title: string;
};

export function SectionHeading({ id, label, title }: Props) {
  return (
    <header className="mb-8">
      <p className="font-mono text-xs tracking-wide text-faint">{label}</p>
      <h2 id={id} className="mt-1 font-serif text-3xl text-fg">
        {title}
      </h2>
    </header>
  );
}
