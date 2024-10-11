import { ReactNode } from 'react';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/app/components/ui/tooltip"
  
export interface TooltipCProps {
    children: ReactNode;
    content: string;
}
  
export function TooltipC({ children, content }: TooltipCProps) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent>
                    <p>{content}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export interface TooltipWrapperProps {
    children: ReactNode;
    content: string;
}
  
export function TooltipWrapper({ children, content }: TooltipWrapperProps) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                {children}
                </TooltipTrigger>
                <TooltipContent>
                <p>{content}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}