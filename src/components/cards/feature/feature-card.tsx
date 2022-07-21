interface FeatureCardProps {
  id: string;
  title: string;
  children: React.ReactNode;
  li?: boolean;
}

export const FeatureCard: React.FC<FeatureCardProps> = (props) => {
  if (props.li) {
    return (
      <li>
        <Card {...props} />
      </li>
    );
  }
  return <Card {...props} />;
};

const Card: React.FC<FeatureCardProps> = (props) => {
  return (
    <article className="grid grid-cols-[4.1875rem,1fr] gap-y-2 xl:gap-x-[1.75rem]">
      <div className="bg-primary-100 h-10 w-[4.1875rem] xl:bg-transparent">
        <div className="h-10  text-neutral-50 rounded-full bg-primary font-bold grid place-items-center">
          {props.id}
        </div>
      </div>

      <h3 className="w-full pl-4 bg-primary-100 h-10 flex items-center title-sm text-neutral-800 xl:bg-transparent xl:pl-0">
        {props.title}
      </h3>
      <div className="col-span-2 text-neutral-500 body-sm xl:col-start-2 xl:col-span-1">
        {props.children}
      </div>
    </article>
  );
};
