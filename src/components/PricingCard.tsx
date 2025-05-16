
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  className?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  isPopular = false,
  ctaText,
  className,
}) => {
  return (
    <div
      className={cn(
        "rounded-xl border bg-card p-6 shadow-sm transition-all duration-200",
        isPopular 
          ? "border-primary/50 shadow-lg shadow-primary/10 scale-105" 
          : "hover:border-primary/30 hover:shadow-md",
        className
      )}
    >
      {isPopular && (
        <div className="absolute -top-3 left-0 right-0 mx-auto w-fit px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
          Most Popular
        </div>
      )}
      
      <div className="mb-5">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="mt-3 mb-2">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "Free" && <span className="text-muted-foreground"> /month</span>}
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
      
      <div className="space-y-3">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center">
            <Check className="h-4 w-4 mr-2 text-primary shrink-0" />
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
      
      <Button 
        className={cn("w-full mt-6", isPopular ? "bg-primary" : "bg-secondary hover:bg-secondary/90")}
      >
        {ctaText}
      </Button>
    </div>
  );
};

export default PricingCard;
