import { cva, type VariantProps } from "class-variance-authority";

export const portfolioButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        hero: "bg-primary text-primary-foreground hover:bg-primary/90 portfolio-glow hover:scale-105",
        outline: "border border-border bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground portfolio-card",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        contact: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border/50 hover:border-border",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-lg px-8",
        xl: "h-12 rounded-xl px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "hero",
      size: "default",
    },
  }
);

export type PortfolioButtonVariantProps = VariantProps<typeof portfolioButtonVariants>;