import { cn } from "../utils/cn";

interface IContainerProps extends React.ComponentPropsWithoutRef<"div"> {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<IContainerProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn("max-w-[1700px] px-5 w-full mx-auto", className)}
      {...props}
    >
      {children}
    </div>
  );
};
