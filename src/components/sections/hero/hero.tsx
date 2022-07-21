import { useId } from "react";
import Illustration from "@/assets/illustration-intro.svg";
import { ActionLink } from "@/components/buttons/action-link/action-link";

export const HeroSection: React.FC = () => {
  const title = useId();

  return (
    <section aria-labelledby={title} className={`pt-12 ctn grid grid-cols-1 gap-[1.1875rem]
      xl:grid-cols-[28.75rem,33.75rem] xl:justify-between xl:pt-[7.5rem]
    `}>
      <div className="flex justify-center xl:order-2">
        <img src={Illustration} alt="" />
      </div>
      <header className="xl:mt-12">
        <h1 id={title} className='title-xl text-neutral-800 text-center xl:text-left'>Bring everyone together to build better products.</h1>
        <p className="mt-2 body-md text-neutral-500 text-center xl:text-left xl:max-w-[21.875rem] xl:mt-4">
          Manage makes it simple for software teams to plan day-to-day tasks while keeping
          the larger team goals in view.
        </p>
        <div className="mt-8 flex justify-center xl:justify-start xl:mt-10">
          <ActionLink href="/#">Get Started</ActionLink>
        </div>
      </header>
    </section>
  );
};
