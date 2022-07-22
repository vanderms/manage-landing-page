import { ActionLink } from "@/components/buttons/action-link/action-link";
import { useId } from "react";

export const CallToActionSection: React.FC = () => {
  const title = useId();

  return (
    <section
      aria-labelledby={title}
      className="mt-10 ctn bg-primary py-24 relative call-to-action-pattern xl:flex xl:justify-between xl:items-center xl:pt-[3.875rem] xl:pb-[4.375rem] xl:mt-[11.25rem]"
    >
      <h2
        id={title}
        className="title-lg text-neutral-50 text-center max-w-[27.8125rem] mx-auto xl:text-left xl:mx-0"
      >
        Simplify how your team works today.
      </h2>
      <div className="relative z-10 mt-7 flex justify-center">
        <ActionLink negative={true} href="/">
          Get Started
        </ActionLink>
      </div>
    </section>
  );
};
