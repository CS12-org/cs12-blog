import {
  Tooltip as AriaTooltip,
  type TooltipProps as AriaTooltipProps,
  OverlayArrow,
} from "react-aria-components";
import twMerge from "~/lib/tw-merge";

interface TooltipProps
  extends Omit<AriaTooltipProps, "children" | "className"> {
  className?: string;
  children: React.ReactNode;
}

function Tooltip(props: TooltipProps) {
  const { children, className, ...other } = props;

  const classes = twMerge(
    "max-w-[100px] bg-[#101120] text-[10px] font-semibold whitespace-nowrap",
    "px-2 py-1 rounded text-center transition-all duration-700 ease-in-out",
    "border-2 border-[#24273a] entering:translate-y-4 entering:opacity-0",
    "exiting:opacity-0",
    className,
  );

  return (
    <AriaTooltip {...other} className={classes}>
      <OverlayArrow>
        <svg width={8} height={8} viewBox="0 0 8 8">
          <title>Overlay Arrow</title>
          <path d="M0 0 L4 4 L8 0" />
        </svg>
      </OverlayArrow>
      {children}
    </AriaTooltip>
  );
}

export default Tooltip;
