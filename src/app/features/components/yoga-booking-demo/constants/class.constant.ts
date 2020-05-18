import { ClassModel } from "../models/class.model";

export const Classes: Array<ClassModel> = [
    {
        timeFrom: new Date(2020, 5, 5, 8, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 9, 0, 0, 0),
        name: 'Twisting',
        type: 'twisting',
        price: 100000,
        slot: 3,
        user: {
            name: 'Linh Đỗ',
            avatar: '/assets/images/features/staff/yoga/linh-do.png',
            id: 1
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 8, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 9, 0, 0, 0),
        name: 'Vinyasa',
        type: 'vinyasa',
        price: 200000,
        slot: 5,
        user: {
            id: 2,
            name: 'Trung Kiên',
            avatar: '/assets/images/features/staff/yoga/trung-kien.png'
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 8, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 9, 30, 0, 0),
        name: 'Hatha Flow',
        type: 'hatha_flow',
        price: 300000,
        slot: 7,
        user: {
            id: 3,
            name: 'Hồng Hạnh',
            avatar: '/assets/images/features/staff/yoga/hong-hanh.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 8, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 9, 0, 0, 0),
        name: 'Morning Flow',
        type: 'morning_flow',
        price: 100000,
        slot: 7,
        user: {
            id: 4,
            name: 'Minh Hằng',
            avatar: '/assets/images/features/staff/yoga/minh-hang.png'
        },
        room: 'Natural View',
        note: 'Tác dụng tốt nhất đến hệ cơ và xương',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 8, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 9, 30, 0, 0),
        name: 'Hatha Flow',
        type: 'hatha_flow',
        price: 300000,
        slot: 7,
        user: {
            id: 3,
            name: 'Hồng Hạnh',
            avatar: '/assets/images/features/staff/yoga/hong-hanh.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 8, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 9, 30, 0, 0),
        name: 'Yoga Santulan',
        type: 'yoga_santulan',
        price: 200000,
        slot: 4,
        user: {
            id: 5,
            name: 'Uyên Linh',
            avatar: '/assets/images/features/staff/yoga/uyen-linh.png'
        },
        room: 'Natural View',
        note: 'Lớp học giúp bạn nhanh chóng giảm cân',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 9, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 10, 0, 0, 0),
        name: 'Dynamic Flow',
        type: 'dynamic_flow',
        price: 300000,
        slot: 10,
        user: {
            id: 3,
            name: 'Hồng Hạnh',
            avatar: '/assets/images/features/staff/yoga/hong-hanh.png'
        },
        room: 'Natural View',
        note: 'Đây là lớp Yoga giảm cân tuyệt vời',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 8, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 9, 30, 0, 0),
        name: 'Yoga Santulan',
        type: 'yoga_santulan',
        price: 200000,
        slot: 4,
        user: {
            name: 'Linh Đỗ',
            avatar: '/assets/images/features/staff/yoga/linh-do.png',
            id: 1
        },
        room: 'Natural View',
        note: 'Lớp học giúp bạn nhanh chóng giảm cân',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 9, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 10, 0, 0, 0),
        name: 'Dynamic Flow',
        type: 'dynamic_flow',
        price: 300000,
        slot: 10,
        user: {
            id: 3,
            name: 'Hồng Hạnh',
            avatar: '/assets/images/features/staff/yoga/hong-hanh.png'
        },
        room: 'Natural View',
        note: 'Đây là lớp Yoga giảm cân tuyệt vời',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 9, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 10, 0, 0, 0),
        name: 'Power Vinyasa',
        type: 'power_vinyasa',
        price: 100000,
        slot: 10,
        user: {
            id: 4,
            name: 'Minh Hằng',
            avatar: '/assets/images/features/staff/yoga/minh-hang.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 9, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 10, 30, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            id: 5,
            name: 'Uyên Linh',
            avatar: '/assets/images/features/staff/yoga/uyen-linh.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 9, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 10, 30, 0, 0),
        name: 'Power Vinyasa',
        type: 'power_vinyasa',
        price: 100000,
        slot: 10,
        user: {
            id: 4,
            name: 'Minh Hằng',
            avatar: '/assets/images/features/staff/yoga/minh-hang.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 10, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 11, 0, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            id: 5,
            name: 'Uyên Linh',
            avatar: '/assets/images/features/staff/yoga/uyen-linh.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 10, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 11, 0, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            name: 'Linh Đỗ',
            avatar: '/assets/images/features/staff/yoga/linh-do.png',
            id: 1
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 10, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 11, 0, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            id: 5,
            name: 'Uyên Linh',
            avatar: '/assets/images/features/staff/yoga/uyen-linh.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 10, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 11, 0, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            id: 5,
            name: 'Uyên Linh',
            avatar: '/assets/images/features/staff/yoga/uyen-linh.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 11, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 12, 0, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            name: 'Linh Đỗ',
            avatar: '/assets/images/features/staff/yoga/linh-do.png',
            id: 1
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 10, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 11, 0, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            id: 5,
            name: 'Uyên Linh',
            avatar: '/assets/images/features/staff/yoga/uyen-linh.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 11, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 12, 0, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            id: 5,
            name: 'Uyên Linh',
            avatar: '/assets/images/features/staff/yoga/uyen-linh.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 10, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 11, 0, 0, 0),
        name: 'Vinyasa',
        type: 'vinyasa',
        price: 300000,
        slot: 2,
        user: {
            id: 2,
            name: 'Trung Kiên',
            avatar: '/assets/images/features/staff/yoga/trung-kien.png'
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 11, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 12, 0, 0, 0),
        name: 'Power Vinyasa',
        type: 'power_vinyasa',
        price: 100000,
        slot: 10,
        user: {
            id: 4,
            name: 'Minh Hằng',
            avatar: '/assets/images/features/staff/yoga/minh-hang.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 11, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 12, 0, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            name: 'Linh Đỗ',
            avatar: '/assets/images/features/staff/yoga/linh-do.png',
            id: 1
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 11, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 12, 0, 0, 0),
        name: 'Hatha Flow',
        type: 'hatha_flow',
        price: 300000,
        slot: 2,
        user: {
            id: 2,
            name: 'Trung Kiên',
            avatar: '/assets/images/features/staff/yoga/trung-kien.png'
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 11, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 12, 0, 0, 0),
        name: 'Vinyasa',
        type: 'vinyasa',
        price: 300000,
        slot: 2,
        user: {
            id: 2,
            name: 'Trung Kiên',
            avatar: '/assets/images/features/staff/yoga/trung-kien.png'
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },

    {
        timeFrom: new Date(2020, 5, 5, 12, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 13, 0, 0, 0),
        name: 'Power Vinyasa',
        type: 'power_vinyasa',
        price: 100000,
        slot: 10,
        user: {
            id: 4,
            name: 'Minh Hằng',
            avatar: '/assets/images/features/staff/yoga/minh-hang.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 12, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 13, 0, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            id: 5,
            name: 'Uyên Linh',
            avatar: '/assets/images/features/staff/yoga/uyen-linh.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 12, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 13, 0, 0, 0),
        name: 'Vinyasa',
        type: 'vinyasa',
        price: 300000,
        slot: 2,
        user: {
            id: 2,
            name: 'Trung Kiên',
            avatar: '/assets/images/features/staff/yoga/trung-kien.png'
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 12, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 13, 0, 0, 0),
        name: 'Hatha Flow',
        type: 'hatha_flow',
        price: 500000,
        slot: 2,
        user: {
            name: 'Linh Đỗ',
            avatar: '/assets/images/features/staff/yoga/linh-do.png',
            id: 1
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 12, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 13, 0, 0, 0),
        name: 'Vinyasa',
        type: 'vinyasa',
        price: 350000,
        slot: 2,
        user: {
            id: 2,
            name: 'Trung Kiên',
            avatar: '/assets/images/features/staff/yoga/trung-kien.png'
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 12, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 13, 0, 0, 0),
        name: 'Vinyasa',
        type: 'vinyasa',
        price: 350000,
        slot: 2,
        user: {
            id: 2,
            name: 'Trung Kiên',
            avatar: '/assets/images/features/staff/yoga/trung-kien.png'
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },

    // step2
    {
        timeFrom: new Date(2020, 5, 5, 8, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 9, 0, 0, 0),
        name: 'Twisting',
        type: 'twisting',
        price: 100000,
        slot: 3,
        user: {
            name: 'Linh Đỗ',
            avatar: '/assets/images/features/staff/yoga/linh-do.png',
            id: 1
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 8, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 9, 0, 0, 0),
        name: 'Hatha Flow',
        type: 'hatha_flow',
        price: 200000,
        slot: 5,
        user: {
            id: 2,
            name: 'Trung Kiên',
            avatar: '/assets/images/features/staff/yoga/trung-kien.png'
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 8, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 9, 0, 0, 0),
        name: 'Hatha Flow',
        type: 'hatha_flow',
        price: 300000,
        slot: 7,
        user: {
            id: 3,
            name: 'Hồng Hạnh',
            avatar: '/assets/images/features/staff/yoga/hong-hanh.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 8, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 9, 0, 0, 0),
        name: 'Morning Flow',
        type: 'morning_flow',
        price: 100000,
        slot: 7,
        user: {
            id: 4,
            name: 'Minh Hằng',
            avatar: '/assets/images/features/staff/yoga/minh-hang.png'
        },
        room: 'Natural View',
        note: 'Tác dụng tốt nhất đến hệ cơ và xương',
        studio: 1
    },

    {
        timeFrom: new Date(2020, 5, 5, 8, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 9, 30, 0, 0),
        name: 'Dynamic Flow',
        type: 'dynamic_flow',
        price: 300000,
        slot: 10,
        user: {
            id: 3,
            name: 'Hồng Hạnh',
            avatar: '/assets/images/features/staff/yoga/hong-hanh.png'
        },
        room: 'Natural View',
        note: 'Đây là lớp Yoga giảm cân tuyệt vời',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 9, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 10, 0, 0, 0),
        name: 'Yoga Santulan',
        type: 'yoga_santulan',
        price: 200000,
        slot: 4,
        user: {
            id: 5,
            name: 'Uyên Linh',
            avatar: '/assets/images/features/staff/yoga/uyen-linh.png'
        },
        room: 'Natural View',
        note: 'Lớp học giúp bạn nhanh chóng giảm cân',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 8, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 9, 0, 0, 0),
        name: 'Dynamic Flow',
        type: 'dynamic_flow',
        price: 300000,
        slot: 10,
        user: {
            id: 3,
            name: 'Hồng Hạnh',
            avatar: '/assets/images/features/staff/yoga/hong-hanh.png'
        },
        room: 'Natural View',
        note: 'Đây là lớp Yoga giảm cân tuyệt vời',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 9, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 10, 0, 0, 0),
        name: 'Yoga Santulan',
        type: 'yoga_santulan',
        price: 200000,
        slot: 4,
        user: {
            name: 'Linh Đỗ',
            avatar: '/assets/images/features/staff/yoga/linh-do.png',
            id: 1
        },
        room: 'Natural View',
        note: 'Lớp học giúp bạn nhanh chóng giảm cân',
        studio: 1
    },

    {
        timeFrom: new Date(2020, 5, 5, 9, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 10, 30, 0, 0),
        name: 'Power Vinyasa',
        type: 'power_vinyasa',
        price: 100000,
        slot: 10,
        user: {
            id: 4,
            name: 'Minh Hằng',
            avatar: '/assets/images/features/staff/yoga/minh-hang.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 9, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 10, 0, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            id: 5,
            name: 'Uyên Linh',
            avatar: '/assets/images/features/staff/yoga/uyen-linh.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 9, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 10, 0, 0, 0),
        name: 'Vinyasa',
        type: 'twisting',
        price: 300000,
        slot: 2,
        user: {
            id: 2,
            name: 'Trung Kiên',
            avatar: '/assets/images/features/staff/yoga/trung-kien.png'
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 9, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 10, 0, 0, 0),
        name: 'Power Vinyasa',
        type: 'power_vinyasa',
        price: 100000,
        slot: 10,
        user: {
            id: 4,
            name: 'Minh Hằng',
            avatar: '/assets/images/features/staff/yoga/minh-hang.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },

    {
        timeFrom: new Date(2020, 5, 5, 10, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 11, 0, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            id: 5,
            name: 'Uyên Linh',
            avatar: '/assets/images/features/staff/yoga/uyen-linh.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 9, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 10, 0, 0, 0),
        name: 'Vinyasa',
        type: 'twisting',
        price: 300000,
        slot: 2,
        user: {
            id: 2,
            name: 'Trung Kiên',
            avatar: '/assets/images/features/staff/yoga/trung-kien.png'
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 10, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 11, 0, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            name: 'Linh Đỗ',
            avatar: '/assets/images/features/staff/yoga/linh-do.png',
            id: 1
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 10, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 11, 0, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            id: 5,
            name: 'Uyên Linh',
            avatar: '/assets/images/features/staff/yoga/uyen-linh.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 10, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 11, 0, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            id: 5,
            name: 'Uyên Linh',
            avatar: '/assets/images/features/staff/yoga/uyen-linh.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 11, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 12, 0, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            name: 'Linh Đỗ',
            avatar: '/assets/images/features/staff/yoga/linh-do.png',
            id: 1
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 10, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 11, 0, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            id: 5,
            name: 'Uyên Linh',
            avatar: '/assets/images/features/staff/yoga/uyen-linh.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 11, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 12, 0, 0, 0),
        name: 'Vinyasa',
        type: 'twisting',
        price: 300000,
        slot: 2,
        user: {
            name: 'Linh Đỗ',
            avatar: '/assets/images/features/staff/yoga/linh-do.png',
            id: 1
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 11, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 12, 0, 0, 0),
        name: 'Power Vinyasa',
        type: 'power_vinyasa',
        price: 100000,
        slot: 10,
        user: {
            id: 4,
            name: 'Minh Hằng',
            avatar: '/assets/images/features/staff/yoga/minh-hang.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 11, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 12, 0, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            id: 5,
            name: 'Uyên Linh',
            avatar: '/assets/images/features/staff/yoga/uyen-linh.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 11, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 12, 0, 0, 0),
        name: 'Vinyasa',
        type: 'vinyasa',
        price: 300000,
        slot: 2,
        user: {
            id: 2,
            name: 'Trung Kiên',
            avatar: '/assets/images/features/staff/yoga/trung-kien.png'
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 11, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 12, 0, 0, 0),
        name: 'Vinyasa',
        type: 'vinyasa',
        price: 300000,
        slot: 2,
        user: {
            id: 2,
            name: 'Trung Kiên',
            avatar: '/assets/images/features/staff/yoga/trung-kien.png'
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },

    {
        timeFrom: new Date(2020, 5, 5, 11, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 12, 0, 0, 0),
        name: 'Hatha Flow',
        type: 'hatha_flow',
        price: 300000,
        slot: 2,
        user: {
            id: 2,
            name: 'Trung Kiên',
            avatar: '/assets/images/features/staff/yoga/trung-kien.png'
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 12, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 13, 0, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            name: 'Linh Đỗ',
            avatar: '/assets/images/features/staff/yoga/linh-do.png',
            id: 1
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 11, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 12, 0, 0, 0),
        name: 'Vinyasa',
        type: 'vinyasa',
        price: 300000,
        slot: 2,
        user: {
            name: 'Linh Đỗ',
            avatar: '/assets/images/features/staff/yoga/linh-do.png',
            id: 1
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 12, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 13, 0, 0, 0),
        name: 'Vinyasa',
        type: 'vinyasa',
        price: 500000,
        slot: 2,
        user: {
            id: 2,
            name: 'Trung Kiên',
            avatar: '/assets/images/features/staff/yoga/trung-kien.png'
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 12, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 13, 0, 0, 0),
        name: 'Hatha Flow',
        type: 'hatha_flow',
        price: 350000,
        slot: 2,
        user: {
            id: 2,
            name: 'Trung Kiên',
            avatar: '/assets/images/features/staff/yoga/trung-kien.png'
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 12, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 13, 0, 0, 0),
        name: 'Vinyasa',
        type: 'vinyasa',
        price: 350000,
        slot: 2,
        user: {
            id: 2,
            name: 'Trung Kiên',
            avatar: '/assets/images/features/staff/yoga/trung-kien.png'
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },

    // step3
    {
        timeFrom: new Date(2020, 5, 5, 8, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 9, 30, 0, 0),
        name: 'Twisting',
        type: 'twisting',
        price: 100000,
        slot: 3,
        user: {
            name: 'Linh Đỗ',
            avatar: '/assets/images/features/staff/yoga/linh-do.png',
            id: 1
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 8, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 9, 30, 0, 0),
        name: 'Vinyasa',
        type: 'vinyasa',
        price: 200000,
        slot: 5,
        user: {
            id: 2,
            name: 'Trung Kiên',
            avatar: '/assets/images/features/staff/yoga/trung-kien.png'
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 8, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 9, 30, 0, 0),
        name: 'Hatha Flow',
        type: 'hatha_flow',
        price: 300000,
        slot: 7,
        user: {
            id: 3,
            name: 'Hồng Hạnh',
            avatar: '/assets/images/features/staff/yoga/hong-hanh.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 8, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 9, 30, 0, 0),
        name: 'Morning Flow',
        type: 'morning_flow',
        price: 100000,
        slot: 7,
        user: {
            id: 4,
            name: 'Minh Hằng',
            avatar: '/assets/images/features/staff/yoga/minh-hang.png'
        },
        room: 'Natural View',
        note: 'Tác dụng tốt nhất đến hệ cơ và xương',
        studio: 1
    },

    {
        timeFrom: new Date(2020, 5, 5, 8, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 9, 30, 0, 0),
        name: 'Dynamic Flow',
        type: 'dynamic_flow',
        price: 300000,
        slot: 10,
        user: {
            id: 3,
            name: 'Hồng Hạnh',
            avatar: '/assets/images/features/staff/yoga/hong-hanh.png'
        },
        room: 'Natural View',
        note: 'Đây là lớp Yoga giảm cân tuyệt vời',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 9, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 10, 30, 0, 0),
        name: 'Yoga Santulan',
        type: 'yoga_santulan',
        price: 200000,
        slot: 4,
        user: {
            id: 5,
            name: 'Uyên Linh',
            avatar: '/assets/images/features/staff/yoga/uyen-linh.png'
        },
        room: 'Natural View',
        note: 'Lớp học giúp bạn nhanh chóng giảm cân',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 8, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 9, 30, 0, 0),
        name: 'Dynamic Flow',
        type: 'dynamic_flow',
        price: 300000,
        slot: 10,
        user: {
            id: 3,
            name: 'Hồng Hạnh',
            avatar: '/assets/images/features/staff/yoga/hong-hanh.png'
        },
        room: 'Natural View',
        note: 'Đây là lớp Yoga giảm cân tuyệt vời',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 9, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 10, 30, 0, 0),
        name: 'Yoga Santulan',
        type: 'yoga_santulan',
        price: 200000,
        slot: 4,
        user: {
            id: 5,
            name: 'Uyên Linh',
            avatar: '/assets/images/features/staff/yoga/uyen-linh.png'
        },
        room: 'Natural View',
        note: 'Lớp học giúp bạn nhanh chóng giảm cân',
        studio: 1
    },

    {
        timeFrom: new Date(2020, 5, 5, 9, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 10, 30, 0, 0),
        name: 'Power Vinyasa',
        type: 'power_vinyasa',
        price: 100000,
        slot: 10,
        user: {
            id: 4,
            name: 'Minh Hằng',
            avatar: '/assets/images/features/staff/yoga/minh-hang.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 9, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 10, 30, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            name: 'Linh Đỗ',
            avatar: '/assets/images/features/staff/yoga/linh-do.png',
            id: 1
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 9, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 10, 30, 0, 0),
        name: 'Vinyasa',
        type: 'twisting',
        price: 300000,
        slot: 2,
        user: {
            name: 'Linh Đỗ',
            avatar: '/assets/images/features/staff/yoga/linh-do.png',
            id: 1
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 9, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 10, 30, 0, 0),
        name: 'Power Vinyasa',
        type: 'power_vinyasa',
        price: 100000,
        slot: 10,
        user: {
            id: 4,
            name: 'Minh Hằng',
            avatar: '/assets/images/features/staff/yoga/minh-hang.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },

    {
        timeFrom: new Date(2020, 5, 5, 10, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 11, 30, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            id: 5,
            name: 'Uyên Linh',
            avatar: '/assets/images/features/staff/yoga/uyen-linh.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 9, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 10, 30, 0, 0),
        name: 'Vinyasa',
        type: 'twisting',
        price: 300000,
        slot: 2,
        user: {
            id: 2,
            name: 'Trung Kiên',
            avatar: '/assets/images/features/staff/yoga/trung-kien.png'
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 10, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 11, 30, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            id: 5,
            name: 'Uyên Linh',
            avatar: '/assets/images/features/staff/yoga/uyen-linh.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 10, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 11, 30, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            name: 'Linh Đỗ',
            avatar: '/assets/images/features/staff/yoga/linh-do.png',
            id: 1
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 10, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 11, 30, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            id: 5,
            name: 'Uyên Linh',
            avatar: '/assets/images/features/staff/yoga/uyen-linh.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 11, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 12, 30, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            id: 5,
            name: 'Uyên Linh',
            avatar: '/assets/images/features/staff/yoga/uyen-linh.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 10, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 11, 30, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            name: 'Linh Đỗ',
            avatar: '/assets/images/features/staff/yoga/linh-do.png',
            id: 1
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 11, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 12, 30, 0, 0),
        name: 'Vinyasa',
        type: 'twisting',
        price: 300000,
        slot: 2,
        user: {
            id: 2,
            name: 'Trung Kiên',
            avatar: '/assets/images/features/staff/yoga/trung-kien.png'
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 11, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 12, 30, 0, 0),
        name: 'Power Vinyasa',
        type: 'power_vinyasa',
        price: 100000,
        slot: 10,
        user: {
            id: 4,
            name: 'Minh Hằng',
            avatar: '/assets/images/features/staff/yoga/minh-hang.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 11, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 12, 30, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            id: 5,
            name: 'Uyên Linh',
            avatar: '/assets/images/features/staff/yoga/uyen-linh.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 11, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 12, 30, 0, 0),
        name: 'Hatha Flow',
        type: 'hatha_flow',
        price: 300000,
        slot: 2,
        user: {
            id: 2,
            name: 'Trung Kiên',
            avatar: '/assets/images/features/staff/yoga/trung-kien.png'
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 11, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 12, 0, 0, 0),
        name: 'Vinyasa',
        type: 'vinyasa',
        price: 300000,
        slot: 2,
        user: {
            name: 'Linh Đỗ',
            avatar: '/assets/images/features/staff/yoga/linh-do.png',
            id: 1
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },

    {
        timeFrom: new Date(2020, 5, 5, 11, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 12, 0, 0, 0),
        name: 'Vinyasa',
        type: 'vinyasa',
        price: 300000,
        slot: 2,
        user: {
            id: 2,
            name: 'Trung Kiên',
            avatar: '/assets/images/features/staff/yoga/trung-kien.png'
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 12, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 13, 0, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            id: 5,
            name: 'Uyên Linh',
            avatar: '/assets/images/features/staff/yoga/uyen-linh.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 11, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 12, 0, 0, 0),
        name: 'Hatha Flow',
        type: 'hatha_flow',
        price: 300000,
        slot: 2,
        user: {
            id: 2,
            name: 'Trung Kiên',
            avatar: '/assets/images/features/staff/yoga/trung-kien.png'
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 12, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 13, 0, 0, 0),
        name: 'Vinyasa',
        type: 'vinyasa',
        price: 500000,
        slot: 2,
        user: {
            id: 2,
            name: 'Trung Kiên',
            avatar: '/assets/images/features/staff/yoga/trung-kien.png'
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 11, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 12, 30, 0, 0),
        name: 'Vinyasa',
        type: 'vinyasa',
        price: 350000,
        slot: 2,
        user: {
            name: 'Linh Đỗ',
            avatar: '/assets/images/features/staff/yoga/linh-do.png',
            id: 1
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 11, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 12, 30, 0, 0),
        name: 'Hatha Flow',
        type: 'hatha_flow',
        price: 350000,
        slot: 2,
        user: {
            id: 2,
            name: 'Trung Kiên',
            avatar: '/assets/images/features/staff/yoga/trung-kien.png'
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },

    // step4
    {
        timeFrom: new Date(2020, 5, 5, 8, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 9, 30, 0, 0),
        name: 'Twisting',
        type: 'twisting',
        price: 100000,
        slot: 3,
        user: {
            name: 'Linh Đỗ',
            avatar: '/assets/images/features/staff/yoga/linh-do.png',
            id: 1
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 8, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 9, 30, 0, 0),
        name: 'Vinyasa',
        type: 'vinyasa',
        price: 200000,
        slot: 5,
        user: {
            id: 2,
            name: 'Trung Kiên',
            avatar: '/assets/images/features/staff/yoga/trung-kien.png'
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 8, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 9, 30, 0, 0),
        name: 'Hatha Flow',
        type: 'hatha_flow',
        price: 300000,
        slot: 7,
        user: {
            id: 3,
            name: 'Hồng Hạnh',
            avatar: '/assets/images/features/staff/yoga/hong-hanh.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 8, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 9, 30, 0, 0),
        name: 'Morning Flow',
        type: 'morning_flow',
        price: 100000,
        slot: 7,
        user: {
            id: 4,
            name: 'Minh Hằng',
            avatar: '/assets/images/features/staff/yoga/minh-hang.png'
        },
        room: 'Natural View',
        note: 'Tác dụng tốt nhất đến hệ cơ và xương',
        studio: 1
    },

    {
        timeFrom: new Date(2020, 5, 5, 8, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 9, 30, 0, 0),
        name: 'Dynamic Flow',
        type: 'dynamic_flow',
        price: 300000,
        slot: 10,
        user: {
            id: 3,
            name: 'Hồng Hạnh',
            avatar: '/assets/images/features/staff/yoga/hong-hanh.png'
        },
        room: 'Natural View',
        note: 'Đây là lớp Yoga giảm cân tuyệt vời',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 9, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 10, 30, 0, 0),
        name: 'Yoga Santulan',
        type: 'yoga_santulan',
        price: 200000,
        slot: 4,
        user: {
            name: 'Linh Đỗ',
            avatar: '/assets/images/features/staff/yoga/linh-do.png',
            id: 1
        },
        room: 'Natural View',
        note: 'Lớp học giúp bạn nhanh chóng giảm cân',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 8, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 9, 30, 0, 0),
        name: 'Dynamic Flow',
        type: 'dynamic_flow',
        price: 300000,
        slot: 10,
        user: {
            id: 3,
            name: 'Hồng Hạnh',
            avatar: '/assets/images/features/staff/yoga/hong-hanh.png'
        },
        room: 'Natural View',
        note: 'Đây là lớp Yoga giảm cân tuyệt vời',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 9, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 10, 30, 0, 0),
        name: 'Yoga Santulan',
        type: 'yoga_santulan',
        price: 200000,
        slot: 4,
        user: {
            id: 5,
            name: 'Uyên Linh',
            avatar: '/assets/images/features/staff/yoga/uyen-linh.png'
        },
        room: 'Natural View',
        note: 'Lớp học giúp bạn nhanh chóng giảm cân',
        studio: 1
    },

    {
        timeFrom: new Date(2020, 5, 5, 9, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 10, 30, 0, 0),
        name: 'Power Vinyasa',
        type: 'power_vinyasa',
        price: 100000,
        slot: 10,
        user: {
            id: 4,
            name: 'Minh Hằng',
            avatar: '/assets/images/features/staff/yoga/minh-hang.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 9, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 10, 30, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            id: 5,
            name: 'Uyên Linh',
            avatar: '/assets/images/features/staff/yoga/uyen-linh.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 9, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 10, 30, 0, 0),
        name: 'Vinyasa',
        type: 'twisting',
        price: 300000,
        slot: 2,
        user: {
            id: 2,
            name: 'Trung Kiên',
            avatar: '/assets/images/features/staff/yoga/trung-kien.png'
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 9, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 10, 30, 0, 0),
        name: 'Power Vinyasa',
        type: 'power_vinyasa',
        price: 100000,
        slot: 10,
        user: {
            id: 4,
            name: 'Minh Hằng',
            avatar: '/assets/images/features/staff/yoga/minh-hang.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },

    {
        timeFrom: new Date(2020, 5, 5, 10, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 11, 30, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            name: 'Linh Đỗ',
            avatar: '/assets/images/features/staff/yoga/linh-do.png',
            id: 1
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 9, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 10, 30, 0, 0),
        name: 'Vinyasa',
        type: 'twisting',
        price: 300000,
        slot: 2,
        user: {
            name: 'Linh Đỗ',
            avatar: '/assets/images/features/staff/yoga/linh-do.png',
            id: 1
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 10, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 11, 30, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            id: 5,
            name: 'Uyên Linh',
            avatar: '/assets/images/features/staff/yoga/uyen-linh.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 10, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 11, 30, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            id: 5,
            name: 'Uyên Linh',
            avatar: '/assets/images/features/staff/yoga/uyen-linh.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 10, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 11, 30, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            name: 'Linh Đỗ',
            avatar: '/assets/images/features/staff/yoga/linh-do.png',
            id: 1
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 11, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 12, 30, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            id: 5,
            name: 'Uyên Linh',
            avatar: '/assets/images/features/staff/yoga/uyen-linh.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 10, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 11, 30, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            id: 5,
            name: 'Uyên Linh',
            avatar: '/assets/images/features/staff/yoga/uyen-linh.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 11, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 12, 30, 0, 0),
        name: 'Vinyasa',
        type: 'twisting',
        price: 300000,
        slot: 2,
        user: {
            id: 2,
            name: 'Trung Kiên',
            avatar: '/assets/images/features/staff/yoga/trung-kien.png'
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 11, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 12, 30, 0, 0),
        name: 'Power Vinyasa',
        type: 'power_vinyasa',
        price: 100000,
        slot: 10,
        user: {
            id: 4,
            name: 'Minh Hằng',
            avatar: '/assets/images/features/staff/yoga/minh-hang.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 11, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 12, 30, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            name: 'Linh Đỗ',
            avatar: '/assets/images/features/staff/yoga/linh-do.png',
            id: 1
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 11, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 12, 30, 0, 0),
        name: 'Vinyasa',
        type: 'vinyasa',
        price: 300000,
        slot: 2,
        user: {
            id: 2,
            name: 'Trung Kiên',
            avatar: '/assets/images/features/staff/yoga/trung-kien.png'
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 11, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 12, 30, 0, 0),
        name: 'Hatha Flow',
        type: 'hatha_flow',
        price: 300000,
        slot: 2,
        user: {
            id: 2,
            name: 'Trung Kiên',
            avatar: '/assets/images/features/staff/yoga/trung-kien.png'
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },

    {
        timeFrom: new Date(2020, 5, 5, 11, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 12, 30, 0, 0),
        name: 'Vinyasa',
        type: 'vinyasa',
        price: 300000,
        slot: 2,
        user: {
            name: 'Linh Đỗ',
            avatar: '/assets/images/features/staff/yoga/linh-do.png',
            id: 1
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 12, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 13, 0, 0, 0),
        name: 'Hip Opening',
        type: 'hip_opening',
        price: 200000,
        slot: 6,
        user: {
            id: 5,
            name: 'Uyên Linh',
            avatar: '/assets/images/features/staff/yoga/uyen-linh.png'
        },
        room: 'Natural View',
        note: 'Tư thế Yoga nhẹ nhàng và đơn giản',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 11, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 12, 30, 0, 0),
        name: 'Vinyasa',
        type: 'vinyasa',
        price: 300000,
        slot: 2,
        user: {
            id: 2,
            name: 'Trung Kiên',
            avatar: '/assets/images/features/staff/yoga/trung-kien.png'
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 12, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 13, 0, 0, 0),
        name: 'Hatha Flow',
        type: 'hatha_flow',
        price: 500000,
        slot: 2,
        user: {
            id: 2,
            name: 'Trung Kiên',
            avatar: '/assets/images/features/staff/yoga/trung-kien.png'
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 11, 30, 0, 0),
        timeTo: new Date(2020, 5, 5, 12, 30, 0, 0),
        name: 'Vinyasa',
        type: 'vinyasa',
        price: 350000,
        slot: 2,
        user: {
            id: 2,
            name: 'Trung Kiên',
            avatar: '/assets/images/features/staff/yoga/trung-kien.png'
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    },
    {
        timeFrom: new Date(2020, 5, 5, 12, 0, 0, 0),
        timeTo: new Date(2020, 5, 5, 13, 0, 0, 0),
        name: 'Vinyasa',
        type: 'vinyasa',
        price: 350000,
        slot: 2,
        user: {
            name: 'Linh Đỗ',
            avatar: '/assets/images/features/staff/yoga/linh-do.png',
            id: 1
        },
        room: 'Ocean View',
        note: 'Một chuỗi những động tác liên tục',
        studio: 1
    }
]