import { CalendarStaff } from '../../models/calendar-viewer/calendar-staff.model';
import { CalendarSidebarItem } from 'app/features/models/calendar-viewer/sidebar-icons.model';
import { CalendarBooking } from 'app/features/models/calendar-viewer/calendar-booking.model';

const CalendarStaffList: Array<CalendarStaff> = [
    {
        id: 1,
        avatar: '/assets/images/features/staff/thu-trang.png',
        name: 'Thu Trang',
        title: 'Features.DemoBooking.Content.Type.Barber'
    },
    {
        id: 2,
        avatar: '/assets/images/features/staff/huyen-my.png',
        name: 'Huyền My',
        title: 'Features.DemoBooking.Content.Type.HairStylist'
    },
    {
        id: 3,
        avatar: '/assets/images/features/staff/thu-thao.png',
        name: 'Thu Thảo',
        title: 'Features.DemoBooking.Content.Type.HairStylist'
    },
    {
        id: 4,
        avatar: '/assets/images/features/staff/thanh-tung.png',
        name: 'Thanh Tùng',
        title: 'Features.DemoBooking.Content.Type.HairStylist'
    },
    {
        id: 5,
        avatar: '/assets/images/features/staff/jkim-nguyen.png',
        name: 'JKim Nguyễn',
        title: 'Features.DemoBooking.Content.Type.HairStylist'
    }
];
const YogaStaffList: Array<CalendarStaff> = [
    {
        id: 1,
        avatar: '/assets/images/features/staff/yoga/linh-do.png',
        name: 'Linh Đỗ',
        title: 'Features.DemoBooking.Content.Type.Class'
    },
    {
        id: 2,
        avatar: '/assets/images/features/staff/yoga/trung-kien.png',
        name: 'Trung Kiên',
        title: 'Features.DemoBooking.Content.Type.Class'
    },
    {
        id: 3,
        avatar: '/assets/images/features/staff/yoga/hong-hanh.png',
        name: 'Hồng Hạnh',
        title: 'Features.DemoBooking.Content.Type.Class'
    },
    {
        id: 4,
        avatar: '/assets/images/features/staff/yoga/minh-hang.png',
        name: 'Minh Hằng',
        title: 'Features.DemoBooking.Content.Type.Class'
    },
    {
        id: 5,
        avatar: '/assets/images/features/staff/yoga/uyen-linh.png',
        name: 'Uyên Linh',
        title: 'Features.DemoBooking.Content.Type.Class'
    }
];

const CalendarStaffListType: { [key: string]: Array<CalendarStaff> } = {
    salon: CalendarStaffList,
    yoga: YogaStaffList
};

const ServiceBookingsColor: { [key: string]: string } = {
    haircut: '#A7DFF8',
    sampo_blow: '#F6C177',
    shampoo_style: '#F2A4BE',
    massage: '#88D5CD',
    haircutwomen: '#F2A4BE',
    twisting: '#A7DFF8',
    vinyasa: '#F6C177',
    hatha_flow: '#F2A4BE',
    morning_flow: '#88D5CD',
    yoga_santulan: '#F2A4BE',
    dynamic_flow: '#d65c5c',
    power_vinyasa: '#e079d9',
    hip_opening: '#50edda'
};

