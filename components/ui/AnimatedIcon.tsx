"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Scale,
  Briefcase,
  FileText,
  Users,
  Building2,
  Shield,
  Clock,
  ShieldAlert,
  AlertTriangle,
  Globe,
  Gavel,
  Phone,
  ArrowRight,
  UserCheck,
  Target,
  Eye,
  Award,
  Zap,
  Laptop,
  CheckCircle2
} from "lucide-react";

interface AnimatedIconProps {
  name: string;
  className?: string;
  size?: number;
  animateType?: "tilt" | "pulse" | "float" | "draw";
}

const iconMap: Record<string, React.ElementType> = {
  Scale,
  Briefcase,
  FileText,
  Users,
  Building2,
  Shield,
  Clock,
  ShieldAlert,
  AlertTriangle,
  Globe,
  Gavel,
  Phone,
  ArrowRight,
  UserCheck,
  Target,
  Eye,
  Award,
  Zap,
  Laptop,
  CheckCircle2
};

export function AnimatedIcon({
  name,
  className = "text-[#CBA653]",
  size = 24,
  animateType = "tilt"
}: AnimatedIconProps) {
  const IconComponent = iconMap[name] || Scale;

  const getAnimation = () => {
    switch (animateType) {
      case "tilt":
        return { rotate: [0, -8, 8, -4, 4, 0] };
      case "pulse":
        return { scale: 1.15 };
      case "float":
        return { y: -4 };
      case "draw":
        return { scale: 1.1, rotate: 5 };
      default:
        return { scale: 1.1 };
    }
  };

  const anim = getAnimation();

  return (
    <motion.div
      whileHover={anim}
      transition={{ duration: 0.3 }}
      className="inline-flex items-center justify-center select-none"
    >
      <IconComponent size={size} className={className} />
    </motion.div>
  );
}
