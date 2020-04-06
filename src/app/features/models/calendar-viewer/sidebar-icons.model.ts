import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface SidebarIconsModel {
    [key: string]: IconDefinition;
}

interface CalendarSidebarItem {
    icon: string;
    name: string;
}

export { CalendarSidebarItem, SidebarIconsModel };
