'use client';

import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaHome, FaBox, FaShoppingBag, FaChartBar, FaSignOutAlt } from 'react-icons/fa';
import { logout } from '../redux/slices/authSlice';

const AdminSidebar = ({ activeTab, setActiveTab }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push('/');
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <FaHome size={18} />, path: '/admin' },
    { id: 'products', label: 'Products', icon: <FaBox size={18} />, path: '/admin/products' },
    { id: 'orders', label: 'Orders', icon: <FaShoppingBag size={18} />, path: '/admin/orders' },
    { id: 'analytics', label: 'Analytics', icon: <FaChartBar size={18} />, path: '/admin/analytics' },
  ];

  return (
    <div className="w-64 bg-white shadow-md min-h-screen">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold text-rose-600">RoseWow Admin</h2>
      </div>
      
      <div className="py-4">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link 
                href={item.path}
                className={`flex items-center px-6 py-3 hover:bg-rose-50 ${
                  activeTab === item.id ? 'bg-rose-50 text-rose-600 border-r-4 border-rose-500' : 'text-gray-700'
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="absolute bottom-0 w-64 border-t">
        <button 
          onClick={handleLogout}
          className="flex items-center w-full px-6 py-3 text-gray-700 hover:bg-rose-50"
        >
          <span className="mr-3"><FaSignOutAlt size={18} /></span>
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
