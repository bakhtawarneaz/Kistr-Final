/******** Dashboard Icons******/
import DashboardIcon from '../icons/DashboardIcon';
import InboxIcon from '../icons/InboxIcon';
import EmployeeIcon from '../icons/EmployeeIcon';
import CalenderIcon from '../icons/CalenderIcon';
import ReportingIcon from '../icons/ReportingIcon';
import AutomationIcon from '../icons/AutomationIcon';
import ImportIcon from '../icons/ImportIcon';
import MarketIcon from '../icons/MarketIcon'


export function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export const items = [
  getItem('Dashboard', 'dashboard/home', <DashboardIcon />),
  getItem('Inbox', 'dashboard/inbox', <InboxIcon />),
  getItem('Employees', 'employees', <EmployeeIcon />, [
    getItem('Overview', 'dashboard/employee'),
    getItem('Performance', 'dashboard/performance'),
    getItem('Training', 'dashboard/training'),
  ]),
  getItem('Recruiting', 'recruiting', <EmployeeIcon />),
  getItem('Calendar', 'dashboard/calendar', <CalenderIcon />),
  getItem('Reporting', 'dashboard/reporting', <ReportingIcon />),
  getItem('Automations', 'dashboard/automations', <AutomationIcon />),
  getItem('Imports', 'dashboard/imports', <ImportIcon />),
  getItem('Marketplace', 'dashboard/marketplace', <MarketIcon />),
];
