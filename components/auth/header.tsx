import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"]
});

interface HeaderProps {
    label: string;
}

export const Header = ({label}: HeaderProps) => {
    return(
        <div className="flex flex-col items-center justify-center w-full space-y-4">
            <h1 className={cn("text-3xl font-semibold", font.className)}>
                🔐 Auth
            </h1>
            <p className="text-muted-foreground text-sm">
                {label}
            </p>
        </div>
    )
}