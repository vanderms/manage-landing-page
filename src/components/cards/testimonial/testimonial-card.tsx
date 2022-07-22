interface TestimonialCardProps {
  avatar: string;
  name: string;
  children: React.ReactNode;
  li?: boolean;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = (props) => {
  if (props.li) {
    return (
      <li className="contents">
        <Card {...props} />
      </li>
    );
  }
  return <Card {...props} />;
};

const Card: React.FC<TestimonialCardProps> = (props) => {
  return (
    <figure className="relative bg-neutral-100 px-[1.3125rem] pb-[2.625rem] xl:px-10">
      <figcaption className="relative z-10 w-full flex flex-col items-center">
        <img
          src={props.avatar}
          alt={props.name}
          className="w-[4.5rem] h-[4.5rem] rounded-full"
        />
        <span className="block mt-6 title-sm text-neutral-800">{props.name}</span>
      </figcaption>
      <blockquote className="mt-[1.1875rem] body-sm text-neutral-500 text-center">
        {props.children}
      </blockquote>
      <div className="absolute top-0 left-0 bg-neutral-50 w-full h-9"></div>
    </figure>
  );
};
