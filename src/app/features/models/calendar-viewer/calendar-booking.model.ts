interface CalendarBookingStyle {
    top: string;
    left: string;
    height: string;
    background: string;
    zIndex: number;
    animationTop: string;
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
    at?: number;
}

export { CalendarBookingStyle, CalendarBooking };
