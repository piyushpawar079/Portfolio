import { Badge } from "@/components/ui/badge";

interface TechBadgeProps {
  name: string;
}

const TechBadge = ({ name }: TechBadgeProps) => {
  return (
    <Badge variant="secondary" className="px-3 py-1">
      {name}
    </Badge>
  );
};

export default TechBadge;