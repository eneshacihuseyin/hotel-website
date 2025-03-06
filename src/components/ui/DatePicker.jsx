import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from "@/components/ui/dropdown-menu.jsx";

export default function DatePicker({placeholder,className,locale}) {
    const [date, setDate] = React.useState()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-[15vw] justify-start text-left font-normal",
                        !date && "text-muted-foreground",className
                    )}
                >
                    <CalendarIcon />
                    {date ? format(date, "PPP") : <span>{placeholder}</span>}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    locale={locale}
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                />
            </DropdownMenuContent>
        </DropdownMenu>
    )
}