const CalendarDefaultBookings: Array<CalendarBooking> = [
    {
        id: 1,
        timePeriod: '8:30 - 10:00',
        serviceName: 'Features.DemoBooking.Service.HairCut',
        staffName: 'Thu Trang',
        type: 'haircut',
        styles: {
            top: '48px',
            left: 'calc(200% + 4px)',
            height: '128px',
            background: ServiceBookingsColor.haircut,
            zIndex: 5,
            animationTop: '0'
        },
        isOpacity: false,
        isNew: false
    },
    {
        id: 2,
        timePeriod: '11:00 - 12:00',
        serviceName: 'Features.DemoBooking.Service.ShampooBlow',
        type: 'sampo_blow',
        staffName: 'Huyền My',
        styles: {
            top: '273px',
            left: 'calc(100% + 4px)',
            height: '83px',
            background: ServiceBookingsColor.sampo_blow,
            zIndex: 5,
            animationTop: '0'
        },
        isOpacity: false,
        isNew: false
    },
    {
        id: 3,
        timePeriod: '12:30 - 14:00',
        serviceName: 'Features.DemoBooking.Service.ShampooStyle',
        staffName: 'Jkim Nguyen',
        type: 'shampoo_style',
        styles: {
            top: '408px',
            left: 'calc(100% + 4px)',
            height: '128px',
            background: ServiceBookingsColor.shampoo_style,
            zIndex: 5,
            animationTop: '0'
        },
        isOpacity: false,
        isNew: false
    },
    {
        id: 4,
        timePeriod: '10:00 - 11:00',
        serviceName: 'Features.DemoBooking.Service.ShampooBlow',
        type: 'sampo_blow',
        staffName: 'Thanh Tùng',
        styles: {
            top: (4 * 45 + 3) + 'px',
            left: 'calc(200% + 4px)',
            height: (2 * 45 - 7) + 'px',
            background: ServiceBookingsColor.sampo_blow,
            zIndex: 5,
            animationTop: '0'
        },
        isOpacity: false,
        isNew: false
    },
    {
        id: 5,
        timePeriod: '9:00 - 10:00',
        serviceName: 'Features.DemoBooking.Service.ShampooBlow',
        type: 'sampo_blow',
        staffName: 'Thanh Tùng',
        styles: {
            top: (2 * 45 + 3) + 'px',
            left: 'calc(300% + 4px)',
            height: (2 * 45 - 7) + 'px',
            background: ServiceBookingsColor.sampo_blow,
            zIndex: 5,
            animationTop: '0'
        },
        isOpacity: false,
        isNew: false
    },
    {
        id: 6,
        timePeriod: '11:30 - 13:00',
        serviceName: 'Features.DemoBooking.Service.Massage',
        staffName: 'Huyền My',
        type: 'massage',
        styles: {
            top: (7 * 45 + 3) + 'px',
            left: 'calc(300% + 4px)',
            height: (3 * 45 - 7) + 'px',
            background: ServiceBookingsColor.massage,
            zIndex: 5,
            animationTop: '0'
        },
        isOpacity: false,
        isNew: false
    },
    {
        id: 7,
        timePeriod: '10:00 - 11:00',
        serviceName: 'Features.DemoBooking.Service.Massage',
        type: 'massage',
        staffName: 'Huyền My',
        styles: {
            top: (4 * 45 + 3) + 'px',
            left: 'calc(400% + 4px)',
            height: (2 * 45 - 7) + 'px',
            background: ServiceBookingsColor.massage,
            zIndex: 5,
            animationTop: '0'
        },
        isOpacity: false,
        isNew: false
    },
    {
        id: 8,
        timePeriod: '11:00 - 12:30',
        serviceName: 'Features.DemoBooking.Service.ShampooStyle',
        staffName: 'Jkim Nguyen',
        type: 'shampoo_style',
        styles: {
            top: (6 * 45 + 3) + 'px',
            left: 'calc(400% + 4px)',
            height: (3 * 45 - 7) + 'px',
            background: ServiceBookingsColor.shampoo_style,
            zIndex: 5,
            animationTop: '0'
        },
        isOpacity: false,
        isNew: false
    },
    {
        id: 9,
        timePeriod: '10:00 - 11:00',
        serviceName: 'Features.DemoBooking.Service.HairCut',
        staffName: 'Thu Trang',
        type: 'haircut',
        styles: {
            top: (4 * 45 + 3) + 'px',
            left: 'calc(500% + 4px)',
            height: (2 * 45 - 7) + 'px',
            background: ServiceBookingsColor.haircut,
            zIndex: 5,
            animationTop: '0'
        },
        isOpacity: false,
        isNew: false
    }
];

