type SectionHeadingProps = {
  title: string;
  lead?: string;
};

const SectionHeading = ({ title, lead }: SectionHeadingProps) => (
  <div className="reveal border-t-2 border-ink pt-6">
    <h2 className="max-w-4xl text-5xl sm:text-6xl lg:text-7xl">{title}</h2>
    {lead && <p className="mt-6 max-w-2xl text-xl text-ink-2">{lead}</p>}
  </div>
);

export default SectionHeading;
