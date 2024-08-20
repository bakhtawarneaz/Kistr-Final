/******** Dashboard Icons******/
import DashboardIcon from '../MenuIcons/DashboardIcon';
import InboxIcon from '../MenuIcons/InboxIcon';
import EmployeeIcon from '../MenuIcons/EmployeeIcon';
import CalenderIcon from '../MenuIcons/CalenderIcon';
import ReportingIcon from '../MenuIcons/ReportingIcon';
import AutomationIcon from '../MenuIcons/AutomationIcon';
import ImportIcon from '../MenuIcons/ImportIcon';
import MarketIcon from '../MenuIcons/MarketIcon'
import RecruitingIcon from '../MenuIcons/RecruitingIcon';


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
    getItem('Overview', 'dashboard/overview'),
    getItem('Performance', 'dashboard/performance'),
    getItem('Training', 'dashboard/training'),
  ]),
  getItem('Recruiting', 'dashboard/recruiting', <RecruitingIcon />),
  getItem('Calendar', 'dashboard/calendar', <CalenderIcon />),
  getItem('Reporting', 'dashboard/reporting', <ReportingIcon />),
  getItem('Automations', 'dashboard/automations', <AutomationIcon />),
  getItem('Imports', 'dashboard/imports', <ImportIcon />),
  getItem('Marketplace', 'dashboard/marketplace', <MarketIcon />),
];