const CalendarDefaultBookingsYoga: Array<CalendarBooking> = [
    {
        id: 1,
        timePeriod: '8:30 - 10:00',
        serviceName: 'Features.DemoBooking.Yoga.Services.Twisting',
        staffName: 'Linh Đỗ',
        type: 'haircut',
        styles: {
            top: '48px',
            left: 'calc(200% + 4px)',
            height: '128px',
            background: ServiceBookingsColor.haircut,
            zIndex: 5,
            animationTop: '0'
        },
        isOpacity: false,
        isNew: false
    },
    {
        id: 2,
        timePeriod: '11:00 - 12:00',
        serviceName: 'Features.DemoBooking.Yoga.Services.Vinyasa',
        type: 'sampo_blow',
        staffName: 'Trung Kiên',
        styles: {
            top: '273px',
            left: 'calc(100% + 4px)',
            height: '83px',
            background: ServiceBookingsColor.sampo_blow,
            zIndex: 5,
            animationTop: '0'
        },
        isOpacity: false,
        isNew: false
    },
    {
        id: 3,
        timePeriod: '12:30 - 14:00',
        serviceName: 'Features.DemoBooking.Yoga.Services.HathaFlow',
        staffName: 'Hồng Hạnh',
        type: 'shampoo_style',
        styles: {
            top: '408px',
            left: 'calc(100% + 4px)',
            height: '128px',
            background: ServiceBookingsColor.shampoo_style,
            zIndex: 5,
            animationTop: '0'
        },
        isOpacity: false,
        isNew: false
    },
    {
        id: 4,
        timePeriod: '10:00 - 11:00',
        serviceName: 'Features.DemoBooking.Yoga.Services.MorningFlow',
        type: 'sampo_blow',
        staffName: 'Minh Hằng',
        styles: {
            top: (4 * 45 + 3) + 'px',
            left: 'calc(200% + 4px)',
            height: (2 * 45 - 7) + 'px',
            background: ServiceBookingsColor.sampo_blow,
            zIndex: 5,
            animationTop: '0'
        },
        isOpacity: false,
        isNew: false
    },
    {
        id: 5,
        timePeriod: '9:00 - 10:00',
        serviceName: 'Features.DemoBooking.Yoga.Services.YogaSantulan',
        type: 'sampo_blow',
        staffName: 'Uyên Linh',
        styles: {
            top: (2 * 45 + 3) + 'px',
            left: 'calc(300% + 4px)',
            height: (2 * 45 - 7) + 'px',
            background: ServiceBookingsColor.sampo_blow,
            zIndex: 5,
            animationTop: '0'
        },
        isOpacity: false,
        isNew: false
    },
    {
        id: 6,
        timePeriod: '11:30 - 13:00',
        serviceName: 'Features.DemoBooking.Yoga.Services.DynamicFlow',
        staffName: 'Linh Đỗ',
        type: 'massage',
        styles: {
            top: (7 * 45 + 3) + 'px',
            left: 'calc(300% + 4px)',
            height: (3 * 45 - 7) + 'px',
            background: ServiceBookingsColor.massage,
            zIndex: 5,
            animationTop: '0'
        },
        isOpacity: false,
        isNew: false
    },
    {
        id: 7,
        timePeriod: '10:00 - 11:00',
        serviceName: 'Features.DemoBooking.Yoga.Services.PowerVinyasa',
        type: 'massage',
        staffName: 'Trung Kiên',
        styles: {
            top: (4 * 45 + 3) + 'px',
            left: 'calc(400% + 4px)',
            height: (2 * 45 - 7) + 'px',
            background: ServiceBookingsColor.massage,
            zIndex: 5,
            animationTop: '0'
        },
        isOpacity: false,
        isNew: false
    },
    {
        id: 8,
        timePeriod: '11:00 - 12:30',
        serviceName: 'Features.DemoBooking.Yoga.Services.HipOpening',
        staffName: 'Hồng Hạnh',
        type: 'shampoo_style',
        styles: {
            top: (6 * 45 + 3) + 'px',
            left: 'calc(400% + 4px)',
            height: (3 * 45 - 7) + 'px',
            background: ServiceBookingsColor.shampoo_style,
            zIndex: 5,
            animationTop: '0'
        },
        isOpacity: false,
        isNew: false
    },
    {
        id: 9,
        timePeriod: '10:00 - 11:00',
        serviceName: 'Features.DemoBooking.Yoga.Services.HathaFlow',
        staffName: 'Minh Hằng',
        type: 'haircut',
        styles: {
            top: (4 * 45 + 3) + 'px',
            left: 'calc(500% + 4px)',
            height: (2 * 45 - 7) + 'px',
            background: ServiceBookingsColor.haircut,
            zIndex: 5,
            animationTop: '0'
        },
        isOpacity: false,
        isNew: false
    }
];

const CalendarDefaultBookingsType: { [key: string]: Array<CalendarBooking> } = {
    salon: CalendarDefaultBookings,
    yoga: CalendarDefaultBookingsYoga
}

const CalendarSidebar: CalendarSidebarItem[] = [
    {
        name: 'Features.DemoBooking.Sidebar.Booking',
        icon: '/assets/images/features/sidebar-calendar/calendar.png'
    },
    {
        name: 'Features.DemoBooking.Sidebar.CheckIn',
        icon: '/assets/images/features/sidebar-calendar/check-in.png'
    },
    {
        name: 'Features.DemoBooking.Sidebar.Service',
        icon: '/assets/images/features/sidebar-calendar/service.png'
    },
    {
        name: 'Features.DemoBooking.Sidebar.Staff',
        icon: '/assets/images/features/sidebar-calendar/staff.png'
    },
    {
        name: 'Features.DemoBooking.Sidebar.ExtraFee',
        icon: '/assets/images/features/sidebar-calendar/fee.png'
    },
    {
        name: 'Features.DemoBooking.Sidebar.Product',
        icon: '/assets/images/features/sidebar-calendar/product.png'
    },
    {
        name: 'Features.DemoBooking.Sidebar.Reports',
        icon: '/assets/images/features/sidebar-calendar/report.png'
    },
    {
        name: 'Features.DemoBooking.Sidebar.Setting',
        icon: '/assets/images/features/sidebar-calendar/setting.png'
    }
];

export {
    CalendarStaffList, CalendarSidebar, CalendarDefaultBookings, ServiceBookingsColor, CalendarDefaultBookingsType,
    CalendarStaffListType
};
