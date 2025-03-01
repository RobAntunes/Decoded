// data/solutions.ts
import { 
    DocumentMagnifyingGlassIcon, 
    CurrencyDollarIcon, 
    ClipboardDocumentCheckIcon,
    CloudArrowUpIcon,
    ChartBarIcon,
    BuildingOfficeIcon,
    UserGroupIcon,
    DocumentChartBarIcon,
    ClockIcon,
    PhoneIcon,
    PlayCircleIcon
  } from '@heroicons/react/24/outline';
  import { MenuItem } from '@/types/navigation';
  
  export const solutions: MenuItem[] = [
    {
      name: 'Commodity Code Assistant',
      description: 'AI-powered classification of goods for accurate HS/HTS codes and duty calculations',
      href: '/solutions/commodity-codes',
      icon: DocumentMagnifyingGlassIcon,
    },
    {
      name: 'Smart Tax Planning',
      description: 'Predictive tax optimization leveraging historical data and regulatory changes',
      href: '/solutions/tax-planning',
      icon: CurrencyDollarIcon,
    },
    {
      name: 'Compliance Guardian',
      description: 'Real-time monitoring and alerts for tax compliance across jurisdictions',
      href: '/solutions/compliance',
      icon: ClipboardDocumentCheckIcon,
    },
    {
      name: 'Receipt Intelligence',
      description: 'Automated expense categorization and tax deduction identification',
      href: '/solutions/receipt-analysis',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Business Insights',
      description: 'Financial analytics and tax impact forecasting for strategic decisions',
      href: '/solutions/insights',
      icon: ChartBarIcon,
    },
    {
      name: 'Entity Management',
      description: 'Streamlined tax structure optimization for multiple business entities',
      href: '/solutions/entity-management',
      icon: BuildingOfficeIcon,
    },
    {
      name: 'Client Portal',
      description: 'Secure document sharing and collaboration platform for clients and advisors',
      href: '/solutions/client-portal',
      icon: UserGroupIcon,
    },
    {
      name: 'Report Automator',
      description: 'Automated generation of tax reports and financial statements',
      href: '/solutions/reports',
      icon: DocumentChartBarIcon,
    },
    {
      name: 'Deadline Tracker',
      description: 'Smart scheduling and reminders for tax deadlines and filings',
      href: '/solutions/deadlines',
      icon: ClockIcon,
    }
  ];
  
  export const callsToAction = [
    { 
      name: 'Schedule Demo',
      href: '/demo',
      icon: PlayCircleIcon 
    },
    { 
      name: 'Talk to Expert',
      href: '/contact',
      icon: PhoneIcon 
    },
    { 
      name: 'View Pricing',
      href: '/pricing',
      icon: CurrencyDollarIcon 
    }
  ];