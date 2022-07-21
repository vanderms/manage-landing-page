interface ActionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const ActionLink: React.FC<ActionLinkProps> = (props) => {
  return (
    <a
      href={props.href}
      className={`text-[0.9375rem] h-11 w-max px-8 grid place-items-center shadow-[0px_15px_15px_-10px_#FF9F8E] 
        rounded-full text-neutral-50 bg-primary font-bold hover:bg-primary-300  ${props.className ?? ""}`}
    >
      {props.children}
    </a>
  );
};
