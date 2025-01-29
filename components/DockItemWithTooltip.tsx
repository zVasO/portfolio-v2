import { DockIcon } from "./ui/dock";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface DockItemWithTooltipProps {
  tooltipMessage: string;
  children: React.ReactNode;
}

const DockItemWithTooltip: React.FC<DockItemWithTooltipProps> = ({
  tooltipMessage,
  children,
}: DockItemWithTooltipProps) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <DockIcon>{children}</DockIcon>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltipMessage}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default DockItemWithTooltip;
