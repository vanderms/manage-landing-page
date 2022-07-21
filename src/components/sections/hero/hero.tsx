import { useId } from "react";

export const HeroSection: React.FC = () => {
  const title = useId();

  return (
    <section aria-aria-labelledby={title}>
      <h2 id={title}>Hero Section</h2>
    </section>
  );
};
