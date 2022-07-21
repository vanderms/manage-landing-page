import { useId } from "react";

export const FeaturesSection: React.FC = () => {
  const title = useId();

  return (
    <section aria-labelledby={title}>
      <h2 id={title}>Call to Action</h2>
    </section>
  );
};
