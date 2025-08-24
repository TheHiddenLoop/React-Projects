import { useState } from "react";
import { Dashboard } from "../compoents/Dashboard";
import Date from "../compoents/Date";
import { Home as HomeIcon, User, Menu, AlignRight } from "lucide-react";

const sidebarItems = [
    { id: "dashboard", name: "Dashboard", icon: HomeIcon, component: Dashboard },
    { id: "date", name: "Date", icon: User, component: Date }
]

export default function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activeTab, setActiveTab] = useState("dashboard");

    const ActiveComponent = sidebarItems.find(e => e.id === activeTab)?.component;

    return (
        <div className="flex flex-col h-screen">
            <nav className="bg-primary text-primary-foreground shadow-sm border-b h-16 flex-shrink-0">
                <div className="flex items-center justify-between px-4 h-full">
                    <div className="flex items-center gap-3">
                        <h1 className="text-xl font-semibold">My Application</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="text-primary-foreground hover:bg-primary/80 px-3 py-1 rounded transition-colors">
                            Notifications
                        </button>
                        <button className="text-primary-foreground hover:bg-primary/80 px-3 py-1 rounded transition-colors">
                            Account
                        </button>
                    </div>
                </div>
            </nav>
            <div className="flex flex-1 overflow-hidden">
                <aside
                    className={`${isCollapsed ? "w-16" : "w-64"
                        } bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out flex-shrink-0`}
                >
                    <div className="flex flex-col h-full pt-6">
                        <div className="flex items-center justify-between px-4 mb-6">
                            {!isCollapsed && (
                                <h2 className="text-lg font-semibold text-sidebar-foreground">Navigation</h2>
                            )}
                            <button
                                className="text-primary-foreground hover:bg-primary/80 p-2 rounded transition-colors"
                                onClick={() => setIsCollapsed(!isCollapsed)}
                            >
                                {isCollapsed?<Menu className="h-5 w-5" />:<AlignRight className="h-5 w-5"/>}
                            </button>
                        </div>
                        <nav className="flex-1 px-2 space-y-1">
                            {sidebarItems.map((item) => {
                                const Icon = item.icon;
                                const isActive = activeTab === item.id;

                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveTab(item.id)}
                                        className={`w-full flex items-center ${isCollapsed ? "justify-center px-2" : "gap-3 px-3"
                                            } py-2 rounded-md text-left transition-colors ${isActive
                                                ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                                                : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                                            }`}
                                        title={isCollapsed ? item.name : undefined}
                                    >
                                        <Icon className="h-5 w-5" />
                                        {!isCollapsed && item.name}
                                    </button>
                                );
                            })}
                        </nav>
                    </div>
                </aside>
                <main className="flex-1 overflow-y-auto p-6">
                    {ActiveComponent ? <ActiveComponent /> : <div>Component not found</div>}
                </main>
            </div>
        </div>
    )
}
