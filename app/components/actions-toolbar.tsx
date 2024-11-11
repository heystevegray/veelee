import { type ClassName } from "~/lib/types";
import { cn } from "~/lib/utils";
import { type PropsWithChildren } from "react";
import Container from "./container";

const ActionsToolbar = ({
  children,
  className = "",
}: PropsWithChildren & ClassName) => {
  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 z-10 flex w-full items-center justify-center border-b-2 bg-card",
        className
      )}
    >
      <Container className="pt-0 md:pt-0 md:p-4 p-2">
        <div className="relative z-50 w-full">{children}</div>
      </Container>
    </div>
  );
};

export default ActionsToolbar;
