import { Service, Project, CoreValue } from './types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'system-me-substation',
    title: 'Hệ thống Cơ điện & Trạm Biến áp',
    shortDesc: 'Tư vấn, thiết kế và thi công hệ thống điện nước, điện lạnh, thông gió, trạm biến áp, màn hình LED cao nâng quy chuẩn công nghiệp.',
    fullDesc: 'Tại TVC, chúng tôi cung cấp giải pháp tổng thể: Thiết kế, thi công điện nước, điện lạnh, thông gió và tích hợp hệ thống nghe nhìn thông minh, trạm biến áp cho mọi nhà xưởng và công trình đảm bảo tiêu chuẩn kỹ thuật và an toàn cao nhất.',
    features: [
      'Tư vấn, thiết kế và thi công hệ thống điện nước',
      'Tư vấn, thiết kế và thi công trạm biến áp trung thế, hạ thế, Kiosk, giàn treo...',
      'Tư vấn, thiết kế và thi công hệ thống Màn Hình LED, hệ thống Truyền hình Hội nghị',
      'Hệ thống điện lạnh, điều hòa không khí & cấp thoát gió tiêu chuẩn',
      'Hệ thống tủ điện động lực chính MSB, điều khiển tự động an toàn cao',
      'Bảo hành bảo trì hệ thống Cơ điện tòa nhà chuyên nghiệp 24/7'
    ],
    iconName: 'Zap',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'renovation-house',
    title: 'Sửa chữa & Cải tạo Nhà cửa',
    shortDesc: 'Biến những không gian cũ kỹ trở nên hiện đại, tối ưu công năng sử dụng với quy trình thi công nhanh gọn, sạch sẽ và an toàn.',
    fullDesc: 'Với quy trình thi công chuẩn mực, nhanh gọn và sạch sẽ, dịch vụ sửa chữa, cải tạo nhà cửa của TVC nâng tầm diện mạo và tiện ích sử dụng, tối ưu hóa công năng phù hợp ngân sách và mong muốn khách hàng.',
    features: [
      'Cải tạo sửa chữa nhà cửa dân dụng & nhà xưởng trọn gói',
      'Bảo hành bảo trì Trạm biến áp lý thuyết và thực tiễn, Trạm trung thế',
      'Gia cố kết cấu chịu lực nứt thấm cũ nát dột nát nứt nát ổn định',
      'Kiến tạo và cải tạo mặt bằng kiến trúc tối ưu phân bổ công năng phòng',
      'Vật tư thiết bị chính hãng, cam kết thi công nhanh gọn sạch sẽ'
    ],
    iconName: 'Settings',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'interior-decor',
    title: 'Thiết kế & Thi công Nội thất',
    shortDesc: 'Kiến tạo không gian nội thất tinh tế, cá nhân hóa sâu sắc theo gu thẩm mỹ hiện đại và ngân sách hợp lý của từng khách hàng.',
    fullDesc: 'Cập nhật những xu hướng nội thất mới nhất, phù hợp với cá tính của từng chủ đầu tư và gia chủ. Sử dụng vật tư chất lượng từ các thương hiệu chính hãng uy tín, đảm bảo an toàn tuyệt đối và tính thẩm mỹ tinh tế vượt trội.',
    features: [
      'Thiết kế và thi công nội thất tinh tế, cá nhân hóa theo gu thẩm mỹ',
      'Nội thất bọc da nỉ, đồ gỗ nội thất phòng khách, phòng ngủ sang trọng',
      'Nội thất văn phòng làm việc, phòng họp quốc tế đa tích hợp thiết bị',
      'Hệ tủ bếp thông minh, thiết kế hiện đại tiết kiệm diện tích tối ưu',
      'Bàn giao chìa khóa trao tay đúng hẹn, bảo hành bảo trì tận tâm dài hạn'
    ],
    iconName: 'Tv',
    image: 'https://images.unsplash.com/photo-1517502884422-41eaaced0168?auto=format&fit=crop&q=80&w=800'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-1',
    title: 'Lắp đặt trạm biến áp Nhà máy nhiệt điện Uông Bí',
    category: 'me',
    categoryLabel: 'Hệ thống Cơ Điện',
    description: 'Thi công lắp đặt trạm biến áp chuyên nghiệp, cáp ngầm, tủ điện cho Nhà máy nhiệt điện Uông Bí đáp ứng quy trình kỹ thuật nghiệm thu khắt khe tiêu chuẩn EVN.',
    location: 'TP. Uông Bí, Quảng Ninh',
    year: '2025',
    solutions: ['Trạm biến áp trung thế chuyên dụng', 'Hạ thế và cáp nguồn cao áp', 'Hệ thống tủ điện đóng cắt bảo vệ'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'proj-2',
    title: 'Sửa chữa, cải tạo hệ thống ME và nội thất chuỗi siêu thị PICO',
    category: 'maintenance',
    categoryLabel: 'Cải tạo & Nội thất',
    description: 'Khảo sát tiến hành cải tạo toàn diện hệ thống cơ điện ME tòa nhà siêu thị, mạng chiếu sáng thông minh kết hợp thi công vách gỗ và sản xuất đồ gỗ trưng bày chuỗi siêu thị PICO.',
    location: 'Hà Nội & các tỉnh lân cận',
    year: '2024',
    solutions: ['Cải tạo hệ thống cơ điện ME', 'Hệ thống chiếu sáng siêu thị thông minh', 'Thi công đồ gỗ trưng bày quầy kệ'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'proj-3',
    title: 'Cung cấp, lắp đặt máy biến áp khô',
    category: 'me',
    categoryLabel: 'Hệ thống Cơ Điện',
    description: 'Cung cấp và lắp đặt, đấu nối vận hành máy biến áp khô thương hiệu quốc tế chính hãng, đảm bảo công năng tối ưu, vận hành chống cháy nổ tuyệt đối an toàn cho dự án tòa nhà.',
    location: 'Hà Nội',
    year: '2025',
    solutions: ['Thiết bị máy biến áp khô cao cấp', 'Phòng kỹ thuật cách âm chống dòng quẩn', 'Bảng điều khiển đo đạc phụ tải thông minh'],
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'proj-4',
    title: 'Lắp đặt màn LED và cải tạo sân khấu phòng họp',
    category: 'audiovisual',
    categoryLabel: 'Thiết bị Nghe Nhìn',
    description: 'Tích hợp lắp ráp màn hình LED ghép rực rỡ sắc nét mượt mà cùng cải thiện cách âm, bục bệ sân khấu hành lễ, bàn họp kỹ thuật số hiện đại của cơ quan.',
    location: 'Hà Nội',
    year: '2024',
    solutions: ['Hệ màn hiển thị LED viền mỏng', 'Cải tạo trang trí bục bệ sân khấu', 'Âm thanh phòng họp kỹ thuật họp trực tuyến'],
    image: 'https://images.unsplash.com/photo-1517502884422-41eaaced0168?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'proj-5',
    title: 'Cải tạo sửa chữa nhà dân dột nát nứt tường',
    category: 'maintenance',
    categoryLabel: 'Cải tạo & Sửa chữa',
    description: 'Sửa chữa chống thấm ẩm dột, cải tạo nâng móng gia cố dầm chống nứt nứt cũ kỹ nát vỡ, thiết kế và làm mới đồ gỗ bếp tủ mang lại một mái ấm gia đình bền vững an toàn.',
    location: 'Hà Nội',
    year: '2024',
    solutions: ['Sử dụng hóa chất chống thấm chuyên sâu Sika', 'Sơn bả thạch cao cao cấp chịu nước', 'Nội thất gỗ tủ thiết bị tủ bếp bền đẹp'],
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800'
  }
];

