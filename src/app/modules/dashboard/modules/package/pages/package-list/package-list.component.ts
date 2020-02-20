import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-package-list',
    templateUrl: './package-list.component.html',
    styleUrls: ['./package-list.component.scss']
})
export class PackageListComponent implements OnInit {
    public listPackages: Array<any> = [
        {
            title: 'Free',
            description: 'Khởi đầu kinh doanh trực tuyến với trang web đặt hẹn trực tuyến riêng hoạt động liên tục 24/7',
            fee: 'Miễn phí',
            bookingNum: '20 Lượt/Tháng',
            expiredIn: '60 ngày',
            purchase: '3 lượt'
        },
        {
            title: 'Newbie',
            description: 'Sử dụng tính năng Thanh Toán Trực Tuyến để nhận ngay thanh toán khi đặt hẹn và không phải lo nghĩ về quản lý tiền mặt',
            fee: '368,000 đ',
            bookingNum: 'Theo gói đăng ký',
            expiredIn: 'Theo gói đăng ký',
            purchase: 'Không giới hạn'
        },
        {
            title: 'Biggie',
            description: 'Dễ dàng phân công quản lý lịch làm việc của nhân viên và tạo các Chiến Dịch Khuyến Mãi Trực Tuyến để thu hút Khách Hàng mới',
            fee: '828,000 đ',
            bookingNum: 'Theo gói đăng ký',
            expiredIn: 'Theo gói đăng ký',
            purchase: 'Không giới hạn'
        },
        {
            title: 'Hulk',
            description: 'Kinh Doanh Trực Tuyến cả Dịch Vụ & Sản Phẩm ngay trên trang web riêng của cửa tiệm để tăng tiện ích cho Khách Hàng & tối ưu hóa doanh thu',
            fee: '1,426,000 đ',
            bookingNum: 'Theo gói đăng ký',
            expiredIn: 'Theo gói đăng ký',
            purchase: 'Không giới hạn'
        }
    ];

    constructor() { }

    ngOnInit() {
    }

}
