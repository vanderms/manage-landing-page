import { useId } from "react";

export const TestimonialsSection: React.FC = () => {
  const title = useId();

  return (
    <section aria-labelledby={title}>
      <h2 id={title}>Testimonials</h2>
    </section>
  );
};
