// import { IGoodsList } from '../../types/interface';

// export const goodsListData: IGoodsList[] = [
//   {
//     goods_id: 1,
//     seller_id: 'seller_1',
//     goods_name: 'Vintage Watch',
//     price: '100.00',
//     trade_spot: 'Seoul',
//     thumbnail_url: 'https://via.placeholder.com/150',
//     lat: 37.5665359,
//     lng: 126.9780399,
//     uploaded_before: 2,
//   },
//   {
//     goods_id: 2,
//     seller_id: 'seller_2',
//     goods_name: 'Antique Vase',
//     price: '250.00',
//     trade_spot: 'Busan',
//     thumbnail_url: 'https://via.placeholder.com/150',
//     lat: 35.1795543,
//     lng: 129.0756416,
//     uploaded_before: 5,
//   },
//   {
//     goods_id: 3,
//     seller_id: 'seller_3',
//     goods_name: 'Leather Jacket',
//     price: '75.00',
//     trade_spot: 'Incheon',
//     thumbnail_url: 'https://via.placeholder.com/150',
//     lat: 37.4562557,
//     lng: 126.7052062,
//     uploaded_before: 1,
//   },
//   {
//     goods_id: 4,
//     seller_id: 'seller_4',
//     goods_name: 'Guitar',
//     price: '120.00',
//     trade_spot: 'Daegu',
//     thumbnail_url: 'https://via.placeholder.com/150',
//     lat: 35.8722233,
//     lng: 128.601445,
//     uploaded_before: 3,
//   },
//   {
//     goods_id: 5,
//     seller_id: 'seller_5',
//     goods_name: 'Mountain Bike',
//     price: '300.00',
//     trade_spot: 'Daejeon',
//     thumbnail_url: 'https://via.placeholder.com/150',
//     lat: 36.3504119,
//     lng: 127.3845475,
//     uploaded_before: 7,
//   },
//   {
//     goods_id: 6,
//     seller_id: 'seller_6',
//     goods_name: 'Smartphone',
//     price: '200.00',
//     trade_spot: 'Gwangju',
//     thumbnail_url: 'https://via.placeholder.com/150',
//     lat: 35.1595454,
//     lng: 126.8526012,
//     uploaded_before: 4,
//   },
//   {
//     goods_id: 7,
//     seller_id: 'seller_7',
//     goods_name: 'Laptop',
//     price: '450.00',
//     trade_spot: 'Suwon',
//     thumbnail_url: 'https://via.placeholder.com/150',
//     lat: 37.2635732,
//     lng: 127.0286017,
//     uploaded_before: 9,
//   },
//   {
//     goods_id: 8,
//     seller_id: 'seller_8',
//     goods_name: 'Bookshelf',
//     price: '60.00',
//     trade_spot: 'Ulsan',
//     thumbnail_url: 'https://via.placeholder.com/150',
//     lat: 35.5395972,
//     lng: 129.3114259,
//     uploaded_before: 2,
//   },
//   {
//     goods_id: 9,
//     seller_id: 'seller_9',
//     goods_name: 'Dining Table',
//     price: '150.00',
//     trade_spot: 'Changwon',
//     thumbnail_url: 'https://via.placeholder.com/150',
//     lat: 35.2280742,
//     lng: 128.6811092,
//     uploaded_before: 6,
//   },
//   {
//     goods_id: 10,
//     seller_id: 'seller_10',
//     goods_name: 'Electric Scooter',
//     price: '250.00',
//     trade_spot: 'Jeju',
//     thumbnail_url: 'https://via.placeholder.com/150',
//     lat: 33.4996213,
//     lng: 126.5311884,
//     uploaded_before: 5,
//   },
//   {
//     goods_id: 11,
//     seller_id: 'seller_11',
//     goods_name: 'Digital Camera',
//     price: '300.00',
//     trade_spot: 'Seoul',
//     thumbnail_url: 'https://via.placeholder.com/150',
//     lat: 37.5672222,
//     lng: 126.9789999,
//     uploaded_before: 8,
//   },
//   {
//     goods_id: 12,
//     seller_id: 'seller_12',
//     goods_name: 'Vintage Lamp',
//     price: '80.00',
//     trade_spot: 'Busan',
//     thumbnail_url: 'https://via.placeholder.com/150',
//     lat: 35.18,
//     lng: 129.076,
//     uploaded_before: 7,
//   },
//   {
//     goods_id: 13,
//     seller_id: 'seller_13',
//     goods_name: 'Office Chair',
//     price: '90.00',
//     trade_spot: 'Incheon',
//     thumbnail_url: 'https://via.placeholder.com/150',
//     lat: 37.457,
//     lng: 126.706,
//     uploaded_before: 2,
//   },
//   {
//     goods_id: 14,
//     seller_id: 'seller_14',
//     goods_name: 'Fitness Tracker',
//     price: '60.00',
//     trade_spot: 'Daegu',
//     thumbnail_url: 'https://via.placeholder.com/150',
//     lat: 35.873,
//     lng: 128.602,
//     uploaded_before: 4,
//   },
//   {
//     goods_id: 15,
//     seller_id: 'seller_15',
//     goods_name: 'Headphones',
//     price: '50.00',
//     trade_spot: 'Daejeon',
//     thumbnail_url: 'https://via.placeholder.com/150',
//     lat: 36.351,
//     lng: 127.385,
//     uploaded_before: 1,
//   },
//   {
//     goods_id: 16,
//     seller_id: 'seller_16',
//     goods_name: 'Cookware Set',
//     price: '120.00',
//     trade_spot: 'Gwangju',
//     thumbnail_url: 'https://via.placeholder.com/150',
//     lat: 35.16,
//     lng: 126.853,
//     uploaded_before: 3,
//   },
//   {
//     goods_id: 17,
//     seller_id: 'seller_17',
//     goods_name: 'Gaming Console',
//     price: '400.00',
//     trade_spot: 'Suwon',
//     thumbnail_url: 'https://via.placeholder.com/150',
//     lat: 37.264,
//     lng: 127.029,
//     uploaded_before: 6,
//   },
//   {
//     goods_id: 18,
//     seller_id: 'seller_18',
//     goods_name: 'Board Games',
//     price: '30.00',
//     trade_spot: 'Ulsan',
//     thumbnail_url: 'https://via.placeholder.com/150',
//     lat: 35.54,
//     lng: 129.312,
//     uploaded_before: 9,
//   },
//   {
//     goods_id: 19,
//     seller_id: 'seller_19',
//     goods_name: 'Smart TV',
//     price: '700.00',
//     trade_spot: 'Changwon',
//     thumbnail_url: 'https://via.placeholder.com/150',
//     lat: 35.229,
//     lng: 128.682,
//     uploaded_before: 5,
//   },
//   {
//     goods_id: 20,
//     seller_id: 'seller_20',
//     goods_name: 'Blender',
//     price: '50.00',
//     trade_spot: 'Jeju',
//     thumbnail_url: 'https://via.placeholder.com/150',
//     lat: 33.5,
//     lng: 126.532,
//     uploaded_before: 2,
//   },
//   {
//     goods_id: 21,
//     seller_id: 'seller_21',
//     goods_name: 'Air Purifier',
//     price: '200.00',
//     trade_spot: 'Seoul',
//     thumbnail_url: 'https://via.placeholder.com/150',
//     lat: 37.568,
//     lng: 126.979,
//     uploaded_before: 3,
//   },
//   {
//     goods_id: 22,
//     seller_id: 'seller_22',
//     goods_name: 'Yoga Mat',
//     price: '25.00',
//     trade_spot: 'Busan',
//     thumbnail_url: 'https://via.placeholder.com/150',
//     lat: 35.181,
//     lng: 129.077,
//     uploaded_before: 4,
//   },
// ];