import { FC, PropsWithChildren } from "react";

interface TypographyProps extends PropsWithChildren {}

export const TypographyH1 = ({ children }: TypographyProps) => {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
};

export const TypographyH2 = ({ children }: TypographyProps) => {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
};

export const TypographyH3 = ({ children }: TypographyProps) => {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
};

export const TypographyH4 = ({ children }: TypographyProps) => {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  );
};

export const TypographyLead = ({ children }: TypographyProps) => {
  return <p className="text-xl text-muted-foreground">{children}</p>;
};

export const TypographySmall = ({ children }: TypographyProps) => {
  return <small className="text-sm font-medium leading-none">{children}</small>;
};

export const TypographyMuted = ({ children }: TypographyProps) => {
  return <p className="text-sm text-muted-foreground">{children}</p>;
};
