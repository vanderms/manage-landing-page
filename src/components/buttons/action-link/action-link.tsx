interface ActionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  negative?: boolean;
}

export const ActionLink: React.FC<ActionLinkProps> = (props) => {
  return (
    <a
      href={props.href}
      className={`text-[0.9375rem] h-11 w-max px-8 grid place-items-center     
      rounded-full  font-bold 
      ${
        props.negative
          ? "text-primary bg-neutral-50 hover:text-primary-300 shadow-[0px_15px_15px_-10px_#DB5943;]"
          : "text-neutral-50 bg-primary hover:bg-primary-300  shadow-[0px_15px_15px_-10px_#FF9F8E] "
      }
      ${props.className ?? ""}`}
    >
      {props.children}
    </a>
  );
};
