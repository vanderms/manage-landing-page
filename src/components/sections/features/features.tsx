import { useId } from "react";
import { FeatureCard } from "@/components/cards/feature/feature-card";

export const FeaturesSection: React.FC = () => {
  const title = useId();

  return (
    <section aria-labelledby={title} className="pt-24 ctn grid grid-cols-1 xl:grid-cols-[27.8125rem,33.75rem] xl:justify-between xl:pt-[8rem]">
      <header>
        <h2 id={title} className="title-md text-neutral-800 text-center xl:text-left">
          What's different about Manage?
        </h2>
        <p className="mt-3 body-sm text-neutral-500 text-center xl:text-left xl:mt-6 xl:max-w-[21.875rem]">
          Manage provides all the functionality your team needs, without the complexity. Our
          software is tailor-made for modern digital product teams.{" "}
        </p>
      </header>
      <ol className="mt-14 flex flex-col items-center gap-12 xl:mt-0 xl:gap-10">
        <FeatureCard li={true} id='01' title="Track company-wide progress">
          <p>
            See how your day-to-day tasks fit into the wider vision. Go from tracking
            progress at the milestone level all the way done to the smallest of details.
            Never lose sight of the bigger picture again.
          </p>
        </FeatureCard>
        <FeatureCard li={true} id='02' title="Advanced built-in reports">
          <p>
            Set internal delivery estimates and track progress toward company goals. Our
            customisable dashboard helps you build out the reports you need to keep key
            stakeholders informed.
          </p>
        </FeatureCard>
        <FeatureCard li={true} id='03' title="Everything you need in one place">
          <p>
            Stop jumping from one service to another to communicate, store files, track
            tasks and share documents. Manage offers an all-in-one team productivity
            solution.
          </p>
        </FeatureCard>
      </ol>
    </section>
  );
};
