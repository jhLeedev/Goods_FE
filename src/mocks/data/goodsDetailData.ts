import { IGoodsData } from '../../types/interface';

export const goodsData: IGoodsData[] = [
  {
    seller_id: 1,
    profile_img: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
    seller_name: '홍길동',
    seller_badge: true,
    manner_badge: false,
    goods_name: '감자 1kg',
    price: 20000,
    description: '선물로 들어왔는데 많아서 내놔요 오늘 배송받았습니다',
    goods_images: [
      'https://health.chosun.com/site/data/img_dir/2023/06/27/2023062702164_0.jpg',
      'https://health.chosun.com/site/data/img_dir/2020/05/07/2020050702573_0.jpg',
      'https://cdn.mkhealth.co.kr/news/photo/202212/61768_65496_2151.jpg',
    ],
    goods_status: '판매중',
    like: false,
    uploadedBefore: '2시간 전',
    lat: 37.52633,
    lng: 127.028513,
    detail_location: '압구정역 1번 출구',
    goods_id: 1,
  },
  {
    goods_name: '유니폼',
    price: 1000000,
    goods_images: [
      'https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/5849861552/B.jpg?157000000',
    ],
    goods_status: '거래완료',
    like: false,
    uploadedBefore: '1년 전',
    goods_id: 2,
    seller_id: 1,
    profile_img: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
    seller_name: '홍길동',
    seller_badge: false,
    manner_badge: false,
    description: '유니폼1입니다',
    lat: 37.52633,
    lng: 127.028513,
    detail_location: '압구정역 1번 출구',
  },
  {
    goods_name: '유니폼',
    price: 1000000,
    goods_images: [
      'https://m.thirdkit-mall.com/web/product/big/202303/f30c6ed12a4c69d6f9c0f6eadfb38024.jpg',
    ],
    goods_status: '거래완료',
    like: false,
    uploadedBefore: '1년 전',
    goods_id: 3,
    seller_id: 1,
    profile_img: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
    seller_name: '홍길동',
    seller_badge: false,
    manner_badge: false,
    description: '유니폼2입니다',
    lat: 37.52633,
    lng: 127.028513,
    detail_location: '압구정역 1번 출구',
  },
  {
    seller_name: '유니티',
    goods_name: 'Z Flip5',
    price: 1000000,
    goods_images: [
      'https://images.samsung.com/kdp/goods/2023/08/03/98f31ad5-b606-4b93-8ed0-5a78af443e7d.png?$PD_GALLERY_L_PNG$',
    ],
    goods_status: '예약중',
    uploadedBefore: '2시간 전',
    lat: 37.52633,
    lng: 127.028513,
    detail_location: 'loc',
    goods_id: 4,
    seller_id: 2,
    profile_img: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
    seller_badge: true,
    manner_badge: false,
    description: '설명1',
    like: true,
  },
  {
    seller_name: '유니티',
    goods_name: 'Galaxy Book',
    price: 1000000,
    goods_images: [
      'https://image-us.samsung.com/SamsungUS/home/computing/galaxy-books/052820/NT930QCGI_001_Front-Open_QLED_Blue-Gallery-1600x1200.jpg?$product-details-jpg$',
    ],
    goods_status: '예약중',
    uploadedBefore: '2시간 전',
    lat: 37.52633,
    lng: 127.028513,
    detail_location: 'loc',
    goods_id: 5,
    seller_id: 2,
    profile_img: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
    seller_badge: true,
    manner_badge: false,
    description: '설명2',
    like: true,
  },
  {
    seller_name: '유니티',
    goods_name: 'Galaxy S24',
    price: 1000000,
    goods_images: [
      'https://media.wired.com/photos/65a6c0643d4e31ae36fab6d9/master/pass/Gear-Samsung-Galaxy-S24-Series-SOURCE-Julian-Chokkattu.jpg',
    ],
    goods_status: '예약중',
    uploadedBefore: '2시간 전',
    lat: 37.52633,
    lng: 127.028513,
    detail_location: 'loc',
    goods_id: 6,
    seller_id: 2,
    profile_img: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
    seller_badge: true,
    manner_badge: false,
    description: '설명3',
    like: true,
  },
  {
    seller_name: '유니티',
    goods_name: 'MacBook',
    price: 1000000,
    goods_images: [
      'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/refurb-mbp13-m2-spacegray-202208?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1659374923283',
    ],
    goods_status: '거래완료',
    uploadedBefore: '1년전',
    goods_id: 7,
    seller_id: 3,
    profile_img: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
    seller_badge: false,
    manner_badge: false,
    description: '설명7',
    like: false,
    lat: 37.52633,
    lng: 127.028513,
    detail_location: '상세주소',
  },
  {
    seller_name: '유니티',
    goods_name: 'iPhone',
    price: 1000000,
    goods_images: [
      'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1692846357018',
    ],
    goods_status: '거래완료',
    uploadedBefore: '1년전',
    goods_id: 8,
    seller_id: 4,
    profile_img: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
    seller_badge: false,
    manner_badge: false,
    description: '설명8',
    like: false,
    lat: 37.52633,
    lng: 127.028513,
    detail_location: '상세주소',
  },
  {
    seller_name: '유니티',
    goods_name: 'AirPods Pro',
    price: 1000000,
    goods_images: [
      'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MTJV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1694014871985',
    ],
    goods_status: '거래완료',
    uploadedBefore: '1년전',
    goods_id: 9,
    seller_id: 5,
    profile_img: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
    seller_badge: false,
    manner_badge: false,
    description: '설명9',
    like: false,
    lat: 37.52633,
    lng: 127.028513,
    detail_location: '상세주소',
  },
  {
    seller_name: '유니티',
    goods_name: 'Apple Watch',
    price: 1000000,
    goods_images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnUqTdQqzFHAFyce1Olksj0WiWeuF0o8As34hsbeIIxg&s',
    ],
    goods_status: '거래완료',
    uploadedBefore: '1년전',
    goods_id: 10,
    seller_id: 6,
    profile_img: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
    seller_badge: false,
    manner_badge: false,
    description: '설명10',
    like: false,
    lat: 37.52633,
    lng: 127.028513,
    detail_location: '상세주소',
  },
  {
    seller_name: '유니티',
    goods_name: 'iPad',
    price: 1000000,
    goods_images: [
      'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-storage-select-202207-space-gray-wifi_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=95&.v=1670879028866',
    ],
    goods_status: '거래완료',
    uploadedBefore: '1년전',
    goods_id: 11,
    seller_id: 7,
    profile_img: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
    seller_badge: false,
    manner_badge: false,
    description: '설명11',
    like: false,
    lat: 37.52633,
    lng: 127.028513,
    detail_location: '상세주소',
  },
];
