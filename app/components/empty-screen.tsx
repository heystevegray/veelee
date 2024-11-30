import { cn } from "~/lib/utils";
import Container from "./container";

export type EmptyScreenProps = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
};

export function EmptyScreen({
  title,
  description,
  children = null,
  icon = null,
  className,
}: EmptyScreenProps) {
  return (
    <Container
      className={cn(
        "flex pt-12 md:pt-24 items-center w-full",
        children && "mb-4",
        className
      )}
    >
      <div className="flex flex-col text-center space-y-4">
        {icon ? <div className="w-full flex justify-center">{icon}</div> : null}
        <h1 className="text-3xl bg-clip-text flex flex-col justify-center items-center m-0 p-0 font-bold">
          {title ?? null}
        </h1>
        {description ? (
          <p className="leading-normal text-muted-foreground max-w-lg">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </Container>
  );
}