export const CORE_VALUES: CoreValue[] = [
  {
    title: 'Kỹ thuật Vượt trội',
    description: 'Đảm bảo thi công an toàn, chất lượng cao, hiện đại hóa, tối ưu công năng và tích cực tiết kiệm tối đa điện năng cho gia chủ và chủ đầu tư.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Thẩm mỹ Tinh tế',
    description: 'Cập nhật những xu thế thiết kế và xu hướng trang trí nội thất mới nhất, cá nhân hóa sâu sắc tinh tế, phù hợp tuyệt đối cá tính cùng không gian.',
    iconName: 'Lightbulb'
  },
  {
    title: 'Đúng hạn Cam kết',
    description: 'Giữ chữ TÍN hơn giữ VÀNG. Cam kết bàn giao dự án thi công và cải tạo lắp đặt đúng hạn định kỷ luật thép, nói không với chậm tiến độ.',
    iconName: 'HardHat'
  },
  {
    title: 'Bảo hành Uy tín',
    description: 'Xem khâu bảo hành dài lâu trọn đời và túc trực hỗ trợ tháo gỡ khó khăn về điện nước cải tạo 24/7 là trách nhiệm thiêng liêng của TVC.',
    iconName: 'Clock'
  }
];

export const STATS = [
  { value: '2024', label: 'Năm Thành Lập' },
  { value: '100%', label: 'Vật tư Chính Hãng' },
  { value: '24/7', label: 'Bảo Hành Trọn Đời' }
];
