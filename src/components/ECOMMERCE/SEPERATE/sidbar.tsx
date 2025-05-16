"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Collapse,
  Chip,
} from "@mui/material"
import {
  Home,
  KeyboardArrowRight,
  KeyboardArrowDown,
  Email,
  Chat,
  CalendarMonth,
  Receipt,
  Person,
  Security,
  Pages as PagesIcon,
  Forum,
  TextFormat,
  Stars,
  ViewModule,
  ViewComfy,
  CheckBox,
  Laptop,
  CheckCircle,
  AutoAwesome,
  GridOn,
  TableChart,
  PieChart,
  MoreHoriz,
} from "@mui/icons-material"

interface NavItemProps {
  icon: React.ReactNode
  text: string
  active?: boolean
  hasChildren?: boolean
  isOpen?: boolean
  onClick?: () => void
  href?: string
  badge?: string
  isBullet?: boolean
}

const NavItem = ({
  icon,
  text,
  active = false,
  hasChildren = false,
  isOpen = false,
  onClick,
  href = "#",
  badge,
  isBullet = false,
}: NavItemProps) => {
  const content = (
    <ListItemButton
      onClick={onClick}
      className={`rounded-md my-1 ${active ? "bg-indigo-600 text-white" : "hover:bg-gray-100"}`}
      sx={{
        borderRadius: "6px",
        "&:hover": {
          backgroundColor: active ? "rgb(79, 70, 229)" : "#f3f4f6",
        },
      }}
    >
      <ListItemIcon className={active ? "text-white" : "text-gray-500"}>
        {isBullet ? (
          <span className={`inline-block w-2 h-2 rounded-full ${active ? "bg-white" : "bg-gray-400"}`}></span>
        ) : (
          icon
        )}
      </ListItemIcon>
      <ListItemText primary={text} />
      {badge && <Chip label={badge} size="small" color="error" className="ml-2" sx={{ height: "22px" }} />}
      {hasChildren && (isOpen ? <KeyboardArrowDown fontSize="small" /> : <KeyboardArrowRight fontSize="small" />)}
    </ListItemButton>
  )

  return (
    <ListItem disablePadding className="px-2">
      {href && !hasChildren ? (
        <Link href={href} className="w-full">
          {content}
        </Link>
      ) : (
        content
      )}
    </ListItem>
  )
}

interface SectionTitleProps {
  title: string
}

const SectionTitle = ({ title }: SectionTitleProps) => (
  <Typography
    variant="caption"
    className="px-4 py-2 text-gray-400 font-medium tracking-wider"
    sx={{ display: "block" }}
  >
    {title}
  </Typography>
)

export default function Sidebar() {
  const [collapsed] = useState(false)
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <Box
      component="aside"
      className="h-screen text-r bg-gray-50 border-r text-gray-700 border-gray-100 w-64 flex-shrink-0 "
      sx={{
        transition: "width 0.3s ease",
        width: collapsed ? "64px" : "256px",
      }}
    >
      {/* Header */}
      <Box className="flex items-center justify-between p-4 border-b border-gray-100">
        <Box className="flex items-center">
          <Box className="text-indigo-500 mr-2">
            <Image src="/logoo.png" alt="Logo" width={32} height={32}/>
          </Box>
          {!collapsed && (
            <Typography variant="h6" className="font-medium text-gray-700">
              Materialize
            </Typography>
          )}
        </Box>
        
      </Box>

      {/* Navigation */}
      <List className="p-2">
        <NavItem
          icon={<Home fontSize="small" />}
          text="Dashboards"
          hasChildren={true}
          isOpen={openSections["dashboards"]}
          onClick={() => toggleSection("dashboards")}
          badge="New"
        />

        {openSections["dashboards"] && (
          <Collapse in={true} timeout="auto" unmountOnExit>
            <List component="div" disablePadding className="pl-4">
              <NavItem icon={<></>} text="eCommerce" isBullet={true} href="/dashboards/ecommerce" />
              <NavItem icon={<></>} text="CRM" active={true} isBullet={true} href="/dashboards/crm" />
              <NavItem icon={<></>} text="Analytics" isBullet={true} href="/dashboards/analytics" />
            </List>
          </Collapse>
        )}

        <SectionTitle title="APPS & PAGES" />

        <NavItem icon={<Email fontSize="small" />} text="Email" href="/apps/email" />
        <NavItem icon={<Chat fontSize="small" />} text="Chat" href="/apps/chat" />
        <NavItem icon={<CalendarMonth fontSize="small" />} text="Calendar" href="/apps/calendar" />
        <NavItem
          icon={<Receipt fontSize="small" />}
          text="Invoice"
          hasChildren={true}
          isOpen={openSections["invoice"]}
          onClick={() => toggleSection("invoice")}
        />
        <NavItem
          icon={<Person fontSize="small" />}
          text="User"
          hasChildren={true}
          isOpen={openSections["user"]}
          onClick={() => toggleSection("user")}
        />
        <NavItem
          icon={<Security fontSize="small" />}
          text="Roles & Permissions"
          hasChildren={true}
          isOpen={openSections["roles"]}
          onClick={() => toggleSection("roles")}
        />
        <NavItem
          icon={<PagesIcon fontSize="small" />}
          text="Pages"
          hasChildren={true}
          isOpen={openSections["pages"]}
          onClick={() => toggleSection("pages")}
        />
        <NavItem icon={<Forum fontSize="small" />} text="Dialog Examples" href="/apps/dialog-examples" />

        <SectionTitle title="USER INTERFACE" />

        <NavItem icon={<TextFormat fontSize="small" />} text="Typography" href="/ui/typography" />
        <NavItem icon={<Stars fontSize="small" />} text="Icons" href="/ui/icons" />
        <NavItem
          icon={<ViewModule fontSize="small" />}
          text="Cards"
          hasChildren={true}
          isOpen={openSections["cards"]}
          onClick={() => toggleSection("cards")}
        />
        <NavItem
          icon={<ViewComfy fontSize="small" />}
          text="Components"
          hasChildren={true}
          isOpen={openSections["components"]}
          onClick={() => toggleSection("components")}
        />

        <SectionTitle title="FORMS & TABLES" />

        <NavItem
          icon={<CheckBox fontSize="small" />}
          text="Form Elements"
          hasChildren={true}
          isOpen={openSections["form-elements"]}
          onClick={() => toggleSection("form-elements")}
        />
        <NavItem icon={<Laptop fontSize="small" />} text="Form Layout" href="/forms/layout" />
        <NavItem icon={<CheckCircle fontSize="small" />} text="Form Validation" href="/forms/validation" />
        <NavItem icon={<AutoAwesome fontSize="small" />} text="Form Wizard" href="/forms/wizard" />
        <NavItem icon={<GridOn fontSize="small" />} text="Table" href="/tables/basic" />
        <NavItem icon={<TableChart fontSize="small" />} text="Mui DataGrid" href="/tables/data-grid" />

        <SectionTitle title="CHARTS & MISC" />

        <NavItem
          icon={<PieChart fontSize="small" />}
          text="Charts"
          hasChildren={true}
          isOpen={openSections["charts"]}
          onClick={() => toggleSection("charts")}
        />
        <NavItem
          icon={<MoreHoriz fontSize="small" />}
          text="Others"
          hasChildren={true}
          isOpen={openSections["others"]}
          onClick={() => toggleSection("others")}
        />
      </List>
    </Box>
  )
}
