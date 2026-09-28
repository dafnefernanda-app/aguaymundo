import {
  Award,
  BadgeCheck,
  Boxes,
  ChefHat,
  Handshake,
  Headset,
  HeartHandshake,
  Leaf,
  Lightbulb,
  MapPin,
  PackageCheck,
  Scale,
  ShieldCheck,
  ShoppingBasket,
  Sparkles,
  Sprout,
  Store,
  Users,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Award,
  BadgeCheck,
  Boxes,
  ChefHat,
  Handshake,
  Headset,
  HeartHandshake,
  Leaf,
  Lightbulb,
  MapPin,
  PackageCheck,
  Scale,
  ShieldCheck,
  ShoppingBasket,
  Sparkles,
  Sprout,
  Store,
  Users,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = icons[name] ?? Leaf;
  return <Cmp className={className} aria-hidden="true" />;
}
