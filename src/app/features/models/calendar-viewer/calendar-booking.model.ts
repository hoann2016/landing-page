interface CalendarBookingStyle {
    top: string;
    left: string;
    height: string
    background: string;
    zIndex: number;
}

interface CalendarBooking  {
    id: number;
    timePeriod: string;
    serviceName: string;
    staffName: string;
    styles: CalendarBookingStyle;
    type?: string;
    isOpacity: boolean;
    isNew: boolean;
}

export { CalendarBookingStyle, CalendarBooking };
