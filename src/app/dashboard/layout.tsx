
import { BookOpen, Award, User, ShoppingCart, Star, HelpCircle, Settings, LogOut, FileText, Bell, DollarSign, Rocket, BarChartHorizontal, Laptop } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const sidebarNavItems = [
    { title: 'Dashboard', href: '/dashboard', icon: Laptop },
    { title: 'My Profile', href: '/profile', icon: User },
    { title: 'Enrolled Courses', href: '#', icon: BookOpen },
    { title: 'Reviews', href: '#', icon: Star },
    { title: 'My Quiz Attempts', href: '#', icon: BarChartHorizontal },
    { title: 'Wishlist', href: '#', icon: Award },
    { title: 'Order History', href: '#', icon: ShoppingCart },
    { title: 'Question & Answer', href: '#', icon: HelpCircle },
];

const instructorNavItems = [
    { title: 'My Courses', href: '#', icon: Rocket },
    { title: 'Announcements', href: '#', icon: Bell },
    { title: 'Withdrawals', href: '#', icon: DollarSign },
    { title: 'Quiz Attempts', href: '#', icon: BarChartHorizontal },
];

const NavItem = ({ item, isActive }: { item: { title: string; href: string; icon: React.ElementType }, isActive?: boolean}) => {
    const Icon = item.icon;
    return (
        <Link href={item.href}>
            <div className={`flex items-center gap-3 px-4 py-2.5 rounded-md cursor-pointer text-sm font-medium ${isActive ? 'bg-primary text-primary-foreground' : 'hover:bg-gray-100 text-gray-700'}`}>
                <Icon className="h-5 w-5" />
                <span>{item.title}</span>
            </div>
        </Link>
    );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className="flex min-h-screen bg-gray-50/50">
        <aside className="w-64 flex-shrink-0 border-r bg-white p-4 flex flex-col">
          <div className="flex flex-col items-center mb-8">
              <div className="w-16 h-16 rounded-full bg-gray-200 mb-2 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-600">SCS</span>
              </div>
              <p className="font-bold">Prerana</p>
              <div className="flex items-center gap-1 mt-1">
                  {[...Array(4)].map((_, i) => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}
                  <Star size={14} className="text-gray-300 fill-gray-300" />
                  <span className="text-xs text-muted-foreground ml-1">4.50 (2 Ratings)</span>
              </div>
          </div>
          
          <div className="flex-grow">
              <nav className="flex flex-col space-y-1">
                  {sidebarNavItems.map(item => <NavItem key={item.title} item={item} isActive={item.title === 'Dashboard'} />)}
              </nav>
              <div className="mt-8">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 mb-2">Instructor</h3>
                  <nav className="flex flex-col space-y-1">
                      {instructorNavItems.map(item => <NavItem key={item.title} item={item} />)}
                  </nav>
              </div>
          </div>
          
          <div className="mt-auto">
              <nav className="flex flex-col space-y-1">
                  <NavItem item={{ title: 'Settings', href: '#', icon: Settings }} />
                  <NavItem item={{ title: 'Logout', href: '#', icon: LogOut }} />
              </nav>
          </div>
        </aside>
        <div className="flex-1">
          {children}
        </div>
      </div>
  )
}
