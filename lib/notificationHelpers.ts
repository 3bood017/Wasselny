// import { MaterialIcons } from '@expo/vector-icons';
// import { formatDistanceToNow } from 'date-fns';
// import { ar } from 'date-fns/locale';

// export const getNotificationIcon = (type: string): keyof typeof MaterialIcons.glyphMap => {
//   switch (type) {
//     case 'ride_request':
//       return 'directions-car';
//     case 'ride_complete':
//       return 'check-circle';
//     case 'ride_status':
//       return 'notifications';
//     case 'ride_reminder':
//       return 'alarm';
//     case 'chat':
//       return 'chat';
//     default:
//       return 'info';
//   }
// };

// export const getNotificationColor = (type: string): string => {
//   switch (type) {
//     case 'ride_request':
//       return '#F97316'; // orange-500
//     case 'ride_complete':
//       return '#10B981'; // green-500
//     case 'ride_status':
//       return '#3B82F6'; // blue-500
//     case 'ride_reminder':
//       return '#F59E0B'; // amber-500
//     case 'chat':
//       return '#8B5CF6'; // violet-500
//     default:
//       return '#6B7280'; // gray-500
//   }
// };

// export const formatTimeAgo = (date: Date): string => {
//   try {
//     return formatDistanceToNow(date, { 
//       addSuffix: true,
//       locale: ar
//     });
//   } catch (error) {
//     console.error('Error formatting time:', error);
//     return 'منذ لحظات';
//   }
// }; 