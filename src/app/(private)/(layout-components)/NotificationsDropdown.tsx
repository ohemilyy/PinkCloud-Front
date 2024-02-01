// import React, { useEffect, useState } from "react";
// import { IoIosNotificationsOutline } from "react-icons/io";
// import { User } from "@supabase/supabase-js";
// import Dropdown from "./Dropdown";
// import { supabase } from "@supabase/auth-ui-shared";

// interface NotificationsDropdownProps {
//   user?: User,
// }
// const NotificationsDropdown = ({ user: user }: NotificationsDropdownProps) => {
//   const [notifications, setNotifications] = useState<Notification[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!user) return;

//     const handleNotifications = async () => {
    
//       const { data: retrieved, error } = await supabase
//         .from('notifications')
//         .select('*')
//         .eq('acknowledged', false)
//         .eq('target', user.id);

//       retrieved?.forEach(async (notification) => {
//         if (window.location.href === notification.source) {
//           notification.acknowledged = true;
//           await supabase.from('notifications').update({ acknowledged: true }).eq('id', notification.id);
//         }
//       });

//       setNotifications(retrieved || []);
//       setLoading(false);
//     }

//     handleNotifications();
//   }, [user]);

//   return (
//     <Dropdown
//       indicatorValue={8}
//       indicatorIcon={
//         <IoIosNotificationsOutline className="text-2xl" />
//       }
//       className="card card-compact w-52 bg-base-100 shadow"
//     >
//       {/* Notifications */}
//       Hello! :3
//     </Dropdown>
//   );
// }
// export default NotificationsDropdown;